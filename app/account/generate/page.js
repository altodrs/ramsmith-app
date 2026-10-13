import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { sql } from "@/lib/db";
import { getSubscription, isActive } from "@/lib/subscription";
import { allListings } from "@/lib/listings";
import PackGenerateForm from "@/components/PackGenerateForm";

export const metadata = {
  title: "Generate a RAMS — Ramsforge",
};

export default async function AccountGeneratePage() {
  const session = await auth();
  const subscription = await getSubscription(session.user.id);
  if (!isActive(subscription)) redirect("/pricing");

  const [profile] = await sql`
    SELECT default_assessor_name FROM user_profiles WHERE user_id = ${session.user.id}
  `;

  return (
    <main className="page">
      <div className="intro">
        <h1>Generate a RAMS</h1>
        <p>Unlimited documents with your Ramsforge Unlimited plan.</p>
      </div>
      <PackGenerateForm
        trades={allListings}
        endpoint="/api/account/generate"
        defaultAssessorName={profile?.default_assessor_name || ""}
      />
    </main>
  );
}
