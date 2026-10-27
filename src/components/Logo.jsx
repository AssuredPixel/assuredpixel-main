import React from 'react';

export const Logo = ({ className = "h-8", showText = true }) => {
  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* AssuredPixel Geometric Logomark */}
      <svg
        width="37"
        height="30"
        viewBox="0 0 160 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-auto transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M4 124 L58 6 Q61 0 68 0 L104 0 Q110 0 107 6 L52 126 Q49 132 42 132 L9 132 Q1 132 4 124 Z"
          fill="#2CC3A5"
        />
        <rect x="96" y="44" width="22" height="22" fill="#2CC3A5" />
        <rect x="117" y="66" width="22" height="22" fill="#2CC3A5" />
        <rect x="138" y="88" width="22" height="22" fill="#2CC3A5" />
        <rect x="138" y="110" width="22" height="22" fill="#2CC3A5" />
      </svg>

      {showText && (
        <span className="font-tight text-[24px] tracking-[-0.01em] text-[#2CC3A5] select-none flex items-center">
          <span className="font-bold">Assured</span>
          <span className="font-normal">Pixel</span>
        </span>
      )}
    </div>
  );
};
