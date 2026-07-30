import type { Metadata } from "next";
import SitePage from "../site-page";
import { createLocalizedMetadata } from "../site-copy";

export const metadata: Metadata = createLocalizedMetadata("de");

export default function GermanPage() {
  return (
    <SitePage
      locale="de"
      languageBootstrapScript={'document.documentElement.lang="de";'}
    />
  );
}

