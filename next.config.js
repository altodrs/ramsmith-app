/** @type {import('next').NextConfig} */
const nextConfig = {
  // scripts/render-pdf.mjs is run via child_process (see lib/pdf.js), not
  // imported — Vercel's automatic file tracing only follows real
  // import/require statements, so without this the script and its
  // dependencies would silently get pruned from the deployed function.
  outputFileTracingIncludes: {
    "/api/download": ["./scripts/render-pdf.mjs", "./node_modules/@react-pdf/**"],
    "/success": ["./scripts/render-pdf.mjs", "./node_modules/@react-pdf/**"],
  },
};

module.exports = nextConfig;
