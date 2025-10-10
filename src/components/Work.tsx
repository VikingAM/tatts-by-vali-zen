import tattooDetail from "@/assets/tattoo-detail.jpg";

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-background-secondary">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <div className="h-px w-16 bg-accent-bronze mb-8" />
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Work
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl">
            Ausgewählte Arbeiten. Jede Tätowierung ist individuell.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src={tattooDetail}
              alt="Detailed black and white tattoo work showing intricate linework and precision"
              className="w-full h-full object-cover transition-smooth hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center border-t border-border pt-12">
            <div>
              <div className="text-4xl font-light text-bronze mb-2">8+</div>
              <div className="text-sm text-foreground-secondary tracking-wide">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl font-light text-bronze mb-2">500+</div>
              <div className="text-sm text-foreground-secondary tracking-wide">
                Completed Works
              </div>
            </div>
            <div>
              <div className="text-4xl font-light text-bronze mb-2">100%</div>
              <div className="text-sm text-foreground-secondary tracking-wide">
                Dedication
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
