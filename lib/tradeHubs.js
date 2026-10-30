// Trade hub pages (app/rams/<hub>/page.js) and the job pages each one lists.
// Job pages use this to link their trade breadcrumb to the hub.
export const TRADE_HUBS = [
  {
    name: "Plumbing & Heating",
    path: "/rams/plumber",
    slugs: [
      "plumber-combi-boiler-replacement",
      "plumber-underfloor-heating-installation",
      "plumber-emergency-leak-detection-repair",
      "plumber-water-softener-filtration-system-installation",
      "gas-engineer-boiler-servicing-safety-inspection",
      "gas-engineer-lpg-oil-boiler-installation",
      "bathroom-fitter-bathroom-fitting-installation",
    ],
  },
];

export function getHubByPath(hubPath) {
  return TRADE_HUBS.find((h) => h.path === hubPath);
}

export function getHubForJob(jobSlug) {
  return TRADE_HUBS.find((h) => h.slugs.includes(jobSlug));
}
