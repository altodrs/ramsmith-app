export default function RamsDocument({ trade, siteAddress, assessorName, showHeader = true }) {
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
          {assessorName ? (
            <p style={{ color: "var(--muted)", marginTop: -8 }}>
              Assessor / Competent Person: {assessorName}
            </p>
          ) : null}
          <span className="badge-green">
            &#10003; {trade.cdm_applicable === false ? "Site-Specific RAMS" : "CDM 2015 Compliant"}
          </span>
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
        <h2>Method Statement — Sequence of Work</h2>
        <ol className="method-steps">
          {METHOD_STATEMENT_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Hazard &amp; Risk Assessment</h2>
        <p className="section-note">
          Each hazard is assessed against a standard Likelihood &times; Severity
          matrix. &ldquo;Initial Risk&rdquo; reflects the risk before any control
          measures are applied; &ldquo;Residual Risk&rdquo; reflects the risk once
          the stated controls are correctly implemented on site.
        </p>
        <div className="hazard-grid">
          {trade.hazards.map((hazard) => (
            <div className="hazard-card" key={hazard.name}>
              <span className="hazard-eyebrow">Hazard</span>
              <h3>{hazard.name}</h3>
              <p>
                <strong>Control:</strong> {hazard.control}
              </p>
              <div className="risk-tags">
                <span className="risk-tag risk-tag-initial">Initial Risk: High</span>
                <span className="risk-tag risk-tag-residual">Residual Risk: Low</span>
              </div>
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
        <h2>Emergency Procedures</h2>
        <div className="emergency-grid">
          {EMERGENCY_PROCEDURES.map((item) => (
            <div className="emergency-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <div className="emergency-contacts">
          <div className="emergency-contact-row">
            <span>Emergency Services:</span>
            <strong>999</strong>
          </div>
          <div className="emergency-contact-row">
            <span>Site Supervisor / Contact:</span>
            <span className="fill-line" />
          </div>
          <div className="emergency-contact-row">
            <span>Nearest A&amp;E:</span>
            <span className="fill-line" />
          </div>
        </div>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <div className="card faq-card">
          <h3>{trade.faq_q1}</h3>
          <p>{trade.faq_a1}</p>
        </div>
        <div className="card faq-card">
          <h3>{SECOND_FAQ.q}</h3>
          <p>{SECOND_FAQ.a}</p>
        </div>
      </section>
    </div>
  );
}

const METHOD_STATEMENT_STEPS = [
  "Review this RAMS and confirm site conditions match those described before work begins.",
  "Brief all operatives on the hazards, controls and PPE requirements below (toolbox talk).",
  "Check and don all required PPE, and inspect tools and equipment before use.",
  "Carry out the task in line with the control measures set out in the Hazard & Risk Assessment section below.",
  "Maintain good housekeeping throughout — keep the work area tidy and manage waste and materials safely.",
  "On completion, remove tools and equipment, restore the work area, and report any incidents, near misses or changes in site conditions to the site supervisor.",
  "Complete the sign-off section at the end of this document before leaving site.",
];

const EMERGENCY_PROCEDURES = [
  {
    title: "Fire",
    body: "Stop work immediately, raise the alarm and evacuate to the designated assembly point. Do not attempt to fight a fire beyond your training. Call 999 once safely evacuated if the fire brigade has not already been alerted.",
  },
  {
    title: "First Aid / Injury",
    body: "Stop work and alert the nearest first aider or site supervisor. For a serious injury, call 999 immediately and do not move a casualty unless there is immediate danger.",
  },
  {
    title: "Spillage / Environmental Incident",
    body: "Stop work, contain the spill using the site's spill kit if safe to do so, and report it to the site supervisor immediately. Do not allow any spillage to enter a drain or watercourse.",
  },
];

const SECOND_FAQ = {
  q: "Do I need to keep a copy of this RAMS on site?",
  a: "Yes. HSE guidance expects a copy of the RAMS — along with the completed sign-off section — to be available on site for the duration of the work, and reviewed if site conditions change.",
};
