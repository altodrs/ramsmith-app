import { sql } from "@/lib/db";
import { allListings } from "@/lib/listings";
import PackGenerateForm from "@/components/PackGenerateForm";

export const metadata = {
  title: "Your Multi-Site Pack — Ramsforge",
};

export default async function PackPage({ params }) {
  const { token } = await params;

  const rows = await sql`
    SELECT credits_total, credits_used FROM credit_packs WHERE token = ${token}
  `;
  const pack = rows[0];

  if (!pack) {
    return (
      <main className="page">
        <div className="card status-card">
          <h1>Pack not found</h1>
          <p>
            This link doesn&apos;t match a Multi-Site Pack. Check the link
            from your confirmation email, or{" "}
            <a href="/pack">buy a new pack</a>.
          </p>
        </div>
      </main>
    );
  }

  const creditsRemaining = pack.credits_total - pack.credits_used;

  return (
    <main className="page">
      <div className="intro">
        <h1>Your Multi-Site Pack</h1>
        <p>
          Search for a job, add the site details, and generate a document —
          no payment needed, it comes out of this pack.
        </p>
      </div>

      <PackGenerateForm
        token={token}
        trades={allListings}
        initialCreditsRemaining={creditsRemaining}
      />
    </main>
  );
}
