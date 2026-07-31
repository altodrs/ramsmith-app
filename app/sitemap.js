import { trades } from "@/lib/trades";

const SITE_URL = "https://ramsforge.co.uk";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/rams`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const tradeRoutes = trades.map((t) => ({
    url: `${SITE_URL}/rams/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...tradeRoutes];
}
