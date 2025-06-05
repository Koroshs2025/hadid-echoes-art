
import React from 'react';

interface GeometricElementsProps {
  variant?: 'floating' | 'background' | 'accent';
  className?: string;
}

const GeometricElements: React.FC<GeometricElementsProps> = ({ variant = 'floating', className = '' }) => {
  if (variant === 'floating') {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-mocha-300 rotate-45 animate-geometric-float" />
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-mocha-400/60 rotate-12 animate-geometric-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-32 bg-gradient-to-b from-mocha-400 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-1 bg-gradient-to-r from-copper to-transparent" />
      </div>
    );
  }

  if (variant === 'background') {
    return (
      <div className={`absolute inset-0 pointer-events-none opacity-10 ${className}`}>
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="absolute inset-0">
          <defs>
            <pattern id="art-nouveau" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q50,50 100,100 Q150,150 200,100" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="100" cy="100" r="5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#art-nouveau)" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <div className="w-8 h-8 bg-mocha-400 rotate-45 transform" />
      <div className="w-12 h-1 bg-gradient-to-r from-mocha-400 to-copper" />
      <div className="w-6 h-6 border-2 border-mocha-500 rounded-full" />
    </div>
  );
};

export default GeometricElements;
