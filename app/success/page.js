import { stripe } from "@/lib/stripe";
import { getTradeBySlug } from "@/lib/trades";
import RamsDocument from "@/components/RamsDocument";
import { generateRamsPdf } from "@/lib/pdf";
import { sendRamsEmail } from "@/lib/email";

// Server Component — runs only on the server, so it's safe to call Stripe
// with the secret key here. Payment is verified independently on every load;
// the presence of a session_id in the URL proves nothing by itself.
export default async function SuccessPage({ searchParams }) {
  const params = await searchParams;
  const sessionId = params?.session_id;

  if (!sessionId) {
    return (
      <main className="page">
        <div className="card status-card">
          <h1>No checkout session found</h1>
          <p>
            <a href="/">Go back and generate a RAMS</a>
          </p>
        </div>
      </main>
    );
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch (err) {
    console.error("Failed to retrieve Stripe session:", err);
    session = null;
  }

  if (!session || session.payment_status !== "paid") {
    return (
      <main className="page">
        <div className="card status-card">
          <h1>Payment not confirmed</h1>
          <p>
            We couldn't verify this payment. If you were charged, contact
            support with your reference — otherwise{" "}
            <a href="/">try again</a>.
          </p>
        </div>
      </main>
    );
  }

  const trade = getTradeBySlug(session.metadata?.slug);

  if (!trade) {
    return (
      <main className="page">
        <div className="card status-card">
          <h1>Payment received, but something went wrong</h1>
          <p>
            We couldn't match your payment to a RAMS template. Contact
            support with this reference: <strong>{session.id}</strong>
          </p>
        </div>
      </main>
    );
  }

  const siteAddress = session.metadata?.siteAddress;
  const customerEmail = session.customer_details?.email;

  // Best-effort: a failed email should never stop the customer seeing/
  // downloading their document, since that's the part that actually matters.
  // Note this can re-send on a page refresh — fine for now, worth moving to
  // a webhook-triggered send (see README) if that becomes a real problem.
  let emailResult = { skipped: true };
  if (customerEmail) {
    try {
      const pdfBuffer = await generateRamsPdf(trade, siteAddress);
      emailResult = await sendRamsEmail({ to: customerEmail, trade, pdfBuffer });
    } catch (err) {
      console.error("Failed to send RAMS email:", err);
      emailResult = { skipped: true };
    }
  }

  return (
    <main className="page">
      <div className="intro">
        <h1>Payment confirmed</h1>
        <p>
          {emailResult?.skipped
            ? "Your RAMS document is below — download the PDF whenever you're ready."
            : `Your RAMS document is below, and a PDF copy is on its way to ${customerEmail}.`}
        </p>
      </div>

      <div style={{ marginBottom: 28 }}>
        <a
          className="button"
          style={{ display: "inline-block", width: "auto" }}
          href={`/api/download?session_id=${session.id}`}
        >
          Download PDF
        </a>
      </div>

      <RamsDocument trade={trade} siteAddress={siteAddress} />
    </main>
  );
}
