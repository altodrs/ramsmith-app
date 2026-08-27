import { getListingBySlug } from "@/lib/listings";
import RamsPreviewTeaser from "@/components/RamsPreviewTeaser";
import PayButton from "@/components/PayButton";

export default async function PreviewPage({ searchParams }) {
  const params = await searchParams;
  const trade = getListingBySlug(params?.slug);
  const siteAddress = typeof params?.siteAddress === "string" ? params.siteAddress : "";

  if (!trade) {
    return (
      <main className="page">
        <div className="card status-card">
          <h1>Job not found</h1>
          <p>
            <a href="/">Go back and pick a job</a>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="intro">
        <h1>Preview your RAMS</h1>
        <p>
          Here's what this document covers. Unlock it to see the full
          control measures, PPE, method statement and more.
        </p>
      </div>

      <div className="preview-banner">
        <p>This is a preview — pay once to unlock the full document.</p>
      </div>

      <RamsPreviewTeaser
        h1Title={trade.h1_title}
        cdmApplicable={trade.cdm_applicable}
        siteAddress={siteAddress}
        applicableRegs={trade.applicable_regs}
        hazardNames={trade.hazards.map((h) => h.name)}
      />

      <PayButton slug={trade.slug} siteAddress={siteAddress} />
    </main>
  );
}
