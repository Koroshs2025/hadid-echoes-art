
import React from 'react';

interface GeometricBackgroundProps {
  variant?: 'subtle' | 'prominent';
  className?: string;
}

const GeometricBackground: React.FC<GeometricBackgroundProps> = ({ 
  variant = 'subtle', 
  className = '' 
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Animated geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-mocha-200/40 rotate-45 animate-geometric-float" />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-mocha-100/60 rotate-12 animate-geometric-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-mocha-300/30 rounded-full animate-geometric-float" style={{ animationDelay: '4s' }} />
      
      {/* Grid pattern */}
      <svg 
        className={`absolute inset-0 w-full h-full ${variant === 'subtle' ? 'opacity-[0.02]' : 'opacity-[0.05]'}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="geometric-grid" 
            x="0" 
            y="0" 
            width="100" 
            height="100" 
            patternUnits="userSpaceOnUse"
          >
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric-grid)" />
      </svg>

      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M0,300 Q200,200 400,300 T800,300" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
        />
        <path 
          d="M0,600 Q300,500 600,600 T1200,600" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
        />
      </svg>
    </div>
  );
};

export default GeometricBackground;
