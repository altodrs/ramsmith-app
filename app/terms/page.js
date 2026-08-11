export const metadata = {
  title: "Terms & Declarations — RAMS Forge",
  description: "Terms of service and user declarations for RAMS Forge.",
  alternates: { canonical: "https://ramsforge.co.uk/terms" },
};

export default function TermsPage() {
  return (
    <main className="page">
      <div className="intro">
        <h1>Terms &amp; Declarations</h1>
        <p>Last updated: 1 August 2026</p>
      </div>

      <div className="content">
        <section>
          <h2>1. What RAMS Forge is</h2>
          <p>
            RAMS Forge (ramsforge.co.uk) is an automated documentation tool.
            When you use it, you supply information about a job (the trade or
            industry, task, and site address), and the tool generates a Risk
            Assessment &amp; Method Statement (RAMS) document as a starting
            template based on that input.
          </p>
          <p>
            RAMS Forge does not visit, inspect, or have any knowledge of your
            actual site or working conditions. It is not a health &amp;
            safety consultancy, and using it does not create a consultancy,
            advisory, or professional relationship between you and RAMS
            Forge.
          </p>
        </section>

        <section>
          <h2>2. Your responsibilities</h2>
          <p>
            You must be, or have your work reviewed and signed off by, a
            competent person before the document generated here is used on
            any live job. You are solely responsible for:
          </p>
          <div className="chip-row">
            <span className="pill">Verifying site-specific conditions</span>
            <span className="pill">Confirming hazards are complete and accurate</span>
            <span className="pill">Adapting control measures to your actual work</span>
            <span className="pill">Compliance with all applicable HSE regulations</span>
          </div>
        </section>

        <section>
          <h2>3. "As is" provision</h2>
          <p>
            The service and generated documents are provided "as is" and "as
            available," without warranty of any kind, express or implied,
            including but not limited to fitness for a particular purpose.
            RAMS Forge does not warrant that the generated document is
            complete, accurate, or sufficient for your specific job or site.
          </p>
        </section>

        <section>
          <h2>4. Liability</h2>
          <p>
            To the fullest extent permitted by law, RAMS Forge's total
            liability arising from or relating to your use of the service or
            a generated document — including any claim that a document was
            incomplete, inaccurate, or unsuitable — is limited to the amount
            you paid for that document.
          </p>
          <p>
            <strong>This limit does not apply to, and nothing in these terms
            excludes or restricts, liability for death or personal injury
            caused by negligence, fraud, or any other liability which cannot
            be excluded or limited under the law of England and Wales.</strong>
          </p>
        </section>

        <section>
          <h2>5. Payment &amp; refunds</h2>
          <p>
            Payment is a one-time fee per document, taken securely via
            Stripe. As this is digital content, once a document has been
            generated and made available to you, you acknowledge that your
            right to cancel under the Consumer Contracts Regulations 2013 is
            lost, in line with the standard exception for digital content
            supplied with your consent once download has begun.
          </p>
        </section>

        <section>
          <h2>6. Intellectual property</h2>
          <p>
            The RAMS Forge name, branding, and template designs remain the
            property of RAMS Forge. Once purchased, you're free to use, edit,
            brand, and distribute your generated document for your own
            business purposes.
          </p>
        </section>

        <section>
          <h2>7. Governing law</h2>
          <p>
            These terms are governed by the law of England and Wales, and any
            disputes are subject to the exclusive jurisdiction of the courts
            of England and Wales.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:ramsforgeuk@gmail.com">ramsforgeuk@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
