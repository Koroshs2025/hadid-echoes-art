
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-mocha-100 py-16 px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
          <div className="space-y-4">
            <div className="font-maison text-xl font-light text-mocha-900 tracking-[0.15em]">
              ZAHA HADID
            </div>
            <div className="w-12 h-px bg-mocha-300" />
          </div>
          
          <div className="flex items-center space-x-16 text-mocha-600 font-editorial text-sm">
            <span className="font-light tracking-wider">Architectural Visionary</span>
            <span className="font-light tracking-wider">1950 — 2016</span>
          </div>
          
          <div className="text-mocha-400 text-xs font-editorial tracking-wider uppercase">
            © 2025 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
