import Link from "next/link";
import TradeForm from "@/components/TradeForm";
import { getTradeBySlug } from "@/lib/trades";
import { getHubByPath } from "@/lib/tradeHubs";

const SITE_URL = "https://ramsforge.co.uk";
const PAGE_URL = `${SITE_URL}/rams/electrician`;

const TITLE = "Electrician RAMS UK: £15 Per Document, No Account Needed";
const DESCRIPTION =
  "Site-specific RAMS for UK electricians, EV charger installers and solar contractors, built around CDM 2015 and HSE guidance. No account needed: preview free, then £15 per document.";

// Trade hub page. As a static folder it takes precedence over the dynamic
// /rams/[slug] route; the job pages below are still served by [slug].
const JOB_SLUGS = getHubByPath("/rams/electrician").slugs;

const FAQS = [
  {
    q: "Do electrical contractors need site-specific RAMS?",
    a: "Often, yes. Whether it is a domestic rewire, an EV charger install or a commercial EICR, principal contractors and clients commonly expect a documented method statement before work begins, and CDM 2015 expects construction work to be planned and its risks managed. Ramsforge makes that quick: £15 per document, with a free preview first.",
  },
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
};

export default function ElectricianHubPage() {
  const jobs = JOB_SLUGS.map(getTradeBySlug).filter(Boolean);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "RAMS", item: `${SITE_URL}/rams` },
      { "@type": "ListItem", position: 3, name: "Electrical", item: PAGE_URL },
    ],
  };

  return (
    <main className="page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> &rsaquo; </span>
        <Link href="/rams">RAMS</Link>
        <span aria-hidden="true"> &rsaquo; </span>
        <span>Electrical</span>
      </nav>

      <div className="intro">
        <h1>⚡ Site-Specific Electrical RAMS in Minutes</h1>
        <ul className="hub-points">
          <li>Built for UK electricians, EV charger installers and solar contractors.</li>
          <li>No account needed. Pay per document.</li>
          <li>Built around CDM 2015 and HSE guidance.</li>
          <li>Preview your document free before you pay.</li>
          <li>£15.00 per document (one-time payment).</li>
        </ul>
      </div>

      <TradeForm trades={jobs} />
      <p className="hub-widget-label">
        Covers full rewires and consumer unit upgrades, EICR testing,
        domestic and commercial EV charger installs, solar PV and battery
        storage, fire alarm installation and testing, and structured data
        cabling.
      </p>

      <div className="content">
        <section className="trade-group">
          <h2>Electrical, EV and solar jobs</h2>
          <ul className="trade-list">
            {jobs.map((t) => (
              <li key={t.slug}>
                <Link href={`/rams/${t.slug}`}>{t.task_name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          {FAQS.map((f) => (
            <div className="card faq-card" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
