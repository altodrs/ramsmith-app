"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

// The toolbox talk generator sits further down the page; it gets a card
// in the grid like everything else, which scrolls down to it.
const TOOLBOX_CARD = {
  slug: "toolbox-talks",
  category: "toolbox",
  title: "Toolbox Talk Generator",
  description:
    "Pick a talk, add your company and site, and print it with a sign-off sheet. Silica dust, ladders, manual handling and HAVS.",
  time: "Interactive",
  tag: "Most popular",
};

function Card({ resource, kind, onOpen }) {
  const isLink = resource.category === "toolbox";
  const inner = (
    <>
      <span className="rfr-card-meta">
        <span className="rfr-kind">{kind}</span>
        <span className="rfr-time">{resource.time}</span>
        {resource.tag && <span className="rfr-tag">{resource.tag}</span>}
      </span>
      <span className="rfr-card-title">{resource.title}</span>
      <span className="rfr-card-desc">{resource.description}</span>
      <span className="rfr-open">{isLink ? "Make a talk" : "Open"}</span>
    </>
  );
  return isLink ? (
    <a className="rfr-card" href={`#${resource.slug}`}>
      {inner}
    </a>
  ) : (
    <button type="button" className="rfr-card" onClick={onOpen} aria-haspopup="dialog">
      {inner}
    </button>
  );
}

// Every resource's content is in the page HTML (so Google can read it);
// only the open one is shown, in a panel over the grid.
function ResourcePanel({ resource, kind, open, onClose, onPrint, ticks, onTick }) {
  const [copied, setCopied] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (open) closeRef.current?.focus({ preventScroll: true });
  }, [open]);

  const copyLink = async () => {
    const url = `${window.location.origin}/resources#${resource.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div
      className={`rfr-modal${open ? " is-open" : ""}`}
      id={resource.slug}
      aria-hidden={!open}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <article
        className="rfr-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${resource.slug}-title`}
      >
        <header className="rfr-sheet-head">
          <span className="rfr-card-meta">
            <span className="rfr-kind">{kind}</span>
            <span className="rfr-time">{resource.time}</span>
          </span>
          <h3 id={`${resource.slug}-title`}>{resource.title}</h3>
          <p className="rfr-sheet-desc">{resource.description}</p>
          <div className="rfr-actions">
            <button type="button" onClick={onPrint}>
              Print
            </button>
            <button type="button" onClick={copyLink}>
              {copied ? "Link copied" : "Copy link"}
            </button>
            <button type="button" ref={closeRef} onClick={onClose}>
              Close
            </button>
          </div>
        </header>
        <div className="rfr-content">
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
            General guidance only. Always follow the site rules and the principal contractor&apos;s
            instructions.
          </p>
        </div>
      </article>
    </div>
  );
}

export default function ResourceLibrary({ resources, categories }) {
  const [openSlug, setOpenSlug] = useState(null);
  const [category, setCategory] = useState("all");
  const [ticks, setTicks] = useState({});
  const lastCard = useRef(null);

  const allCategories = [
    { id: "toolbox", label: "Toolbox Talks", kind: "Generator" },
    ...categories,
  ];
  const kindOf = (id) => allCategories.find((c) => c.id === id)?.kind || "";
  const order = (r) => allCategories.findIndex((c) => c.id === r.category);
  const cards = [TOOLBOX_CARD, ...resources].sort((a, b) => order(a) - order(b));
  const visible = cards.filter((r) => category === "all" || r.category === category);

  // Open the resource named in the URL hash, so a shared link lands on it.
  useEffect(() => {
    setTicks(readTicks());
    const fromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      setOpenSlug(resources.some((r) => r.slug === slug) ? slug : null);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [resources]);

  // While a panel is open: lock the page scroll and close on Escape.
  useEffect(() => {
    if (!openSlug) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.documentElement.classList.add("rfr-locked");
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("rfr-locked");
      window.removeEventListener("keydown", onKey);
    };
  });

  const setHash = (slug) => {
    try {
      const url = slug ? `#${slug}` : window.location.pathname + window.location.search;
      window.history.replaceState(null, "", url);
    } catch {}
  };

  const open = (slug, el) => {
    lastCard.current = el;
    setOpenSlug(slug);
    setHash(slug);
  };

  const close = () => {
    setOpenSlug(null);
    setHash(null);
    lastCard.current?.focus({ preventScroll: true });
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
  // styles from the toolbox talk sheet to this panel.
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

  return (
    <section className="rfr-library" aria-label="Free resources">
      <div className="rfr-chips" role="group" aria-label="Filter resources">
        {[{ id: "all", label: "All" }, ...allCategories].map((c) => (
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

      <div className="rfr-grid">
        {visible.map((r) => (
          <Card
            key={r.slug}
            resource={r}
            kind={kindOf(r.category)}
            onOpen={(e) => open(r.slug, e.currentTarget)}
          />
        ))}
      </div>

      {resources.map((r) => (
        <ResourcePanel
          key={r.slug}
          resource={r}
          kind={kindOf(r.category)}
          open={openSlug === r.slug}
          onClose={close}
          onPrint={() => printResource(r.slug)}
          ticks={ticks}
          onTick={toggleTick}
        />
      ))}
    </section>
  );
}
