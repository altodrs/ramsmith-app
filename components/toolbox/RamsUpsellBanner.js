import Link from "next/link";

export default function RamsUpsellBanner({ talk }) {
  return (
    <aside className="tbt-upsell" aria-label="Full RAMS for this job">
      <div className="tbt-upsell-copy">
        <p className="tbt-upsell-kicker">Talk sorted. What about the RAMS?</p>
        <h2>Need full RAMS for this job, built around CDM 2015 and HSE guidance?</h2>
        <p>
          Get a site-specific risk assessment and method statement sorted in
          minutes. No account needed, free preview, then £15 per document.
        </p>
        {talk.relatedRams?.length > 0 && (
          <ul className="tbt-upsell-links">
            {talk.relatedRams.map((r) => (
              <li key={r.slug}>
                <Link href={`/rams/${r.slug}`}>{r.label} RAMS</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link href="/" className="tbt-upsell-cta">
        Generate my RAMS
      </Link>
    </aside>
  );
}
