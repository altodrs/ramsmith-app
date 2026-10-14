export const metadata = {
  title: "Privacy Policy — Ramsforge",
  description: "How Ramsforge collects, uses and protects your personal data.",
  alternates: { canonical: "https://ramsforge.co.uk/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="page">
      <div className="intro">
        <h1>Privacy Policy</h1>
        <p>Last updated: 14 October 2026</p>
      </div>

      <div className="content">
        <section>
          <h2>1. Who we are</h2>
          <p>
            Ramsforge (ramsforge.co.uk) is the data controller for the
            personal data described here. We generate site-specific Risk
            Assessment &amp; Method Statement (RAMS) documents for UK
            tradespeople. Questions about your data:{" "}
            <a href="mailto:ramsforgeuk@gmail.com">ramsforgeuk@gmail.com</a>
          </p>
        </section>

        <section>
          <h2>2. What we collect, and why</h2>
          <ul>
            <li>
              <strong>Your email address</strong> — to take payment, send your
              document or pack link, and (for accounts) sign you in. Legal
              basis: performing our contract with you.
            </li>
            <li>
              <strong>Job details you enter</strong> — the job you choose, the
              site address and the assessor name, so we can print them on your
              document. Legal basis: performing our contract with you.
            </li>
            <li>
              <strong>Account and pack records</strong> — if you buy a
              Multi-Site Pack or subscribe, we keep your email, the documents
              you generated (job, site address, assessor name, date), and your
              subscription status, so the service works and you can see your
              history. Legal basis: contract.
            </li>
            <li>
              <strong>Payment records</strong> — handled by Stripe. We never
              see or store your card number. We keep a record of the payment
              as required for our accounts. Legal basis: contract and legal
              obligation.
            </li>
            <li>
              <strong>Technical data</strong> — such as IP address and device
              type, collected by our hosting provider in server logs, and used
              to keep the site secure and stop abuse. Legal basis: our
              legitimate interest in running a secure service.
            </li>
          </ul>
          <p>
            We do not use advertising or analytics trackers, and we do not
            sell your data.
          </p>
        </section>

        <section>
          <h2>3. Cookies</h2>
          <p>
            We use only the cookies that are strictly necessary: when you sign
            in, a cookie keeps you signed in and protects the sign-in form.
            You can browse and buy a single document without any cookie of
            ours. Because these cookies are essential, no cookie banner is
            needed.
          </p>
        </section>

        <section>
          <h2>4. Who we share data with</h2>
          <p>We use these providers to run the service:</p>
          <ul>
            <li>
              <strong>Stripe</strong> — takes payments and manages
              subscriptions.
            </li>
            <li>
              <strong>Resend</strong> — sends our emails (your document, pack
              link and sign-in links).
            </li>
            <li>
              <strong>Neon</strong> — hosts our database of accounts, packs
              and document history.
            </li>
            <li>
              <strong>Vercel</strong> — hosts the website.
            </li>
          </ul>
          <p>
            They process data only to provide those services for us. Some are
            based outside the UK (including in the United States). Where data
            leaves the UK, it is protected by the safeguards UK data
            protection law requires, such as the UK–US data bridge or
            approved standard contractual clauses, put in place by those
            providers.
          </p>
        </section>

        <section>
          <h2>5. How long we keep it</h2>
          <p>
            We keep account, pack and document-history records for as long as
            your account or pack exists, and until you ask us to delete them.
            We keep payment records for as long as the law requires for our
            accounts (currently six years). Single-document purchases are not
            stored in our database; the details live with Stripe&apos;s payment
            record and the email we sent you.
          </p>
        </section>

        <section>
          <h2>6. Your rights</h2>
          <p>
            Under UK data protection law you can ask us to: see the data we
            hold about you; correct it; delete it; restrict or object to how
            we use it; or give you a copy in a portable format. To do any of
            these, email{" "}
            <a href="mailto:ramsforgeuk@gmail.com">ramsforgeuk@gmail.com</a>.
            We will reply within one month.
          </p>
          <p>
            If you are unhappy with how we handle your data, you can complain
            to the Information Commissioner&apos;s Office (ico.org.uk), though
            we would like the chance to put things right first.
          </p>
        </section>

        <section>
          <h2>7. Changes</h2>
          <p>
            If we change this policy we will update the date at the top. If
            the changes matter to you (for example, new ways we use your
            data), we will tell account holders by email.
          </p>
        </section>
      </div>
    </main>
  );
}
