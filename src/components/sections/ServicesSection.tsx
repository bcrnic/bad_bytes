import { Code, Palette, Smartphone, Rocket, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { servicesContent } from "@/lib/content";

const iconMap: Record<string, React.ElementType> = {
  "landing-pages": Rocket,
  "business-websites": Code,
  "web-apps": Smartphone,
  "ecommerce": Palette,
  "maintenance": Shield,
};

export const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 md:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            {servicesContent.sectionTitle}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            {servicesContent.sectionSubtitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {servicesContent.sectionDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {servicesContent.services.map((service, index) => {
            const Icon = iconMap[service.id] || Code;
            
            return (
              <div
                key={service.id}
                className={cn(
                  "glass-card rounded-xl p-6 md:p-8 group hover-glow transition-all duration-300",
                  "hover:border-primary/50 hover:-translate-y-1 flex flex-col",
                  "opacity-0 animate-slide-up"
                )}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow text-sm md:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Timeline & Price */}
                <div className="flex items-center justify-between text-sm mb-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {service.timeline}
                  </div>
                  <span className="text-primary font-medium">{service.priceNote}</span>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline"
                  onClick={scrollToContact}
                  className="w-full border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary group/btn"
                >
                  Zatražite ponudu
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
