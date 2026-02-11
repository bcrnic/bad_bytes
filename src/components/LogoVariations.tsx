import { cn } from "@/lib/utils";
import BadByteIcon from "./BadByteIcon";

interface LogoProps {
  className?: string;
  animated?: boolean;
}

// Variation 1: Square icon with text below
export const LogoSquare = ({ className, animated = true }: LogoProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <BadByteIcon size={80} animated={animated} />
      <div className="text-center">
        <span 
          className={cn(
            "text-glitch font-display font-bold text-2xl text-primary tracking-tight",
            animated && "animate-glitch-skew"
          )}
          data-text="bad"
        >
          bad
        </span>
        <span className="font-display font-bold text-2xl text-accent tracking-tight ml-1 neon-text">
          byte
        </span>
      </div>
    </div>
  );
};

// Variation 2: Horizontal with integrated icon
export const LogoHorizontal = ({ className, animated = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <BadByteIcon size={48} animated={animated} />
      <div className="flex items-baseline">
        <span 
          className={cn(
            "text-glitch font-display font-bold text-3xl text-primary tracking-tight",
            animated && "animate-glitch-skew"
          )}
          data-text="bad"
        >
          bad
        </span>
        <span className="font-display font-bold text-3xl text-accent tracking-tight ml-1 neon-text">
          byte
        </span>
      </div>
    </div>
  );
};

// Variation 3: Vertical stack
export const LogoVertical = ({ className, animated = true }: LogoProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <BadByteIcon size={96} animated={animated} />
      <div className="flex flex-col items-center mt-4 leading-none">
        <span 
          className={cn(
            "text-glitch font-display font-bold text-4xl text-primary tracking-tight",
            animated && "animate-glitch-skew"
          )}
          data-text="bad"
        >
          bad
        </span>
        <span className="font-display font-bold text-4xl text-accent tracking-tight neon-text -mt-1">
          byte
        </span>
      </div>
    </div>
  );
};

// Variation 4: Icon only (for favicon/small uses)
export const LogoIconOnly = ({ className, animated = true }: LogoProps) => {
  return (
    <div className={cn("inline-flex", className)}>
      <BadByteIcon size={64} animated={animated} />
    </div>
  );
};

// Combined component for icon-only with letters
export const LogoMonogram = ({ className, animated = true }: LogoProps) => {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Glitched "b" background */}
        <span 
          className={cn(
            "absolute text-glitch font-display font-black text-5xl text-primary opacity-30",
            animated && "animate-glitch"
          )}
          data-text="b"
          style={{ left: '8px', top: '4px' }}
        >
          b
        </span>
        {/* Clean "b" foreground */}
        <span className="absolute font-display font-black text-5xl text-accent neon-text" style={{ left: '12px', top: '4px' }}>
          b
        </span>
        {/* Code bracket overlay */}
        <svg 
          className={cn("absolute right-0 bottom-0", animated && "animate-neon-pulse")} 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path
            d="M8 4 L4 4 Q2 4 2 6 L2 10 Q2 12 0 12 Q2 12 2 14 L2 18 Q2 20 4 20 L8 20"
            stroke="hsl(160, 84%, 45%)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default {
  LogoSquare,
  LogoHorizontal,
  LogoVertical,
  LogoIconOnly,
  LogoMonogram,
};
