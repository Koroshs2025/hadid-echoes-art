
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/legacy', label: 'Legacy' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-mocha-200">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-maison text-3xl font-bold text-mocha-800 hover:text-mocha-600 transition-colors tracking-wide">
            ZAHA HADID
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-editorial text-lg transition-colors relative group ${
                  location.pathname === item.path 
                    ? 'text-mocha-700 font-medium' 
                    : 'text-mocha-600 hover:text-mocha-800'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-mocha-500 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-mocha-700 hover:text-mocha-900 transition-colors p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
