import { cn } from "@/lib/utils";

interface BadByteLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
  animated?: boolean;
}

const sizeMap = {
  sm: { icon: 40, text: "text-lg" },
  md: { icon: 64, text: "text-2xl" },
  lg: { icon: 96, text: "text-3xl" },
  xl: { icon: 140, text: "text-5xl" },
};

export const BadByteLogo = ({ 
  size = "md", 
  className, 
  showText = true,
  animated = true 
}: BadByteLogoProps) => {
  const { icon, text } = sizeMap[size];
  
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {/* BB Icon in Square Frame */}
      <div 
        className={cn(
          "relative flex items-center justify-center border-2 border-primary rounded-lg",
          animated && "animate-neon-border-pulse"
        )}
        style={{ 
          width: icon, 
          height: icon,
        }}
      >
        <span 
          className={cn(
            "font-display font-bold tracking-tighter text-primary neon-text",
            size === "sm" && "text-xl",
            size === "md" && "text-3xl",
            size === "lg" && "text-5xl",
            size === "xl" && "text-7xl",
          )}
        >
          BB
        </span>
      </div>
      
      {/* Text Logo */}
      {showText && (
        <div className={cn("flex items-baseline gap-1", text)}>
          <span 
            className={cn(
              "font-display font-bold text-primary neon-text",
              animated && "text-glitch"
            )}
            data-text="bad"
          >
            bad
          </span>
          <span className="font-display font-bold text-foreground">
            byte
          </span>
        </div>
      )}
    </div>
  );
};

export const BadByteLogoHorizontal = ({ 
  className, 
  animated = true 
}: Omit<BadByteLogoProps, 'size' | 'showText'>) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* BB Icon */}
      <div 
        className={cn(
          "relative flex items-center justify-center border-2 border-primary rounded-md w-10 h-10",
          animated && "animate-neon-border-pulse"
        )}
      >
        <span className="font-display font-bold text-lg tracking-tighter text-primary neon-text">
          BB
        </span>
      </div>
      
      {/* Text Logo */}
      <div className="flex items-baseline">
        <span 
          className={cn(
            "font-display font-bold text-xl text-primary neon-text",
            animated && "text-glitch"
          )}
          data-text="bad"
        >
          bad
        </span>
        <span className="font-display font-bold text-xl text-foreground ml-1">
          byte
        </span>
      </div>
    </div>
  );
};

export default BadByteLogo;
