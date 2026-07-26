import TradeForm from "@/components/TradeForm";
import { trades } from "@/lib/trades";

export default function HomePage() {
  return (
    <main className="page">
      <div className="intro">
        <h1>Generate a site-specific UK RAMS in minutes</h1>
        <p>
          Pick the job, add the site address, and pay once to unlock a
          CDM 2015 compliant Risk Assessment &amp; Method Statement —
          hazards, controls, PPE and regulations included.
        </p>
      </div>
      <TradeForm trades={trades} />
    </main>
  );
}
