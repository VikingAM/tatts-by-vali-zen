import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background text-foreground">
      <section className="pt-[clamp(64px,15vw,144px)] pb-[clamp(64px,15vw,128px)]">
        <div className="container mx-auto max-w-[clamp(320px,95vw,1024px)] px-[clamp(16px,4vw,24px)]">
          {/* Eyebrow + Title */}
          <p className="text-[clamp(10px,2.5vw,14px)] tracking-[0.18em] uppercase text-accent-bronze/80 mb-[clamp(4px,1vw,8px)]">
            Rechtliche Angaben
          </p>
          <h1 className="text-[clamp(24px,5vw,44px)] font-light leading-tight">Impressum</h1>
          <div className="h-[2px] w-[clamp(32px,12vw,64px)] bg-accent-bronze/90 my-[clamp(16px,4vw,24px)]" aria-hidden="true" />

          {/* Content */}
          <div className="space-y-[clamp(24px,6vw,32px)] text-[clamp(14px,2.8vw,18px)] leading-[1.9] text-foreground-secondary">
            <div>
              <h2 className="text-foreground font-medium mb-[clamp(6px,1.5vw,8px)] text-[clamp(16px,3.5vw,20px)]">Verantwortlich für den Inhalt</h2>
              <p>
                Valerio Seratore<br />
                Tatts by Vali<br />
                Schulhausstrasse 15<br />
                5113 Holderbank, Schweiz
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-medium mb-[clamp(6px,1.5vw,8px)] text-[clamp(16px,3.5vw,20px)]">Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:vali@tattsbyvali.ch" className="underline hover:no-underline">vali@tattsbyvali.ch</a><br />
                Instagram: <a href="https://www.instagram.com/tatts_byvali" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">@tatts_byvali</a>
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-medium mb-[clamp(6px,1.5vw,8px)] text-[clamp(16px,3.5vw,20px)]">Rechtsform</h2>
              <p>Einzelunternehmen.</p>
            </div>

            <div>
              <h2 className="text-foreground font-medium mb-2">Haftungsausschluss</h2>
              <p>
                Alle Inhalte wurden mit grösster Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr übernommen. 
                Haftungsansprüche aufgrund von Schäden materieller oder immaterieller Art, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen verursacht wurden, sind ausgeschlossen.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-medium mb-2">Urheberrecht</h2>
              <p>
                Sämtliche Bilder, Grafiken und Texte auf dieser Website unterliegen dem Urheberrecht von Valerio Seratore (Tatts by Vali), sofern nicht anders angegeben. 
                Jede Verwendung ausserhalb der engen Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-medium mb-2">Verweise & Links</h2>
              <p>
                Für Inhalte externer Websites, auf die verlinkt wird, wird keine Verantwortung übernommen. 
                Für den Inhalt verlinkter Seiten sind ausschliesslich deren Betreiber verantwortlich.
              </p>
            </div>

            <div>
              <p className="text-sm text-foreground/70">Stand: {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}