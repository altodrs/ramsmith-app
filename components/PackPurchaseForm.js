"use client";

import { useState } from "react";

export default function PackPurchaseForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = email.trim().includes("@") && !loading;

  async function handleClick() {
    if (!canSubmit) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout/pack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
        <label htmlFor="pack-email">Email address</label>
        <input
          id="pack-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="field-hint">
          We&apos;ll email your pack access link here after payment.
        </span>
      </div>

      <div className="price-row">
        <span className="price-label">5 documents, any trade or site</span>
        <span className="price-amount">£50.00</span>
      </div>

      <button className="button" onClick={handleClick} disabled={!canSubmit}>
        {loading ? "Redirecting to checkout…" : "Buy Multi-Site Pack — £50.00"}
      </button>
      {error ? <p className="error-text">{error}</p> : null}
    </div>
  );
}
