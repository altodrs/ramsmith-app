"use client";

import { SITE_QUESTIONS, NOTES_MAX } from "@/lib/siteQuestions";

// Three quick questions plus an optional notes box. Nothing is pre-selected
// on purpose: a default "No" would let someone skip past and end up with a
// document stating a site condition they never confirmed.
export default function SiteQuestions({ answers, onAnswers, notes, onNotes }) {
  return (
    <fieldset className="site-questions">
      <legend>About the job (3 quick questions)</legend>

      {SITE_QUESTIONS.map((q) => (
        <div className="site-question" key={q.id}>
          <p className="site-question-label" id={`sq-${q.id}`}>
            {q.label}
          </p>
          <div className="site-question-options" role="radiogroup" aria-labelledby={`sq-${q.id}`}>
            {q.options.map((o) => (
              <label key={o.value} className={answers[q.id] === o.value ? "selected" : undefined}>
                <input
                  type="radio"
                  name={`sq-${q.id}`}
                  value={o.value}
                  checked={answers[q.id] === o.value}
                  onChange={() => onAnswers({ ...answers, [q.id]: o.value })}
                />
                {o.label}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="field" style={{ marginTop: 14 }}>
        <label htmlFor="siteNotes">Anything specific about this site? (optional)</label>
        <textarea
          id="siteNotes"
          rows={3}
          maxLength={NOTES_MAX}
          placeholder="e.g. occupied house, narrow access, asbestos survey on file"
          value={notes}
          onChange={(e) => onNotes(e.target.value)}
        />
        <span className="field-hint">Printed on your RAMS, up to {NOTES_MAX} characters.</span>
      </div>
    </fieldset>
  );
}
