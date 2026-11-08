const FIELDS = [
  { name: "company", label: "Company name", placeholder: "e.g. J Smith Electrical Ltd" },
  { name: "site", label: "Site location / job ref", placeholder: "e.g. 14 High St, Leeds / JOB-0412" },
  { name: "supervisor", label: "Supervisor / person giving the talk", placeholder: "e.g. Dave Jones" },
];

export default function TalkHeaderForm({ header, onChange }) {
  const update = (name) => (e) => onChange({ ...header, [name]: e.target.value });

  return (
    <div className="tbt-panel">
      <h2 className="tbt-panel-title">2. Add your details</h2>
      <div className="tbt-fields">
        {FIELDS.map((f) => (
          <label key={f.name} className="tbt-field">
            <span>{f.label}</span>
            <input
              type="text"
              value={header[f.name]}
              onChange={update(f.name)}
              placeholder={f.placeholder}
              maxLength={80}
            />
          </label>
        ))}
        <label className="tbt-field">
          <span>Date of talk</span>
          <input type="date" value={header.date} onChange={update("date")} />
        </label>
      </div>
      <p className="tbt-hint">
        Leave any box blank and it prints as a line to fill in by hand. Nothing
        you type leaves your device.
      </p>
    </div>
  );
}
