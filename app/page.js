import Link from "next/link";
import TradeForm from "@/components/TradeForm";
import HeroPhoneOverlay from "@/components/HeroPhoneOverlay";
import { trades } from "@/lib/trades";
import { industries } from "@/lib/industries";

export const metadata = {
  alternates: { canonical: "https://ramsforge.co.uk" },
};

export default function HomePage() {
  return (
    <main className="page-home">
      <div className="page-home-inner">
        <div className="intro hero-orange-zone">
          <div className="hero-orange-top">
            <h1>Generate a site-specific UK RAMS in minutes</h1>
            <p>
              Built around CDM 2015 and HSE guidance: pick your job, add the
              site, and get a RAMS ready to review and sign in minutes, with
              the hazards, controls and PPE for your trade.
            </p>
          </div>
          <div className="chip-row trust-row">
            <span className="badge-green">&#10003; No account needed</span>
            <span className="badge-green">&#10003; No subscription</span>
            <span className="badge-green">&#10003; Preview before you pay</span>
          </div>
        </div>
      </div>

      <HeroPhoneOverlay />

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
