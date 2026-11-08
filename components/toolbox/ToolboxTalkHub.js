"use client";

import { useEffect, useMemo, useState } from "react";
import TalkFilterBar from "./TalkFilterBar";
import TalkPicker from "./TalkPicker";
import TalkHeaderForm from "./TalkHeaderForm";
import TalkPreview from "./TalkPreview";
import RamsUpsellBanner from "./RamsUpsellBanner";

const STORAGE_KEY = "rf-tbt-header";
const EMPTY_HEADER = { company: "", site: "", date: "", supervisor: "" };

function matchesQuery(talk, query) {
  if (!query) return true;
  const haystack = [talk.title, talk.summary, ...talk.tags].join(" ").toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

export default function ToolboxTalkHub({ talks, categories }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedSlug, setSelectedSlug] = useState(talks[0]?.slug);
  const [header, setHeader] = useState(EMPTY_HEADER);
  const [ready, setReady] = useState(false);

  // Remember the header details on this device, so a supervisor doing a
  // talk every morning doesn't retype the company and site each time.
  // Storage can be blocked (private mode), so every access is guarded.
  useEffect(() => {
    const now = new Date();
    const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);
    setHeader((h) => ({ ...h, date: today }));
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
      if (saved) setHeader({ ...EMPTY_HEADER, ...saved, date: today });
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      const { date, ...rest } = header;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
    } catch {}
  }, [header, ready]);

  // Only offer category chips that actually have talks in them.
  const usedCategories = useMemo(
    () =>
      categories
        .map((c) => ({ ...c, count: talks.filter((t) => t.category === c.id).length }))
        .filter((c) => c.count > 0),
    [categories, talks]
  );

  const filtered = useMemo(
    () =>
      talks.filter(
        (t) => (category === "all" || t.category === category) && matchesQuery(t, query)
      ),
    [talks, category, query]
  );

  const selected = talks.find((t) => t.slug === selectedSlug) || talks[0];
  const categoryLabel = (id) => categories.find((c) => c.id === id)?.label || "";

  return (
    <div className="tbt-hub">
      <TalkFilterBar
        query={query}
        onQueryChange={setQuery}
        categories={usedCategories}
        totalCount={talks.length}
        active={category}
        onCategoryChange={setCategory}
      />

      <div className="tbt-workspace">
        <aside className="tbt-sidebar">
          <TalkPicker
            talks={filtered}
            selectedSlug={selected?.slug}
            onSelect={setSelectedSlug}
            categoryLabel={categoryLabel}
          />
          <TalkHeaderForm header={header} onChange={setHeader} />
        </aside>

        <section className="tbt-preview-col" aria-label="Toolbox talk preview">
          <div className="tbt-preview-toolbar">
            <span>Live preview (A4)</span>
            <button type="button" className="tbt-print-btn" onClick={() => window.print()}>
              Print or save as PDF
            </button>
          </div>
          {selected && (
            <TalkPreview talk={selected} header={header} categoryLabel={categoryLabel(selected.category)} />
          )}
        </section>
      </div>

      {selected && <RamsUpsellBanner talk={selected} />}
    </div>
  );
}
