import { signIn } from "@/auth";

export const metadata = {
  title: "Sign in — Ramsforge",
  description: "Sign in to your Ramsforge account.",
};

export default function LoginPage() {
  return (
    <main className="page">
      <div className="intro">
        <h1>Sign in</h1>
        <p>
          Enter your email and we&apos;ll send you a link to sign in — no
          password needed.
        </p>
      </div>

      <div className="card" style={{ maxWidth: 420 }}>
        <form
          action={async (formData) => {
            "use server";
            await signIn("resend", {
              email: formData.get("email"),
              redirectTo: "/account",
            });
          }}
        >
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>
          <button type="submit" className="button">
            Send sign-in link
          </button>
        </form>
      </div>
    </main>
  );
}
