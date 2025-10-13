// src/lib/scroll.ts
export function smoothScrollTo(id: string, offsetPx = 0) {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;
  const el = document.getElementById(id);
  if (!el) return;

  // Falls es eine sticky Header-Navigation gibt, deren Höhe abziehen
  const header = document.querySelector<HTMLElement>("[data-sticky-header]") 
              || document.querySelector<HTMLElement>("header[role='banner'], nav[role='navigation']");
  const headerH = header ? header.offsetHeight : 0;
  const y = el.getBoundingClientRect().top + window.scrollY - headerH - offsetPx;

  window.scrollTo({
    top: y < 0 ? 0 : y,
    behavior: prefersReduced ? "auto" : "smooth",
  });
}
