// Plain, checkable claims only — no "guaranteed compliant" or "guaranteed
// acceptance" wording (see Terms: documents are drafts the user reviews and
// signs, and acceptance is the principal contractor's decision).
export default function TrustBlock() {
  return (
    <section className="trust-block">
      <h2>Why Ramsforge</h2>
      <ul>
        <li>
          <strong>Fast.</strong> Pick your job, add the site address, and your
          RAMS is done in minutes.
        </li>
        <li>
          <strong>Built around CDM 2015.</strong> Hazards, controls, PPE and a
          method statement, which you check and sign as the competent person.
        </li>
        <li>
          <strong>No lock-in.</strong> Pay per document, buy a pack of five,
          or go unlimited. Cancel any time.
        </li>
      </ul>
      <p className="free-corrections">
        <strong>Free corrections.</strong> Spotted a mistake in your details,
        or want a change to what we&apos;ve written? Email{" "}
        <a href="mailto:ramsforgeuk@gmail.com">ramsforgeuk@gmail.com</a> within
        14 days and we&apos;ll fix and reissue it free.
      </p>
    </section>
  );
}
