import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ramsforge.co.uk"),
  title: "RAMS Forge — UK RAMS Generator",
  description:
    "Generate a site-specific Risk Assessment & Method Statement in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif" }}>
        <div className="masthead">
          <div className="masthead-inner">
            <a className="wordmark" href="/">
              <img src="/logo.svg" alt="RAMS Forge" />
            </a>
          </div>
        </div>
        {children}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <span>&copy; {new Date().getFullYear()} RAMS Forge</span>
            <a href="/terms">Terms &amp; Declarations</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
