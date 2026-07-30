import type { Metadata } from "next";
import SitePage from "../site-page";
import { createLocalizedMetadata } from "../site-copy";

export const metadata: Metadata = createLocalizedMetadata("es");

export default function SpanishPage() {
  return (
    <SitePage
      locale="es"
      languageBootstrapScript={'document.documentElement.lang="es";'}
    />
  );
}

