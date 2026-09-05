"use client";

import { useState } from "react";
import Link from "next/link";

// Mobile menu state needs a Client Component; the masthead itself still
// renders on every page via app/layout.js (a Server Component) same as
// before, homepage included.
export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="masthead">
      <div className="masthead-inner">
        <a className="wordmark" href="/">
          <img src="/logo.svg" alt="RAMS Forge" />
        </a>

        <nav className="site-nav" aria-label="Main">
          <Link href="/rams">Trades</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/about-rams">About RAMS</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>

        <div className="masthead-actions">
          <Link href="/login" className="masthead-signin">
            Sign in
          </Link>
          <Link href="/" className="button masthead-cta">
            Generate my RAMS
          </Link>
        </div>

        <button
          type="button"
          className="masthead-toggle"
          aria-expanded={open}
          aria-controls="masthead-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="masthead-toggle-bar" />
          <span className="masthead-toggle-bar" />
          <span className="masthead-toggle-bar" />
        </button>
      </div>

      {open ? (
        <div id="masthead-mobile-menu" className="masthead-mobile-menu">
          <Link href="/rams" onClick={() => setOpen(false)}>
            Trades
          </Link>
          <Link href="/industries" onClick={() => setOpen(false)}>
            Industries
          </Link>
          <Link href="/about-rams" onClick={() => setOpen(false)}>
            About RAMS
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link href="/login" onClick={() => setOpen(false)}>
            Sign in
          </Link>
          <Link href="/" className="button" onClick={() => setOpen(false)}>
            Generate my RAMS
          </Link>
        </div>
      ) : null}
    </div>
  );
}
