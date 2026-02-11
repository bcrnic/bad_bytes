import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { downloadLogoSvg, downloadLogoPng } from "@/lib/downloadUtils";
import { toast } from "sonner";

interface DownloadButtonProps {
  variant: 'square' | 'horizontal' | 'vertical' | 'icon';
  filename: string;
}

export const DownloadButton = ({ variant, filename }: DownloadButtonProps) => {
  const handleSvgDownload = () => {
    downloadLogoSvg(variant, filename);
    toast.success(`Downloaded ${filename}.svg`);
  };

  const handlePngDownload = async () => {
    try {
      await downloadLogoPng(variant, filename);
      toast.success(`Downloaded ${filename}.png`);
    } catch (error) {
      toast.error("Failed to download PNG");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 bg-card/80 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground"
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        <DropdownMenuItem onClick={handleSvgDownload} className="cursor-pointer">
          <span className="font-mono text-xs mr-2 text-muted-foreground">SVG</span>
          Vector format
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handlePngDownload} className="cursor-pointer">
          <span className="font-mono text-xs mr-2 text-muted-foreground">PNG</span>
          4x resolution
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadButton;
