"use client";

import { useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import SiteQuestions from "@/components/SiteQuestions";
import { sanitiseSiteAnswers } from "@/lib/siteQuestions";

const sortedAlphabetically = (list) =>
  [...list].sort(
    (a, b) => a.trade.localeCompare(b.trade) || a.task_name.localeCompare(b.task_name)
  );

// Same search UX as components/TradeForm.js, but submits straight to
// generation instead of routing to /preview — a pack credit replaces the
// pay step, there's nothing left to pay for.
export default function PackGenerateForm({
  token,
  trades,
  initialCreditsRemaining = null,
  endpoint = "/api/pack/generate",
  defaultAssessorName = "",
}) {
  const [slug, setSlug] = useState("");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [siteAddress, setSiteAddress] = useState("");
  const [assessorName, setAssessorName] = useState(defaultAssessorName);
  const [agreed, setAgreed] = useState(false);
  const [siteAnswers, setSiteAnswers] = useState({});
  const [siteNotes, setSiteNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [creditsRemaining, setCreditsRemaining] = useState(initialCreditsRemaining);
  const blurTimeout = useRef(null);

  const fuse = useMemo(
    () =>
      new Fuse(trades, {
        keys: [
          { name: "trade", weight: 0.6 },
          { name: "task_name", weight: 0.4 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [trades]
  );

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return sortedAlphabetically(trades);
    return fuse.search(q).map((r) => r.item);
  }, [trades, query, fuse]);

  function handleQueryChange(e) {
    setQuery(e.target.value);
    setIsOpen(true);
    if (slug) setSlug("");
  }

  function handleSelect(t) {
    setSlug(t.slug);
    setQuery(`${t.trade} — ${t.task_name}`);
    setIsOpen(false);
    setError("");
  }

  function handleBlur() {
    blurTimeout.current = setTimeout(() => setIsOpen(false), 150);
  }

  const canSubmit =
    slug && assessorName.trim().length > 0 && agreed && !!sanitiseSiteAnswers(siteAnswers) && !loading;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!slug) {
      setError("Search for and select a job from the list first.");
      setIsOpen(true);
      return;
    }
    if (!canSubmit) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, slug, siteAddress, assessorName, siteAnswers, siteNotes }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      const remainingHeader = res.headers.get("X-Credits-Remaining");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `RAMS-${slug}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      if (remainingHeader !== null && creditsRemaining !== null) setCreditsRemaining(Number(remainingHeader));
      setSlug("");
      setQuery("");
      setSiteAddress("");
      setAssessorName(defaultAssessorName);
      setAgreed(false);
      setSiteAnswers({});
      setSiteNotes("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (creditsRemaining !== null && creditsRemaining <= 0) {
    return (
      <div className="card status-card">
        <h2>All 5 documents used</h2>
        <p>
          This pack is fully redeemed. Need more?{" "}
          <a href="/">Generate another one-off RAMS</a> or buy a fresh pack
          below.
        </p>
      </div>
    );
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="field job-search">
        <label htmlFor="job-search-input">Search for your job</label>
        <input
          id="job-search-input"
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls="job-search-results"
          autoComplete="off"
          placeholder="e.g. boiler, roofing, EV charger…"
          value={query}
          onChange={handleQueryChange}
          onFocus={() => setIsOpen(true)}
          onBlur={handleBlur}
        />
        {isOpen && (
          <ul className="job-results" id="job-search-results" role="listbox">
            {results.length === 0 ? (
              <li className="job-results-empty">
                No jobs match your search. Can&apos;t find your trade or
                industry?{" "}
                <a href="mailto:ramsforgeuk@gmail.com">Email us</a> and
                we&apos;ll look into adding it.
              </li>
            ) : (
              results.map((t) => (
                <li key={t.slug}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={t.slug === slug}
                    className={t.slug === slug ? "job-result selected" : "job-result"}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSelect(t)}
                  >
                    <span className="job-result-trade">{t.trade}</span>
                    <span className="job-result-task">{t.task_name}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      <div className="field">
        <label htmlFor="siteAddress">Site address</label>
        <input
          id="siteAddress"
          type="text"
          placeholder="12 Example Street, Manchester, M1 1AA"
          value={siteAddress}
          onChange={(e) => setSiteAddress(e.target.value)}
        />
        <span className="field-hint">Printed on the RAMS document.</span>
      </div>

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
      </div>

      <label className="declaration-check">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <span>
          I am the employer or self-employed person doing this work (or act
          for them). I understand this is a draft: I remain responsible for
          the adequacy of the risk assessment, and I will inspect the site
          and check the full document before work starts. I accept that
          Ramsforge has no liability for loss arising from my use of it
          (except where the law does not allow that, including death or
          personal injury caused by negligence), and I agree to the
          indemnity in the{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms &amp; Declarations
          </a>
          .
        </span>
      </label>

      {creditsRemaining !== null ? (
        <div className="price-row">
          <span className="price-label">Credits remaining</span>
          <span className="price-amount">{creditsRemaining} of 5</span>
        </div>
      ) : null}

      <button className="button" type="submit" disabled={!canSubmit}>
        {loading ? "Generating…" : "Generate my RAMS"}
      </button>
      {error ? <p className="error-text">{error}</p> : null}
    </form>
  );
}
