import Link from "next/link";
import { trades } from "@/lib/trades";
import { industries } from "@/lib/industries";

export const metadata = {
  title: "What is a RAMS? — Ramsforge",
  description:
    "What a RAMS document is, why CDM 2015 requires one, and exactly what's included in every Ramsforge document — with the real UK regulations we reference.",
  alternates: { canonical: "https://ramsforge.co.uk/about-rams" },
};

// Computed live from the real trade/industry data rather than hand-typed,
// so this list can't go stale as new trades/industries are added.
function getAllRegulations() {
  const regs = new Set();
  [...trades, ...industries].forEach((listing) =>
    listing.applicable_regs.forEach((reg) => regs.add(reg))
  );
  return [...regs].sort((a, b) => a.localeCompare(b));
}

export default function AboutRamsPage() {
  const regulations = getAllRegulations();

  return (
    <main className="page about-rams-page">
      <div className="intro">
        <h1>What is a RAMS?</h1>
        <p>
          A RAMS — Risk Assessment &amp; Method Statement — is the document
          that shows a job has been properly planned: what the hazards are,
          how they&apos;re controlled, what PPE is required, and the safe
          sequence of work. It&apos;s what a principal contractor, client or
          HSE inspector expects to see before work starts on site.
        </p>
      </div>

      <section className="about-rams-section">
        <h2>Why you need one</h2>
        <p>
          Under the <strong>Construction (Design and Management) Regulations
          2015 (CDM 2015)</strong>, anyone carrying out construction work in
          the UK has a legal duty to plan, manage and monitor health and
          safety — a RAMS is the standard way of documenting that you&apos;ve
          done it. Many clients and principal contractors won&apos;t let you
          start a job without seeing one first, and for genuinely
          non-construction work (facilities, events, security and more) the
          same document is still expected as evidence of a proper risk
          assessment, even where CDM itself doesn&apos;t strictly apply.
        </p>
      </section>

      <section className="about-rams-section">
        <h2>What&apos;s in every Ramsforge document</h2>
        <p>
          Every document we generate — for any of the {trades.length} trades
          or {industries.length} industries we cover — includes the same
          full structure, not a stripped-down summary:
        </p>
        <ul className="about-rams-feature-list">
          <li>
            <strong>Applicable regulations</strong> — the specific UK
            legislation that applies to the job.
          </li>
          <li>
            <strong>A method statement</strong> — a step-by-step sequence of
            work, from pre-work checks through to sign-off.
          </li>
          <li>
            <strong>Hazard &amp; risk assessment</strong> — five hazards per
            job, each with a control measure and an initial-risk-to-residual-risk
            rating showing the risk before and after that control is applied.
          </li>
          <li>
            <strong>Required PPE</strong> — the specific protective equipment
            for the task.
          </li>
          <li>
            <strong>Emergency procedures</strong> — fire, first aid and
            spillage response, plus a space for site-specific contacts.
          </li>
          <li>
            <strong>A sign-off section</strong> — for the assessor and site
            supervisor to sign and date.
          </li>
        </ul>
      </section>

      <section className="about-rams-section">
        <h2>Built on real UK regulations</h2>
        <p>
          Across every trade and industry we cover, Ramsforge references{" "}
          {regulations.length} distinct pieces of UK legislation and
          guidance — not a generic template with the legal detail left for
          you to research separately. This list is generated directly from
          our live data, so it reflects exactly what&apos;s actually cited in
          the documents we produce, not a marketing summary.
        </p>
        <div className="chip-row about-rams-reg-grid">
          {regulations.map((reg) => (
            <span className="pill" key={reg}>
              {reg}
            </span>
          ))}
        </div>
      </section>

      <section className="about-rams-section about-rams-cta">
        <h2>Find your job</h2>
        <p>
          Search from {trades.length + industries.length} trades and
          industries, preview for free, and pay once when you&apos;re ready.
        </p>
        <div className="chip-row">
          <Link href="/" className="button" style={{ display: "inline-block", width: "auto", textDecoration: "none" }}>
            Search for your job
          </Link>
          <Link href="/rams" style={{ alignSelf: "center" }}>
            Browse all trades
          </Link>
          <Link href="/industries" style={{ alignSelf: "center" }}>
            Browse all industries
          </Link>
        </div>
      </section>
    </main>
  );
}
