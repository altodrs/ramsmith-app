import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { stripe } from "@/lib/stripe";
import { getSubscription } from "@/lib/subscription";

// Opens Stripe's hosted billing page (cancel, change plan, update card).
export async function POST(request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Please sign in first." }, { status: 401 });
  }
  const subscription = await getSubscription(session.user.id);
  if (!subscription) {
    return NextResponse.json({ error: "No subscription found." }, { status: 404 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  try {
    const portal = await stripe.billingPortal.sessions.create({
      customer: subscription.stripe_customer_id,
      return_url: `${siteUrl}/account`,
    });
    return NextResponse.json({ url: portal.url });
  } catch (err) {
    console.error("Stripe billing portal failed:", err);
    return NextResponse.json({ error: "Could not open billing. Please try again." }, { status: 500 });
  }
}
