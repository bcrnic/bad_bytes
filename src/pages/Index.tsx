import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/StickyCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
};

export default Index;
