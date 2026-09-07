export const metadata = {
  title: "Sign in — Ramsforge",
  description: "Account sign-in for Ramsforge — coming soon.",
};

// Placeholder until the account system (email magic-link sign-in) ships —
// linked from the nav now so "Sign in" isn't a dead link, swapped for the
// real login flow once it exists.
export default function LoginPage() {
  return (
    <main className="page">
      <div className="card status-card">
        <h1>Accounts are coming soon</h1>
        <p>
          Today, every RAMS is pay-once with no account needed. An optional
          account — to save your details and keep a full history of every
          document you&apos;ve generated — is on the way.
        </p>
      </div>
    </main>
  );
}
