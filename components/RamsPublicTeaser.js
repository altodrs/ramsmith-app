// Public SEO pages (/rams/[slug], /industries/[slug]) render this instead of
// the full document. It's a Server Component and only reads what it renders,
// so the locked content (other controls, PPE, method statement) is never in
// the HTML at all — nothing to scrape.
export default function RamsPublicTeaser({ trade }) {
  const [sample, ...locked] = trade.hazards;

  return (
    <div className="content">
      <section>
        <h2>Applicable Regulations</h2>
        <div className="chip-row">
          {trade.applicable_regs.map((reg) => (
            <span className="pill" key={reg}>
              {reg}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2>Hazard &amp; Risk Assessment</h2>
        <p className="section-note">
          Every hazard in the full document has a control measure and a
          risk rating before and after controls. Here is one example in full.
        </p>
        <div className="hazard-grid">
          <div className="hazard-card">
            <span className="hazard-eyebrow">Sample hazard</span>
            <h3>{sample.name}</h3>
            <p>
              <strong>Control:</strong> {sample.control}
            </p>
            <div className="risk-tags">
              <span className="risk-tag risk-tag-initial">Initial Risk: High</span>
              <span className="risk-tag risk-tag-residual">Residual Risk: Low</span>
            </div>
          </div>
        </div>

        {locked.length > 0 ? (
          <>
            <p className="section-note" style={{ marginTop: 20 }}>
              Also covered in the full document:
            </p>
            <ul className="hazard-name-list">
              {locked.map((h) => (
                <li key={h.name}>
                  <span className="hazard-name-lock" aria-hidden="true">
                    &#128274;
                  </span>
                  {h.name}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <div className="card faq-card">
          <h3>{trade.faq_q1}</h3>
          <p>{trade.faq_a1}</p>
        </div>
      </section>

      <div className="locked-panel">
        <h3>In the full document</h3>
        <ul>
          <li>The control measure for each of the {trade.hazards.length} hazards</li>
          <li>Required PPE list for this job</li>
          <li>A step-by-step method statement</li>
          <li>Emergency procedures &amp; contacts</li>
          <li>A sign-off section, as a clean PDF — emailed to you and ready to download</li>
        </ul>
      </div>
    </div>
  );
}
