import approachImage from "@/assets/approach-hands.jpg";

const MyApproach = () => {
  return (
    <section 
      aria-label="My Approach – Philosophy of Tattooing" 
      className="relative py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image - Left Side (Fade from right) */}
          <div 
            className="order-2 md:order-1 animate-fade-in"
            style={{ animationDelay: '150ms' }}
          >
            <img
              src={approachImage}
              alt="Tattoo artist focusing in silence while working"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Text - Right Side (Fade from left) */}
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="mb-6 h-px w-16 bg-accent-bronze" />
            
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-wider">
              My Approach
            </h2>
            
            <p className="text-lg md:text-xl text-foreground-secondary font-light mb-8 italic">
              Tätowieren ist für mich eine Form des Zuhörens.
            </p>

            <div className="space-y-6 text-base md:text-lg text-foreground-secondary font-light leading-relaxed">
              <p>
                Jede Linie hat Bedeutung.<br />
                Ich arbeite nicht, um zu dekorieren, sondern um zu verstehen.<br />
                Jede Tätowierung entsteht aus einem Dialog – zwischen Haut, Erinnerung und Stille.
              </p>

              <p>
                Präzision bedeutet für mich Kontrolle ohne Härte.<br />
                Ich nehme mir Zeit für jeden Entwurf, für jedes Gespräch, für jedes Detail.
              </p>

              <p>
                Was bleibt, ist nicht nur Farbe auf Haut, sondern ein stiller Moment, der sichtbar wird.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyApproach;
