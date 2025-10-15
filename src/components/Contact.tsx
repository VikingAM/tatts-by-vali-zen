import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import CTAButton from "@/components/ui/CTAButton";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LocationIcon } from "@/components/icons/LocationIcon";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Bitte gib deinen Namen ein." }),
  email: z.string().trim().email({ message: "Bitte gib eine gültige E-Mail an." }),
  message: z.string().trim().min(1, { message: "Bitte beschreibe kurz deine Idee." }).max(1000, { message: "Deine Idee muss weniger als 1000 Zeichen haben." }),
  privacy: z.boolean().refine((val) => val === true, { message: "Du musst der Datenschutzerklärung zustimmen." }),
  honeypot: z.string().max(0, { message: "Bot detected" }) // Honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormState = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    privacy: false,
    honeypot: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formState, setFormState] = useState<FormState>('idle');
  const [globalError, setGlobalError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous states
    setErrors({});
    setGlobalError("");
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const formattedErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          formattedErrors[error.path[0] as keyof ContactFormData] = error.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setFormState('loading');
    
    try {
      // Submit to Netlify Forms
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setFormState('success');
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        privacy: false,
        honeypot: ""
      });

      // Show success toast
      toast({
        title: "Nachricht gesendet! ✨",
        description: "Ich melde mich persönlich innerhalb von 24–48 Stunden.",
      });

    } catch (error) {
      setFormState('error');
      setGlobalError("Das hat leider nicht geklappt. Bitte versuch es erneut oder schreib an vali@tattsbyvali.ch.");
      
      toast({
        title: "Fehler",
        description: "Die Nachricht konnte nicht gesendet werden.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Validate individual field on blur
    const fieldResult = contactSchema.shape[name as keyof typeof contactSchema.shape].safeParse(value);
    if (!fieldResult.success) {
      setErrors(prev => ({ ...prev, [name]: fieldResult.error.errors[0]?.message }));
    } else {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Check if form is valid for button state
  const isFormValid = formData.name.trim() && 
                     formData.email.trim() && 
                     formData.message.trim() && 
                     formData.privacy &&
                     formData.message.length <= 1000;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="pt-[clamp(64px,15vw,144px)] pb-[clamp(64px,15vw,128px)] bg-background scroll-mt-28 md:scroll-mt-36 relative"
    >
      {/* Subtle top gradient overlay for calmer transition */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-[clamp(32px,8vw,64px)] h-[clamp(32px,8vw,64px)] bg-gradient-to-b from-black/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-[clamp(320px,95vw,1280px)] px-[clamp(16px,4vw,24px)]">
        {/* 2-Spalten Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(32px,8vw,64px)] items-start">
          {/* Linke Spalte: Header + Brand Text + Kontaktinfos */}
          <div className="lg:col-span-1">
            {/* Header */}
            <div className="text-center md:text-left mb-[clamp(24px,6vw,32px)]">
              <p className="text-[clamp(10px,2.5vw,14px)] tracking-[0.18em] uppercase text-accent-bronze mb-[clamp(4px,1vw,8px)]">
                ZEIT FÜR DEINE GESCHICHTE.
              </p>
              <h2
                id="contact-heading"
                className="text-[clamp(24px,5vw,44px)] font-light text-foreground tracking-[0.01em] leading-tight mt-[clamp(4px,1vw,8px)] mb-[clamp(8px,2vw,16px)]"
              >
                Termin anfragen
              </h2>

              {/* Bronze divider */}
              <div
                className="h-[2px] w-[clamp(32px,12vw,64px)] bg-accent-bronze/90 mb-[clamp(16px,4vw,32px)] mx-auto md:mx-0"
                aria-hidden="true"
              />

              {/* Lead-Text */}
              <p className="text-[clamp(14px,2.8vw,18px)] text-foreground-secondary font-light leading-[1.9] max-w-[clamp(50ch,75vw,65ch)] mb-[clamp(24px,6vw,48px)] text-left">
                Du bringst die Idee, ich höre zu. Gemeinsam entwickeln wir dein Tattoo – von der ersten Skizze bis zur finalen Ausführung.
              </p>
            </div>
            <p className="text-[clamp(14px,2.8vw,18px)] font-light text-foreground mb-[clamp(8px,2vw,12px)] max-w-[clamp(50ch,75vw,60ch)]">
              Feine Linien. Klare Form. Deine Geschichte.
            </p>
            <p className="text-[clamp(13px,2.6vw,16px)] font-light leading-relaxed text-foreground-secondary max-w-[clamp(50ch,75vw,65ch)] mb-[clamp(24px,6vw,32px)]">
              Du bringst die Idee. Ich forme daraus einen stimmigen Entwurf – sorgfältig entwickelt und präzise gestochen, damit er dich lange begleitet. Ich höre zu, stelle die richtigen Fragen und gebe jedem Detail die Zeit, die es braucht.
            </p>

            {/* Kontaktinfos */}
            <ul className="space-y-[clamp(12px,3vw,16px)] text-[clamp(12px,2.5vw,14px)] text-foreground-secondary">
              <li className="flex items-center gap-[clamp(12px,3vw,16px)]">
                <EmailIcon className="text-accent-bronze flex-shrink-0 w-[clamp(16px,4vw,20px)] h-[clamp(16px,4vw,20px)]" />
                <a 
                  href="mailto:vali@tattsbyvali.ch" 
                  className="text-foreground-secondary hover:text-accent-bronze transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-sm"
                >
                  vali@tattsbyvali.ch
                </a>
              </li>
              <li className="flex items-center gap-[clamp(12px,3vw,16px)]">
                <InstagramIcon className="text-accent-bronze flex-shrink-0 w-[clamp(16px,4vw,20px)] h-[clamp(16px,4vw,20px)]" />
                <a 
                  href="https://instagram.com/tatts_byvali" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground-secondary hover:text-accent-bronze transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-sm"
                >
                  @tatts_byvali
                </a>
              </li>
              <li className="flex items-center gap-[clamp(12px,3vw,16px)]">
                <LocationIcon className="text-accent-bronze flex-shrink-0 w-[clamp(16px,4vw,20px)] h-[clamp(16px,4vw,20px)]" />
                <span>Holderbank, Schweiz</span>
              </li>
            </ul>
          </div>

          {/* Rechte Spalte: Formular */}
          <div className="lg:col-span-1">
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            aria-label="Kontaktformular"
            name="projekt-anfragen"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="honeypot"
          >
            {/* Netlify form name - hidden */}
            <input type="hidden" name="form-name" value="projekt-anfragen" />
            
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              style={{ position: 'absolute', left: '-9999px' }}
              aria-hidden="true"
            />

            {/* Success Message */}
            {formState === 'success' && (
              <div role="alert" aria-live="polite" className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-300 text-sm">
                  Danke für deine Nachricht! Ich melde mich persönlich innerhalb von 24–48 Stunden.
                </p>
              </div>
            )}

            {/* Global Error Message */}
            {formState === 'error' && globalError && (
              <div role="alert" aria-live="assertive" className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 text-sm">
                  {globalError}
                </p>
              </div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-foreground-secondary mb-2">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Dein Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="name"
                className="w-full rounded-lg bg-white/[0.03] ring-1 ring-white/10 focus:ring-accent-bronze/60 focus:outline-none px-4 py-3 text-foreground placeholder:text-foreground-secondary/60 transition-shadow"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-400 mt-2">{errors.name}</p>
              )}
            </div>

            {/* E-Mail */}
            <div>
              <label htmlFor="email" className="block text-sm text-foreground-secondary mb-2">
                E-Mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="dein@email.ch"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
                inputMode="email"
                className="w-full rounded-lg bg-white/[0.03] ring-1 ring-white/10 focus:ring-accent-bronze/60 focus:outline-none px-4 py-3 text-foreground placeholder:text-foreground-secondary/60 transition-shadow"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-400 mt-2">{errors.email}</p>
              )}
            </div>

            {/* Deine Idee */}
            <div>
              <label htmlFor="message" className="block text-sm text-foreground-secondary mb-2">
                Deine Idee *
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Motiv, Größe, Platzierung – alles, was ich wissen sollte."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                maxLength={1000}
                className="w-full rounded-lg bg-white/[0.03] ring-1 ring-white/10 focus:ring-accent-bronze/60 focus:outline-none px-4 py-3 text-foreground placeholder:text-foreground-secondary/60 transition-shadow resize-none"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <div className="flex justify-between items-center mt-2">
                {errors.message ? (
                  <p id="message-error" className="text-sm text-red-400">{errors.message}</p>
                ) : (
                  <div></div>
                )}
                <p className="text-xs text-foreground-secondary">
                  {formData.message.length}/1000
                </p>
              </div>
            </div>

            {/* Datenschutz */}
            <div className="flex items-start gap-3">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1 rounded border-white/20 bg-white/[0.03] text-accent-bronze focus:ring-accent-bronze/60 focus:ring-offset-0"
                aria-invalid={!!errors.privacy}
                aria-describedby={errors.privacy ? "privacy-error" : undefined}
              />
              <label htmlFor="privacy" className="text-sm text-foreground-secondary leading-relaxed">
                Ich habe die{" "}
                <a 
                  href="/datenschutz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-bronze hover:text-accent-bronze/80 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-sm"
                >
                  Datenschutzerklärung
                </a>
                {" "}gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden.
              </label>
            </div>
            {errors.privacy && (
              <p id="privacy-error" className="text-sm text-red-400">{errors.privacy}</p>
            )}

            <CTAButton
              type="submit"
              label={formState === 'loading' ? "Wird gesendet…" : "Termin anfragen"}
              ariaLabel={formState === 'loading' ? "Wird gesendet…" : "Termin anfragen"}
              disabled={!isFormValid || formState === 'loading'}
            />
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;