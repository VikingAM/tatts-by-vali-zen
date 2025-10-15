// Responsive Banner images for optimal performance
import heroWebp480 from "@/assets/Banner-480w.webp";
import heroWebp768 from "@/assets/Banner-768w.webp";
import heroWebp1024 from "@/assets/Banner-1024w.webp";
import heroPng from "@/assets/Banner.png";
import "@/styles/hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative h-[clamp(600px,85vh,900px)] w-full flex items-center justify-center bg-black text-left overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-black/30 before:pointer-events-none before:z-[1]"
    >
      {/* Background Image - Responsive WebP for optimal performance */}
      <picture>
        <source
          type="image/webp"
          srcSet={`${heroWebp480} 480w, ${heroWebp768} 768w, ${heroWebp1024} 1024w`}
          sizes="100vw"
        />
        <img
          src={heroPng}
          alt="Tattoo Studio Holderbank"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.9] contrast-[1.2]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width="1024"
          height="683"
        />
      </picture>

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-[1]" />

      {/* Content - Container centered, text left-aligned */}
      <div className="relative z-20 max-w-[clamp(320px,85vw,700px)] mx-auto px-[clamp(16px,5vw,48px)]">
        {/* Eyebrow (neutral, NOT bronze) */}
        <p className="hero-eyebrow text-[clamp(10px,2.5vw,14px)] tracking-[0.18em] uppercase text-[#E6E0D6]/85 mb-[clamp(8px,2vw,12px)]">
          Art beyond ink.
        </p>

        {/* Bronze line ABOVE headline */}
        <div className="hero-line-top h-px w-[clamp(32px,12vw,64px)] bg-[#B47A4E] mb-[clamp(12px,3vw,16px)]" aria-hidden="true" />

        {/* Headline - single line, bronze */}
        <h1
          id="hero-heading"
          className="hero-heading font-display font-light text-[clamp(24px,8vw,72px)] tracking-[0.0025em] leading-[1.03] text-[#B47A4E] whitespace-nowrap mb-[clamp(12px,3vw,16px)]"
        >
          {"Precision\u00A0with\u00A0Soul"}
        </h1>

        {/* Bronze line BELOW headline */}
        <div className="hero-line-bottom h-px w-[clamp(32px,12vw,64px)] bg-[#B47A4E] mb-[clamp(16px,4vw,20px)]" aria-hidden="true" />

        {/* Verse - Enhanced legibility */}
        <div className="hero-subcopy max-w-[clamp(28ch,80vw,42ch)] space-y-[clamp(6px,1.5vw,8px)] text-[clamp(14px,2.8vw,18px)] leading-[1.6] tracking-normal text-neutral-200/90 font-normal">
          <p className="hero-line">In jeder Linie ein Gedanke.</p>
          <p className="hero-line">In jeder Bewegung Bedeutung.</p>
          <p className="hero-line">In der Stille entsteht Wahrheit.</p>
          <p className="hero-line">Im Detail liegt die Seele.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
