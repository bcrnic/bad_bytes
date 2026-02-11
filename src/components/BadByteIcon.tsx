import { cn } from "@/lib/utils";

interface BadByteIconProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export const BadByteIcon = ({ size = 64, className, animated = true }: BadByteIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        animated && "animate-neon-pulse",
        className
      )}
    >
      {/* Background glow */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(160, 84%, 39%)" />
          <stop offset="100%" stopColor="hsl(160, 84%, 50%)" />
        </linearGradient>
      </defs>

      {/* Glitched byte blocks (left side - corrupted) */}
      <g className={cn(animated && "animate-pixel-flicker")} opacity="0.6">
        <rect x="8" y="12" width="6" height="6" fill="hsl(160, 84%, 20%)" />
        <rect x="16" y="12" width="6" height="6" fill="hsl(160, 84%, 39%)" transform="skewX(-5)" />
        <rect x="8" y="20" width="6" height="6" fill="hsl(160, 84%, 39%)" />
        <rect x="16" y="20" width="6" height="6" fill="hsl(160, 84%, 20%)" transform="translate(1, -1)" />
        <rect x="8" y="28" width="6" height="6" fill="hsl(160, 84%, 20%)" transform="skewX(3)" />
        <rect x="16" y="28" width="6" height="6" fill="hsl(160, 84%, 39%)" />
        <rect x="8" y="36" width="6" height="6" fill="hsl(160, 84%, 39%)" transform="translate(-1, 0)" />
        <rect x="16" y="36" width="6" height="6" fill="hsl(160, 84%, 20%)" />
      </g>

      {/* Transformation arrow */}
      <path
        d="M26 28 L34 28 L34 24 L40 30 L34 36 L34 32 L26 32 Z"
        fill="url(#neonGradient)"
        filter="url(#glow)"
        className={cn(animated && "animate-float")}
      />

      {/* Clean code brackets (right side - fixed) */}
      <g filter="url(#glow)">
        {/* Opening bracket { */}
        <path
          d="M44 16 L48 16 Q52 16 52 20 L52 26 Q52 30 56 30 Q52 30 52 34 L52 40 Q52 44 48 44 L44 44"
          stroke="url(#neonGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Code lines inside */}
        <line x="46" y1="24" x2="54" y2="24" stroke="hsl(160, 84%, 45%)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x="48" y1="30" x2="56" y2="30" stroke="hsl(160, 84%, 45%)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x="46" y1="36" x2="52" y2="36" stroke="hsl(160, 84%, 45%)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </g>

      {/* Pixel particles (transition effect) */}
      <g className={cn(animated && "animate-glitch")}>
        <rect x="28" y="18" width="3" height="3" fill="hsl(160, 84%, 45%)" opacity="0.8" />
        <rect x="32" y="22" width="2" height="2" fill="hsl(160, 84%, 39%)" opacity="0.6" />
        <rect x="30" y="38" width="3" height="3" fill="hsl(160, 84%, 45%)" opacity="0.7" />
        <rect x="35" y="42" width="2" height="2" fill="hsl(160, 84%, 39%)" opacity="0.5" />
      </g>
    </svg>
  );
};

export default BadByteIcon;
