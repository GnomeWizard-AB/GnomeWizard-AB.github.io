import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cli = join(root, "node_modules", "vinext", "dist", "cli.js");
const outputDir = join(root, "dist", "client");
const indexPath = join(outputDir, "index.html");

const result = spawnSync(process.execPath, [cli, "build"], {
  cwd: root,
  env: process.env,
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

if (!existsSync(indexPath)) {
  throw new Error("Static export did not create dist/client/index.html");
}

for (const requiredFile of ["robots.txt", "sitemap.xml", "og.png", "favicon.svg"]) {
  if (!existsSync(join(outputDir, requiredFile))) {
    throw new Error(`Static export is missing ${requiredFile}`);
  }
}

const html = readFileSync(indexPath, "utf8");
if (/\b[A-Z]:[\\/]/i.test(html) || /file:\/\//i.test(html)) {
  throw new Error("Static HTML contains a local filesystem path");
}

if (!html.includes("https://gnomewizard.top")) {
  throw new Error("Static HTML is missing the production domain metadata");
}

if (result.status !== 0) {
  const knownWindowsShutdownCrash =
    process.platform === "win32" &&
    (result.status === 3221226505 || result.status === -1073740791);

  if (!knownWindowsShutdownCrash) {
    process.exit(result.status ?? 1);
  }

  console.warn(
    "[build-static] vinext hit its known Windows shutdown crash after export; validated output is complete.",
  );
}

console.log(`[build-static] Validated static site: ${outputDir}`);
