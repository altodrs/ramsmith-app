import Link from "next/link";

export const metadata = {
  title: "Pricing — Ramsforge",
  description:
    "One-time payment, no account and no subscription — £15 per site-specific RAMS document.",
  alternates: { canonical: "https://ramsforge.co.uk/pricing" },
};

// A deliberately simple placeholder for today's two real offerings. A
// subscription account tier is planned — this page gets replaced with the
// full 3-tier comparison layout once that exists too, rather than
// describing pricing that isn't live yet.
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

      <div className="pricing-cards-row">
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

        <div className="card pricing-single-card">
          <span className="pricing-single-label">Multi-Site Pack</span>
          <div className="pricing-single-amount">
            <span className="pricing-single-currency">£</span>50
            <span className="pricing-single-unit">5 documents, any trade or site</span>
          </div>
          <ul className="pricing-single-features">
            <li>£10 per document instead of £15</li>
            <li>Use across any trade or industry, any site</li>
            <li>One email link — come back and generate whenever you need one</li>
            <li>No account or sign-up required</li>
          </ul>
          <Link href="/pack" className="button" style={{ display: "inline-block", textDecoration: "none" }}>
            Buy a pack
          </Link>
        </div>
      </div>

      <p className="pricing-more-note">
        An unlimited monthly/annual account plan is coming soon.
      </p>
    </main>
  );
}
