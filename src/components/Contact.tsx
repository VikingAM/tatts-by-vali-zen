import { Mail, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="h-px w-16 bg-accent-bronze mb-8" />
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Book a Session
            </h2>
            <p className="text-foreground-secondary text-lg mb-12 leading-relaxed">
              Ich nehme mir Zeit für jedes Projekt. Kontaktieren Sie mich für ein Gespräch.
              Keine Massenabfertigung. Nur individuelle Arbeit.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-foreground-secondary mb-1">Email</div>
                  <a
                    href="mailto:vali@tattsbyvali.ch"
                    className="transition-smooth hover:text-accent-bronze"
                  >
                    vali@tattsbyvali.ch
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-foreground-secondary mb-1">Instagram</div>
                  <a
                    href="https://instagram.com/tattsbyvali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-smooth hover:text-accent-bronze"
                  >
                    @tattsbyvali
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-foreground-secondary mb-1">Location</div>
                  <p>Zürich, Switzerland</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background-secondary p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-foreground-secondary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-background border border-border px-4 py-3 transition-smooth focus:outline-none focus:border-accent-bronze"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-foreground-secondary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-background border border-border px-4 py-3 transition-smooth focus:outline-none focus:border-accent-bronze"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-foreground-secondary">
                  Your Idea
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-background border border-border px-4 py-3 transition-smooth focus:outline-none focus:border-accent-bronze resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-foreground text-background transition-smooth hover:bg-accent-bronze"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
