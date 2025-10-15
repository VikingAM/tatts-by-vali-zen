import React, { useEffect, useRef, useState } from "react";
import CTAButton from "@/components/ui/CTAButton";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

// Responsive WebP Imports
import floraleWebp400 from "@/assets/Florale-400w.webp";
import floraleWebp600 from "@/assets/Florale-600w.webp";
import floraleWebp800 from "@/assets/Florale-800w.webp";
import floraleJpg from "@/assets/Florale.JPG";

import skriptWebp400 from "@/assets/Skript-400w.webp";
import skriptWebp600 from "@/assets/Skript-600w.webp";
import skriptWebp800 from "@/assets/Skript-800w.webp";
import skriptJpg from "@/assets/Skript.JPG";

import schmetterlingWebp400 from "@/assets/Schmetterling-400w.webp";
import schmetterlingWebp600 from "@/assets/Schmetterling-600w.webp";
import schmetterlingWebp800 from "@/assets/Schmetterling-800w.webp";
import schmetterlingJpg from "@/assets/Schmetterling.JPG";

import roseWebp400 from "@/assets/Rose-400w.webp";
import roseWebp600 from "@/assets/Rose-600w.webp";
import roseWebp800 from "@/assets/Rose-800w.webp";
import roseJpg from "@/assets/Rose.JPG";

import mariaTextWebp400 from "@/assets/MariaText-400w.webp";
import mariaTextWebp600 from "@/assets/MariaText-600w.webp";
import mariaTextWebp800 from "@/assets/MariaText-800w.webp";
import mariaTextJpg from "@/assets/MariaText.JPG";

import mariaRoseWebp400 from "@/assets/MariaRose-400w.webp";
import mariaRoseWebp600 from "@/assets/MariaRose-600w.webp";
import mariaRoseWebp800 from "@/assets/MariaRose-800w.webp";
import mariaRoseJpg from "@/assets/MariaRose.jpg";

type Item = {
  key: string;
  webpSrcset: string;
  fallback: string;
  alt: string;
};

const ITEMS: Item[] = [
  {
    key: "florale",
    webpSrcset: `${floraleWebp400} 400w, ${floraleWebp600} 600w, ${floraleWebp800} 800w`,
    fallback: floraleJpg,
    alt: "Florales Oberschenkel-Tattoo",
  },
  {
    key: "skript",
    webpSrcset: `${skriptWebp400} 400w, ${skriptWebp600} 600w, ${skriptWebp800} 800w`,
    fallback: skriptJpg,
    alt: "Script-Schriftzug Tattoo",
  },
  {
    key: "schmetterling",
    webpSrcset: `${schmetterlingWebp400} 400w, ${schmetterlingWebp600} 600w, ${schmetterlingWebp800} 800w`,
    fallback: schmetterlingJpg,
    alt: "Schmetterling Tattoo",
  },
  {
    key: "rose",
    webpSrcset: `${roseWebp400} 400w, ${roseWebp600} 600w, ${roseWebp800} 800w`,
    fallback: roseJpg,
    alt: "Rose Tattoo",
  },
  {
    key: "mariaText",
    webpSrcset: `${mariaTextWebp400} 400w, ${mariaTextWebp600} 600w, ${mariaTextWebp800} 800w`,
    fallback: mariaTextJpg,
    alt: "Madonna Tattoo",
  },
  {
    key: "mariaRose",
    webpSrcset: `${mariaRoseWebp400} 400w, ${mariaRoseWebp600} 600w, ${mariaRoseWebp800} 800w`,
    fallback: mariaRoseJpg,
    alt: "Madonna mit Rose Tattoo",
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
  const [hovered, setHovered] = useState<boolean[]>(
    new Array(ITEMS.length).fill(false)
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
    const visibilityObs = new IntersectionObserver(
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
              visibilityObs.unobserve(entry.target);
            }
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );

    // IntersectionObserver for hover effect on mobile (when image is centered in viewport)
    const hoverObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = refs.current.indexOf(entry.target as HTMLElement);
          if (idx !== -1) {
            setHovered((prev) => {
              const copy = [...prev];
              copy[idx] = entry.isIntersecting && entry.intersectionRatio > 0.5;
              return copy;
            });
          }
        });
      },
      { 
        root: null, 
        rootMargin: "-25% 0px -25% 0px", // Trigger when image is in the middle 50% of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1] 
      }
    );

    // Observe elements with proper cleanup
    refs.current.forEach((el) => {
      if (el) {
        visibilityObs.observe(el);
        hoverObs.observe(el);
      }
    });
    
    return () => {
      visibilityObs.disconnect();
      hoverObs.disconnect();
      refs.current.forEach((el) => {
        if (el) {
          visibilityObs.unobserve(el);
          hoverObs.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="pt-[clamp(64px,15vw,144px)] pb-[clamp(64px,15vw,128px)] bg-background scroll-mt-28 md:scroll-mt-36 relative"
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
        <p className="text-[clamp(10px,2.5vw,14px)] tracking-[0.18em] uppercase text-accent-bronze mb-[clamp(4px,1vw,8px)] text-center md:text-left">
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
              <figure 
                className="relative group"
              >
                <picture>
                  <source 
                    type="image/webp"
                    srcSet={item.webpSrcset}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <img
                    src={item.fallback}
                    alt={item.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : i <= 2 ? "auto" : undefined}
                    width={800}
                    height={1000}
                    className={`w-full h-full object-cover aspect-[4/5] transition-all duration-300 ease-out ${
                      hovered[i]
                        ? "brightness-100 contrast-[1.15] scale-105"
                        : "brightness-[0.85] contrast-[1.4] scale-100"
                    }`}
                  />
                </picture>
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

