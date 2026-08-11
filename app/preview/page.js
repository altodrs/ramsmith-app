import { getListingBySlug } from "@/lib/listings";
import RamsDocument from "@/components/RamsDocument";
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
          Here's exactly what you'll get. Unlock it to remove the watermark
          and download the PDF.
        </p>
      </div>

      <div className="preview-banner">
        <p>This is a preview — pay once to unlock the full, clean document.</p>
      </div>

      <div className="watermark-wrap">
        <div className="watermark-overlay" aria-hidden="true">
          <span>Preview — Not For Site Use</span>
        </div>
        <RamsDocument trade={trade} siteAddress={siteAddress} />
      </div>

      <PayButton slug={trade.slug} siteAddress={siteAddress} />
    </main>
  );
}
