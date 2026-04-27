import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Calendar, Check, Loader2 } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { contactContent, commonContent } from "@/lib/content";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Ime mora imati bar 2 karaktera" }),
  email: z.string().email({ message: "Unesite validnu email adresu" }),
  budget: z.string().optional(),
  message: z.string().min(10, { message: "Poruka mora imati bar 10 karaktera" }),
  honeypot: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      budget: "",
      message: "",
      honeypot: "",
    },
  });

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const onSubmit = async (values: ContactFormValues) => {
    // Honeypot check - if filled, it's a bot
    if (values.honeypot) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: values.name,
          email: values.email,
          budget: values.budget || "",
          message: values.message,
          "bot-field": values.honeypot || "",
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      toast({
        title: "Poruka poslata!",
        description: "Odgovorićemo vam u roku od 24 sata.",
      });

      form.reset();
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
                {contactContent.contactInfoTitle}
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
                {contactContent.whatNextTitle}
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
              <span className="font-semibold text-foreground">{commonContent.cta.bookConsultation}</span>
            </a>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot - hidden from users */}
                <FormField
                  control={form.control}
                  name="honeypot"
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input {...field} tabIndex={-1} autoComplete="off" />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{contactContent.formLabels.name} *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Vaše ime" 
                            className="bg-background border-border focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{contactContent.formLabels.email} *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="vas@email.com" 
                            className="bg-background border-border focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{contactContent.formLabels.budget}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border focus:border-primary">
                            <SelectValue placeholder="Izaberite opseg budžeta (opciono)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {contactContent.budgetOptions.filter(opt => opt.value !== "").map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{contactContent.formLabels.message} *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Opišite nam vaš projekat..." 
                          rows={5}
                          className="bg-background border-border focus:border-primary resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
