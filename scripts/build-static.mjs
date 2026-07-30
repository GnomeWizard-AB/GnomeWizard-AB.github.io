import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cli = join(root, "node_modules", "next", "dist", "bin", "next");
const outputDir = join(root, "out");
const indexPath = join(outputDir, "index.html");

const result = spawnSync(process.execPath, [cli, "build"], {
  cwd: root,
  env: process.env,
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const localizedPages = [
  { path: indexPath, lang: "ru", url: "/" },
  { path: join(outputDir, "en", "index.html"), lang: "en", url: "/en/" },
  { path: join(outputDir, "de", "index.html"), lang: "de", url: "/de/" },
  { path: join(outputDir, "ua", "index.html"), lang: "uk", url: "/ua/" },
  { path: join(outputDir, "es", "index.html"), lang: "es", url: "/es/" },
];

for (const page of localizedPages) {
  if (!existsSync(page.path)) {
    throw new Error(`Static export did not create ${page.url}`);
  }

  const source = readFileSync(page.path, "utf8");
  const localizedHtml = source.replace(/<html lang="[^"]*"/, `<html lang="${page.lang}"`);
  writeFileSync(page.path, localizedHtml, "utf8");
}

for (const requiredFile of ["robots.txt", "sitemap.xml", "og.png", "favicon.svg"]) {
  if (!existsSync(join(outputDir, requiredFile))) {
    throw new Error(`Static export is missing ${requiredFile}`);
  }
}

for (const page of localizedPages) {
  const html = readFileSync(page.path, "utf8");

  if (/\b[A-Z]:[\\/]/i.test(html) || /file:\/\//i.test(html)) {
    throw new Error(`Static HTML for ${page.url} contains a local filesystem path`);
  }

  if (!html.includes("https://gnomewizard.top")) {
    throw new Error(`Static HTML for ${page.url} is missing production domain metadata`);
  }

  if (!html.includes(`<html lang="${page.lang}"`)) {
    throw new Error(`Static HTML for ${page.url} has the wrong language declaration`);
  }
}

console.log(`[build-static] Validated 5 localized static pages: ${outputDir}`);
