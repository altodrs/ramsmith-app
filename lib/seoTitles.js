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
};

export function seoTitle(listing) {
  return SEO_TITLES[listing.slug] || listing.h1_title;
}
