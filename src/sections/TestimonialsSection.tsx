import React, { useEffect, useRef, useState } from "react";
import CTAButton from "@/components/ui/CTAButton";

type Testimonial = {
  quote: string;
  author: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ich habe mir vor 5 Monaten den gesamten Brustbereich bei Valerio tätowieren lassen. Extrem zufrieden – Details, Qualität und Präzision zeichnen seine Arbeit aus. Klare Empfehlung!",
    author: "Anthony",
  },
  {
    quote:
      "Absolut begeistert von meinem neuen Tattoo! Unglaublich präzise Arbeit, das Design sogar besser als vorgestellt. Sehr professionell, nimmt sich Zeit, angenehme Atmosphäre. Hygiene top, Studio einladend. 5 Sterne!",
    author: "Fabio",
  },
  {
    quote:
      "Krasses Tattoo! Messerscharfe Linien, Studio top. Der Künstler ist ein Genie. 5 Sterne!",
    author: "Luca",
  },
  {
    quote:
      "Mein neues Tattoo ist beeindruckend: präzise Linien, starkes Design. Sehr professionell, hat meine Vorstellung exakt umgesetzt und mit Erfahrung perfektioniert. Studio sehr sauber, Atmosphäre angenehm – klare Empfehlung.",
    author: "Janis",
  },
];

export default function TestimonialsSection() {
  const [visible, setVisible] = useState<boolean[]>(
    new Array(TESTIMONIALS.length).fill(true)
  );
  const refs = useRef<(HTMLElement | null)[]>([]);
  const prefersReduced = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReduced.current = mq.matches;
    if (prefersReduced.current) {
      setVisible(new Array(TESTIMONIALS.length).fill(true));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = refs.current.indexOf(e.target as HTMLElement);
          if (idx !== -1) {
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const c = [...prev];
              c[idx] = true;
              return c;
            });
            obs.unobserve(e.target);
          }
        });
      },
      { root: null, threshold: 0.1, rootMargin: "50px 0px 0px 0px" }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // JSON-LD Schema for SEO
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tatts by Vali",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": TESTIMONIALS.length
      },
      "review": TESTIMONIALS.map(t => ({
        "@type": "Review",
        "reviewBody": t.quote,
        "author": {
          "@type": "Person",
          "name": t.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="pt-[clamp(64px,15vw,144px)] pb-[clamp(64px,15vw,128px)] bg-background scroll-mt-28 md:scroll-mt-36 relative"
    >
      {/* Subtle top gradient overlay for calmer transition */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-[clamp(32px,8vw,64px)] h-[clamp(32px,8vw,64px)] bg-gradient-to-b from-black/40 to-transparent"
        aria-hidden="true"
      />
      <div className="container mx-auto max-w-[clamp(320px,95vw,1280px)] px-[clamp(16px,4vw,24px)]">
        <div role="region" aria-label="Stimmen meiner Kundinnen und Kunden">
          {/* Eyebrow */}
          <p className="text-[clamp(10px,2.5vw,14px)] tracking-[0.18em] uppercase text-accent-bronze/80 mb-[clamp(4px,1vw,8px)] text-center md:text-left">
            Erinnerungen, die mit dir gehen.
          </p>

          {/* Heading */}
          <h2
            id="testimonials-heading"
            className="text-[clamp(24px,5vw,44px)] font-light text-foreground tracking-[0.01em] leading-tight mt-[clamp(4px,1vw,8px)] mb-[clamp(8px,2vw,16px)] text-center md:text-left"
          >
            Stimmen meiner Kundinnen und Kunden
          </h2>

          {/* Bronze divider */}
          <div
            className="h-[2px] w-[clamp(32px,12vw,64px)] bg-accent-bronze/90 mb-[clamp(16px,4vw,32px)] mx-auto md:mx-0"
            aria-hidden="true"
          />

          {/* Intro */}
          <p className="text-[clamp(14px,2.8vw,18px)] text-foreground-secondary font-light leading-[1.9] max-w-[clamp(50ch,75vw,65ch)] mb-[clamp(24px,6vw,48px)]">
            Jede Arbeit beginnt mit deiner Geschichte. Hier teilen Kundinnen und Kunden, wie sie den Weg von der Idee bis zum fertigen Tattoo erlebt haben – persönlich, ruhig und präzise. Genau so, wie ich arbeite.
          </p>

          {/* Grid - Semantic list mit gleicher Höhe für alle Karten */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(16px,4vw,32px)] list-none" role="list">
          {TESTIMONIALS.map((t, i) => (
            <li key={i} className="flex">
              <div
                ref={(el) => (refs.current[i] = el)}
                className={`testimonial-card group relative rounded-[14px] 
                  ring-1 ring-white/5 
                  shadow-[0_6px_20px_rgba(0,0,0,0.35)] 
                  transition-all duration-300 ease-out
                  flex-1 flex flex-col min-h-[280px]
                  ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  transitionDelay: prefersReduced.current ? "0ms" : `${i * 100}ms`,
                }}
              >
              <blockquote className="p-[clamp(16px,4vw,24px)] flex flex-col flex-1">
                {/* Quote icon with subtle animation */}
                <svg
                  aria-hidden="true"
                  className="w-[clamp(20px,5vw,24px)] h-[clamp(20px,5vw,24px)] mb-[clamp(12px,3vw,16px)] text-accent-bronze/70 transition-all duration-300 group-hover:text-accent-bronze group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.17 6C5.42 6 4 7.43 4 9.18c0 1.36.9 2.45 2.11 2.82-.39 2.64-1.48 4.2-3.36 5.33l.79 1.33C6.38 17.43 8 14.91 8 11.29V6H7.17zm9.83 0c-1.75 0-3.17 1.43-3.17 3.18 0 1.36.9 2.45 2.11 2.82-.39 2.64-1.48 4.2-3.36 5.33l.79 1.33C16.21 17.43 17.83 14.91 17.83 11.29V6H17z" />
                </svg>

                <p className="text-[clamp(14px,2.8vw,18px)] text-foreground leading-[1.6] md:leading-[1.7] font-light mb-[clamp(16px,4vw,24px)] flex-1">
                  <span aria-hidden="true">„</span>
                  {t.quote}
                  <span aria-hidden="true">"</span>
                </p>

                <footer className="pt-[clamp(12px,3vw,16px)] border-t border-white/10 mt-auto">
                  <cite className="text-[clamp(12px,2.5vw,14px)] text-foreground/90 not-italic font-medium">
                    — {t.author}
                  </cite>
                </footer>
              </blockquote>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
