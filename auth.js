import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import PostgresAdapter from "@auth/pg-adapter";
import { pool } from "@/lib/db";

// Server-only, same rule as lib/stripe.js and lib/db.js.
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(pool),
  // Database sessions (not JWT) — the adapter is the source of truth, and
  // Tier 3 access checks read subscriptions.status straight from Postgres
  // rather than trusting anything baked into a session token.
  session: { strategy: "database" },
  providers: [
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
    }),
  ],
  pages: {
    verifyRequest: "/login/check-email",
  },
  // Required on Vercel (and most hosts other than localhost) — without it
  // Auth.js rejects the request's own Host header as untrusted.
  trustHost: true,
});
