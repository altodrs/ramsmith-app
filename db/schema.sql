-- Idempotent — safe to run against a fresh database or an existing one.
-- Run via `node scripts/migrate.mjs`. No migration framework; this file is
-- the whole schema, edited in place and re-run.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Auth.js's own tables, per @auth/pg-adapter's exact query expectations
-- (node_modules/@auth/pg-adapter/index.js) — column names/casing must
-- match precisely, since the adapter quotes the camelCase ones.

CREATE TABLE IF NOT EXISTS users (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name           TEXT,
  email          TEXT UNIQUE,
  "emailVerified" TIMESTAMPTZ,
  image          TEXT
);

CREATE TABLE IF NOT EXISTS accounts (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "userId"            UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type                TEXT NOT NULL,
  provider            TEXT NOT NULL,
  "providerAccountId" TEXT NOT NULL,
  refresh_token       TEXT,
  access_token        TEXT,
  expires_at          BIGINT,
  id_token            TEXT,
  scope               TEXT,
  session_state       TEXT,
  token_type          TEXT,
  UNIQUE (provider, "providerAccountId")
);

CREATE TABLE IF NOT EXISTS sessions (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "userId"       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires        TIMESTAMPTZ NOT NULL,
  "sessionToken" TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS verification_token (
  identifier TEXT NOT NULL,
  expires    TIMESTAMPTZ NOT NULL,
  token      TEXT NOT NULL,
  PRIMARY KEY (identifier, token)
);

-- App tables.

CREATE TABLE IF NOT EXISTS user_profiles (
  user_id               UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  default_assessor_name TEXT,
  default_company_name  TEXT,
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  stripe_customer_id     TEXT NOT NULL UNIQUE,
  stripe_subscription_id TEXT NOT NULL UNIQUE,
  price_id               TEXT NOT NULL,
  status                 TEXT NOT NULL,
  current_period_end     TIMESTAMPTZ,
  cancel_at_period_end   BOOLEAN NOT NULL DEFAULT false,
  created_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at             TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- No user_id — Tier 2 is token-based, no login required.
CREATE TABLE IF NOT EXISTS credit_packs (
  id                         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token                      TEXT NOT NULL UNIQUE,
  purchase_email             TEXT NOT NULL,
  credits_total              INTEGER NOT NULL DEFAULT 5,
  credits_used               INTEGER NOT NULL DEFAULT 0,
  stripe_checkout_session_id TEXT NOT NULL UNIQUE,
  created_at                 TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Shared by both Tier 2 (credit_pack_id) and Tier 3 (user_id) generations.
-- No PDF blobs — /api/download already regenerates from these inputs on
-- demand via generateRamsPdf, so this table just records what was generated.
CREATE TABLE IF NOT EXISTS document_generations (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID REFERENCES users(id) ON DELETE CASCADE,
  credit_pack_id UUID REFERENCES credit_packs(id) ON DELETE CASCADE,
  slug           TEXT NOT NULL,
  site_address   TEXT NOT NULL,
  assessor_name  TEXT NOT NULL,
  generated_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT document_generations_one_owner CHECK (
    (user_id IS NOT NULL)::int + (credit_pack_id IS NOT NULL)::int = 1
  )
);

-- Idempotency ledger for the Stripe webhook — Stripe delivers at-least-once,
-- so every handler must INSERT here (ON CONFLICT DO NOTHING) before acting,
-- checking whether it already inserted, to avoid e.g. double-granting a
-- credit pack on a retried delivery.
CREATE TABLE IF NOT EXISTS webhook_events (
  stripe_event_id TEXT PRIMARY KEY,
  type            TEXT NOT NULL,
  received_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);
