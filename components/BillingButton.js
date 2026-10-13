"use client";

import { useState } from "react";

export default function BillingButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function open() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/billing/portal", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Something went wrong.");
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <>
      <button className="button" style={{ width: "auto" }} onClick={open} disabled={loading}>
        {loading ? "Opening…" : "Manage billing"}
      </button>
      {error ? <p className="error-text">{error}</p> : null}
    </>
  );
}
