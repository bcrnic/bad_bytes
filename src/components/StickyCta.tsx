import { Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";

export const StickyCta = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  const handleCallClick = () => {
    window.location.href = `tel:${CONTACT.phone}`;
  };

  const handleQuoteClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(CONTACT.whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border p-3 safe-area-bottom">
      <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
        {/* Call Button */}
        <Button
          onClick={handleCallClick}
          size="lg"
          className="flex-1 gradient-bg text-primary-foreground hover:opacity-90 hover-glow h-12"
          aria-label="Pozovite nas"
        >
          <Phone className="w-5 h-5 mr-2" />
          Pozovi
        </Button>

        {/* Get a Quote Button */}
        <Button
          onClick={handleQuoteClick}
          size="lg"
          variant="outline"
          className="flex-1 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary h-12"
          aria-label="Zatražite ponudu"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Ponuda
        </Button>

        {/* WhatsApp Icon Button */}
        <Button
          onClick={handleWhatsAppClick}
          size="icon"
          variant="outline"
          className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary h-12 w-12 flex-shrink-0"
          aria-label="Kontaktirajte nas preko WhatsApp-a"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default StickyCta;
