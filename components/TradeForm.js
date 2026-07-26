"use client";

import { useState } from "react";

export default function TradeForm({ trades }) {
  const [slug, setSlug] = useState(trades[0]?.slug || "");
  const [siteAddress, setSiteAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, siteAddress }),
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
    <form className="card" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="trade">Select the job</label>
        <select
          id="trade"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        >
          {trades.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.trade} — {t.task_name}
            </option>
          ))}
        </select>
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
          Printed on the RAMS document. You'll enter your email on the payment
          page next.
        </span>
      </div>

      <div className="price-row">
        <span className="price-label">One-time payment</span>
        <span className="price-amount">£15.00</span>
      </div>

      <button className="button" type="submit" disabled={loading}>
        {loading ? "Redirecting to checkout…" : "Pay & generate RAMS"}
      </button>

      {error ? <p className="error-text">{error}</p> : null}
    </form>
  );
}
