// Utility to generate downloadable logo files

export const downloadSvg = (svgElement: SVGSVGElement | null, filename: string) => {
  if (!svgElement) return;
  
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgElement);
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const downloadPng = async (element: HTMLElement | null, filename: string, scale: number = 2) => {
  if (!element) return;
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  const rect = element.getBoundingClientRect();
  canvas.width = rect.width * scale;
  canvas.height = rect.height * scale;
  
  // Create an image from the element's HTML
  const svgData = elementToSvgData(element, rect.width, rect.height);
  const img = new Image();
  
  return new Promise<void>((resolve) => {
    img.onload = () => {
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${filename}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
        resolve();
      }, 'image/png');
    };
    img.src = svgData;
  });
};

const elementToSvgData = (element: HTMLElement, width: number, height: number): string => {
  const clone = element.cloneNode(true) as HTMLElement;
  
  // Get computed styles
  const computedStyle = window.getComputedStyle(element);
  
  // Create foreignObject SVG
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
          * { font-family: 'Space Grotesk', system-ui, sans-serif; }
        </style>
      </defs>
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${width}px;
          height: ${height}px;
          background: transparent;
        ">
          ${clone.outerHTML}
        </div>
      </foreignObject>
    </svg>
  `;
  
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

// Generate standalone SVG content for each logo variation
export const generateLogoSvg = (variant: 'square' | 'horizontal' | 'vertical' | 'icon'): string => {
  const iconSvg = `
    <g>
      <!-- Glitched byte blocks -->
      <g opacity="0.6">
        <rect x="8" y="12" width="6" height="6" fill="#065F46"/>
        <rect x="16" y="12" width="6" height="6" fill="#059669" transform="skewX(-5)"/>
        <rect x="8" y="20" width="6" height="6" fill="#059669"/>
        <rect x="16" y="20" width="6" height="6" fill="#065F46" transform="translate(1, -1)"/>
        <rect x="8" y="28" width="6" height="6" fill="#065F46" transform="skewX(3)"/>
        <rect x="16" y="28" width="6" height="6" fill="#059669"/>
        <rect x="8" y="36" width="6" height="6" fill="#059669" transform="translate(-1, 0)"/>
        <rect x="16" y="36" width="6" height="6" fill="#065F46"/>
      </g>
      <!-- Arrow -->
      <path d="M26 28 L34 28 L34 24 L40 30 L34 36 L34 32 L26 32 Z" fill="url(#neonGradient)"/>
      <!-- Code bracket -->
      <path d="M44 16 L48 16 Q52 16 52 20 L52 26 Q52 30 56 30 Q52 30 52 34 L52 40 Q52 44 48 44 L44 44" stroke="url(#neonGradient)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="46" y1="24" x2="54" y2="24" stroke="#10B981" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <line x1="48" y1="30" x2="56" y2="30" stroke="#10B981" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="46" y1="36" x2="52" y2="36" stroke="#10B981" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <!-- Particles -->
      <rect x="28" y="18" width="3" height="3" fill="#10B981" opacity="0.8"/>
      <rect x="32" y="22" width="2" height="2" fill="#059669" opacity="0.6"/>
      <rect x="30" y="38" width="3" height="3" fill="#10B981" opacity="0.7"/>
      <rect x="35" y="42" width="2" height="2" fill="#059669" opacity="0.5"/>
    </g>
  `;

  const defs = `
    <defs>
      <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#10B981"/>
      </linearGradient>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&amp;display=swap');
        .bad-text { font-family: 'Space Grotesk', sans-serif; font-weight: 700; fill: #065F46; }
        .byte-text { font-family: 'Space Grotesk', sans-serif; font-weight: 700; fill: #059669; }
      </style>
    </defs>
  `;

  switch (variant) {
    case 'icon':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">${defs}${iconSvg}</svg>`;
    
    case 'square':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="140" viewBox="0 0 160 140" fill="none">
        ${defs}
        <g transform="translate(48, 10)">${iconSvg}</g>
        <text x="80" y="105" text-anchor="middle" class="bad-text" font-size="24">bad</text>
        <text x="80" y="130" text-anchor="middle" class="byte-text" font-size="24">byte</text>
      </svg>`;
    
    case 'horizontal':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="64" viewBox="0 0 220 64" fill="none">
        ${defs}
        <g transform="translate(0, 0)">${iconSvg}</g>
        <text x="75" y="42" class="bad-text" font-size="32">bad</text>
        <text x="130" y="42" class="byte-text" font-size="32">byte</text>
      </svg>`;
    
    case 'vertical':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="180" viewBox="0 0 140 180" fill="none">
        ${defs}
        <g transform="translate(38, 10)">${iconSvg}</g>
        <text x="70" y="110" text-anchor="middle" class="bad-text" font-size="36">bad</text>
        <text x="70" y="150" text-anchor="middle" class="byte-text" font-size="36">byte</text>
      </svg>`;
    
    default:
      return '';
  }
};

export const downloadLogoSvg = (variant: 'square' | 'horizontal' | 'vertical' | 'icon', filename: string) => {
  const svgContent = generateLogoSvg(variant);
  const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const downloadLogoPng = async (variant: 'square' | 'horizontal' | 'vertical' | 'icon', filename: string, scale: number = 4) => {
  const svgContent = generateLogoSvg(variant);
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  const img = new Image();
  
  return new Promise<void>((resolve, reject) => {
    img.onload = () => {
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${filename}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
        resolve();
      }, 'image/png');
    };
    img.onerror = reject;
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent);
  });
};
