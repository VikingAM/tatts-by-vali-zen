import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-5xl px-6 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-light tracking-wider-xl transition-smooth hover:text-accent-bronze"
            aria-label="Tatts by Vali home"
          >
            Tatts by Vali
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm tracking-wide transition-smooth hover:text-accent-bronze"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm tracking-wide transition-smooth hover:text-accent-bronze"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm tracking-wide transition-smooth hover:text-accent-bronze"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm tracking-wide px-6 py-2 border border-foreground-secondary transition-smooth hover:border-accent-bronze hover:text-accent-bronze"
            >
              Book a Session
            </button>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="md:hidden text-sm tracking-wide transition-smooth hover:text-accent-bronze"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
