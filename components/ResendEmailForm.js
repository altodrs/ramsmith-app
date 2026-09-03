"use client";

import { useState } from "react";

export default function ResendEmailForm({ sessionId }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, email }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (!open) {
    return (
      <p className="resend-toggle">
        Not the right email?{" "}
        <button type="button" className="link-button" onClick={() => setOpen(true)}>
          Resend to a different address
        </button>
      </p>
    );
  }

  if (status === "sent") {
    return <p className="resend-toggle">Sent — check your inbox.</p>;
  }

  return (
    <form className="resend-form" onSubmit={handleSubmit}>
      <label htmlFor="resend-email">Resend your RAMS to</label>
      <div className="resend-form-row">
        <input
          id="resend-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Resend"}
        </button>
      </div>
      {error ? <p className="error-text">{error}</p> : null}
    </form>
  );
}
