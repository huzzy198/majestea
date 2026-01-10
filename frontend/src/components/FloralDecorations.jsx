import React from 'react';

// Elegant floral SVG decorations for feminine aesthetic

export const FlowerPetal = ({ className = "", color = "#F9A8D4" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 5C50 5 65 25 65 45C65 65 50 75 50 75C50 75 35 65 35 45C35 25 50 5 50 5Z"
      fill={color}
      opacity="0.6"
    />
    <path
      d="M5 50C5 50 25 35 45 35C65 35 75 50 75 50C75 50 65 65 45 65C25 65 5 50 5 50Z"
      fill={color}
      opacity="0.5"
    />
    <path
      d="M95 50C95 50 75 65 55 65C35 65 25 50 25 50C25 50 35 35 55 35C75 35 95 50 95 50Z"
      fill={color}
      opacity="0.4"
    />
    <circle cx="50" cy="50" r="8" fill="#FBBF24" opacity="0.8" />
  </svg>
);

export const RoseOutline = ({ className = "", color = "#BE185D" }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40 10C40 10 55 20 55 35C55 50 40 60 40 60"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
      fill="none"
    />
    <path
      d="M40 10C40 10 25 20 25 35C25 50 40 60 40 60"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
      fill="none"
    />
    <path
      d="M40 20C40 20 50 27 50 38C50 49 40 55 40 55"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
      fill="none"
    />
    <path
      d="M40 20C40 20 30 27 30 38C30 49 40 55 40 55"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
      fill="none"
    />
    <path
      d="M40 60L40 75"
      stroke="#6B8E23"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M40 65C45 62 50 65 52 60"
      stroke="#6B8E23"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const LeafBranch = ({ className = "", flip = false }) => (
  <svg 
    className={className} 
    viewBox="0 0 120 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
  >
    <path
      d="M10 30C30 30 50 25 80 30C100 33 110 30 110 30"
      stroke="#9CA38F"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path d="M25 30C25 20 35 15 35 25C35 30 25 30 25 30Z" fill="#A7C4A0" opacity="0.6" />
    <path d="M45 28C45 18 55 13 55 23C55 28 45 28 45 28Z" fill="#A7C4A0" opacity="0.5" />
    <path d="M65 29C65 19 75 14 75 24C75 29 65 29 65 29Z" fill="#A7C4A0" opacity="0.6" />
    <path d="M85 30C85 20 95 15 95 25C95 30 85 30 85 30Z" fill="#A7C4A0" opacity="0.5" />
    <path d="M25 30C25 40 35 45 35 35C35 30 25 30 25 30Z" fill="#A7C4A0" opacity="0.5" />
    <path d="M55 29C55 39 65 44 65 34C65 29 55 29 55 29Z" fill="#A7C4A0" opacity="0.6" />
    <path d="M80 30C80 40 90 45 90 35C90 30 80 30 80 30Z" fill="#A7C4A0" opacity="0.5" />
  </svg>
);

export const FloralCorner = ({ className = "", position = "top-left" }) => {
  const getRotation = () => {
    switch (position) {
      case 'top-right': return 'rotate(90deg)';
      case 'bottom-right': return 'rotate(180deg)';
      case 'bottom-left': return 'rotate(270deg)';
      default: return 'rotate(0deg)';
    }
  };

  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: getRotation() }}
    >
      {/* Main flower */}
      <circle cx="40" cy="40" r="18" fill="#FBCFE8" opacity="0.5" />
      <circle cx="55" cy="25" r="15" fill="#F9A8D4" opacity="0.4" />
      <circle cx="25" cy="55" r="15" fill="#F9A8D4" opacity="0.4" />
      <circle cx="40" cy="40" r="8" fill="#FCD34D" opacity="0.7" />
      
      {/* Small flowers */}
      <circle cx="80" cy="20" r="10" fill="#FECDD3" opacity="0.5" />
      <circle cx="85" cy="15" r="8" fill="#FDA4AF" opacity="0.4" />
      <circle cx="80" cy="20" r="4" fill="#FDE68A" opacity="0.6" />
      
      <circle cx="20" cy="80" r="10" fill="#FECDD3" opacity="0.5" />
      <circle cx="15" cy="85" r="8" fill="#FDA4AF" opacity="0.4" />
      <circle cx="20" cy="80" r="4" fill="#FDE68A" opacity="0.6" />
      
      {/* Leaves and branches */}
      <path d="M50 50C70 60 90 55 110 70" stroke="#9CA38F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M50 50C60 70 55 90 70 110" stroke="#9CA38F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      
      <ellipse cx="70" cy="60" rx="8" ry="4" fill="#BBD6B8" opacity="0.5" transform="rotate(-30 70 60)" />
      <ellipse cx="90" cy="65" rx="6" ry="3" fill="#BBD6B8" opacity="0.4" transform="rotate(-20 90 65)" />
      <ellipse cx="60" cy="75" rx="8" ry="4" fill="#BBD6B8" opacity="0.5" transform="rotate(30 60 75)" />
      <ellipse cx="65" cy="95" rx="6" ry="3" fill="#BBD6B8" opacity="0.4" transform="rotate(40 65 95)" />
      
      {/* Dots decoration */}
      <circle cx="100" cy="40" r="2" fill="#F9A8D4" opacity="0.4" />
      <circle cx="115" cy="50" r="1.5" fill="#F9A8D4" opacity="0.3" />
      <circle cx="40" cy="100" r="2" fill="#F9A8D4" opacity="0.4" />
      <circle cx="50" cy="115" r="1.5" fill="#F9A8D4" opacity="0.3" />
    </svg>
  );
};

export const FloralDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300 to-rose-300" />
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="12" r="6" fill="#FBCFE8" opacity="0.7" />
      <circle cx="12" cy="20" r="6" fill="#F9A8D4" opacity="0.6" />
      <circle cx="28" cy="20" r="6" fill="#F9A8D4" opacity="0.6" />
      <circle cx="16" cy="27" r="6" fill="#FBCFE8" opacity="0.5" />
      <circle cx="24" cy="27" r="6" fill="#FBCFE8" opacity="0.5" />
      <circle cx="20" cy="20" r="4" fill="#FBBF24" opacity="0.8" />
    </svg>
    <div className="h-px w-16 bg-gradient-to-l from-transparent via-rose-300 to-rose-300" />
  </div>
);

export const WatercolorBlob = ({ className = "", color = "rose" }) => {
  const colors = {
    rose: ["#FBCFE8", "#F9A8D4", "#FDA4AF"],
    amber: ["#FEF3C7", "#FDE68A", "#FCD34D"],
    sage: ["#D1E7DD", "#BBD6B8", "#A7C4A0"]
  };
  
  const selectedColors = colors[color] || colors.rose;
  
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="100" rx="80" ry="70" fill={selectedColors[0]} opacity="0.3" />
      <ellipse cx="90" cy="90" rx="60" ry="55" fill={selectedColors[1]} opacity="0.3" />
      <ellipse cx="110" cy="105" rx="50" ry="45" fill={selectedColors[2]} opacity="0.2" />
    </svg>
  );
};

export const PeonyFlower = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48"
  };

  return (
    <svg className={`${sizeClasses[size]} ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer petals */}
      <ellipse cx="50" cy="25" rx="18" ry="22" fill="#FBCFE8" opacity="0.6" />
      <ellipse cx="25" cy="45" rx="18" ry="22" fill="#FBCFE8" opacity="0.5" transform="rotate(-45 25 45)" />
      <ellipse cx="75" cy="45" rx="18" ry="22" fill="#FBCFE8" opacity="0.5" transform="rotate(45 75 45)" />
      <ellipse cx="30" cy="70" rx="18" ry="22" fill="#FBCFE8" opacity="0.5" transform="rotate(-20 30 70)" />
      <ellipse cx="70" cy="70" rx="18" ry="22" fill="#FBCFE8" opacity="0.5" transform="rotate(20 70 70)" />
      
      {/* Middle petals */}
      <ellipse cx="50" cy="35" rx="14" ry="18" fill="#F9A8D4" opacity="0.6" />
      <ellipse cx="35" cy="50" rx="14" ry="18" fill="#F9A8D4" opacity="0.5" transform="rotate(-30 35 50)" />
      <ellipse cx="65" cy="50" rx="14" ry="18" fill="#F9A8D4" opacity="0.5" transform="rotate(30 65 50)" />
      <ellipse cx="40" cy="65" rx="12" ry="15" fill="#F9A8D4" opacity="0.5" transform="rotate(-15 40 65)" />
      <ellipse cx="60" cy="65" rx="12" ry="15" fill="#F9A8D4" opacity="0.5" transform="rotate(15 60 65)" />
      
      {/* Inner petals */}
      <ellipse cx="50" cy="45" rx="10" ry="12" fill="#FDA4AF" opacity="0.6" />
      <ellipse cx="42" cy="52" rx="8" ry="10" fill="#FDA4AF" opacity="0.5" />
      <ellipse cx="58" cy="52" rx="8" ry="10" fill="#FDA4AF" opacity="0.5" />
      
      {/* Center */}
      <circle cx="50" cy="52" r="8" fill="#FBBF24" opacity="0.7" />
      <circle cx="48" cy="50" r="2" fill="#F59E0B" opacity="0.6" />
      <circle cx="52" cy="54" r="2" fill="#F59E0B" opacity="0.6" />
      <circle cx="50" cy="50" r="1.5" fill="#F59E0B" opacity="0.5" />
    </svg>
  );
};

export const FloatingPetals = ({ className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {/* Floating petals with animation */}
    <div className="absolute top-10 left-[10%] animate-float-slow">
      <FlowerPetal className="w-8 h-8 opacity-30" color="#F9A8D4" />
    </div>
    <div className="absolute top-20 right-[15%] animate-float-medium">
      <FlowerPetal className="w-6 h-6 opacity-25" color="#FECDD3" />
    </div>
    <div className="absolute top-40 left-[20%] animate-float-fast">
      <FlowerPetal className="w-5 h-5 opacity-20" color="#FBCFE8" />
    </div>
    <div className="absolute top-60 right-[25%] animate-float-slow">
      <FlowerPetal className="w-7 h-7 opacity-25" color="#FDA4AF" />
    </div>
    <div className="absolute bottom-40 left-[30%] animate-float-medium">
      <FlowerPetal className="w-6 h-6 opacity-20" color="#F9A8D4" />
    </div>
    <div className="absolute bottom-20 right-[10%] animate-float-fast">
      <FlowerPetal className="w-8 h-8 opacity-30" color="#FBCFE8" />
    </div>
  </div>
);

export const GoldAccent = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 10C20 5 30 15 50 10C70 5 80 15 100 10"
      stroke="url(#goldGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <defs>
      <linearGradient id="goldGradient" x1="0" y1="10" x2="100" y2="10">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
        <stop offset="20%" stopColor="#D4AF37" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#F4D03F" stopOpacity="0.8" />
        <stop offset="80%" stopColor="#D4AF37" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default {
  FlowerPetal,
  RoseOutline,
  LeafBranch,
  FloralCorner,
  FloralDivider,
  WatercolorBlob,
  PeonyFlower,
  FloatingPetals,
  GoldAccent
};
