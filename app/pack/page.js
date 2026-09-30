import PackPurchaseForm from "@/components/PackPurchaseForm";

export const metadata = {
  title: "Multi-Site Pack — Ramsforge",
  description: "5 RAMS documents, any trade or site, for £50 — no account needed.",
};

export default function PackPurchasePage() {
  return (
    <main className="page">
      <div className="intro">
        <h1>Multi-Site Pack</h1>
        <p>
          Buy once, generate 5 RAMS documents for any trade or site —
          £10 each instead of £15. No account, no subscription. We&apos;ll
          email you a link straight after payment.
        </p>
      </div>

      <PackPurchaseForm />
    </main>
  );
}
