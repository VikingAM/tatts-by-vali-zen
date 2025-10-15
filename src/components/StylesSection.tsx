import React, { useEffect, useRef, useState } from "react";
import CTAButton from "@/components/ui/CTAButton";

// Import images properly for Vite
import realismImg from "@/assets/style-realism.jpg";
import scriptImg from "@/assets/style-script.jpg";
import finelineImg from "@/assets/style-fineline.jpg";
import symbolicImg from "@/assets/style-symbolic.jpg";

const intro = [
  "Jedes Motiv braucht seinen eigenen Ausdruck.",
  "Manche leben von Tiefe und Kontrast, andere von der feinen Linie.",
  "Hier findest du die Stile, in denen ich arbeite – und was sie besonders macht.",
];

const styles = [
  {
    id: "stil-realismus",
    title: "Realismus",
    description: "Präzise Details. Lebendige Tiefe. Ideal für Porträts und strukturreiche Motive.",
    imageSrc: realismImg,
    imageAlt: "Tattoo im Realismus-Stil, Detail eines Auges.",
    ariaLabel: "Mehr zum Stil Realismus"
  },
  {
    id: "stil-schriftzug",
    title: "Schriftzug",
    description: "Klare Botschaft. Elegante Schrift. Für Namen, Daten und Zitate.",
    imageSrc: scriptImg,
    imageAlt: "Tattoo im Schriftzug-Stil, typografisches Motiv auf Haut.",
    ariaLabel: "Mehr zum Stil Schriftzug"
  },
  {
    id: "stil-feine-linie",
    title: "Feine Linie",
    description: "Feine Linie. Stille Eleganz. Dezent im Alltag, stark in der Aussage.",
    imageSrc: finelineImg,
    imageAlt: "Tattoo im Fine-Line-Stil, zarte Zweiglinie am Arm.",
    ariaLabel: "Mehr zum Stil Feine Linie"
  },
  {
    id: "stil-symbolik",
    title: "Micro-Realismus",
    description: "Symbole mit Seele. Bedeutung im Detail. Zeitlos und persönlich.",
    imageSrc: symbolicImg,
    imageAlt: "Tattoo im Stil Micro-Realismus, geometrisches Symbol auf Schulter.",
    ariaLabel: "Mehr zum Stil Micro-Realismus"
  }
];

/**
 * StylesSection Component
 * Displays the tattoo styles/services section - static, non-clickable cards
 * Purely informational with consistent typography and spacing
 * Now with smooth scroll-in animations like GallerySection
 */
const StylesSection: React.FC = () => {
  // Animation state
  const [cardVisibility, setCardVisibility] = useState<boolean[]>(
    () => new Array(styles.length).fill(false)
  );
  const [hovered, setHovered] = useState<boolean[]>(
    () => new Array(styles.length).fill(false)
  );
  const [delays, setDelays] = useState<number[]>(() => new Array(styles.length).fill(0));
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      prefersReducedMotion.current = mediaQuery.matches;
      if (prefersReducedMotion.current) {
        setCardVisibility(new Array(styles.length).fill(true));
      }
    };
    prefersReducedMotion.current = mediaQuery.matches;
    mediaQuery.addEventListener?.('change', onChange);

    const isNarrow = typeof window !== 'undefined' && window.innerWidth <= 768;
    const baseDelay = isNarrow ? 100 : 75;
    setDelays(styles.map((_, i) => i * baseDelay));
    
    if (prefersReducedMotion.current) {
      setCardVisibility(new Array(styles.length).fill(true));
      return () => {
        mediaQuery.removeEventListener?.('change', onChange);
      };
    }

    // IntersectionObserver for scroll-in visibility
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLElement
            );
            if (index !== -1) {
              setCardVisibility((prev) => {
                const newVisibility = [...prev];
                newVisibility[index] = true;
                return newVisibility;
              });
              visibilityObserver.unobserve(entry.target);
            }
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );

    // IntersectionObserver for hover effect on mobile (when card is centered in viewport)
    const hoverObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            setHovered((prev) => {
              const copy = [...prev];
              copy[index] = entry.isIntersecting && entry.intersectionRatio > 0.5;
              return copy;
            });
          }
        });
      },
      { 
        root: null, 
        rootMargin: "-25% 0px -25% 0px", // Trigger when card is in the middle 50% of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1] 
      }
    );

    // Observe elements with proper cleanup
    cardRefs.current.forEach((el) => {
      if (el) {
        visibilityObserver.observe(el);
        hoverObserver.observe(el);
      }
    });
    
    return () => {
      visibilityObserver.disconnect();
      hoverObserver.disconnect();
      mediaQuery.removeEventListener?.('change', onChange);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Set focus to message field and pre-fill subject if possible
      setTimeout(() => {
        const messageField = document.getElementById("message") as HTMLTextAreaElement;
        if (messageField) {
          messageField.focus();
          // Optionally pre-fill with style consultation hint
          if (!messageField.value) {
            messageField.value = "Ich interessiere mich für eine Stilberatung. ";
          }
        }
      }, 800);
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="pt-[clamp(64px,15vw,144px)] pb-[clamp(64px,15vw,128px)] bg-background scroll-mt-28 md:scroll-mt-36 relative"
    >
      {/* Subtle top gradient overlay for calmer transition */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-[clamp(32px,8vw,64px)] h-[clamp(32px,8vw,64px)] bg-gradient-to-b from-black/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-[clamp(320px,95vw,1280px)] px-[clamp(16px,4vw,24px)]">
        {/* Header */}
        <div className="text-center md:text-left mb-[clamp(32px,8vw,64px)]">
          <p className="text-[clamp(10px,2.5vw,14px)] tracking-[0.18em] uppercase text-accent-bronze/80 mb-[clamp(4px,1vw,8px)]">
            Zwischen Präzision und Gefühl entsteht Stil.
          </p>
          <h2
            id="services-heading"
            className="text-[clamp(24px,5vw,44px)] font-light text-foreground tracking-[0.01em] leading-tight mt-[clamp(4px,1vw,8px)] mb-[clamp(8px,2vw,16px)]"
          >
            Meine Stilrichtungen
          </h2>

          {/* Bronze divider */}
          <div
            className="h-[2px] w-[clamp(32px,12vw,64px)] bg-accent-bronze/90 mb-[clamp(16px,4vw,32px)] mx-auto md:mx-0"
            aria-hidden="true"
          />

          {/* Intro paragraphs */}
          <div className="text-[clamp(14px,2.8vw,18px)] text-foreground-secondary font-light leading-[1.9] max-w-[clamp(50ch,75vw,65ch)] mb-[clamp(24px,6vw,40px)] space-y-[clamp(4px,1vw,6px)] text-left">
            {intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Styles Grid - Dynamisch responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(16px,4vw,32px)] mb-[clamp(24px,6vw,48px)]">
          {styles.map((style, index) => (
            <article
              key={style.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`style-card group overflow-hidden rounded-2xl 
                will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                focus-within:ring-2 focus-within:ring-accent-bronze focus-within:ring-offset-2 focus-within:ring-offset-background
                ${cardVisibility[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                ${hovered[index] 
                  ? "ring-2 ring-accent-bronze/50 shadow-[0_12px_40px_rgba(0,0,0,0.5)] scale-[1.02]" 
                  : "ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] scale-100"
                }`}
              style={{
                transitionDelay: prefersReducedMotion.current ? "0ms" : `${delays[index]}ms`,
              }}
            >
              <a
                href={`#${style.id}`}
                aria-label={style.ariaLabel}
                className="block relative group focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
              >
                {/* Image with fixed aspect ratio for CLS prevention */}
                <div className="aspect-[3/2] overflow-hidden bg-neutral-900">
                  <img
                    src={style.imageSrc}
                    alt={style.imageAlt}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hovered[index] ? "scale-105" : "scale-100"
                    }`}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : undefined}
                    width="1200"
                    height="800"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute left-0 right-0 bottom-0 p-[clamp(12px,3vw,24px)]">
                  {/* Bronze line */}
                  <div className="h-[2px] w-[clamp(16px,4vw,24px)] bg-accent-bronze/90 mb-[clamp(8px,2vw,12px)]" />
                  
                  {/* Title as H3 */}
                  <h3 className="text-white text-[clamp(16px,3.5vw,20px)] font-light tracking-wide mb-[clamp(4px,1vw,8px)] leading-[1.3]">
                    {style.title}
                  </h3>
                  
                  {/* Description - max 2 lines */}
                  <p className="text-white/85 text-[clamp(12px,2.5vw,15px)] font-light leading-[1.5] line-clamp-2">
                    {style.description}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center md:text-left">
          <p className="text-[clamp(14px,2.8vw,18px)] text-foreground-secondary font-light mb-[clamp(8px,2vw,12px)]">
            Unsicher, welcher Stil passt?
          </p>
          <CTAButton
            onClick={scrollToContact}
            label="Stilberatung anfragen"
            ariaLabel="Stilberatung anfragen und Kontakt öffnen"
          />
        </div>
      </div>
    </section>
  );
};

export default StylesSection;