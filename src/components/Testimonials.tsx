const testimonials = [
  {
    quoteEn: "He took the time to understand my story before touching a needle.",
    quoteDe: "Er hat meine Geschichte verstanden, bevor er die Nadel berührt hat.",
    name: "Lena"
  },
  {
    quoteEn: "The calm in his studio made me forget the world outside.",
    quoteDe: "Die Ruhe in seinem Atelier hat alles andere ausgeblendet.",
    name: "Marko"
  },
  {
    quoteEn: "It wasn't just a tattoo. It felt like closure.",
    quoteDe: "Es war nicht nur ein Tattoo. Es war ein Abschluss.",
    name: "Nina"
  },
  {
    quoteEn: "Every line had intention. Nothing felt random.",
    quoteDe: "Jede Linie hatte Bedeutung. Nichts war Zufall.",
    name: "Jonas"
  }
];

const Testimonials = () => {
  return (
    <section 
      aria-label="Testimonials – Client Stories" 
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="mb-6 h-px w-16 bg-accent-bronze mx-auto" />
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-wider">
            What People Carry Forever
          </h2>
          <p className="text-xl md:text-2xl text-foreground-secondary font-light">
            Echte Stimmen. Echte Geschichten.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <blockquote className="space-y-6">
                {/* English Quote */}
                <p className="text-lg md:text-xl text-foreground font-light italic leading-relaxed">
                  "{testimonial.quoteEn}"
                </p>
                
                {/* German Quote */}
                <p className="text-base md:text-lg text-foreground-secondary font-light italic leading-relaxed">
                  „{testimonial.quoteDe}"
                </p>

                {/* Divider */}
                <div className="h-px w-10 bg-accent-bronze" />

                {/* Name */}
                <p className="text-sm md:text-base text-foreground-secondary tracking-wider">
                  — {testimonial.name}
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
