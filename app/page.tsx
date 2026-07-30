import type { Metadata } from "next";
import SitePage from "./site-page";
import { createLocalizedMetadata } from "./site-copy";

export const metadata: Metadata = createLocalizedMetadata("ru");

const languageBootstrapScript = `
document.documentElement.lang="ru";
(() => {
  try {
    if (window.location.pathname !== "/") return;

    const routes = {
      ru: "/",
      en: "/en/",
      de: "/de/",
      ua: "/ua/",
      es: "/es/"
    };
    const browserCodes = {
      ru: "ru",
      en: "en",
      de: "de",
      uk: "ua",
      es: "es"
    };
    const saved = window.localStorage.getItem("gw-language");
    let locale = saved && routes[saved] ? saved : window.localStorage.getItem("gw-language-detected");

    if (!locale || !routes[locale]) {
      const browserLanguages = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language];
      locale = browserLanguages
        .map((language) => browserCodes[String(language).toLowerCase().split("-")[0]])
        .find(Boolean) || "en";
      window.localStorage.setItem("gw-language-detected", locale);
    }

    const target = routes[locale] || routes.en;
    if (target !== "/") {
      window.location.replace(target + window.location.search + window.location.hash);
    }
  } catch {}
})();
`;

export default function Home() {
  return <SitePage locale="ru" languageBootstrapScript={languageBootstrapScript} />;
}
