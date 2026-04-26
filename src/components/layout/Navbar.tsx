import { useState, useEffect } from "react";
import { BadByteLogoHorizontal } from "@/components/BadByteLogo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { commonContent } from "@/lib/content";

export const Navbar = () => {
  const { navLinks, cta } = commonContent;
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#");

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href.replace("#", ""))
      .filter(Boolean); // removes the empty string from "#" (home)

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" } // triggers when section is ~in the middle of the viewport
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Reset to home when scrolled to top
    const handleScroll = () => {
      if (window.scrollY < 80) setActiveSection("#");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0" aria-label="Bad Byte - Početna">
            <BadByteLogoHorizontal animated={false} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative font-medium transition-colors duration-200",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-primary transition-all duration-300",
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    )}
                  />
                </a>
              );
            })}
            <Button
              onClick={scrollToContact}
              className="gradient-bg text-primary-foreground hover:opacity-90"
            >
              {cta.getQuote}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden bg-background border-b border-border overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="container px-4 py-4 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "block font-medium py-2 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
          <Button
            onClick={scrollToContact}
            className="w-full gradient-bg text-primary-foreground hover:opacity-90"
          >
            {cta.getQuote}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
