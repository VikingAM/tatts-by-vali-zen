import React, { useEffect, useRef, useState } from "react";
import CTAButton from "@/components/ui/CTAButton";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

// WebP + Fallback Imports (je Motiv)
import floraleWebp from "@/assets/Florale.webp";
import floraleJpg from "@/assets/Florale.JPG";

import skriptWebp from "@/assets/Skript.webp";
import skriptJpg from "@/assets/Skript.JPG";

import schmetterlingWebp from "@/assets/Schmetterling.webp";
import schmetterlingJpg from "@/assets/Schmetterling.JPG";

import roseWebp from "@/assets/Rose.webp";
import roseJpg from "@/assets/Rose.JPG";

import mariaTextWebp from "@/assets/MariaText.webp";
import mariaTextJpg from "@/assets/MariaText.JPG";

import mariaRoseWebp from "@/assets/MariaRose.webp";
import mariaRoseJpg from "@/assets/MariaRose.jpg";

type Item = {
  key: string;
  webp: string;
  fallback: string;
  alt: string;
};

const ITEMS: Item[] = [
  {
    key: "florale",
    webp: floraleWebp,
    fallback: floraleJpg,
    alt: "Florales Oberschenkel-Tattoo in Schwarzgrau, feine Linien und Schattierung.",
  },
  {
    key: "skript",
    webp: skriptWebp,
    fallback: skriptJpg,
    alt: "Feiner Script-Schriftzug mit römischen Zahlen und Namen am Unterarm.",
  },
  {
    key: "schmetterling",
    webp: schmetterlingWebp,
    fallback: schmetterlingJpg,
    alt: "Schmetterling mit Rosen und zartem Script am Oberarm.",
  },
  {
    key: "rose",
    webp: roseWebp,
    fallback: roseJpg,
    alt: "Einzelne Rose, fein schattiert, mit deutlicher Blattstruktur.",
  },
  {
    key: "mariaText",
    webp: mariaTextWebp,
    fallback: mariaTextJpg,
    alt: "Madonna mit Kirchturm und Text – realistisches Unterarm-Tattoo.",
  },
  {
    key: "mariaRose",
    webp: mariaRoseWebp,
    fallback: mariaRoseJpg,
    alt: "Madonna mit Rose – Realism-Tattoo in Grauschattierung (Innenarm).",
  },
];

/**
 * GallerySection Component
 * Displays curated tattoo works with WebP optimization
 * Responsive grid with smooth scroll-in animations
 */
export default function GallerySection() {
  const [visible, setVisible] = useState<boolean[]>(
    new Array(ITEMS.length).fill(true)
  );
  const refs = useRef<(HTMLElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;

    // If reduced motion, show all immediately
    if (prefersReducedMotion.current) {
      setVisible(new Array(ITEMS.length).fill(true));
      return;
    }

    // IntersectionObserver for scroll animations
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.indexOf(entry.target as HTMLElement);
            if (idx !== -1) {
              setVisible((prev) => {
                const copy = [...prev];
                copy[idx] = true;
                return copy;
              });
              obs.unobserve(entry.target);
            }
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );

    // Observe elements with proper cleanup
    refs.current.forEach((el) => el && obs.observe(el));
    
    return () => {
      obs.disconnect();
      // Additional cleanup for mobile performance
      refs.current.forEach((el) => {
        if (el) {
          obs.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="pt-[clamp(64px,15vw,144px)] pb-[clamp(64px,15vw,128px)] bg-background scroll-mt-28 md:scroll-mt-36 relative border-t border-white/5"
    >
      {/* Subtle top gradient overlay for calmer transition */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-[clamp(32px,8vw,64px)] h-[clamp(32px,8vw,64px)] bg-gradient-to-b from-black/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-[clamp(320px,95vw,1280px)] px-[clamp(16px,4vw,24px)]">
      
      {/* Region landmark for accessibility */}
      <div role="region" aria-label="Galerie">
        {/* Eyebrow */}
        <p className="text-[clamp(10px,2.5vw,14px)] tracking-[0.18em] uppercase text-accent-bronze/80 mb-[clamp(4px,1vw,8px)] text-center md:text-left">
          Geschichten unter der Haut.
        </p>

        {/* Heading */}
        <h2
          id="gallery-heading"
          className="text-[clamp(24px,5vw,44px)] font-light text-foreground tracking-[0.01em] leading-tight mt-[clamp(4px,1vw,8px)] mb-[clamp(8px,2vw,16px)] text-center md:text-left"
        >
          Galerie
        </h2>

        {/* Bronze divider */}
        <div
          className="h-[2px] w-[clamp(32px,12vw,64px)] bg-accent-bronze/90 mb-[clamp(16px,4vw,32px)] mx-auto md:mx-0"
          aria-hidden="true"
        />

        {/* Leitsatz */}
        <p className="text-[clamp(15px,3vw,18px)] text-foreground font-light leading-[1.8] max-w-[clamp(50ch,75vw,65ch)] mb-[clamp(8px,2vw,16px)] text-left">
          Aus deinem Gedanken entsteht etwas, das bleibt.
        </p>

        {/* Einleitung */}
        <p className="text-[clamp(14px,2.8vw,18px)] text-foreground-secondary font-light leading-[1.9] max-w-[clamp(50ch,75vw,65ch)] mb-[clamp(24px,6vw,48px)] text-left">
          Du bringst die Idee, ich höre zu. Gemeinsam finden wir Motiv, Größe und Platz. Präzise gestochen, langlebig und mit Raum für deine Geschichte.
        </p>

        {/* Grid - Dynamisch responsive */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,4vw,32px)] list-none" role="list" aria-label="Tattoo-Arbeiten">
          {ITEMS.map((item, i) => (
            <li
              key={item.key}
              ref={(el) => (refs.current[i] = el)}
              className={`gallery-card overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.35)] 
                transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                focus-within:ring-2 focus-within:ring-accent-bronze focus-within:ring-offset-2 focus-within:ring-offset-background
                ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{
                transitionDelay: prefersReducedMotion.current ? "0ms" : `${i * (window.innerWidth <= 768 ? 75 : 50)}ms`,
              }}
            >
              <figure className="relative group">
                <picture>
                  <source 
                    type="image/webp"
                    srcSet={`${item.webp} 480w, ${item.webp} 768w, ${item.webp} 1024w, ${item.webp} 1440w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <img
                    src={item.fallback}
                    alt={item.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : i <= 2 ? "auto" : undefined}
                    width={1200}
                    height={1500}
                    className="w-full h-full object-cover aspect-[4/5] transition-all duration-200 ease-out brightness-[0.85] contrast-[1.4]"
                  />
                </picture>
                <figcaption className="sr-only">{item.alt}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-[clamp(32px,8vw,64px)] mb-[clamp(16px,4vw,32px)] text-center md:text-left">
          <p className="text-[clamp(14px,2.8vw,18px)] leading-[1.9] text-foreground-secondary font-light mb-[clamp(8px,2vw,12px)]">
            Mehr Arbeiten findest du auf Instagram — <span className="font-normal">@tatts_byvali</span>.
          </p>
          <CTAButton
            as="a"
            href="https://www.instagram.com/tatts_byvali"
            target="_blank"
            rel="noopener noreferrer"
            label="Auf Instagram ansehen"
            ariaLabel="Mehr Arbeiten auf Instagram (@tatts_byvali) in neuem Tab öffnen"
            iconLeft={<InstagramIcon />}
          />
        </div>
      </div>
      </div>
    </section>
  );
}

