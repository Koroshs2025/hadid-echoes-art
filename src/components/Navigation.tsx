
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/1f258858-28d3-4dae-a92e-66cda59225f4.png" 
              alt="Zaha Hadid" 
              className="h-16 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-16">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-editorial text-sm uppercase tracking-[0.15em] transition-all duration-300 relative group ${
                  location.pathname === item.path 
                    ? 'text-mocha-900 font-medium' 
                    : 'text-mocha-600 hover:text-mocha-900'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-mocha-900 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-mocha-700 hover:text-mocha-900 transition-colors p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
