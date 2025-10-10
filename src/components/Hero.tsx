import heroImage from "@/assets/hero-tattoo-hands.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Tattoo artist's hands at work, demonstrating precision and craftsmanship"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 h-px w-24 bg-accent-bronze" />
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
            Precision <br />
            <span className="text-bronze">with Soul</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary font-light mb-8 max-w-2xl leading-relaxed">
            Every line tells a story.
          </p>
          <p className="text-base md:text-lg text-foreground-secondary font-light mb-12 max-w-2xl">
            Schwarz-Weiss Realism. Präzise, ruhig, ehrlich.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-foreground transition-smooth hover:bg-foreground hover:text-background"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
