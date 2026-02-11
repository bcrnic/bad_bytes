import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Calendar, Check, Loader2 } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { contactContent } from "@/lib/content";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
    honeypot: "", // Anti-spam honeypot field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual implementation)
    // Options: Netlify Forms, EmailJS, Formspree
    try {
      // For Formspree implementation:
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name: formData.name, email: formData.email, budget: formData.budget, message: formData.message }),
      // });

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Poruka poslata!",
        description: "Odgovorićemo vam u roku od 24 sata.",
      });

      setFormData({ name: "", email: "", budget: "", message: "", honeypot: "" });
    } catch (error) {
      toast({
        title: "Nešto je pošlo naopako",
        description: "Molimo pokušajte ponovo ili nas kontaktirajte direktno.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-background" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            {contactContent.sectionTitle}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            {contactContent.sectionSubtitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {contactContent.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info & Process */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6">
                Kontaktirajte nas
              </h3>

              <div className="space-y-4">
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-primary">{CONTACT.email}</p>
                  </div>
                </a>

                <a 
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefon</p>
                    <p className="text-primary">{CONTACT.phoneDisplay}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Lokacija</p>
                    <p className="text-muted-foreground">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div>
              <h4 className="text-lg font-display font-semibold text-foreground mb-4">
                Šta sledi?
              </h4>
              <div className="space-y-4">
                {contactContent.processSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">{step.step}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{step.title}</p>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book a Call CTA */}
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-primary/50 hover:bg-primary/10 transition-colors group"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Preferirate poziv? Zakažite besplatnu konsultaciju od 15 min</span>
            </a>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    {contactContent.formLabels.name} *
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaše ime" 
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    {contactContent.formLabels.email} *
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vas@email.com" 
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="text-sm font-medium text-foreground mb-2 block">
                  {contactContent.formLabels.budget}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {contactContent.budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  {contactContent.formLabels.message} *
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Opišite nam vaš projekat..." 
                  rows={5}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full gradient-bg text-primary-foreground hover:opacity-90 hover-glow"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Šaljem...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {contactContent.formLabels.submit}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
