import type { Metadata } from "next";
import SitePage from "../site-page";
import { createLocalizedMetadata } from "../site-copy";

export const metadata: Metadata = createLocalizedMetadata("ua");

export default function UkrainianPage() {
  return (
    <SitePage
      locale="ua"
      languageBootstrapScript={'document.documentElement.lang="uk";'}
    />
  );
}

