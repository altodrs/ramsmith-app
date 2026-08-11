import { trades, getTradeBySlug } from "./trades";
import { industries, getIndustryBySlug } from "./industries";

// Any code that needs to resolve a slug without caring which section it
// belongs to (checkout, download, preview, success) should use this instead
// of reaching into lib/trades.js or lib/industries.js directly.
export const allListings = [...trades, ...industries];

export function getListingBySlug(slug) {
  return getTradeBySlug(slug) || getIndustryBySlug(slug);
}
