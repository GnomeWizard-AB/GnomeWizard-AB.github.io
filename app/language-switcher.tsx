"use client";

import { useEffect, useId, useRef, useState } from "react";
import { languageOptions, type LocaleCode } from "./i18n-config";

type LanguageSwitcherProps = {
  currentLocale: LocaleCode;
  label: string;
};

export default function LanguageSwitcher({ currentLocale, label }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const currentLanguage = languageOptions.find((language) => language.code === currentLocale)
    ?? languageOptions[0];

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        rootRef.current?.querySelector<HTMLButtonElement>(".language-trigger")?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const chooseLanguage = (
    event: React.MouseEvent<HTMLAnchorElement>,
    locale: LocaleCode,
    path: string,
  ) => {
    window.localStorage.setItem("gw-language", locale);

    if (
      event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) {
      return;
    }

    event.preventDefault();
    const hash = window.location.hash;
    window.location.assign(`${path}${hash}`);
  };

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        className="language-trigger"
        type="button"
        aria-label={`${label}: ${currentLanguage.label}`}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{currentLanguage.shortLabel}</span>
        <i aria-hidden="true">▾</i>
      </button>

      <ul className="language-menu" id={menuId} hidden={!isOpen}>
        {languageOptions.map((language) => (
          <li key={language.code}>
            <a
              href={language.path}
              lang={language.htmlLang}
              aria-current={language.code === currentLocale ? "page" : undefined}
              onClick={(event) => chooseLanguage(event, language.code, language.path)}
            >
              <span>{language.label}</span>
              <small>{language.shortLabel}</small>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

