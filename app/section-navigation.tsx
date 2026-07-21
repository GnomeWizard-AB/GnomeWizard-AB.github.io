"use client";

import { useEffect } from "react";

export default function SectionNavigation() {
  useEffect(() => {
    const handleSectionLink = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const source = event.target;
      if (!(source instanceof Element)) return;

      const link = source.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || link.classList.contains("skip-link") || link.download || link.target === "_blank") return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();

      const scrollMarginTop = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - scrollMarginTop);
      const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;

      if (window.location.hash === hash) {
        window.history.replaceState(window.history.state, "", nextUrl);
      } else {
        window.history.pushState(window.history.state, "", nextUrl);
      }

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    };

    document.addEventListener("click", handleSectionLink);
    return () => document.removeEventListener("click", handleSectionLink);
  }, []);

  return null;
}
