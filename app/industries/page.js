import Link from "next/link";
import { industries } from "@/lib/industries";

export const metadata = {
  title: "Browse All Industries — RAMS Forge",
  description:
    "Browse every industry we currently generate a site-specific, CDM 2015 compliant RAMS for — starting with events and entertainment.",
  alternates: { canonical: "https://ramsforge.co.uk/industries" },
};

export default function IndustriesIndexPage() {
  const byIndustry = industries.reduce((acc, i) => {
    (acc[i.trade] ||= []).push(i);
    return acc;
  }, {});

  return (
    <main className="page">
      <div className="intro">
        <h1>Browse all industries</h1>
        <p>
          RAMS Forge isn't just for tradespeople — every industry below gets
          the same site-specific, CDM 2015 compliant RAMS. Pick yours below,
          or search from the homepage.
        </p>
      </div>

      {Object.entries(byIndustry).map(([industryName, items]) => (
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
