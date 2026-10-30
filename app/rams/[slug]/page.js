import Link from "next/link";
import { notFound } from "next/navigation";
import { getTradeBySlug, trades } from "@/lib/trades";
import RamsPublicTeaser from "@/components/RamsPublicTeaser";
import { seoTitle } from "@/lib/seoTitles";
import { getJobPageCopy } from "@/lib/jobPageCopy";
import { getHubForJob } from "@/lib/tradeHubs";

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
  const description = getJobPageCopy(slug)?.metaDescription || trade.meta_description;
  return {
    title: seoTitle(trade),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: seoTitle(trade),
      description,
      url,
    },
  };
}

export default async function TradePage({ params }) {
  const { slug } = await params;
  const trade = getTradeBySlug(slug);
  if (!trade) notFound();

  // Jobs with long-form copy get extra sections; the rest render as before.
  const copy = getJobPageCopy(slug);
  const faqs = copy?.faqs || [{ q: trade.faq_q1, a: trade.faq_a1 }];
  const related = (copy?.related || []).map(getTradeBySlug).filter(Boolean);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // The trade crumb only gets a URL where a hub page exists; Google flags a
  // crumb with no URL unless it is the last one, so otherwise it is left out.
  const hub = getHubForJob(slug);
  const pageUrl = `${SITE_URL}/rams/${trade.slug}`;
  const crumbs = [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "RAMS", item: `${SITE_URL}/rams` },
    ...(hub ? [{ name: hub.name, item: `${SITE_URL}${hub.path}` }] : []),
    { name: trade.task_name, item: pageUrl },
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };

  // Lets Google show the £15 price in the search snippet. No ratings or
  // reviews: only add those once there are real, on-page customer reviews.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${trade.task_name} RAMS`,
    description: copy?.metaDescription || trade.meta_description,
    url: pageUrl,
    brand: { "@type": "Brand", name: "Ramsforge" },
    offers: {
      "@type": "Offer",
      price: "15.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: pageUrl,
      seller: { "@type": "Organization", name: "Ramsforge", url: `${SITE_URL}/` },
    },
  };

  return (
    <main className="page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> &rsaquo; </span>
        <Link href="/rams">RAMS</Link>
        <span aria-hidden="true"> &rsaquo; </span>
        {hub ? <Link href={hub.path}>{hub.name}</Link> : <span>{trade.trade}</span>}
        <span aria-hidden="true"> &rsaquo; </span>
        <span>{trade.task_name}</span>
      </nav>

      <div className="intro">
        <h1>{copy?.h1 || trade.h1_title}</h1>
        <p>{copy?.intro || trade.meta_description}</p>
        <span className="badge-green">
          &#10003; {trade.cdm_applicable === false ? "Site-Specific RAMS" : "Built around CDM 2015"}
        </span>
      </div>

      {copy ? (
        <div className="content job-copy">
          {copy.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.bullets ? (
                <ul className="job-copy-list">
                  {section.bullets.map((b) => (
                    <li key={b.label}>
                      <strong>{b.label}:</strong> {b.text}
                    </li>
                  ))}
                </ul>
              ) : null}
              {(section.body || []).map((text) => (
                <p key={text}>{text}</p>
              ))}
              {(section.notes || []).map((n) => (
                <p className="job-copy-note" key={n.label}>
                  <strong>{n.label}:</strong> {n.text}
                </p>
              ))}
            </section>
          ))}
        </div>
      ) : null}

      <RamsPublicTeaser trade={trade} faqs={faqs} />

      {copy ? (
        <div className="content job-copy">
          <section>
            <h2>How it works</h2>
            <ol className="job-copy-steps">
              <li>Pick your job.</li>
              <li>Add the site address.</li>
              <li>Preview your RAMS free.</li>
              <li>Pay £15 and the PDF lands in your inbox.</li>
            </ol>
            <p>
              No account needed, pay per document. Every RAMS includes a
              method statement, 5 rated hazards with controls, a PPE list and
              emergency procedures, built around CDM 2015 and HSE guidance.
              Spotted something to change? Free corrections within 14 days.
            </p>
          </section>
          {related.length > 0 ? (
            <section className="trade-group">
              <h2>Related jobs</h2>
              <ul className="trade-list">
                {related.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/rams/${t.slug}`}>{t.task_name}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      ) : null}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </main>
  );
}
