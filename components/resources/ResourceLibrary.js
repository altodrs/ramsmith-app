"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TICKS_KEY = "rf-res-ticks";

function readTicks() {
  try {
    return JSON.parse(window.localStorage.getItem(TICKS_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function Checklist({ items, slug, listIndex, ticks, onToggle }) {
  return (
    <ul className="rfr-checklist">
      {items.map((item, i) => {
        const id = `${slug}:${listIndex}:${i}`;
        return (
          <li key={id}>
            <label>
              <input type="checkbox" checked={!!ticks[id]} onChange={() => onToggle(id)} />
              <span>{item}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

function PpeMatrix({ trades }) {
  const [trade, setTrade] = useState(trades[0].trade);
  const [showAll, setShowAll] = useState(false);
  const current = trades.find((t) => t.trade === trade) || trades[0];

  return (
    <div className="rfr-ppe">
      <div className="rfr-ppe-controls">
        <label>
          <span>Pick your trade</span>
          <select value={trade} onChange={(e) => setTrade(e.target.value)} disabled={showAll}>
            {trades.map((t) => (
              <option key={t.trade} value={t.trade}>
                {t.trade}
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="rfr-link-btn" onClick={() => setShowAll((v) => !v)}>
          {showAll ? "Show one trade" : "Show all trades"}
        </button>
      </div>
      {showAll ? (
        <div className="rfr-table-wrap">
          <table className="rfr-table">
            <thead>
              <tr>
                <th>Trade</th>
                <th>Extra PPE by task</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((t) => (
                <tr key={t.trade}>
                  <td>{t.trade}</td>
                  <td>{t.items.join(". ")}.</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rfr-ppe-card">
          <p className="rfr-ppe-title">{current.trade}: on top of the site minimum</p>
          <ul className="rfr-list">
            {current.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Block({ block, slug, index, ticks, onToggle }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h":
      return <h4 className="rfr-subhead">{block.text}</h4>;
    case "list":
      return (
        <ul className="rfr-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "checklist":
      return (
        <Checklist
          items={block.items}
          slug={slug}
          listIndex={index}
          ticks={ticks}
          onToggle={onToggle}
        />
      );
    case "steps":
      return (
        <ol className="rfr-steps">
          {block.items.map((step) => (
            <li key={step.title}>
              <strong>{step.title}.</strong> {step.text}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="rfr-table-wrap">
          <table className="rfr-table">
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return <p className="rfr-note">{block.text}</p>;
    case "ppe":
      return <PpeMatrix trades={block.trades} />;
    case "symbols":
      return (
        <ul className="rfr-symbols">
          {block.items.map((s) => (
            <li key={s.name}>
              <span className="rfr-diamond" aria-hidden="true" />
              <div>
                <p className="rfr-symbol-name">{s.name}</p>
                <p className="rfr-symbol-meaning">{s.meaning}</p>
                <p className="rfr-symbol-site">On site: {s.site}</p>
              </div>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

function ResourceCard({ resource, kind, open, onToggle, onPrint, ticks, onTick }) {
  const [copied, setCopied] = useState(false);
  const panelId = `rfr-panel-${resource.slug}`;

  const copyLink = async () => {
    const url = `${window.location.origin}/resources#${resource.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <article
      id={resource.slug}
      className={`rfr-card${open ? " is-open" : ""}`}
      data-print-target={resource.slug}
    >
      <button
        type="button"
        className="rfr-card-head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="rfr-card-meta">
          <span className="rfr-kind">{kind}</span>
          <span className="rfr-time">{resource.time}</span>
          {resource.tag && <span className="rfr-tag">{resource.tag}</span>}
        </span>
        <span className="rfr-card-title">{resource.title}</span>
        <span className="rfr-card-desc">{resource.description}</span>
        <span className="rfr-open">{open ? "Close" : "Open"}</span>
      </button>

      {/* Content is always rendered (so search engines see it) and the
          panel animates its height open and shut with a grid-rows trick. */}
      <div
        className="rfr-panel"
        id={panelId}
        role="region"
        aria-label={resource.title}
        aria-hidden={!open}
      >
        <div className="rfr-panel-inner">
          <div className="rfr-content">
            <div className="rfr-actions">
              <button type="button" onClick={onPrint}>
                Print
              </button>
              <button type="button" onClick={copyLink}>
                {copied ? "Link copied" : "Copy link"}
              </button>
              <button type="button" onClick={onToggle}>
                Close
              </button>
            </div>
            <h3 className="rfr-print-title">{resource.title}</h3>
            {resource.blocks.map((block, i) => (
              <Block
                key={i}
                block={block}
                slug={resource.slug}
                index={i}
                ticks={ticks}
                onToggle={onTick}
              />
            ))}
            {resource.basedOn && <p className="rfr-based">Based on: {resource.basedOn}</p>}
            {resource.cta && (
              <div className="rfr-cta">
                <p>{resource.cta.text}</p>
                <Link href="/" className="rfr-cta-btn">
                  Generate my RAMS
                </Link>
              </div>
            )}
            <p className="rfr-disclaimer">
              General guidance only. Always follow the site rules and the principal
              contractor&apos;s instructions.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ResourceLibrary({ resources, categories }) {
  const [openSlug, setOpenSlug] = useState(null);
  const [category, setCategory] = useState("all");
  const [ticks, setTicks] = useState({});

  // Open the card named in the URL hash, so a shared link lands on it.
  useEffect(() => {
    setTicks(readTicks());
    const fromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (resources.some((r) => r.slug === slug)) {
        setOpenSlug(slug);
        setCategory("all");
        requestAnimationFrame(() =>
          document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" }),
        );
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [resources]);

  const toggle = (slug) => {
    const next = openSlug === slug ? null : slug;
    setOpenSlug(next);
    try {
      const url = next ? `#${next}` : window.location.pathname + window.location.search;
      window.history.replaceState(null, "", url);
    } catch {}
  };

  const toggleTick = (id) => {
    setTicks((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        window.localStorage.setItem(TICKS_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Print only the open resource: a flag on <html> switches the print
  // styles from the toolbox talk sheet to this card.
  const printResource = (slug) => {
    const root = document.documentElement;
    root.setAttribute("data-print-resource", slug);
    const clear = () => {
      root.removeAttribute("data-print-resource");
      window.removeEventListener("afterprint", clear);
    };
    window.addEventListener("afterprint", clear);
    window.print();
  };

  const visibleCategories = categories.filter(
    (c) => (category === "all" || category === c.id) && resources.some((r) => r.category === c.id),
  );

  return (
    <section className="rfr-library" aria-labelledby="rfr-heading">
      <div className="rfr-intro">
        <h2 id="rfr-heading">More free resources</h2>
        <p>
          Checklists, guides and cheat sheets for UK sites. Built around CDM 2015 and HSE guidance.
          Free, no account, open on your phone or print them off.
        </p>
      </div>

      <div className="rfr-chips" role="group" aria-label="Filter resources">
        <button
          type="button"
          className={category === "all" ? "is-active" : ""}
          aria-pressed={category === "all"}
          onClick={() => setCategory("all")}
        >
          All
        </button>
        {categories
          .filter((c) => resources.some((r) => r.category === c.id))
          .map((c) => (
            <button
              key={c.id}
              type="button"
              className={category === c.id ? "is-active" : ""}
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
      </div>

      {visibleCategories.map((c) => (
        <div key={c.id} className="rfr-group">
          <h3 className="rfr-group-title">{c.label}</h3>
          <div className="rfr-grid">
            {resources
              .filter((r) => r.category === c.id)
              .map((r) => (
                <ResourceCard
                  key={r.slug}
                  resource={r}
                  kind={c.kind}
                  open={openSlug === r.slug}
                  onToggle={() => toggle(r.slug)}
                  onPrint={() => printResource(r.slug)}
                  ticks={ticks}
                  onTick={toggleTick}
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
