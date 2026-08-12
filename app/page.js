import Link from "next/link";
import TradeForm from "@/components/TradeForm";
import { trades } from "@/lib/trades";
import { industries } from "@/lib/industries";

export const metadata = {
  alternates: { canonical: "https://ramsforge.co.uk" },
};

export default function HomePage() {
  return (
    <main className="page-home">
      <div className="home-hero-logo-wrap">
        <img src="/logo.svg" alt="RAMS Forge" className="home-hero-logo" />
      </div>
      <div className="page-home-inner">
        <div className="hero-grid">
          <div className="intro">
            <h1>Generate a site-specific UK RAMS in minutes</h1>
            <p>
              Pick the job, add the site address, and pay once to unlock a
              site-specific Risk Assessment &amp; Method Statement — hazards,
              controls, PPE and regulations included.
            </p>
            <div className="chip-row trust-row">
              <span className="badge-green">&#10003; No account needed</span>
              <span className="badge-green">&#10003; No subscription</span>
              <span className="badge-green">&#10003; Preview before you pay</span>
            </div>
            <TradeForm trades={[...trades, ...industries]} />
            <p className="browse-link">
              Not sure what to search?{" "}
              <Link href="/rams">Browse all trades</Link> or{" "}
              <Link href="/industries">browse all industries</Link>
            </p>
          </div>
          <div className="hero-photo">
            <img
              src="/homepage-worker.webp"
              alt="Tradesperson in hi-vis and hard hat, ready for the job"
              className="hero-photo-img"
            />
            <div className="hero-price-badge">
              <span className="hero-price-badge-only">Only</span>
              <span className="hero-price-badge-amount">£15</span>
              <span className="hero-price-badge-unit">per document</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
