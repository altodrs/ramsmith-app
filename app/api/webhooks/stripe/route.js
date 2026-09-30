import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { stripe } from "@/lib/stripe";
import { sql } from "@/lib/db";
import { Resend } from "resend";

// Stripe webhooks need the exact raw request bytes to verify the signature —
// request.json() re-serializes and breaks it. Also needs the Node runtime
// (not edge) for the same reason lib/pdf.js does.
export const runtime = "nodejs";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM_ADDRESS = process.env.RESEND_FROM || "Ramsforge <onboarding@resend.dev>";

export async function POST(request) {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("STRIPE_WEBHOOK_SECRET is not set — rejecting webhook.");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Idempotency: Stripe delivers at-least-once. Record the event id first;
  // if it's already there, this is a retry of one we already handled.
  const inserted = await sql`
    INSERT INTO webhook_events (stripe_event_id, type)
    VALUES (${event.id}, ${event.type})
    ON CONFLICT (stripe_event_id) DO NOTHING
    RETURNING stripe_event_id
  `;
  if (inserted.length === 0) {
    return NextResponse.json({ received: true, duplicate: true });
  }

  // Return 2xx for every event type, including ones we don't act on —
  // Stripe retries (and can eventually disable the endpoint) on non-2xx.
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    if (session.metadata?.kind === "multi_site_pack") {
      await fulfilMultiSitePack(session);
    }
  }

  return NextResponse.json({ received: true });
}

async function fulfilMultiSitePack(session) {
  const email = session.customer_details?.email || session.customer_email;
  if (!email) {
    console.error("Multi-site pack checkout completed with no email on session", session.id);
    return;
  }

  const token = crypto.randomBytes(24).toString("base64url");

  await sql`
    INSERT INTO credit_packs (token, purchase_email, stripe_checkout_session_id)
    VALUES (${token}, ${email}, ${session.id})
    ON CONFLICT (stripe_checkout_session_id) DO NOTHING
  `;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ramsforge.co.uk";
  const packUrl = `${siteUrl}/pack/${token}`;

  if (!resend) {
    console.warn("RESEND_API_KEY not set — skipping multi-site pack email.");
    return;
  }

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "Your Ramsforge Multi-Site Pack is ready",
      text:
        `Thanks for your purchase — you have 5 RAMS documents to use on any trade or site.\n\n` +
        `Access your pack here: ${packUrl}\n\n` +
        `Keep this link safe — it's how you'll come back to generate each document.`,
    });
  } catch (err) {
    console.error("Failed to send multi-site pack email:", err);
  }
}
