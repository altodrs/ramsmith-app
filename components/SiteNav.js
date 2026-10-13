"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Mobile menu state needs a Client Component; the masthead itself still
// renders on every page via app/layout.js (a Server Component) same as
// before, homepage included.
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [signedIn, setSignedIn] = useState(false);

  // Asked from the browser (not the server) so the 150+ statically built
  // pages stay static — reading the session on the server would make every
  // page dynamic.
  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setSignedIn(!!data?.user))
      .catch(() => {});
  }, []);
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="masthead">
      <div className="masthead-inner">
        <a className="wordmark" href="/">
          <img src="/logo.svg" alt="Ramsforge" />
        </a>

        <nav className="site-nav" aria-label="Main">
          <Link href="/rams" className={isActive("/rams") ? "active" : undefined}>
            Trades
          </Link>
          <Link href="/industries" className={isActive("/industries") ? "active" : undefined}>
            Industries
          </Link>
          <Link href="/about-rams" className={isActive("/about-rams") ? "active" : undefined}>
            About RAMS
          </Link>
          <Link href="/pricing" className={isActive("/pricing") ? "active" : undefined}>
            Pricing
          </Link>
        </nav>

        <div className="masthead-actions">
          <Link href={signedIn ? "/account" : "/login"} className="masthead-signin">
            {signedIn ? "Account" : "Sign in"}
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
          <Link href={signedIn ? "/account" : "/login"} onClick={() => setOpen(false)}>
            {signedIn ? "Account" : "Sign in"}
          </Link>
          <Link href="/" className="button" onClick={() => setOpen(false)}>
            Generate my RAMS
          </Link>
        </div>
      ) : null}
    </div>
  );
}
