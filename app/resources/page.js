import Link from "next/link";
import ToolboxTalkHub from "@/components/toolbox/ToolboxTalkHub";
import ResourceLibrary from "@/components/resources/ResourceLibrary";
import data from "@/lib/toolboxTalks.json";
import { resources, resourceCategories } from "@/lib/freeResources";
import "./resources.css";
import "./library.css";

const SITE_URL = "https://ramsforge.co.uk";
const PAGE_URL = `${SITE_URL}/resources`;

const TITLE = "Free Toolbox Talks and Site Safety Checklists for UK Trades";
const DESCRIPTION =
  "Free toolbox talks with a sign-off sheet, plus site checklists, step-by-step guides and cheat sheets for UK trades. Built around CDM 2015 and HSE guidance. No account needed.";

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
      { "@type": "ListItem", position: 2, name: "Free Resources", item: PAGE_URL },
    ],
  };

  return (
    <main className="tbt-page">
      <section className="tbt-hero">
        <div className="tbt-hero-inner">
          <nav className="breadcrumbs tbt-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> &rsaquo; </span>
            <span>Free Resources</span>
          </nav>
          <p className="tbt-hero-kicker">Free trade safety hub</p>
          <h1>Free Site Safety Resources for UK Trades</h1>
          <p className="tbt-hero-lead">
            Toolbox talks, checklists, step-by-step guides and cheat sheets for getting on site and
            getting the job done safely. Built around CDM 2015 and HSE guidance. Open them on your
            phone or print them off. Free, no account, no faff.
          </p>
          <ul className="tbt-hero-points">
            <li>Written for UK sites</li>
            <li>Print or save as PDF</li>
            <li>No sign-up</li>
          </ul>
        </div>
      </section>

      <ResourceLibrary resources={resources} categories={resourceCategories} />

      <section className="tbt-body" id="toolbox-talks" aria-labelledby="tbt-heading">
        <div className="tbt-section-head">
          <h2 id="tbt-heading">Toolbox Talk Generator</h2>
          <p>
            Pick a talk, stick your company and site on it, and print it with a sign-off sheet.
          </p>
        </div>
        <ToolboxTalkHub talks={data.talks} categories={data.categories} />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
