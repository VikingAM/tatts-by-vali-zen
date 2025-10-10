import { useState } from "react";
import { Mail, Instagram, MapPin } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(1, { message: "Your idea is required" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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

    setErrors({});
    
    // Create mailto link with encoded data
    const subject = encodeURIComponent("Tattoo Consultation Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nIdea:\n${formData.message}`
    );
    window.location.href = `mailto:vali@tattsbyvali.ch?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email client...",
      description: "Your message is ready to send.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section 
      id="contact"
      aria-label="Contact Form" 
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="h-px w-16 bg-accent-bronze mb-6" />
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-wider">
            Book a Session
          </h2>
          <p className="text-lg md:text-xl text-foreground-secondary font-light max-w-3xl">
            Ich nehme mir Zeit für jedes Projekt. Keine Massenanfertigung. Nur individuelle Arbeit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Contact Info */}
          <div 
            className="space-y-8 animate-fade-in"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent-bronze mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-foreground-secondary mb-2 tracking-wide">Email</div>
                <a
                  href="mailto:vali@tattsbyvali.ch"
                  className="text-foreground transition-smooth hover:text-accent-bronze"
                >
                  vali@tattsbyvali.ch
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="w-5 h-5 text-accent-bronze mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-foreground-secondary mb-2 tracking-wide">Instagram</div>
                <a
                  href="https://instagram.com/tattsbyvali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-smooth hover:text-accent-bronze"
                >
                  @tattsbyvali
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent-bronze mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-foreground-secondary mb-2 tracking-wide">Location</div>
                <p className="text-foreground">Zürich, Switzerland</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div 
            className="animate-fade-in"
            style={{ animationDelay: '150ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm mb-2 text-foreground-secondary tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground transition-smooth focus:outline-none focus:border-accent-bronze"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-400 mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm mb-2 text-foreground-secondary tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground transition-smooth focus:outline-none focus:border-accent-bronze"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-400 mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm mb-2 text-foreground-secondary tracking-wide"
                >
                  Your Idea
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground transition-smooth focus:outline-none focus:border-accent-bronze resize-none"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-400 mt-2">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 border border-foreground text-foreground transition-smooth hover:border-accent-bronze hover:text-accent-bronze"
              >
                Send Message
              </button>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-foreground-secondary font-light leading-relaxed">
                  I reply personally. Every story deserves attention.
                </p>
                <p className="text-sm text-foreground-secondary font-light leading-relaxed italic mt-2">
                  Ich antworte persönlich. Jede Geschichte verdient Aufmerksamkeit.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
