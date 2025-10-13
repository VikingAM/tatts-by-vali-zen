import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  const today = new Date().toLocaleDateString("de-CH", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="container mx-auto max-w-[clamp(320px,95vw,1024px)] px-[clamp(16px,4vw,24px)] py-[clamp(48px,12vw,96px)]">
          <p className="text-[clamp(10px,2.5vw,14px)] tracking-[0.18em] uppercase text-accent-bronze/80 mb-[clamp(4px,1vw,8px)]">
            Rechtliches
          </p>
          <h1 className="text-[clamp(24px,5vw,36px)] font-light mb-[clamp(16px,4vw,24px)]">
            Datenschutzerklärung
          </h1>
          <div
            className="h-[2px] w-[clamp(32px,12vw,64px)] bg-accent-bronze/90 mb-[clamp(16px,4vw,32px)]"
            aria-hidden="true"
          />

          <div className="space-y-[clamp(24px,6vw,32px)] text-[clamp(14px,2.8vw,18px)] leading-relaxed text-foreground-secondary">
            <section>
              <h2 className="text-foreground text-[clamp(16px,3.5vw,20px)] font-medium mb-[clamp(6px,1.5vw,8px)]">
                Verantwortlicher
              </h2>
              <p className="text-foreground">
                Tatts by Vali – Valerio Seratore
                <br />
                Schulhausstrasse 15, 5113 Holderbank, Schweiz
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:vali@tattsbyvali.ch"
                  className="underline hover:no-underline text-accent-bronze"
                >
                  vali@tattsbyvali.ch
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                1. Grundsätze
              </h2>
              <p>
                Wir verarbeiten personenbezogene Daten gemäss Schweizer
                Datenschutzrecht (revDSG) und nur, soweit dies zur Beantwortung
                von Anfragen, Terminabwicklung und Kommunikation erforderlich
                ist.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                2. Keine Tracker / Cookies
              </h2>
              <p>
                Wir verwenden keine Tracking-Tools, keine Statistikdienste und
                keine Marketing-Cookies. Technisch notwendige Server-Logs (z. B.
                IP-Adresse, Datum/Uhrzeit, angeforderte Seite) können vom
                Hosting-Provider kurzzeitig verarbeitet werden, um den sicheren
                Betrieb zu gewährleisten.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                3. Kontakt & Termin
              </h2>
              <p>
                Bei Kontaktaufnahme verarbeiten wir die von dir übermittelten
                Daten (z. B. Name, E-Mail, Nachricht, Motivinformationen) zur
                Bearbeitung deiner Anfrage und Vorbereitung eines Termins.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Einwilligung bzw.
                vorvertragliche Massnahmen/Vertragserfüllung.{" "}
                <strong>Speicherdauer:</strong> bis zur Erledigung und solange
                ein berechtigtes Interesse (z. B. Nachweis) besteht;
                anschliessend Löschung.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                4. Hosting & Auftragsverarbeitung
              </h2>
              <p>
                Die Website wird bei einem Hosting-Anbieter betrieben. Dabei
                können Daten auf Servern in der Schweiz oder EU verarbeitet
                werden. Der Anbieter handelt als Auftragsverarbeiter und
                gewährleistet angemessene Sicherheitsmassnahmen.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                5. E-Mail-Kommunikation
              </h2>
              <p>
                E-Mails können unverschlüsselt übertragen werden. Bitte sende
                keine besonders schützenswerten Daten, sofern nicht
                erforderlich.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                6. Social-Media-Links
              </h2>
              <p>
                Beim Klick auf verlinkte Plattformen (z. B. Instagram) gelten
                die Datenschutzbestimmungen des jeweiligen Anbieters.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                7. Deine Rechte
              </h2>
              <p>
                Du hast Rechte auf Auskunft, Berichtigung, Löschung,
                Einschränkung und Datenherausgabe (soweit anwendbar). Du kannst
                erteilte Einwilligungen jederzeit widerrufen. Zuständige
                Aufsichtsbehörde ist der EDÖB (Eidg. Datenschutz- und
                Öffentlichkeitsbeauftragter).
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                8. Datensicherheit
              </h2>
              <p>
                Wir treffen angemessene technische und organisatorische
                Massnahmen zum Schutz deiner Daten vor Verlust, Missbrauch und
                unbefugtem Zugriff.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                9. Änderungen
              </h2>
              <p>
                Wir können diese Erklärung anpassen, wenn sich unsere
                Datenverarbeitung ändert. Es gilt die jeweils aktuelle Version
                auf dieser Website.
              </p>
            </section>

            <p className="mt-6 text-sm border-t border-white/5 pt-6">
              Stand: {today}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;

