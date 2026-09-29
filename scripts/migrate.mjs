// Applies db/schema.sql against DATABASE_URL. No migration framework — the
// schema file is idempotent (CREATE TABLE IF NOT EXISTS throughout), so
// this is safe to re-run any time the schema changes.
//
// Usage: node scripts/migrate.mjs

import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import { Pool } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  console.error(
    "DATABASE_URL is not set. Copy your Neon connection string into .env.local " +
      "(or export it in your shell) before running this script."
  );
  process.exit(1);
}

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SCHEMA_PATH = path.join(SCRIPT_DIR, "..", "db", "schema.sql");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

try {
  const schema = await readFile(SCHEMA_PATH, "utf8");
  await pool.query(schema);
  console.log("Schema applied successfully.");
} catch (err) {
  console.error("Migration failed:", err.message);
  process.exitCode = 1;
} finally {
  await pool.end();
}
