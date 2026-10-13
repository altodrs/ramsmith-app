import Link from "next/link";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { sql } from "@/lib/db";
import { getSubscription, isActive } from "@/lib/subscription";
import { getListingBySlug } from "@/lib/listings";
import BillingButton from "@/components/BillingButton";

export const metadata = {
  title: "Your account — Ramsforge",
};

async function saveDefaults(formData) {
  "use server";
  const session = await auth();
  if (!session?.user?.id) return;
  const assessor = String(formData.get("assessor") || "").trim().slice(0, 150);
  await sql`
    INSERT INTO user_profiles (user_id, default_assessor_name)
    VALUES (${session.user.id}, ${assessor})
    ON CONFLICT (user_id) DO UPDATE
      SET default_assessor_name = EXCLUDED.default_assessor_name, updated_at = now()
  `;
  revalidatePath("/account");
}

function statusLabel(sub) {
  if (!sub) return "No subscription";
  if (sub.status === "active" || sub.status === "trialing") {
    return sub.cancel_at_period_end ? "Active — ends at the end of this period" : "Active";
  }
  if (sub.status === "past_due") return "Payment failed — please update your card";
  return "Inactive";
}

export default async function AccountPage({ searchParams }) {
  const session = await auth();
  const params = await searchParams;
  const userId = session.user.id;

  const subscription = await getSubscription(userId);
  const active = isActive(subscription);
  const [profile] = await sql`SELECT default_assessor_name FROM user_profiles WHERE user_id = ${userId}`;
  const history = await sql`
    SELECT slug, site_address, assessor_name, generated_at
    FROM document_generations WHERE user_id = ${userId}
    ORDER BY generated_at DESC LIMIT 25
  `;

  return (
    <main className="page">
      <div className="intro">
        <h1>Your account</h1>
        <p>Signed in as {session.user.email}</p>
      </div>

      {params?.subscribed ? (
        <div className="card status-card">
          <h2>Thanks for subscribing</h2>
          <p>
            It can take a few seconds for your plan to show as active here.
            Refresh this page if it still says &quot;No subscription&quot;.
          </p>
        </div>
      ) : null}

      <div className="card">
        <h2>Ramsforge Unlimited</h2>
        <p>
          <strong>{statusLabel(subscription)}</strong>
          {subscription?.current_period_end && active
            ? ` — ${subscription.cancel_at_period_end ? "access until" : "renews"} ${new Date(subscription.current_period_end).toLocaleDateString("en-GB")}`
            : ""}
        </p>
        {active ? (
          <p>
            <Link href="/account/generate" className="button" style={{ display: "inline-block", width: "auto", textDecoration: "none" }}>
              Generate a RAMS
            </Link>
          </p>
        ) : (
          <p>
            <Link href="/pricing" className="button" style={{ display: "inline-block", width: "auto", textDecoration: "none" }}>
              See plans
            </Link>
          </p>
        )}
        {subscription ? <BillingButton /> : null}
      </div>

      <form className="card" action={saveDefaults}>
        <h2>Your details</h2>
        <div className="field">
          <label htmlFor="assessor">Default assessor / competent person name</label>
          <input
            id="assessor"
            name="assessor"
            type="text"
            defaultValue={profile?.default_assessor_name || ""}
            placeholder="John Smith or Smith Plumbing Ltd"
          />
          <span className="field-hint">Pre-filled on every new document.</span>
        </div>
        <button className="button" type="submit" style={{ width: "auto" }}>
          Save
        </button>
      </form>

      <div className="card">
        <h2>Your documents</h2>
        {history.length === 0 ? (
          <p>Documents you generate will be listed here.</p>
        ) : (
          <ul className="hazard-name-list">
            {history.map((h, i) => (
              <li key={i}>
                {getListingBySlug(h.slug)?.task_name || h.slug}
                {h.site_address ? ` — ${h.site_address}` : ""}{" "}
                <span style={{ color: "var(--muted)" }}>
                  ({new Date(h.generated_at).toLocaleDateString("en-GB")})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
