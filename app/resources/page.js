import Link from "next/link";
import ToolboxTalkHub from "@/components/toolbox/ToolboxTalkHub";
import data from "@/lib/toolboxTalks.json";
import "./resources.css";

const SITE_URL = "https://ramsforge.co.uk";
const PAGE_URL = `${SITE_URL}/resources`;

const TITLE = "Free Toolbox Talks UK: Print-Ready With Sign-Off Sheet";
const DESCRIPTION =
  "Free toolbox talks for UK trades: silica dust, ladder safety, manual handling and HAVS. Add your company and site, then print or save as PDF with an attendance sign-off sheet.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL },
};

export default function ResourcesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Free Toolbox Talks", item: PAGE_URL },
    ],
  };

  return (
    <main className="tbt-page">
      <section className="tbt-hero">
        <div className="tbt-hero-inner">
          <nav className="breadcrumbs tbt-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> &rsaquo; </span>
            <span>Free Toolbox Talks</span>
          </nav>
          <p className="tbt-hero-kicker">Free trade safety hub</p>
          <h1>Site-Ready Safety Briefings in Seconds</h1>
          <p className="tbt-hero-lead">
            Pick a toolbox talk, stick your company and site on it, and print it
            with a sign-off sheet. Free, no account, no faff.
          </p>
          <ul className="tbt-hero-points">
            <li>Written for UK sites</li>
            <li>Attendance sign-off included</li>
            <li>Print or save as PDF</li>
          </ul>
        </div>
      </section>

      <div className="tbt-body">
        <ToolboxTalkHub talks={data.talks} categories={data.categories} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
