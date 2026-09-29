import { neon, Pool } from "@neondatabase/serverless";

// Server-only, same rule as lib/stripe.js — never import this file from a
// "use client" component.
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set. In Vercel: Settings -> Environment Variables " +
      "-> add DATABASE_URL (separate values for Preview and Production), then redeploy."
  );
}

// Tagged-template client for normal app queries, e.g.
// sql`SELECT * FROM subscriptions WHERE user_id = ${userId}`.
export const sql = neon(process.env.DATABASE_URL);

// Pool (not the tagged-template client) is what @auth/pg-adapter expects —
// used only by auth.js, not for direct app queries.
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
