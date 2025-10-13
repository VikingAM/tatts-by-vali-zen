import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="container mx-auto max-w-[clamp(320px,95vw,1024px)] px-[clamp(16px,4vw,24px)] py-[clamp(48px,12vw,96px)]">
          <p className="text-[clamp(10px,2.5vw,14px)] tracking-[0.18em] uppercase text-accent-bronze/80 mb-[clamp(4px,1vw,8px)]">
            Rechtliches
          </p>
          <h1 className="text-[clamp(24px,5vw,36px)] font-light mb-[clamp(16px,4vw,24px)]">
            Allgemeine Geschäftsbedingungen
          </h1>
          <div
            className="h-[2px] w-[clamp(32px,12vw,64px)] bg-accent-bronze/90 mb-[clamp(16px,4vw,32px)]"
            aria-hidden="true"
          />

          <div className="space-y-[clamp(24px,6vw,32px)] text-[clamp(14px,2.8vw,18px)] leading-relaxed text-foreground-secondary">
            <section>
              <h2 className="text-foreground text-[clamp(16px,3.5vw,20px)] font-medium mb-[clamp(6px,1.5vw,8px)]">
                1. Geltungsbereich
              </h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
                Leistungen von Tatts by Vali (Valerio Seratore),
                Schulhausstrasse 15, 5113 Holderbank (CH). Abweichende
                Vereinbarungen gelten nur schriftlich.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                2. Terminvereinbarung & Stornierung
              </h2>
              <p>
                Termine erfolgen nach Vereinbarung. Stornierungen oder
                Verschiebungen bitte mind. 48 Stunden vorher mitteilen. Bei
                späterer Absage oder Nichterscheinen kann eine Ausfallgebühr
                bis zur erwarteten Sitzungsdauer verrechnet werden. Eine
                Anzahlung kann im Einzelfall verlangt und bei kurzfristiger
                Absage einbehalten werden.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                3. Preise & Zahlung
              </h2>
              <p>
                Preise werden vor der Sitzung transparent kommuniziert (Fixpreis
                oder Ansatz pro Stunde). Zahlung vor Ort (bar oder elektronisch,
                nach Absprache). Alle Preise in CHF.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                4. Mindestalter
              </h2>
              <p>
                Tätowierungen erfolgen grundsätzlich ab 18 Jahren. Ein amtlicher
                Ausweis ist auf Verlangen vorzuzeigen.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                5. Gesundheit & Sicherheit
              </h2>
              <p>
                Kund:innen informieren vorab über relevante gesundheitliche
                Umstände (z. B. Allergien, Blutverdünner, Schwangerschaft,
                Hauterkrankungen). Bei Alkohol-/Drogeneinfluss oder
                gesundheitlichen Bedenken kann die Leistung verweigert werden.
                Das Studio arbeitet nach anerkannten Hygienestandards.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                6. Entwürfe, Urheberrecht & Bilder
              </h2>
              <p>
                Entwürfe bleiben urheberrechtlich Eigentum von Tatts by Vali.
                Eine Weitergabe/Weiterverwendung ohne Zustimmung ist untersagt.
                Fotos der Arbeiten dürfen für Portfolio/Website/Instagram
                verwendet werden; ein Widerspruch ist jederzeit möglich.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                7. Nachsorge & Ergebnis
              </h2>
              <p>
                Pflegehinweise werden erklärt/mitgegeben. Die Nachsorge liegt in
                der Verantwortung der Kundschaft; das Ergebnis ist u. a. vom
                individuellen Heilungsverlauf abhängig. Ein Nachstechen kann
                nötig sein und wird vorab (inkl. Kosten) besprochen.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                8. Haftung
              </h2>
              <p>
                Haftung für allergische Reaktionen, Heilungsverlauf, mangelnde
                Nachsorge oder externe Einflüsse ist – soweit gesetzlich
                zulässig – ausgeschlossen. Für Folgekosten (z. B.
                Arbeitsausfall, medizinische Behandlung) wird keine Haftung
                übernommen.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                9. Gutscheine
              </h2>
              <p>
                Gutscheine sind 2 Jahre gültig und nicht bar auszahlbar.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                10. Datenschutz
              </h2>
              <p>
                Es gilt die auf dieser Website veröffentlichte{" "}
                <a
                  href="/datenschutz"
                  className="underline hover:no-underline text-accent-bronze"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                11. Änderungen
              </h2>
              <p>
                Tatts by Vali kann diese AGB anpassen; es gilt die zum
                Terminzeitpunkt veröffentlichte Version.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-lg font-medium mb-2">
                12. Anwendbares Recht & Gerichtsstand
              </h2>
              <p>
                Es gilt Schweizer Recht. Gerichtsstand ist – soweit zulässig –
                der Sitz des Studios (Kanton Aargau).
              </p>
            </section>

            <p className="mt-6 text-sm border-t border-white/5 pt-6">
              <strong>Hinweis:</strong> Diese AGB sind eine praxistaugliche
              Vorlage und ersetzen keine individuelle Rechtsberatung.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;

