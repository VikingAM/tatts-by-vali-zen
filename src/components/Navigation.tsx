import { useEffect, useRef, useState } from "react";
// Using standard img to avoid Next-specific imports in this Vite/React setup
import logo from "@/assets/Logo_Tattsbyvali_Siegel.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [reducedMotion, setReducedMotion] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 10;
        setScrolled((prev) => (prev !== next ? next : prev));
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "services", "process", "gallery", "contact"];
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
    if (!element) return;
    const navHeight = navRef.current?.clientHeight ?? 0;
    const yRaw = element.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    const y = Math.max(0, Math.min(yRaw, maxY));
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth transition-colors duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-sm border-b border-[#A46B3E]/30"
          : "bg-background/95 backdrop-blur-sm border-b border-white/10"
      }`}
      aria-label="Primary navigation"
    >
      <div className={`container mx-auto max-w-6xl ${scrolled ? "px-4 py-2" : "px-4 py-4"}`}>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            aria-label="Go to hero"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent-bronze))] focus-visible:ring-offset-0 rounded-sm"
            title="Go to hero"
          >
            <img
              src={logo}
              alt="Tatts by Vali Siegel"
              width={80}
              height={56}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className={`${scrolled ? "h-12" : "h-14"} w-auto px-2 opacity-90 hover:opacity-100 transition-[height,transform,opacity] duration-300 ${
                reducedMotion ? "hover:drop-shadow-[0_0_2px_#A46B3E40]" : "hover:drop-shadow-[0_0_4px_#A46B3E80]"
              } ${reducedMotion ? "" : "hover:scale-105"}`}
            />
          </button>

          <div className="hidden md:flex items-center gap-5 lg:gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              aria-label="Go to about"
              aria-current={activeSection === "about" ? "page" : undefined}
              className={`relative text-sm tracking-wide transition-smooth hover:text-[#A46B3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(164,107,62,0.5)] focus-visible:ring-offset-0 rounded-sm ${
                activeSection === "about" ? "text-[#A46B3E] after:w-5 after:opacity-100" : "after:w-0 after:opacity-0"
              } after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[2px] after:bg-[#A46B3E] after:transition-all after:duration-300`}
            >
              Über mich
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              aria-label="Go to services"
              aria-current={activeSection === "services" ? "page" : undefined}
              className={`relative text-sm tracking-wide transition-smooth hover:text-[#A46B3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(164,107,62,0.5)] focus-visible:ring-offset-0 rounded-sm ${
                activeSection === "services" ? "text-[#A46B3E] after:w-5 after:opacity-100" : "after:w-0 after:opacity-0"
              } after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[2px] after:bg-[#A46B3E] after:transition-all after:duration-300`}
            >
              Angebot
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("process")}
              aria-label="Go to process"
              aria-current={activeSection === "process" ? "page" : undefined}
              className={`relative text-sm tracking-wide transition-smooth hover:text-[#A46B3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(164,107,62,0.5)] focus-visible:ring-offset-0 rounded-sm ${
                activeSection === "process" ? "text-[#A46B3E] after:w-5 after:opacity-100" : "after:w-0 after:opacity-0"
              } after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[2px] after:bg-[#A46B3E] after:transition-all after:duration-300`}
            >
              Ablauf
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("gallery")}
              aria-label="Go to gallery"
              aria-current={activeSection === "gallery" ? "page" : undefined}
              className={`relative text-sm tracking-wide transition-smooth hover:text-[#A46B3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(164,107,62,0.5)] focus-visible:ring-offset-0 rounded-sm ${
                activeSection === "gallery" ? "text-[#A46B3E] after:w-5 after:opacity-100" : "after:w-0 after:opacity-0"
              } after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[2px] after:bg-[#A46B3E] after:transition-all after:duration-300`}
            >
              Galerie
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              aria-label="Book a session"
              className="text-sm tracking-wide px-5 py-1.5 border border-[#A46B3E] transition-smooth hover:text-[#A46B3E] hover:border-[#A46B3E] hover:bg-[rgba(164,107,62,0.1)] hover:shadow-[0_0_8px_#A46B3E80] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(164,107,62,0.5)] focus-visible:ring-offset-0"
            >
              Termin anfragen
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            aria-label="Contact"
            className="md:hidden text-sm tracking-wide transition-smooth hover:text-[#A46B3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(164,107,62,0.5)] focus-visible:ring-offset-0 rounded-sm min-h-[40px]"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
