// Search-result / browser-tab titles that match how people actually search
// ("tree surgery RAMS", "steel erection RAMS"). Only the <title> changes —
// the on-page heading (h1_title) is untouched.
const SEO_TITLES = {
  "tree-surgeon-tree-felling-pruning-arboriculture":
    "Tree Surgery RAMS: Felling, Pruning & Arboriculture (UK)",
  "steel-erector-structural-steel-frame-erection":
    "Steel Erection RAMS: Structural Steel Frame Erection (UK)",
  "decorator-interior-painting-wallpapering":
    "Painting & Decorating RAMS: Interior Painting & Wallpapering (UK)",
  "radon-specialist-radon-mitigation-system-installation":
    "Radon Mitigation RAMS: Sump & System Installation (UK)",
  "plumber-combi-boiler-replacement":
    "Combi Boiler Replacement RAMS & Method Statement (UK)",
  "plumber-underfloor-heating-installation":
    "Underfloor Heating Installation RAMS & Method Statement",
  "plumber-emergency-leak-detection-repair":
    "Emergency Leak Detection & Repair RAMS (UK Plumbers)",
  "plumber-water-softener-filtration-system-installation":
    "Water Softener & Filter Installation RAMS (UK)",
  "gas-engineer-boiler-servicing-safety-inspection":
    "Boiler Service & Gas Safety Inspection RAMS (UK)",
  "gas-engineer-lpg-oil-boiler-installation":
    "LPG & Oil Boiler Installation RAMS (UK Off-Grid Jobs)",
  "bathroom-fitter-bathroom-fitting-installation":
    "Bathroom Fitting RAMS & Method Statement (UK)",
  "electrician-full-house-rewire-consumer-unit-upgrade":
    "House Rewire & Consumer Unit RAMS: Method Statement (UK)",
  "electrician-eicr-electrical-installation-condition-report-testing":
    "EICR Testing RAMS & Method Statement (UK Electricians)",
  "electrician-ev-charger-installation":
    "EV Charger Installation RAMS & Method Statement (UK)",
  "electrician-commercial-public-ev-charging-infrastructure-installation":
    "Commercial EV Charging RAMS: Rapid & Car Park Installs (UK)",
  "solar-installer-solar-pv-panel-installation":
    "Solar PV Installation RAMS & Method Statement (UK)",
  "solar-installer-solar-battery-storage-installation":
    "Solar Battery Storage Installation RAMS (UK)",
  "fire-security-engineer-fire-alarm-installation-testing":
    "Fire Alarm Installation & Testing RAMS (UK)",
  "data-cabling-engineer-structured-data-cabling-installation":
    "Data Cabling RAMS & Method Statement (UK Installers)",
};

export function seoTitle(listing) {
  return SEO_TITLES[listing.slug] || listing.h1_title;
}
