import realismImage from "@/assets/style-realism.jpg";
import scriptImage from "@/assets/style-script.jpg";
import finelineImage from "@/assets/style-fineline.jpg";
import symbolicImage from "@/assets/style-symbolic.jpg";

const styles = [
  {
    title: "Realism",
    subtitle: "Präzise Details. Lebendige Tiefe.",
    image: realismImage,
    alt: "Black and white realism tattoo detail showing photorealistic depth and shading"
  },
  {
    title: "Script",
    subtitle: "Elegante Schrift. Klare Botschaft.",
    image: scriptImage,
    alt: "Black and white script lettering tattoo with elegant calligraphic curves"
  },
  {
    title: "Fine Line",
    subtitle: "Feine Linien. Stille Eleganz.",
    image: finelineImage,
    alt: "Black and white fine line tattoo showing delicate minimal botanical linework"
  },
  {
    title: "Symbolic",
    subtitle: "Symbole mit Seele. Bedeutung im Detail.",
    image: symbolicImage,
    alt: "Black and white symbolic tattoo with meaningful geometric iconography"
  }
];

const Styles = () => {
  return (
    <section 
      aria-label="Tattoo Styles Overview" 
      className="relative py-16 md:py-28 bg-background"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {styles.map((style, index) => (
            <div
              key={style.title}
              className="group relative aspect-[16/10] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={style.image}
                alt={style.alt}
                className="absolute inset-0 w-full h-full object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/70" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="relative">
                  <div className="mb-3 h-px w-12 bg-accent-bronze" />
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-wider mb-2">
                    {style.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground-secondary font-light">
                    {style.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Styles;
