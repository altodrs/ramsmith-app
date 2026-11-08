const SIGN_OFF_ROWS = 12;

function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function HeaderCell({ label, value }) {
  return (
    <div className="tbt-sheet-meta-cell">
      <span className="tbt-sheet-meta-label">{label}</span>
      <span className="tbt-sheet-meta-value">{value || " "}</span>
    </div>
  );
}

export default function TalkPreview({ talk, header, categoryLabel }) {
  return (
    <article className="tbt-sheet" id="tbt-sheet">
      <header className="tbt-sheet-head">
        <div>
          <p className="tbt-sheet-kicker">Toolbox Talk · {categoryLabel}</p>
          <h2 className="tbt-sheet-title">{talk.title}</h2>
        </div>
        <span className="tbt-sheet-duration">{talk.duration}</span>
      </header>

      <div className="tbt-sheet-meta">
        <HeaderCell label="Company" value={header.company} />
        <HeaderCell label="Site / job ref" value={header.site} />
        <HeaderCell label="Date" value={formatDate(header.date)} />
        <HeaderCell label="Given by" value={header.supervisor} />
      </div>

      <section className="tbt-sheet-section">
        <h3>Why this matters</h3>
        <p>{talk.summary}</p>
      </section>

      <div className="tbt-sheet-cols">
        <section className="tbt-sheet-section">
          <h3>Hazards</h3>
          <ul>
            {talk.hazards.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
        <section className="tbt-sheet-section">
          <h3>Controls</h3>
          <ul className="tbt-sheet-ticks">
            {talk.controls.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="tbt-sheet-section">
        <h3>Talk it through</h3>
        <ol>
          {talk.discussionPoints.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </section>

      <p className="tbt-sheet-key">{talk.keyMessage}</p>

      <section className="tbt-sheet-section tbt-sheet-signoff">
        <h3>Attendance sign-off</h3>
        <p className="tbt-sheet-small">
          By signing, you confirm you attended this briefing and understood it.
        </p>
        <table>
          <thead>
            <tr>
              <th scope="col" className="tbt-col-num">#</th>
              <th scope="col">Name (print)</th>
              <th scope="col">Company</th>
              <th scope="col">Signature</th>
              <th scope="col" className="tbt-col-date">Date</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: SIGN_OFF_ROWS }, (_, i) => (
              <tr key={i}>
                <td className="tbt-col-num">{i + 1}</td>
                <td />
                <td />
                <td />
                <td className="tbt-col-date">{formatDate(header.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="tbt-sheet-foot">
        <span>Reference: {talk.regulations.join(" · ")}</span>
        <span>Free toolbox talk from ramsforge.co.uk</span>
      </footer>
    </article>
  );
}
