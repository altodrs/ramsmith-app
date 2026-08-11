import Link from "next/link";
import { notFound } from "next/navigation";
import { getTradeBySlug, trades } from "@/lib/trades";
import RamsDocument from "@/components/RamsDocument";

const SITE_URL = "https://ramsforge.co.uk";

// Statically generates one real, crawlable page per trade at build time —
// this is what actually lets Google rank a specific job search (e.g. "EV
// charger installation RAMS template UK") instead of just the homepage.
export async function generateStaticParams() {
  return trades.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const trade = getTradeBySlug(slug);
  if (!trade) return {};

  const url = `${SITE_URL}/rams/${trade.slug}`;
  return {
    title: trade.h1_title,
    description: trade.meta_description,
    alternates: { canonical: url },
    openGraph: {
      title: trade.h1_title,
      description: trade.meta_description,
      url,
    },
  };
}

export default async function TradePage({ params }) {
  const { slug } = await params;
  const trade = getTradeBySlug(slug);
  if (!trade) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: trade.faq_q1,
        acceptedAnswer: { "@type": "Answer", text: trade.faq_a1 },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "RAMS", item: `${SITE_URL}/rams/` },
      { "@type": "ListItem", position: 3, name: trade.trade },
      { "@type": "ListItem", position: 4, name: trade.task_name },
    ],
  };

  return (
    <main className="page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> &rsaquo; </span>
        <Link href="/rams">RAMS</Link>
        <span aria-hidden="true"> &rsaquo; </span>
        <span>{trade.trade}</span>
        <span aria-hidden="true"> &rsaquo; </span>
        <span>{trade.task_name}</span>
      </nav>

      <div className="intro">
        <h1>{trade.h1_title}</h1>
        <p>{trade.meta_description}</p>
        <span className="badge-green">
          &#10003; {trade.cdm_applicable === false ? "Site-Specific RAMS" : "CDM 2015 Compliant"}
        </span>
      </div>

      <RamsDocument trade={trade} showHeader={false} />

      <div className="card seo-cta">
        <p>Get this as a personalised, watermark-free PDF for your job.</p>
        <Link
          href={`/preview?slug=${trade.slug}&siteAddress=`}
          className="button"
          style={{ display: "inline-block", width: "auto", textDecoration: "none" }}
        >
          Generate my RAMS — £15.00
        </Link>
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
