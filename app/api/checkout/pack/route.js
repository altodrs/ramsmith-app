import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// Multi-Site Pack: 5 credits, one-time payment, no account required.
//
// Unlike the Tier 1 checkout route, this one doesn't grant anything on
// redirect — Stripe can complete the payment without the customer's browser
// ever coming back (closed tab, bank redirect, etc.), so fulfilment (minting
// the token, inserting the credit_packs row, emailing the access link)
// happens in the webhook handler, not here or on the success page.
const PACK_PRICE_GBP_PENCE = 5000; // £50.00 for 5 credits (£10/site vs £15 one-off)
const PACK_CREDITS = 5;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = typeof body?.email === "string" ? body.email.trim().slice(0, 254) : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      // Same reasoning as app/api/checkout/route.js — keep our own flat
      // price in full control instead of Managed Payments' tax-code guess.
      managed_payments: { enabled: false },
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "Ramsforge Multi-Site Pack",
              description: `${PACK_CREDITS} RAMS documents, any trade or site`,
            },
            unit_amount: PACK_PRICE_GBP_PENCE,
          },
          quantity: 1,
        },
      ],
      metadata: {
        kind: "multi_site_pack",
      },
      success_url: `${siteUrl}/pack/check-email`,
      cancel_url: `${siteUrl}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe pack checkout session creation failed:", err);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 }
    );
  }
}
