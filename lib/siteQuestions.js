// Three universal site questions asked before a document is generated, and
// the fixed (never improvised) controls each answer triggers. Pure data and
// functions — safe to import from both server and client code. The control
// wording is general HSE-style good practice and should be reviewed by a
// qualified H&S person before being relied on widely.

export const NOTES_MAX = 300;

export const SITE_QUESTIONS = [
  {
    id: "height",
    short: "Work at height",
    label: "Will any of the work be at height (ladders, towers, roofs, edges)?",
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
    ],
  },
  {
    id: "services",
    short: "Services in the work area",
    label: "Are there electric, gas or water services in the work area that could be hit or disturbed?",
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
      { value: "unsure", label: "Not sure" },
    ],
  },
  {
    id: "others",
    short: "Others near the work",
    label: "Will other trades, occupants or the public be near the work?",
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
    ],
  },
];

const ANSWER_LABEL = { yes: "Yes", no: "No", unsure: "Not sure" };

const CONTROLS = {
  height: {
    yes: {
      title: "Work at height",
      body: "Avoid work at height where reasonably practicable. Where it can't be avoided, plan and supervise it under the Work at Height Regulations 2005: choose equipment suited to the task and duration, check ladders, steps and towers before each use, keep clear of unprotected edges and fragile surfaces, and agree how a person would be rescued before work starts.",
    },
  },
  services: {
    yes: {
      title: "Services in the work area",
      body: "Before starting, locate and mark electricity, gas and water services (use plans and a suitable detector), isolate them where it is safe to do so, and stop work and report to the site supervisor if an unexpected service is found.",
    },
    unsure: {
      title: "Services in the work area",
      body: "Treat any service you can't confirm as live. Before starting, locate and mark electricity, gas and water services (use plans and a suitable detector), isolate where safe to do so, and stop work and report to the site supervisor if an unexpected service is found.",
    },
  },
  others: {
    yes: {
      title: "Others near the work",
      body: "Separate the work area with barriers, signs or cones, tell others nearby what is happening, keep walkways and exits clear, and secure tools and materials whenever the area is left unattended, including at the end of each day.",
    },
  },
};

// Returns { height, services, others } if every answer is valid, else null.
export function sanitiseSiteAnswers(raw) {
  if (!raw || typeof raw !== "object") return null;
  const out = {};
  for (const q of SITE_QUESTIONS) {
    const v = raw[q.id];
    if (!q.options.some((o) => o.value === v)) return null;
    out[q.id] = v;
  }
  return out;
}

export function sanitiseNotes(raw) {
  return typeof raw === "string" ? raw.trim().slice(0, NOTES_MAX) : "";
}

// Compact form for Stripe metadata, e.g. "h=yes;s=unsure;o=no".
export function encodeSiteAnswers(a) {
  return `h=${a.height};s=${a.services};o=${a.others}`;
}

export function decodeSiteAnswers(str) {
  if (typeof str !== "string") return null;
  const map = Object.fromEntries(str.split(";").map((p) => p.split("=")));
  return sanitiseSiteAnswers({ height: map.h, services: map.s, others: map.o });
}

// What the PDF prints. Null when there are no valid answers (older
// documents, or anything missing) — the section is then simply left out.
export function buildSiteInfo(answers, notes) {
  const a = sanitiseSiteAnswers(answers);
  if (!a) return null;
  const controls = SITE_QUESTIONS.map((q) => CONTROLS[q.id][a[q.id]]).filter(Boolean);
  return {
    items: SITE_QUESTIONS.map((q) => ({ question: q.short, answer: ANSWER_LABEL[a[q.id]] })),
    controls,
    notes: sanitiseNotes(notes),
  };
}

export function siteInfoFromMetadata(metadata) {
  return buildSiteInfo(decodeSiteAnswers(metadata?.siteAnswers), metadata?.siteNotes);
}
