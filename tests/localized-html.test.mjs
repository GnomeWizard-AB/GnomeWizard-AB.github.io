import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const localizedPages = [
  {
    route: "",
    lang: "ru",
    canonical: "https://gnomewizard.top/",
    heading: "Обо мне",
    selector: "Русский",
  },
  {
    route: "en/",
    lang: "en",
    canonical: "https://gnomewizard.top/en/",
    heading: "About",
    selector: "English",
  },
  {
    route: "de/",
    lang: "de",
    canonical: "https://gnomewizard.top/de/",
    heading: "Über mich",
    selector: "Deutsch",
  },
  {
    route: "ua/",
    lang: "uk",
    canonical: "https://gnomewizard.top/ua/",
    heading: "Про мене",
    selector: "Українська",
  },
  {
    route: "es/",
    lang: "es",
    canonical: "https://gnomewizard.top/es/",
    heading: "Sobre mí",
    selector: "Español",
  },
];

async function readOutput(relativePath) {
  return readFile(new URL(`../out/${relativePath}`, import.meta.url), "utf8");
}

test("exports five complete localized pages", async () => {
  for (const page of localizedPages) {
    const html = await readOutput(`${page.route}index.html`);

    assert.match(html, new RegExp(`<html lang="${page.lang}"`));
    assert.match(
      html,
      new RegExp(
        `<link rel="canonical" href="${page.canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`,
      ),
    );
    assert.match(html, new RegExp(`<h2>${page.heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</h2>`));
    assert.match(html, new RegExp(page.selector));
    assert.match(html, /class="language-trigger"/);
    assert.match(html, /href="\/en\/"/);
    assert.match(html, /href="\/de\/"/);
    assert.match(html, /href="\/ua\/"/);
    assert.match(html, /href="\/es\/"/);
    assert.match(html, /hrefLang="ru"/);
    assert.match(html, /hrefLang="en"/);
    assert.match(html, /hrefLang="de"/);
    assert.match(html, /hrefLang="uk"/);
    assert.match(html, /hrefLang="es"/);
    assert.match(html, /hrefLang="x-default"/);
    assert.match(html, /Устное обучение|Spoken training|Mündliches Training|Усне навчання|La formación y las consultas orales/);
    assert.doesNotMatch(html, /\b[A-Z]:[\\/]/i);
    assert.doesNotMatch(html, /file:\/\//i);
  }
});

test("keeps language selection accessible and responsive", async () => {
  const [component, css, sitemap] = await Promise.all([
    readFile(new URL("../app/language-switcher.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/i18n.css", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
  ]);

  assert.match(component, /aria-expanded=\{isOpen\}/);
  assert.match(component, /aria-controls=\{menuId\}/);
  assert.match(component, /event\.key === "Escape"/);
  assert.match(component, /window\.localStorage\.setItem\("gw-language"/);
  assert.match(component, /window\.location\.hash/);
  assert.match(css, /\.language-trigger\s*\{[^}]*min-height:\s*44px/);
  assert.match(css, /\.language-menu a\s*\{[^}]*min-height:\s*44px/);
  assert.match(css, /@media \(max-width:\s*760px\)/);
  assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)/);
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, 5);
  assert.match(sitemap, /hreflang="uk" href="https:\/\/gnomewizard\.top\/ua\/"/);
  assert.match(sitemap, /hreflang="x-default" href="https:\/\/gnomewizard\.top\/en\/"/);
});

