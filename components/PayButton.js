"use client";

import { useState } from "react";

// This is the one point every path through the site passes through before
// payment — home form and SEO-page traffic alike (SEO pages link straight
// here, skipping the home form entirely) — so the required assessor name
// and acknowledgment live here, not on the home form, or SEO-page visitors
// could pay without ever providing either.
export default function PayButton({ slug, siteAddress }) {
  const [assessorName, setAssessorName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = assessorName.trim().length > 0 && agreed && !loading;

  async function handleClick() {
    if (!canSubmit) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, siteAddress, assessorName }),
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
          I understand this is a draft template. Before any work starts I
          will check the full document against the actual site and task,
          change anything that doesn&apos;t fit, and sign it off as the
          competent person. I accept the{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms &amp; Declarations
          </a>
          .
        </span>
      </label>

      <div className="declaration-box">
        <strong>A first draft in minutes. You check it, you sign it.</strong>{" "}
        Ramsforge builds your RAMS from standard templates and the details
        you enter. It&apos;s a starting point, not a replacement for your own
        judgement. You know the site, we don&apos;t. Before work starts, check
        every hazard and control against the real job, add anything missing,
        and sign it off.
      </div>

      <button className="button" onClick={handleClick} disabled={!canSubmit}>
        {loading ? "Redirecting to checkout…" : "Unlock full RAMS — £15.00"}
      </button>
      {error ? <p className="error-text">{error}</p> : null}
    </div>
  );
}
