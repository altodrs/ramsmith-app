"use client";

import { useState } from "react";
import Link from "next/link";
import SubscribeButton from "@/components/SubscribeButton";

const linkButton = { display: "inline-block", textDecoration: "none" };

// The toggle only changes the Unlimited plan's price — the single document
// and the pack are one-time payments either way.
export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <div className="pricing-toggle" role="group" aria-label="Billing period">
        <button
          type="button"
          className={annual ? "" : "active"}
          aria-pressed={!annual}
          onClick={() => setAnnual(false)}
        >
          Monthly
        </button>
        <button
          type="button"
          className={annual ? "active" : ""}
          aria-pressed={annual}
          onClick={() => setAnnual(true)}
        >
          Annually <span className="pricing-save">save 20%</span>
        </button>
      </div>

      <div className="pricing-cards-row">
        <div className="card pricing-single-card">
          <span className="pricing-single-label">Single Site</span>
          <div className="pricing-single-amount">
            <span className="pricing-single-currency">£</span>15
            <span className="pricing-single-unit">one-time, per document</span>
          </div>
          <ul className="pricing-single-features">
            <li>Full method statement, 5 hazards with risk ratings, PPE and emergency procedures</li>
            <li>Preview before you pay</li>
            <li>PDF emailed and downloadable instantly</li>
            <li>No account or sign-up required</li>
          </ul>
          <Link href="/" className="button" style={linkButton}>
            Find your job
          </Link>
        </div>

        <div className="card pricing-single-card">
          <span className="pricing-single-label">Multi-Site Pack</span>
          <div className="pricing-single-amount">
            <span className="pricing-single-currency">£</span>50
            <span className="pricing-single-unit">one-time, 5 documents</span>
          </div>
          <ul className="pricing-single-features">
            <li>Everything in Single Site</li>
            <li>£10 per document instead of £15</li>
            <li>Any trade or industry, any site</li>
            <li>One email link — come back whenever you need one</li>
          </ul>
          <Link href="/pack" className="button" style={linkButton}>
            Buy a pack
          </Link>
        </div>

        <div className="card pricing-single-card pricing-popular">
          <span className="pricing-badge">Best value</span>
          <span className="pricing-single-label">Ramsforge Unlimited</span>
          <div className="pricing-single-amount">
            <span className="pricing-single-currency">£</span>
            {annual ? "144" : "15"}
            <span className="pricing-single-unit">
              {annual ? "per year (£12 a month)" : "per month"}
            </span>
          </div>
          <ul className="pricing-single-features">
            <li>Everything in Multi-Site Pack</li>
            <li>Unlimited documents, any trade, any site</li>
            <li>Your document history, saved in your account</li>
            <li>Saved assessor details, pre-filled every time</li>
            <li>Cancel any time from your account</li>
          </ul>
          <SubscribeButton
            interval={annual ? "annual" : "monthly"}
            label={annual ? "Subscribe — £144 a year" : "Subscribe — £15 a month"}
          />
          <p className="pricing-more-note" style={{ marginTop: 10 }}>
            You&apos;ll be asked to sign in first.
          </p>
        </div>
      </div>
    </>
  );
}
