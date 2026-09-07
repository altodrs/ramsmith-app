import Link from "next/link";
import { industries } from "@/lib/industries";

export const metadata = {
  title: "Browse All Industries — Ramsforge",
  description:
    "Browse every industry we currently generate a site-specific RAMS for — starting with events and entertainment.",
  alternates: { canonical: "https://ramsforge.co.uk/industries" },
};

export default function IndustriesIndexPage() {
  const byIndustry = industries.reduce((acc, i) => {
    (acc[i.trade] ||= []).push(i);
    return acc;
  }, {});

  const sortedGroups = Object.entries(byIndustry)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([industryName, items]) => [
      industryName,
      [...items].sort((a, b) => a.task_name.localeCompare(b.task_name)),
    ]);

  return (
    <main className="page">
      <div className="intro">
        <h1>Browse all industries</h1>
        <p>
          Ramsforge isn't just for tradespeople — every industry below gets
          the same site-specific RAMS. Pick yours below, or search from the
          homepage.
        </p>
      </div>

      {sortedGroups.map(([industryName, items]) => (
        <section key={industryName} className="trade-group">
          <h2>{industryName}</h2>
          <ul className="trade-list">
            {items.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`}>{i.task_name}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
