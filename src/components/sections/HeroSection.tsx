import { BadByteLogo } from "@/components/BadByteLogo";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { heroContent } from "@/lib/content";
import { CONTACT } from "@/lib/constants";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{ background: 'var(--gradient-glow)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(145,84%,50%,0.1)_0%,_transparent_50%)]" />
      </div>

      {/* Animated Particles */}
      <ParticlesBackground />

      <div className="container relative z-10 py-20 px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 md:mb-12 animate-fade-in">
            <BadByteLogo size="xl" animated />
          </div>

          {/* H1 - Clear Value Proposition */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 md:mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-primary neon-text">Web Development Studio</span>
            <br />
            <span className="text-foreground">u Novom Sadu</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in px-4"
            style={{ animationDelay: '0.3s' }}
          >
            {heroContent.subheadline}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in w-full sm:w-auto px-4"
            style={{ animationDelay: '0.4s' }}
          >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group gradient-bg text-primary-foreground hover:opacity-90 hover-glow px-8 h-12 text-base"
            >
              {heroContent.primaryCta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToWork}
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 h-12 text-base"
            >
              {heroContent.secondaryCta}
            </Button>
          </div>

          {/* Trust Badges */}
          <div 
            className="flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in px-4"
            style={{ animationDelay: '0.5s' }}
          >
            {heroContent.trustBadges.map((badge) => (
              <div 
                key={badge}
                className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground"
              >
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-4 md:gap-16 mt-12 md:mt-16 animate-fade-in w-full max-w-lg"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="text-center">
              <span className="text-2xl md:text-4xl font-bold text-foreground block">50+</span>
              <p className="text-xs md:text-sm text-muted-foreground">Projekata</p>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-4xl font-bold text-foreground block">99%</span>
              <p className="text-xs md:text-sm text-muted-foreground">Zadovoljnih klijenata</p>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-4xl font-bold text-foreground block">5+</span>
              <p className="text-xs md:text-sm text-muted-foreground">Godina</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
