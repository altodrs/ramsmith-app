import { NextResponse } from "next/server";

// Cheap first filter for bulk scrapers: no User-Agent at all, or a default
// one from a common scripting/HTTP library. Real browsers and search-engine
// crawlers (Googlebot, Bingbot) send neither, so they pass untouched. This
// only stops lazy scripts — the real protection is that the public pages no
// longer contain the paid content, plus the rate limit in Vercel's firewall.
const SCRAPER_UA =
  /python-requests|python-urllib|aiohttp|httpx|scrapy|go-http-client|libwww-perl|java\/|okhttp|apache-httpclient|node-fetch|axios|wget|curl\//i;

export function middleware(request) {
  const ua = request.headers.get("user-agent") || "";
  if (!ua || SCRAPER_UA.test(ua)) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/rams/:path+", "/industries/:path+", "/preview"],
};
