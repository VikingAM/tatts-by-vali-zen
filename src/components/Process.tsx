import consultationImage from "@/assets/process-consultation.jpg";
import designImage from "@/assets/process-design.jpg";
import executionImage from "@/assets/process-execution.jpg";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Wir sprechen über Ihre Idee. Keine Vorlagen, kein Druck. Nur klare Gedanken.",
    image: consultationImage,
    alt: "Black and white photograph of hands in consultation, showing dialogue and trust"
  },
  {
    number: "02",
    title: "Design",
    description: "Ich zeichne für Sie. Das Motiv folgt Ihrer Geschichte – nicht umgekehrt.",
    image: designImage,
    alt: "Black and white photograph of hands sketching tattoo design with precision"
  },
  {
    number: "03",
    title: "Execution",
    description: "Ruhige Konzentration. Präzise Arbeit. Jede Linie sitzt.",
    image: executionImage,
    alt: "Black and white photograph of tattoo machine in focused hands working on skin"
  }
];

const Process = () => {
  return (
    <section 
      id="process"
      aria-label="Tattoo Process – How I Work" 
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="mb-6 h-px w-16 bg-accent-bronze mx-auto" />
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-wider">
            Process
          </h2>
          <p className="text-xl md:text-2xl text-foreground-secondary font-light">
            Drei Schritte. Keine Kompromisse.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Image */}
              <div className="mb-6 aspect-square overflow-hidden">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Step Number */}
              <div className="text-accent-bronze text-xl md:text-2xl font-light mb-4 tracking-wider">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 tracking-wide">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm md:text-base text-foreground-secondary font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center border-t border-border pt-12">
          <blockquote className="text-xl md:text-2xl font-light text-foreground-secondary italic max-w-3xl mx-auto">
            "Every tattoo is a story — told with precision and silence."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Process;
