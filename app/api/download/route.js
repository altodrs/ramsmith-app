import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getListingBySlug } from "@/lib/listings";
import { generateRamsPdf } from "@/lib/pdf";

// Re-verifies payment independently before generating the PDF — same rule
// as the success page. A guessed or reused session_id that isn't actually
// paid gets nothing.
export async function GET(request) {
  const sessionId = new URL(request.url).searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
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

  const pdfBuffer = await generateRamsPdf(
    trade,
    session.metadata?.siteAddress,
    session.metadata?.assessorName
  );

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="RAMS-${trade.slug}.pdf"`,
    },
  });
}
