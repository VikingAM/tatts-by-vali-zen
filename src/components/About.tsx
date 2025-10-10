import valiPortrait from "@/assets/vali-portrait.jpg";

const About = () => {
  return (
    <section 
      id="about"
      aria-label="About Vali – Personality and Story" 
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image - Left Side (45% width, fade from left) */}
          <div 
            className="md:col-span-5 animate-fade-in"
          >
            <img
              src={valiPortrait}
              alt="Tattoo artist Vali working in calm concentration"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Text - Right Side (55% width, fade from right) */}
          <div 
            className="md:col-span-7 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <div className="mb-6 h-px w-16 bg-accent-bronze" />
            
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-wider">
              About
            </h2>
            
            <p className="text-lg md:text-xl text-foreground-secondary font-light mb-8 italic">
              Jede Linie ist Teil meiner eigenen Geschichte.
            </p>

            <div className="space-y-6 text-base md:text-lg text-foreground-secondary font-light leading-relaxed">
              <p>
                Seit Jahren tätowiere ich in Zürich.<br />
                Für mich ist Tätowieren keine Mode, sondern eine Form, das Unsichtbare sichtbar zu machen.<br />
                Ich arbeite mit Präzision, aber ohne Eile. Jede Linie hat ihren Platz.
              </p>

              <p>
                Mein Studio ist kein Laden – es ist ein Raum für Konzentration und Vertrauen.<br />
                Hier entstehen Arbeiten, die bleiben sollen.
              </p>

              <p>
                Ich glaube an die Kraft von Stille, an Respekt vor der Haut,<br />
                und daran, dass wahre Stärke leise ist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
