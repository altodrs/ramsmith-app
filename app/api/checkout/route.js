import { NextResponse } from "next/server";
import { stripe, RAMS_PRICE_GBP_PENCE } from "@/lib/stripe";
import { getListingBySlug } from "@/lib/listings";

// Creates a Stripe Checkout Session for a single RAMS document purchase.
//
// Security notes:
// - The client only ever sends a trade `slug`. The price and product name are
//   looked up here, server-side, from our own trade data — a tampered request
//   body can't change what gets charged.
// - STRIPE_SECRET_KEY (imported via lib/stripe) never leaves this server-side
//   route; the browser only ever receives the resulting redirect URL.
// - Payment is confirmed again, independently, when the success page loads —
//   this route only starts the checkout, it never grants access on its own.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { slug, siteAddress, assessorName } = body || {};

  const trade = getListingBySlug(slug);
  if (!trade) {
    return NextResponse.json({ error: "Unknown trade selected" }, { status: 400 });
  }

  const safeSiteAddress =
    typeof siteAddress === "string" ? siteAddress.trim().slice(0, 300) : "";

  // Required for the compliance/acknowledgment framework — the client
  // disables the pay button without it, but that's UI, not security; this
  // is the actual enforcement.
  const safeAssessorName =
    typeof assessorName === "string" ? assessorName.trim().slice(0, 150) : "";
  if (!safeAssessorName) {
    return NextResponse.json(
      { error: "Assessor / competent person name is required." },
      { status: 400 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      // Managed Payments (on by default for new Stripe accounts) requires
      // every product to carry a Stripe tax code for automatic tax, which
      // we're not set up for yet. Turning it off for this request keeps our
      // own flat price in full control instead of guessing at a tax code.
      managed_payments: { enabled: false },
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: `RAMS: ${trade.task_name}`,
              description: trade.h1_title,
            },
            unit_amount: RAMS_PRICE_GBP_PENCE,
          },
          quantity: 1,
        },
      ],
      metadata: {
        slug: trade.slug,
        siteAddress: safeSiteAddress,
        assessorName: safeAssessorName,
      },
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session creation failed:", err);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 }
    );
  }
}
