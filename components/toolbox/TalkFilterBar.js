export default function TalkFilterBar({
  query,
  onQueryChange,
  categories,
  totalCount,
  active,
  onCategoryChange,
}) {
  return (
    <div className="tbt-filter-bar">
      <label className="tbt-search">
        <span className="sr-only">Search toolbox talks</span>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search talks, e.g. dust, ladders, lifting"
          autoComplete="off"
        />
      </label>
      <div className="tbt-chips" role="group" aria-label="Filter by category">
        <button
          type="button"
          className="tbt-chip"
          aria-pressed={active === "all"}
          onClick={() => onCategoryChange("all")}
        >
          All <span className="tbt-chip-count">{totalCount}</span>
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            className="tbt-chip"
            aria-pressed={active === c.id}
            onClick={() => onCategoryChange(c.id)}
          >
            {c.label} <span className="tbt-chip-count">{c.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
