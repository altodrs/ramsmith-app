export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/success", "/cancel"] },
    ],
    sitemap: "https://ramsforge.co.uk/sitemap.xml",
  };
}
