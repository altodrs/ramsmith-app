export const metadata = {
  title: "Check your email — Ramsforge",
  description: "We've sent you a sign-in link.",
};

export default function CheckEmailPage() {
  return (
    <main className="page">
      <div className="card status-card">
        <h1>Check your email</h1>
        <p>
          We&apos;ve sent you a link to sign in. It&apos;ll expire after 24
          hours — if it doesn&apos;t arrive in a minute or two, check your
          spam folder, then try again.
        </p>
      </div>
    </main>
  );
}
