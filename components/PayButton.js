"use client";

import { useState } from "react";

export default function PayButton({ slug, siteAddress }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
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
    <div>
      <button className="button" onClick={handleClick} disabled={loading}>
        {loading ? "Redirecting to checkout…" : "Unlock full RAMS — £15.00"}
      </button>
      {error ? <p className="error-text">{error}</p> : null}
    </div>
  );
}
