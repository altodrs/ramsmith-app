import Link from "next/link";

export const metadata = {
  title: "Pricing — RAMS Forge",
  description:
    "One-time payment, no account and no subscription — £15 per site-specific RAMS document.",
  alternates: { canonical: "https://ramsforge.co.uk/pricing" },
};

// A deliberately simple placeholder for today's single, real offering.
// More tiers (a multi-site pack, and a subscription account) are planned —
// this page gets replaced with the full comparison layout once those exist,
// rather than describing pricing that isn't live yet.
export default function PricingPage() {
  return (
    <main className="page">
      <div className="intro">
        <h1>Simple, one-time pricing</h1>
        <p>
          No account, no subscription. Pick your job, preview it for free,
          and pay once to unlock the full document.
        </p>
      </div>

      <div className="card pricing-single-card">
        <span className="pricing-single-label">Single Site</span>
        <div className="pricing-single-amount">
          <span className="pricing-single-currency">£</span>15
          <span className="pricing-single-unit">per document</span>
        </div>
        <ul className="pricing-single-features">
          <li>Full method statement, 5 hazards with risk ratings, PPE and emergency procedures</li>
          <li>Preview before you pay</li>
          <li>Watermark-free PDF, emailed and downloadable instantly</li>
          <li>No account or sign-up required</li>
        </ul>
        <Link href="/" className="button" style={{ display: "inline-block", textDecoration: "none" }}>
          Find your job
        </Link>
      </div>

      <p className="pricing-more-note">
        More ways to pay — a multi-site pack and an unlimited account plan —
        are coming soon.
      </p>
    </main>
  );
}
