export default function RamsDocument({ trade, siteAddress, showHeader = true }) {
  return (
    <div className="content">
      {showHeader ? (
        <section>
          <h2>{trade.h1_title}</h2>
          {siteAddress ? (
            <p style={{ color: "var(--muted)", marginTop: -8 }}>
              Site: {siteAddress}
            </p>
          ) : null}
          <span className="badge-green">&#10003; CDM 2015 Compliant</span>
        </section>
      ) : null}

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
        <div className="hazard-grid">
          {trade.hazards.map((hazard) => (
            <div className="hazard-card" key={hazard.name}>
              <span className="hazard-eyebrow">Hazard</span>
              <h3>{hazard.name}</h3>
              <p>
                <strong>Control:</strong> {hazard.control}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Required PPE</h2>
        <div className="ppe-badges">
          {trade.required_ppe.map((ppe) => (
            <span className="ppe-badge" key={ppe}>
              {ppe}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>{trade.faq_q1}</h3>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>{trade.faq_a1}</p>
        </div>
      </section>
    </div>
  );
}
