import { execFile } from "node:child_process";
import path from "node:path";

// @react-pdf/renderer's internal reconciler throws a cryptic React
// "invariant 31" error when it's rendered from inside a Next.js route
// handler/server component — confirmed this isn't a version or JSX-syntax
// issue (tried v3 and v4, JSX and createElement, with and without
// serverExternalPackages), since the exact same document renders correctly
// in a plain, standalone `node` process outside Next's bundler entirely.
// Workaround: actually run it in a standalone node process via
// scripts/render-pdf.mjs, and read the PDF bytes back over stdout.
const SCRIPT_PATH = path.join(process.cwd(), "scripts", "render-pdf.mjs");

export async function generateRamsPdf(trade, siteAddress) {
  return new Promise((resolve, reject) => {
    const child = execFile(
      process.execPath,
      [SCRIPT_PATH],
      { encoding: "buffer", maxBuffer: 1024 * 1024 * 10 },
      (error, stdout, stderr) => {
        if (error) {
          reject(new Error(`PDF render failed: ${stderr?.toString() || error.message}`));
          return;
        }
        resolve(stdout);
      }
    );
    child.stdin.write(JSON.stringify({ trade, siteAddress }));
    child.stdin.end();
  });
}
