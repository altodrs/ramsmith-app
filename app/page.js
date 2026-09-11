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
      <div className="page-home-inner">
        <div className="hero-columns">
          <div className="intro hero-orange-zone">
            <div className="hero-orange-top">
              <h1>Generate a site-specific UK RAMS in minutes</h1>
              <p>
                Pick the job, add the site address, and pay once to unlock a
                site-specific Risk Assessment &amp; Method Statement — hazards,
                controls, PPE and regulations included.
              </p>
            </div>
            <div className="chip-row trust-row">
              <span className="badge-green">&#10003; No account needed</span>
              <span className="badge-green">&#10003; No subscription</span>
              <span className="badge-green">&#10003; Preview before you pay</span>
            </div>
          </div>
          <div className="hero-phones">
            <img
              src="/hero-phones.svg"
              alt="A sample Ramsforge RAMS document shown on two phone screens"
            />
          </div>
        </div>
      </div>

      <div className="hero-below-orange">
        <div className="hero-below-orange-inner">
          <TradeForm trades={[...trades, ...industries]} />
          <p className="browse-link">
            Not sure what to search?{" "}
            <Link href="/rams">Browse all trades</Link> or{" "}
            <Link href="/industries">browse all industries</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
