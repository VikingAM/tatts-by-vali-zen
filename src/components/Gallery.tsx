import realismImage from "@/assets/gallery-realism.jpg";
import symbolicImage from "@/assets/gallery-symbolic.jpg";
import finelineImage from "@/assets/gallery-fineline.jpg";
import portraitImage from "@/assets/gallery-portrait.jpg";
import scriptImage from "@/assets/gallery-script.jpg";
import customImage from "@/assets/gallery-custom.jpg";

const galleryItems = [
  {
    image: realismImage,
    alt: "Black and gray realism tattoo detail showing photorealistic eye with incredible depth",
    titleEn: "Realism",
    captionDe: "Tiefe im Blick. Präzision in der Form."
  },
  {
    image: symbolicImage,
    alt: "Black and white symbolic geometric tattoo on forearm with sacred geometry",
    titleEn: "Symbolic",
    captionDe: "Bedeutung statt Dekoration."
  },
  {
    image: finelineImage,
    alt: "Black and white fine line minimalist botanical tattoo showing delicate precision",
    titleEn: "Fine Line",
    captionDe: "Reduktion auf das Wesentliche."
  },
  {
    image: portraitImage,
    alt: "Black and gray portrait tattoo showing emotional depth and photorealistic shading",
    titleEn: "Portrait",
    captionDe: "Jede Linie erzählt Erinnerung."
  },
  {
    image: scriptImage,
    alt: "Black and white script lettering tattoo with elegant calligraphic weight on chest",
    titleEn: "Script",
    captionDe: "Worte mit Gewicht."
  },
  {
    image: customImage,
    alt: "Black and white custom blackwork tattoo with intricate personal symbolism",
    titleEn: "Custom Work",
    captionDe: "Für die, die mehr tragen als sie zeigen."
  }
];

const Gallery = () => {
  return (
    <section 
      aria-label="Gallery – Stories on Skin" 
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="mb-6 h-px w-16 bg-accent-bronze mx-auto" />
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-wider">
            Gallery
          </h2>
          <p className="text-xl md:text-2xl text-foreground-secondary font-light italic">
            Stories on Skin.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {galleryItems.map((item, index) => (
            <div
              key={item.titleEn}
              className="group relative aspect-[4/3] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Caption Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="bg-background/40 backdrop-blur-sm p-4">
                  <div className="h-px w-8 bg-accent-bronze mb-3 transition-smooth group-hover:w-16" />
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 tracking-wide">
                    {item.titleEn}
                  </h3>
                  <p className="text-sm md:text-base text-foreground-secondary font-light">
                    {item.captionDe}
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

export default Gallery;
