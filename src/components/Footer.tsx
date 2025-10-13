import React from "react";
import logo from "@/assets/Logo_Tattsbyvali_wBackground.png";

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Get header height for offset
      const header = document.querySelector('header') || document.querySelector('nav');
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 16; // 16px additional offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      // Wenn Element nicht gefunden wird, zur Hauptseite navigieren
      window.location.href = `/#${sectionId}`;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-24 bg-background">
      {/* Bronze Trennlinie oben */}
      <div className="border-t border-accent-bronze/20" aria-hidden="true" />
      
      <div className="container mx-auto max-w-[clamp(320px,95vw,1280px)] px-[clamp(16px,4vw,24px)] pt-[clamp(48px,12vw,80px)] pb-[clamp(24px,6vw,32px)]">
        {/* Hauptbereich: 4-Spalten Grid (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-x-[clamp(16px,4vw,32px)] gap-y-[clamp(24px,6vw,48px)] mb-[clamp(24px,6vw,48px)]">
          
          {/* Spalte 1 – Brand (Logo + Claim) */}
          <div className="xl:col-span-5">
            <img
              src={logo}
              alt="Tatts by Vali – Logo"
              className="h-[clamp(48px,12vw,80px)] w-auto mb-[clamp(16px,4vw,24px)]"
              loading="lazy"
            />
            <p className="text-[clamp(14px,2.8vw,18px)] font-light text-foreground mb-[clamp(8px,2vw,12px)] max-w-[clamp(50ch,75vw,60ch)]">
              Feine Linien. Klare Form. Deine Geschichte.
            </p>
            <p className="text-[clamp(13px,2.6vw,16px)] font-light leading-relaxed text-foreground-secondary max-w-[clamp(50ch,75vw,65ch)]">
              Du bringst die Idee. Ich forme daraus einen stimmigen Entwurf – sorgfältig entwickelt und präzise gestochen, damit er dich lange begleitet. Ich höre zu, stelle die richtigen Fragen und gebe jedem Detail die Zeit, die es braucht.
            </p>
          </div>

          {/* Spalte 2 – Schnellzugriff */}
          <nav className="xl:col-span-2" aria-label="Footer Navigation">
            <h3 className="text-[clamp(10px,2.5vw,12px)] font-semibold tracking-[0.2em] uppercase text-accent-bronze/90 mb-[clamp(12px,3vw,20px)]">
              Schnellzugriff
            </h3>
            <ul className="space-y-[clamp(8px,2vw,12px)] text-[clamp(12px,2.5vw,14px)]">
              <li>
                <a 
                  href="#ueber-mich" 
                  onClick={(e) => scrollToSection(e, "ueber-mich")} 
                  className="text-foreground-secondary hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Über mich
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, "services")} 
                  className="text-foreground-secondary hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Stile
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => scrollToSection(e, "gallery")} 
                  className="text-foreground-secondary hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Galerie
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, "contact")} 
                  className="text-foreground-secondary hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>

          {/* Spalte 3 – Rechtliches */}
          <div className="xl:col-span-2">
            <h3 className="text-[clamp(10px,2.5vw,12px)] font-semibold tracking-[0.2em] uppercase text-accent-bronze/90 mb-[clamp(12px,3vw,20px)]">
              Rechtliches
            </h3>
            <ul className="space-y-[clamp(8px,2vw,12px)] text-[clamp(12px,2.5vw,14px)]">
              <li>
                <a 
                  href="/impressum" 
                  className="text-foreground-secondary hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a 
                  href="/agb" 
                  className="text-foreground-secondary hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  AGB
                </a>
              </li>
              <li>
                <a 
                  href="/datenschutz" 
                  className="text-foreground-secondary hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 4 – Kontakt */}
          <div className="xl:col-span-3">
            <h3 className="text-[clamp(10px,2.5vw,12px)] font-semibold tracking-[0.2em] uppercase text-accent-bronze/90 mb-[clamp(12px,3vw,20px)]">
              Kontakt
            </h3>
            <address className="text-[clamp(12px,2.5vw,14px)] text-foreground-secondary not-italic space-y-[clamp(6px,1.5vw,8px)]">
              <p className="font-medium text-foreground">Valerio Seratore</p>
              <p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Schulhausstrasse+15,+5113+Holderbank,+Schweiz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Schulhausstrasse 15<br />
                  5113 Holderbank, Schweiz
                </a>
              </p>
              <p className="pt-2">
                <a 
                  href="mailto:vali@tattsbyvali.ch" 
                  className="hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  vali@tattsbyvali.ch
                </a>
              </p>
              <p>
                <a 
                  href="https://instagram.com/tatts_byvali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent-bronze hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  @tatts_byvali
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright-Zeile */}
        <div className="border-t border-white/5 pt-[clamp(16px,4vw,32px)]">
          <p className="text-[clamp(10px,2.5vw,12px)] text-foreground-secondary text-center sm:text-left">
            © {currentYear} Tatts by Vali. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
