import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { stripe } from "@/lib/stripe";
import { getSubscription, isActive } from "@/lib/subscription";

// Starts a Ramsforge Unlimited subscription. Requires a signed-in user — the
// subscription must be tied to an account so access can follow it.
export async function POST(request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Please sign in first." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // The price is chosen here, server-side, from our own env — the client only
  // says "monthly" or "annual".
  const priceId =
    body?.interval === "annual"
      ? process.env.STRIPE_PRICE_ANNUAL
      : body?.interval === "monthly"
        ? process.env.STRIPE_PRICE_MONTHLY
        : null;
  if (!priceId) {
    return NextResponse.json({ error: "That plan isn't available right now." }, { status: 400 });
  }

  const existing = await getSubscription(session.user.id);
  if (isActive(existing)) {
    return NextResponse.json({ error: "You already have an active subscription." }, { status: 409 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  try {
    const checkout = await stripe.checkout.sessions.create({
      mode: "subscription",
      managed_payments: { enabled: false },
      line_items: [{ price: priceId, quantity: 1 }],
      ...(existing?.stripe_customer_id
        ? { customer: existing.stripe_customer_id }
        : { customer_email: session.user.email }),
      client_reference_id: session.user.id,
      // Checkout Session metadata does not carry over to the Subscription
      // object, so the user link has to be set here explicitly.
      subscription_data: { metadata: { userId: session.user.id } },
      success_url: `${siteUrl}/account?subscribed=1`,
      cancel_url: `${siteUrl}/pricing`,
    });
    return NextResponse.json({ url: checkout.url });
  } catch (err) {
    console.error("Stripe subscription checkout failed:", err);
    return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 500 });
  }
}
