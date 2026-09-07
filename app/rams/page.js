import Link from "next/link";
import { trades } from "@/lib/trades";

export const metadata = {
  title: "Browse All Jobs — Ramsforge",
  description:
    "Browse every trade and job we generate a CDM 2015 compliant RAMS for — electricians, plumbers, roofers, scaffolders and more.",
  alternates: { canonical: "https://ramsforge.co.uk/rams" },
};

export default function RamsIndexPage() {
  const byTrade = trades.reduce((acc, t) => {
    (acc[t.trade] ||= []).push(t);
    return acc;
  }, {});

  const sortedGroups = Object.entries(byTrade)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([tradeName, items]) => [
      tradeName,
      [...items].sort((a, b) => a.task_name.localeCompare(b.task_name)),
    ]);

  return (
    <main className="page">
      <div className="intro">
        <h1>Browse all jobs</h1>
        <p>
          Every trade we currently generate a site-specific, CDM 2015
          compliant RAMS for. Pick yours below, or search from the homepage.
        </p>
      </div>

      {sortedGroups.map(([tradeName, items]) => (
        <section key={tradeName} className="trade-group">
          <h2>{tradeName}</h2>
          <ul className="trade-list">
            {items.map((t) => (
              <li key={t.slug}>
                <Link href={`/rams/${t.slug}`}>{t.task_name}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
