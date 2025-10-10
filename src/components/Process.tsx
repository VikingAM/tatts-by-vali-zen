import processImage from "@/assets/process-tools.jpg";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Wir sprechen über Ihre Idee. Keine Vorlagen, keine Eile. Nur klare Gedanken.",
    },
    {
      number: "02",
      title: "Design",
      description: "Ich zeichne für Sie. Das Design passt sich Ihrem Körper an, nicht umgekehrt.",
    },
    {
      number: "03",
      title: "Execution",
      description: "Ruhige Konzentration. Präzise Arbeit. Jede Linie sitzt.",
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <div className="h-px w-16 bg-accent-bronze mb-8" />
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Process
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl">
            Drei Schritte. Keine Kompromisse. Nur saubere Arbeit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          <div className="relative">
            <img
              src={processImage}
              alt="Professional tattoo tools and ink preparation, showcasing precision equipment"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="text-bronze text-2xl font-light flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl mb-2 font-normal">{step.title}</h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <blockquote className="text-2xl md:text-3xl font-light text-foreground-secondary italic max-w-3xl">
            "Every line tells a story. Make sure yours is worth telling."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Process;
