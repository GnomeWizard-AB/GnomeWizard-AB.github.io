import type { Metadata } from "next";
import SitePage from "../site-page";
import { createLocalizedMetadata } from "../site-copy";

export const metadata: Metadata = createLocalizedMetadata("en");

export default function EnglishPage() {
  return (
    <SitePage
      locale="en"
      languageBootstrapScript={'document.documentElement.lang="en";'}
    />
  );
}

