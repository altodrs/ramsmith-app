"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

function tradeLabel(t) {
  return `${t.trade} — ${t.task_name}`;
}

export default function TradeForm({ trades }) {
  const router = useRouter();
  const [slug, setSlug] = useState("");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [siteAddress, setSiteAddress] = useState("");
  const [error, setError] = useState("");
  const blurTimeout = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return trades;
    return trades.filter((t) => tradeLabel(t).toLowerCase().includes(q));
  }, [trades, query]);

  function handleQueryChange(e) {
    setQuery(e.target.value);
    setIsOpen(true);
    if (slug) setSlug("");
  }

  function handleSelect(t) {
    setSlug(t.slug);
    setQuery(tradeLabel(t));
    setIsOpen(false);
    setError("");
  }

  function handleFocus() {
    setIsOpen(true);
  }

  function handleBlur() {
    // Delay closing so a click on a result registers before the list unmounts.
    blurTimeout.current = setTimeout(() => setIsOpen(false), 150);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!slug) {
      setError("Search for and select a job from the list first.");
      setIsOpen(true);
      return;
    }
    const params = new URLSearchParams({ slug, siteAddress });
    router.push(`/preview?${params.toString()}`);
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
          onFocus={handleFocus}
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
        <span className="field-hint">
          Printed on the RAMS document. You'll enter your email at payment.
        </span>
      </div>

      <div className="price-row">
        <span className="price-label">One-time payment</span>
        <span className="price-amount">£15.00</span>
      </div>

      <button className="button" type="submit">
        Preview my RAMS
      </button>
      {error ? <p className="error-text">{error}</p> : null}
    </form>
  );
}
