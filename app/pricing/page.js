import PricingCards from "@/components/PricingCards";

export const metadata = {
  title: "Pricing — Ramsforge",
  description:
    "Single documents from £15, a 5-document pack for £50, or unlimited from £15 a month.",
  alternates: { canonical: "https://ramsforge.co.uk/pricing" },
};

export default function PricingPage() {
  return (
    <main className="page">
      <div className="intro">
        <h1>Simple pricing</h1>
        <p>
          Pay once for a single document, buy a pack of five, or go unlimited.
          Preview any document free before you pay.
        </p>
      </div>

      <PricingCards />
    </main>
  );
}
