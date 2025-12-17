import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'inverted'; // default for light bg, inverted for dark bg
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
  const primaryColor = variant === 'default' ? '#1e3a8a' : '#ffffff'; // Dark Blue or White
  const secondaryColor = variant === 'default' ? '#3b82f6' : '#93c5fd'; // Blue or Light Blue
  const accentColor = '#f97316'; // Orange

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 350 100" 
      className={className}
      aria-label="Light & Might Education Logo"
    >
      {/* Lighthouse Icon */}
      <g transform="translate(10, 10)">
        {/* Rocks */}
        <path d="M5 75 Q25 65 45 75 T85 75 L90 85 L0 85 Z" fill={primaryColor} />
        
        {/* Tower */}
        <path d="M30 75 L35 15 L55 15 L60 75 Z" fill={variant === 'default' ? '#f8fafc' : 'rgba(255,255,255,0.1)'} stroke={primaryColor} strokeWidth="2" />
        {/* Stripes */}
        <path d="M32 55 L58 55 L57 65 L33 65 Z" fill={primaryColor} />
        <path d="M34 35 L56 35 L55 45 L35 45 Z" fill={primaryColor} />
        
        {/* Lantern Top */}
        <rect x="35" y="5" width="20" height="10" fill={primaryColor} />
        <path d="M32 5 L45 0 L58 5 Z" fill={primaryColor} />
        
        {/* Light */}
        <circle cx="45" cy="10" r="3" fill={accentColor} />
        <path d="M48 10 L80 0" stroke={accentColor} strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 2" />
      </g>

      {/* Text Group */}
      <g transform="translate(100, 10)">
        {/* LIGHT & MIGHT */}
        <text x="0" y="35" fontFamily="serif" fontSize="24" fontWeight="bold" fill={secondaryColor}>
          LIGHT <tspan fill={accentColor}>&</tspan> MIGHT
        </text>
        
        {/* EDUCATION */}
        <text x="0" y="68" fontFamily="serif" fontSize="32" fontWeight="900" fill={primaryColor} letterSpacing="1">
          EDUCATION
        </text>
        
        {/* Tagline */}
        <text x="0" y="88" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill={accentColor}>
          Mentoring Tomorrow's Leaders, Today
        </text>
      </g>
    </svg>
  );
};

export default Logo;