export default function TalkPicker({ talks, selectedSlug, onSelect, categoryLabel }) {
  return (
    <div className="tbt-panel">
      <h2 className="tbt-panel-title">1. Pick a talk</h2>
      {talks.length === 0 ? (
        <p className="tbt-empty">No talks match that. Try another word or clear the filter.</p>
      ) : (
        <ul className="tbt-talk-list">
          {talks.map((t) => (
            <li key={t.slug}>
              <button
                type="button"
                className="tbt-talk"
                aria-pressed={t.slug === selectedSlug}
                onClick={() => onSelect(t.slug)}
              >
                <span className="tbt-talk-cat">{categoryLabel(t.category)}</span>
                <span className="tbt-talk-title">{t.title}</span>
                <span className="tbt-talk-meta">{t.duration}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
