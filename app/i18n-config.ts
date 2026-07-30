export const localeCodes = ["ru", "en", "de", "ua", "es"] as const;

export type LocaleCode = (typeof localeCodes)[number];

export type LanguageOption = {
  code: LocaleCode;
  htmlLang: string;
  label: string;
  shortLabel: string;
  path: string;
};

export const languageOptions: readonly LanguageOption[] = [
  { code: "ru", htmlLang: "ru", label: "Русский", shortLabel: "RU", path: "/" },
  { code: "en", htmlLang: "en", label: "English", shortLabel: "EN", path: "/en/" },
  { code: "de", htmlLang: "de", label: "Deutsch", shortLabel: "DE", path: "/de/" },
  { code: "ua", htmlLang: "uk", label: "Українська", shortLabel: "UA", path: "/ua/" },
  { code: "es", htmlLang: "es", label: "Español", shortLabel: "ES", path: "/es/" },
] as const;

export const localePaths = Object.fromEntries(
  languageOptions.map((language) => [language.code, language.path]),
) as Record<LocaleCode, string>;

export const htmlLanguages = Object.fromEntries(
  languageOptions.map((language) => [language.code, language.htmlLang]),
) as Record<LocaleCode, string>;

export const alternateLanguageUrls = {
  ru: "/",
  en: "/en/",
  de: "/de/",
  uk: "/ua/",
  es: "/es/",
  "x-default": "/en/",
} as const;

