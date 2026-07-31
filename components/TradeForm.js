"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TradeForm({ trades }) {
  const router = useRouter();
  const [slug, setSlug] = useState(trades[0]?.slug || "");
  const [siteAddress, setSiteAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams({ slug, siteAddress });
    router.push(`/preview?${params.toString()}`);
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
    </form>
  );
}
