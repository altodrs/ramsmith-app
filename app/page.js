import Link from "next/link";
import TradeForm from "@/components/TradeForm";
import { trades } from "@/lib/trades";

export const metadata = {
  alternates: { canonical: "https://ramsforge.co.uk" },
};

export default function HomePage() {
  return (
    <main className="page">
      <div className="hero-grid">
        <div className="intro">
          <h1>Generate a site-specific UK RAMS in minutes</h1>
          <p>
            Pick the job, add the site address, and pay once to unlock a
            CDM 2015 compliant Risk Assessment &amp; Method Statement —
            hazards, controls, PPE and regulations included.
          </p>
          <div className="chip-row trust-row">
            <span className="badge-green">&#10003; No account needed</span>
            <span className="badge-green">&#10003; No subscription</span>
            <span className="badge-green">&#10003; Preview before you pay</span>
          </div>
        </div>
        <div>
          <TradeForm trades={trades} />
          <p className="browse-link">
            Not sure what to search? <Link href="/rams">Browse all jobs</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
