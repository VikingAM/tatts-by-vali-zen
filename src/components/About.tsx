import artistPortrait from "@/assets/artist-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background-secondary">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="h-px w-16 bg-accent-bronze mb-8" />
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              About
            </h2>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                Jede Tätowierung ist ein Dialog zwischen Haut und Tinte. Ich arbeite mit Präzision,
                aber ohne Eile. Jeder Strich wird durchdacht, jede Linie hat ihren Platz.
              </p>
              <p>
                Meine Arbeit folgt keinem Trend. Sie folgt der Form des Körpers, der Geschichte
                meiner Kunden und dem Respekt vor dem Medium.
              </p>
              <p>
                Seit Jahren tätowiere ich in Zürich. Mein Studio ist kein Laufhaus, sondern ein
                Raum für konzentrierte Arbeit. Hier entstehen Tätowierungen, die bleiben sollen.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={artistPortrait}
              alt="Vali, tattoo artist, focused at work in the studio"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
