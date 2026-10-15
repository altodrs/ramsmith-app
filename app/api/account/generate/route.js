import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { sql } from "@/lib/db";
import { getSubscription, isActive } from "@/lib/subscription";
import { getListingBySlug } from "@/lib/listings";
import { generateRamsPdf } from "@/lib/pdf";
import { buildSiteInfo, sanitiseSiteAnswers } from "@/lib/siteQuestions";
import { sendRamsEmail } from "@/lib/email";

// Unlimited generation for an active subscriber. Access comes from our own
// subscriptions table (kept current by the Stripe webhook), checked on every
// request — hiding the form in the UI is convenience, not enforcement.
export async function POST(request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Please sign in first." }, { status: 401 });
  }

  const subscription = await getSubscription(session.user.id);
  if (!isActive(subscription)) {
    return NextResponse.json({ error: "An active subscription is required." }, { status: 402 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const trade = getListingBySlug(body?.slug);
  const safeSiteAddress =
    typeof body?.siteAddress === "string" ? body.siteAddress.trim().slice(0, 300) : "";
  const safeAssessorName =
    typeof body?.assessorName === "string" ? body.assessorName.trim().slice(0, 150) : "";

  if (!trade) {
    return NextResponse.json({ error: "Unknown trade selected" }, { status: 400 });
  }
  if (!sanitiseSiteAnswers(body?.siteAnswers)) {
    return NextResponse.json({ error: "Please answer the three site questions." }, { status: 400 });
  }
  if (!safeAssessorName) {
    return NextResponse.json(
      { error: "Assessor / competent person name is required." },
      { status: 400 }
    );
  }

  await sql`
    INSERT INTO document_generations (user_id, slug, site_address, assessor_name)
    VALUES (${session.user.id}, ${trade.slug}, ${safeSiteAddress}, ${safeAssessorName})
  `;

  const pdfBuffer = await generateRamsPdf(
    trade,
    safeSiteAddress,
    safeAssessorName,
    buildSiteInfo(body.siteAnswers, body.siteNotes)
  );

  try {
    await sendRamsEmail({ to: session.user.email, trade, pdfBuffer });
  } catch (err) {
    console.error("Failed to send subscriber RAMS email:", err);
  }

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="RAMS-${trade.slug}.pdf"`,
    },
  });
}
