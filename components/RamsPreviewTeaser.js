// Deliberately receives only a minimal, non-sensitive subset of the trade
// data (title, regs, hazard names) — never hazard.control, required_ppe, the
// method statement, or FAQs. Keeping the paid content out of the props here
// (rather than passing the full trade object and hiding fields with CSS)
// means it never reaches the browser at all, so it can't be scraped from the
// page source before payment.
export default function RamsPreviewTeaser({
  h1Title,
  cdmApplicable,
  siteAddress,
  applicableRegs,
  hazardNames,
}) {
  return (
    <div className="content">
      <section>
        <h2>{h1Title}</h2>
        {siteAddress ? (
          <p style={{ color: "var(--muted)", marginTop: -8 }}>
            Site: {siteAddress}
          </p>
        ) : null}
        <span className="badge-green">
          &#10003; {cdmApplicable === false ? "Site-Specific RAMS" : "CDM 2015 Compliant"}
        </span>
      </section>

      <section>
        <h2>Applicable Regulations</h2>
        <div className="chip-row">
          {applicableRegs.map((reg) => (
            <span className="pill" key={reg}>
              {reg}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2>Hazards Covered</h2>
        <p className="section-note">
          This document identifies and provides a control measure for each
          hazard below, with a risk rating before and after controls.
        </p>
        <ul className="hazard-name-list">
          {hazardNames.map((name) => (
            <li key={name}>
              <span className="hazard-name-lock" aria-hidden="true">
                &#128274;
              </span>
              {name}
            </li>
          ))}
        </ul>
      </section>

      <div className="locked-panel">
        <h3>Unlocked after payment</h3>
        <ul>
          <li>The full control measure for each of the {hazardNames.length} hazards above</li>
          <li>Required PPE list</li>
          <li>A step-by-step method statement</li>
          <li>Emergency procedures &amp; contacts</li>
          <li>FAQs and the sign-off section</li>
          <li>A clean, watermark-free PDF — emailed to you and ready to download</li>
        </ul>
      </div>
    </div>
  );
}
