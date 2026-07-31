import Link from "next/link";
import { trades } from "@/lib/trades";

export const metadata = {
  title: "Browse All Jobs — RAMS Forge",
  description:
    "Browse every trade and job we generate a CDM 2015 compliant RAMS for — electricians, plumbers, roofers, scaffolders and more.",
  alternates: { canonical: "https://ramsforge.co.uk/rams" },
};

export default function RamsIndexPage() {
  const byTrade = trades.reduce((acc, t) => {
    (acc[t.trade] ||= []).push(t);
    return acc;
  }, {});

  return (
    <main className="page">
      <div className="intro">
        <h1>Browse all jobs</h1>
        <p>
          Every trade we currently generate a site-specific, CDM 2015
          compliant RAMS for. Pick yours below, or search from the homepage.
        </p>
      </div>

      {Object.entries(byTrade).map(([tradeName, items]) => (
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
