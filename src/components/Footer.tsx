
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-mocha-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="font-deco text-mocha-800 text-lg">
            ZAHA HADID
          </div>
          
          <div className="flex items-center space-x-8 text-mocha-600 font-nouveau">
            <span>Architectural Visionary</span>
            <span>1950 - 2016</span>
          </div>
          
          <div className="text-mocha-500 font-sans text-sm">
            © 2025 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
