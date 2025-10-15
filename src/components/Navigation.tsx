import { useEffect, useRef, useState } from "react";
import logoWebp from "@/assets/Logo_Tattsbyvali_Siegel.webp";
import logoPng from "@/assets/Logo_Tattsbyvali_Siegel.png";
import CTAButton from "@/components/ui/CTAButton";

// Hamburger Icon Component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-[clamp(20px,5vw,24px)] h-[clamp(20px,5vw,24px)] transition-all duration-300 ${
      isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {isOpen ? (
      // X Icon (when open)
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      // Hamburger Icon (when closed)
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
);

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 10;
        setScrolled((prev) => (prev !== next ? next : prev));
        
        // Close mobile menu when scrolling
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
        
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Body scroll lock when mobile menu is open - Verbessert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // ESC Key Support für Mobile Menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    const ids = ["hero", "ueber-mich", "services", "gallery", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the intersecting entry with the highest ratio
        let best: IntersectionObserverEntry | null = null;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
        if (best) {
          const id = best.target.id;
          setActiveSection((prev) => (prev !== id ? id : prev));
        }
      },
      { root: null, rootMargin: "-20% 0px -40% 0px", threshold: 0.25 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      // Wenn Element nicht gefunden wird, zur Hauptseite navigieren
      window.location.href = `/#${id}`;
      return;
    }
    const navHeight = navRef.current?.clientHeight ?? 0;
    const yRaw = element.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    const y = Math.max(0, Math.min(yRaw, maxY));
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-accent-bronze/40 shadow-lg shadow-black/20"
          : "bg-background/95 backdrop-blur-sm border-b border-white/10"
      }`}
      aria-label="Primary navigation"
    >
      <div className={`container mx-auto max-w-[clamp(320px,95vw,1200px)] ${scrolled ? "px-[clamp(12px,3vw,16px)] py-[clamp(6px,1.5vw,8px)]" : "px-[clamp(12px,3vw,16px)] py-[clamp(12px,3vw,16px)]"}`}>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            aria-label="Go to hero"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-sm"
            title="Go to hero"
          >
            <picture>
              <source type="image/webp" srcSet={logoWebp} />
              <img
                src={logoPng}
                alt="Tatts by Vali Siegel"
                width={80}
                height={80}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className={`${scrolled ? "h-[clamp(32px,8vw,48px)]" : "h-[clamp(40px,10vw,56px)]"} w-auto px-[clamp(4px,1vw,8px)] opacity-90 hover:opacity-100 transition-[height,transform,opacity] duration-300 ${
                  reducedMotion ? "hover:drop-shadow-[0_0_2px_rgba(164,107,62,0.25)]" : "hover:drop-shadow-[0_0_4px_rgba(164,107,62,0.5)]"
                } ${reducedMotion ? "" : "hover:scale-105"}`}
              />
            </picture>
          </button>

          <div className="hidden md:flex items-center gap-[clamp(12px,3vw,20px)]">
            <button
              type="button"
              onClick={() => scrollToSection("ueber-mich")}
              aria-label="Go to about"
              aria-current={activeSection === "ueber-mich" ? "page" : undefined}
              className={`relative text-[clamp(12px,2.5vw,14px)] tracking-wide transition-smooth hover:text-accent-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-sm ${
                activeSection === "ueber-mich" ? "text-accent-bronze after:w-[clamp(16px,4vw,20px)] after:opacity-100" : "after:w-0 after:opacity-0"
              } after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[clamp(4px,1vw,8px)] after:h-[2px] after:bg-accent-bronze after:transition-all after:duration-300`}
            >
              Über mich
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              aria-label="Zu Stile"
              aria-current={activeSection === "services" ? "page" : undefined}
              className={`relative text-[clamp(12px,2.5vw,14px)] tracking-wide transition-smooth hover:text-accent-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-sm ${
                activeSection === "services" ? "text-accent-bronze after:w-[clamp(16px,4vw,20px)] after:opacity-100" : "after:w-0 after:opacity-0"
              } after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[clamp(4px,1vw,8px)] after:h-[2px] after:bg-accent-bronze after:transition-all after:duration-300`}
            >
              Stile
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("gallery")}
              aria-label="Go to gallery"
              aria-current={activeSection === "gallery" ? "page" : undefined}
              className={`relative text-[clamp(12px,2.5vw,14px)] tracking-wide transition-smooth hover:text-accent-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-sm ${
                activeSection === "gallery" ? "text-accent-bronze after:w-[clamp(16px,4vw,20px)] after:opacity-100" : "after:w-0 after:opacity-0"
              } after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[clamp(4px,1vw,8px)] after:h-[2px] after:bg-accent-bronze after:transition-all after:duration-300`}
            >
              Galerie
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              aria-label="Book a session"
              className="text-[clamp(11px,2.2vw,14px)] tracking-wide px-[clamp(8px,2vw,20px)] py-[clamp(4px,1vw,6px)] border border-accent-bronze transition-smooth hover:text-accent-bronze hover:border-accent-bronze hover:bg-accent-bronze/10 hover:shadow-[0_0_8px_rgba(164,107,62,0.5)] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            >
              Termin anfragen
            </button>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Menu schließen" : "Menu öffnen"}
            aria-expanded={isMobileMenuOpen}
            className={`cta-button md:hidden p-[clamp(8px,2vw,12px)] rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-1 focus-visible:ring-offset-background ${
              isMobileMenuOpen 
                ? 'bg-accent-bronze/20 hover:bg-accent-bronze/30' 
                : 'hover:bg-white/10'
            }`}
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </div>

        {/* Mobile Menu - Veredelt nach Spezifikation */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay md:hidden"
            role="dialog" 
            aria-modal="true" 
            aria-label="Navigation"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <div className="mobile-menu-panel">
              {/* Header */}
              <div className="mobile-menu-header">
                <picture>
                  <source type="image/webp" srcSet={logoWebp} />
                  <img
                    src={logoPng}
                    alt="Tatts by Vali Siegel"
                    width={80}
                    height={80}
                    className="mobile-menu-logo"
                  />
                </picture>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Menü schließen"
                  className="mobile-menu-close"
                >
                  ×
                </button>
              </div>
              
              {/* Navigation */}
              <nav aria-label="Mobile Navigation">
                <ul className="mobile-menu-nav">
                  <li className="mobile-menu-item">
                    <button
                      onClick={() => {
                        scrollToSection("ueber-mich");
                        setIsMobileMenuOpen(false);
                      }}
                      className="mobile-menu-link"
                    >
                      Über mich
                    </button>
                  </li>
                  
                  <hr className="mobile-menu-divider" aria-hidden="true" />
                  
                  <li className="mobile-menu-item">
                    <button
                      onClick={() => {
                        scrollToSection("services");
                        setIsMobileMenuOpen(false);
                      }}
                      className="mobile-menu-link"
                    >
                      Stile
                    </button>
                  </li>
                  
                  <hr className="mobile-menu-divider" aria-hidden="true" />
                  
                  <li className="mobile-menu-item">
                    <button
                      onClick={() => {
                        scrollToSection("gallery");
                        setIsMobileMenuOpen(false);
                      }}
                      className="mobile-menu-link"
                    >
                      Galerie
                    </button>
                  </li>
                </ul>
              </nav>
              
              {/* CTA Button */}
              <div className="mobile-menu-cta">
                <CTAButton
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMobileMenuOpen(false);
                  }}
                  label="Termin anfragen"
                  ariaLabel="Termin anfragen und Menu schließen"
                  className="w-full justify-center"
                />
              </div>
              
              {/* Subline */}
              <p className="mobile-menu-subline">
                Feine Linien. Klare Form. Deine Geschichte.
              </p>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navigation;
