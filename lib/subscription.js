import { sql } from "@/lib/db";

// Server-only. Access is decided from our own database (kept in sync by the
// Stripe webhook), never by calling Stripe on every document generation.
export async function getSubscription(userId) {
  const rows = await sql`SELECT * FROM subscriptions WHERE user_id = ${userId}`;
  return rows[0] || null;
}

export function isActive(subscription) {
  return !!subscription && ["active", "trialing"].includes(subscription.status);
}
