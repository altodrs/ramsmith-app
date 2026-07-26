import { stripe } from "@/lib/stripe";
import { getTradeBySlug } from "@/lib/trades";
import RamsDocument from "@/components/RamsDocument";

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

  return (
    <main className="page">
      <div className="intro">
        <h1>Payment confirmed</h1>
        <p>Your RAMS document is below.</p>
      </div>
      <RamsDocument trade={trade} siteAddress={session.metadata?.siteAddress} />
    </main>
  );
}
