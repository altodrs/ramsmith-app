"use client";

import { useState } from "react";
import SiteQuestions from "@/components/SiteQuestions";
import { sanitiseSiteAnswers } from "@/lib/siteQuestions";

// This is the one point every path through the site passes through before
// payment — home form and SEO-page traffic alike (SEO pages link straight
// here, skipping the home form entirely) — so the required assessor name
// and acknowledgment live here, not on the home form, or SEO-page visitors
// could pay without ever providing either.
export default function PayButton({ slug, siteAddress }) {
  const [assessorName, setAssessorName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [siteAnswers, setSiteAnswers] = useState({});
  const [siteNotes, setSiteNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = assessorName.trim().length > 0 && agreed && !!sanitiseSiteAnswers(siteAnswers) && !loading;

  async function handleClick() {
    if (!canSubmit) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, siteAddress, assessorName, siteAnswers, siteNotes }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <SiteQuestions
        answers={siteAnswers}
        onAnswers={setSiteAnswers}
        notes={siteNotes}
        onNotes={setSiteNotes}
      />

      <div className="field">
        <label htmlFor="assessorName">Assessor / Competent Person Name</label>
        <input
          id="assessorName"
          type="text"
          placeholder="John Smith or Smith Plumbing Ltd"
          value={assessorName}
          onChange={(e) => setAssessorName(e.target.value)}
        />
        <span className="field-hint">
          Printed on the document as the person responsible for this RAMS.
        </span>
      </div>

      <label className="declaration-check">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <span>
          I explicitly declare that I am the Competent Person for this
          project under HSE definitions. I certify that I have reviewed the
          generated text against live site conditions, actively adopt it as
          my own professional judgment, and agree to the full Limitation of
          Liability and User Indemnification terms at{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            ramsforge.co.uk/terms
          </a>
          .
        </span>
      </label>

      <div className="declaration-box">
        <strong>Ramsforge is an automated drafting aid.</strong> It does not
        inspect your site or assess your risks. Under the Management of
        Health and Safety at Work Regulations 1999, you (the employer or
        self-employed person) remain responsible for the adequacy of your
        risk assessment. Inspect the site and check every hazard and control
        before work starts.
      </div>

      <button className="button" onClick={handleClick} disabled={!canSubmit}>
        {loading ? "Redirecting to checkout…" : "Unlock full RAMS — £15.00"}
      </button>
      <p className="field-hint" style={{ marginTop: 10 }}>
        Free corrections: spot a mistake? Email us within 14 days and we&apos;ll
        fix and reissue it free.
      </p>
      {error ? <p className="error-text">{error}</p> : null}
    </div>
  );
}
