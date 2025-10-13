import React from "react";
import valerioWebp from "@/assets/Valerio.webp";

/**
 * AboutSection Component
 * Direct implementation without wrapper component
 */
const AboutSection = () => {
  return (
    <section
      id="ueber-mich"
      aria-labelledby="about-heading"
      className="pt-[clamp(64px,15vw,144px)] pb-[clamp(64px,15vw,128px)] bg-background scroll-mt-28 md:scroll-mt-36 relative"
    >
      {/* Bronze Trennlinie oben */}
      <div className="border-t border-accent-bronze/20" aria-hidden="true" />
      
      <div className="container mx-auto max-w-[clamp(320px,95vw,1280px)] px-[clamp(16px,4vw,24px)]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center md:text-left mb-[clamp(32px,8vw,64px)]">
            <p className="text-[clamp(12px,2.5vw,14px)] tracking-[0.15em] uppercase text-accent-bronze/95 mb-4 md:mb-6 font-medium">
              JEDE LINIE BEGINNT MIT VERTRAUEN.
            </p>
            <h2 id="about-heading" className="text-[clamp(28px,6vw,42px)] font-light text-foreground leading-[1.2] mb-7">
              Über mich
            </h2>
            {/* Bronze Trennlinie unter Titel */}
            <div className="h-[2px] w-16 bg-accent-bronze/90 mb-7 mx-auto md:mx-0" aria-hidden="true" />
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(32px,8vw,64px)] items-start">
            {/* Text Content */}
            <div className="space-y-[clamp(20px,5vw,32px)]">
              <div className="space-y-[clamp(16px,4vw,24px)]">
                <p className="text-[clamp(15px,2.8vw,18px)] leading-[1.9] text-foreground-secondary font-light">
                  Ich bin Valerio. Ich tätowiere seit einigen Jahren in Holderbank. Für mich ist es mehr als ein Beruf – es ist etwas, das mich erfüllt und ruhig macht. Ich mag den Moment, wenn aus einer Idee langsam etwas Echtes entsteht. Etwas, das bleibt und wirklich zu dir passt.
                </p>
                <p className="text-[clamp(15px,2.8vw,18px)] leading-[1.9] text-foreground-secondary font-light">
                  Ich arbeite zuhause in einem privaten Studio. Für jedes Gespräch und jeden Entwurf nehme ich mir Zeit, bis alles stimmt. Qualität entsteht für mich nicht durch Tempo, sondern durch Aufmerksamkeit.
                </p>
                <p className="text-[clamp(15px,2.8vw,18px)] leading-[1.9] text-foreground-secondary font-light">
                  Wichtig ist mir, dass du dich wohlfühlst. Wenn du mit einem guten Gefühl gehst und dein Tattoo dich glücklich macht, dann hat es sich gelohnt.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
                <img
                  src={valerioWebp}
                  alt="Valerio tätowiert im privaten Studio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="900"
                  height="1125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
