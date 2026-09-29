import { auth } from "@/auth";

export const metadata = {
  title: "Your account — Ramsforge",
};

// Placeholder — subscription status, billing management and document
// history land in Phase 3, once the Tier 3 subscription flow exists. For
// now this just proves the auth guard (app/account/layout.js) works.
export default async function AccountPage() {
  const session = await auth();

  return (
    <main className="page">
      <div className="card status-card">
        <h1>Signed in as {session.user.email}</h1>
        <p>Your account dashboard — subscription and document history — is on the way.</p>
      </div>
    </main>
  );
}
