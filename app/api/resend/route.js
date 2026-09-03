import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getListingBySlug } from "@/lib/listings";
import { generateRamsPdf } from "@/lib/pdf";
import { sendRamsEmail } from "@/lib/email";

// Re-verifies payment independently before sending — same rule as
// /api/download and the success page. A guessed or reused session_id that
// isn't actually paid gets nothing.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { session_id: sessionId, email } = body || {};
  const safeEmail = typeof email === "string" ? email.trim().slice(0, 200) : "";

  if (!sessionId || typeof sessionId !== "string") {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }
  if (!safeEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return NextResponse.json({ error: "Invalid session" }, { status: 404 });
  }

  if (session.payment_status !== "paid") {
    return NextResponse.json({ error: "Payment not confirmed" }, { status: 402 });
  }

  const trade = getListingBySlug(session.metadata?.slug);
  if (!trade) {
    return NextResponse.json({ error: "Unknown trade" }, { status: 404 });
  }

  try {
    const pdfBuffer = await generateRamsPdf(
      trade,
      session.metadata?.siteAddress,
      session.metadata?.assessorName
    );
    const result = await sendRamsEmail({ to: safeEmail, trade, pdfBuffer });
    if (result?.skipped) {
      return NextResponse.json(
        { error: "Email sending isn't configured on this deployment." },
        { status: 503 }
      );
    }
  } catch (err) {
    console.error("Resend email failed:", err);
    return NextResponse.json({ error: "Could not send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
