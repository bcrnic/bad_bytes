import { BadByteLogoHorizontal } from "@/components/BadByteLogo";
import { CONTACT } from "@/lib/constants";
import { footerContent } from "@/lib/content";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container px-4">
        {/* Main Footer - Single Row with Logo in Center */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          {/* Tagline */}
          <p 
            className="text-muted-foreground text-sm text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: footerContent.tagline }}
          />
          
          {/* Separator + Logo */}
          <span className="hidden md:inline text-muted-foreground">•</span>
          <BadByteLogoHorizontal animated={false} />
          <span className="hidden md:inline text-muted-foreground">•</span>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Početna
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              {footerContent.navigation.services}
            </a>
            <a href="#work" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              {footerContent.navigation.work}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              {footerContent.navigation.contact}
            </a>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Bad Byte. Sva prava zadržana.</p>
          <div className="flex items-center gap-4">
            <span>{CONTACT.email}</span>
            <span>•</span>
            <span>{CONTACT.phoneDisplay}</span>
            <span>•</span>
            <span>{CONTACT.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
