# RAMS Forge — Next.js + Stripe

A UK RAMS (Risk Assessment & Method Statement) generator. Users pick a trade
job, pay a one-time £15 fee via Stripe Checkout, and get a CDM 2015 compliant
RAMS document rendered on the success page.

## How it works

- `app/page.js` — the form: pick a job, add a site address.
- `app/preview/page.js` — shows the real RAMS content with a watermark
  overlay before payment, so customers see what they're buying instead of
  paying blind. Unlocking removes the watermark and enables the PDF.
- `app/api/checkout/route.js` — server-side route that creates a Stripe
  Checkout Session. The price and product name come from `lib/trades.js` on
  the server, never from the client request — so a tampered request can't
  change what gets charged.
- `app/success/page.js` — after Stripe redirects back, this Server Component
  independently re-verifies the payment with Stripe (`payment_status === "paid"`)
  before rendering the clean RAMS document, generating the PDF, and emailing
  it. The URL having a `session_id` in it proves nothing by itself; this is
  the actual security check. Note: this re-runs (including re-emailing) if
  the customer refreshes the success page — fine for now, but worth moving
  to a Stripe webhook (`checkout.session.completed`) if that becomes annoying.
- `app/api/download/route.js` — lets the customer re-download the PDF later
  from the same link; re-verifies payment the same way as the success page.
- `lib/pdf.js` + `scripts/render-pdf.mjs` — PDF generation. Split into two
  files because `@react-pdf/renderer` throws a cryptic React error when
  rendered directly inside a Next.js route/Server Component (confirmed by
  reproducing it standalone — this isn't a version or JSX-syntax issue, it's
  specific to Next's bundling of that package). The workaround is to run the
  actual rendering in a genuinely separate `node` process
  (`scripts/render-pdf.mjs`), spawned from `lib/pdf.js` via `child_process`.
  `next.config.js`'s `outputFileTracingIncludes` makes sure Vercel actually
  bundles that script and its dependencies, since it's invoked at runtime
  rather than imported.
- `lib/email.js` — sends the PDF via Resend. Without `RESEND_API_KEY` set,
  this no-ops safely (the site still works, it just skips emailing and says
  so honestly rather than claiming to have sent something it didn't).
- `lib/stripe.js` — the Stripe client and price constant. Only ever imported
  from server-side files (API routes, Server Components) — never from a
  `"use client"` component, since that would leak the secret key to the browser.

---

## 1. Run it locally first

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local` with your **test** Stripe keys (see step 4), then:

```bash
npm run dev
```

Visit `http://localhost:3000`. Submitting the form with a real test key will
redirect you to Stripe's hosted checkout page.

---

## 2. Push this code to a new GitHub repository

From inside this project folder:

```bash
git init
git add -A
git commit -m "Initial commit: RAMS Forge Next.js + Stripe"
```

Create the repo on GitHub (pick one):

**Option A — GitHub CLI** (if you have `gh` installed and logged in):
```bash
gh repo create YOUR-USERNAME/ramsmith-app --public --source=. --remote=origin --push
```

**Option B — GitHub website:**
1. Go to [github.com/new](https://github.com/new), name it `ramsmith-app`, leave it empty (no README/gitignore — you already have one), click **Create repository**.
2. GitHub will show you commands like this — run them:
```bash
git remote add origin https://github.com/YOUR-USERNAME/ramsmith-app.git
git branch -M main
git push -u origin main
```

---

## 3. Link it to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in (GitHub login is easiest).
2. Click **Import** next to your `ramsmith-app` repository.
3. Vercel auto-detects Next.js — leave the build settings as default.
4. Before deploying, expand **Environment Variables** and add:
   | Name | Value |
   |---|---|
   | `STRIPE_SECRET_KEY` | your Stripe secret key |
   | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | your Stripe publishable key |
   | `RESEND_API_KEY` | your Resend key (see step 5) — optional, site works without it |
   | `NEXT_PUBLIC_SITE_URL` | leave blank for now — see step 6 |
5. Click **Deploy**. Vercel gives you a URL like `https://ramsmith-app.vercel.app`.
6. Go back to **Project Settings → Environment Variables**, set
   `NEXT_PUBLIC_SITE_URL` to that real URL, and redeploy (**Deployments → ⋯ → Redeploy**)
   so Stripe's success/cancel redirects point to the live site instead of localhost.

Every future `git push` to `main` auto-deploys.

---

## 4. Get your Stripe keys

1. Sign up / log in at [dashboard.stripe.com](https://dashboard.stripe.com).
2. Make sure you're in **Test mode** (toggle, top right) while you're testing.
3. Go to **Developers → API keys**. Copy:
   - **Secret key** (`sk_test_...`) → `STRIPE_SECRET_KEY`
   - **Publishable key** (`pk_test_...`) → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
4. Test the checkout with Stripe's test card: `4242 4242 4242 4242`, any future
   expiry date, any CVC, any postcode.

**Going live:** switch Stripe out of Test mode, grab the `sk_live_...` /
`pk_live_...` keys, and replace the values in Vercel's environment variables
(then redeploy). Never put live keys in `.env.local` or commit them to git.

---

## 5. Get your Resend key (optional — emails the PDF to customers)

The site works fully without this — customers still get the PDF via the
"Download PDF" button. Add this if you want it emailed to them automatically
too.

1. Sign up free at [resend.com](https://resend.com).
2. **Developers → API Keys** → create one → copy it into `RESEND_API_KEY`.
3. Without any extra setup, emails send from `onboarding@resend.dev` and can
   only reach the address you signed up to Resend with — fine for testing,
   not for real customers.
4. Once `ramsforge.co.uk` is bought (see the checklist from earlier), add it
   under **Domains** in Resend and follow their DNS verification steps, then
   set `RESEND_FROM` to something like `RAMS Forge <noreply@ramsforge.co.uk>`.

---

## Security notes

- `STRIPE_SECRET_KEY` must only ever be set as a server environment variable
  (Vercel dashboard, or `.env.local` for local dev — which is git-ignored).
  It is never sent to the browser.
- The price charged is fixed server-side in `lib/stripe.js`
  (`RAMS_PRICE_GBP_PENCE`) — the client cannot influence what it's charged.
- Payment is verified again on the success page by calling Stripe directly,
  not by trusting the redirect URL.
