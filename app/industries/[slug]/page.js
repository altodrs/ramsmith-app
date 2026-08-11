import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug, industries } from "@/lib/industries";
import RamsDocument from "@/components/RamsDocument";

const SITE_URL = "https://ramsforge.co.uk";

// Statically generates one real, crawlable page per industry at build time —
// same pattern as app/rams/[slug]/page.js for trades.
export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  const url = `${SITE_URL}/industries/${industry.slug}`;
  return {
    title: industry.h1_title,
    description: industry.meta_description,
    alternates: { canonical: url },
    openGraph: {
      title: industry.h1_title,
      description: industry.meta_description,
      url,
    },
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: industry.faq_q1,
        acceptedAnswer: { "@type": "Answer", text: industry.faq_a1 },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries/` },
      { "@type": "ListItem", position: 3, name: industry.trade },
      { "@type": "ListItem", position: 4, name: industry.task_name },
    ],
  };

  return (
    <main className="page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> &rsaquo; </span>
        <Link href="/industries">Industries</Link>
        <span aria-hidden="true"> &rsaquo; </span>
        <span>{industry.trade}</span>
        <span aria-hidden="true"> &rsaquo; </span>
        <span>{industry.task_name}</span>
      </nav>

      <div className="intro">
        <h1>{industry.h1_title}</h1>
        <p>{industry.meta_description}</p>
        <span className="badge-green">
          &#10003; {industry.cdm_applicable === false ? "Site-Specific RAMS" : "CDM 2015 Compliant"}
        </span>
      </div>

      <RamsDocument trade={industry} showHeader={false} />

      <div className="card seo-cta">
        <p>Get this as a personalised, watermark-free PDF for your job.</p>
        <Link
          href={`/preview?slug=${industry.slug}&siteAddress=`}
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
