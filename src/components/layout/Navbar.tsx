import { useState } from "react";
import { BadByteLogoHorizontal } from "@/components/BadByteLogo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Početna", href: "#" },
  { label: "Usluge", href: "#services" },
  { label: "Radovi", href: "#work" },
  { label: "Utisci", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={scrollToContact}
              className="gradient-bg text-primary-foreground hover:opacity-90"
            >
              Zatražite ponudu
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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            onClick={scrollToContact}
            className="w-full gradient-bg text-primary-foreground hover:opacity-90"
          >
            Zatražite ponudu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
