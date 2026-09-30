import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { getListingBySlug } from "@/lib/listings";
import { generateRamsPdf } from "@/lib/pdf";
import { sendRamsEmail } from "@/lib/email";

// Generates one document against a Multi-Site Pack token. The token and
// remaining-credits check happen here, server-side, on every request — the
// UI hiding the form once credits run out is convenience, not enforcement.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const token = typeof body?.token === "string" ? body.token : "";
  const trade = getListingBySlug(body?.slug);
  const safeSiteAddress =
    typeof body?.siteAddress === "string" ? body.siteAddress.trim().slice(0, 300) : "";
  const safeAssessorName =
    typeof body?.assessorName === "string" ? body.assessorName.trim().slice(0, 150) : "";

  if (!token) {
    return NextResponse.json({ error: "Missing pack token" }, { status: 400 });
  }
  if (!trade) {
    return NextResponse.json({ error: "Unknown trade selected" }, { status: 400 });
  }
  if (!safeAssessorName) {
    return NextResponse.json(
      { error: "Assessor / competent person name is required." },
      { status: 400 }
    );
  }

  const packRows = await sql`SELECT * FROM credit_packs WHERE token = ${token}`;
  const pack = packRows[0];
  if (!pack) {
    return NextResponse.json({ error: "Pack not found" }, { status: 404 });
  }

  // Atomic claim: only succeeds if a credit is actually still available,
  // so two concurrent requests can't both spend the last one.
  const claimRows = await sql`
    UPDATE credit_packs
    SET credits_used = credits_used + 1
    WHERE token = ${token} AND credits_used < credits_total
    RETURNING credits_used, credits_total
  `;
  const claimed = claimRows[0];
  if (!claimed) {
    return NextResponse.json({ error: "All credits on this pack have been used." }, { status: 402 });
  }

  await sql`
    INSERT INTO document_generations (credit_pack_id, slug, site_address, assessor_name)
    VALUES (${pack.id}, ${trade.slug}, ${safeSiteAddress}, ${safeAssessorName})
  `;

  const pdfBuffer = await generateRamsPdf(trade, safeSiteAddress, safeAssessorName);

  // Best-effort, same rule as app/success/page.js — a failed email should
  // never stop the customer getting the document that matters right now.
  try {
    await sendRamsEmail({ to: pack.purchase_email, trade, pdfBuffer });
  } catch (err) {
    console.error("Failed to send pack RAMS email:", err);
  }

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="RAMS-${trade.slug}.pdf"`,
      "X-Credits-Remaining": String(claimed.credits_total - claimed.credits_used),
    },
  });
}
