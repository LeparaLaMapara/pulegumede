import React, { useState } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Contact', href: '/#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-divider-light">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start group cursor-pointer">
          <RouterLink to="/" className="flex flex-col items-center md:items-start">
            <h1 className="font-serif text-2xl tracking-wide text-cream group-hover:text-gold transition-colors">
              PULE
            </h1>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Advisor</span>
          </RouterLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <RouterLink
              key={item.label}
              to={item.href}
              className={`text-xs uppercase tracking-widest transition-colors duration-300 border-b-2 border-transparent hover:border-gold pb-1 ${
                isActive(item.href) ? 'text-gold border-gold' : 'text-muted hover:text-cream'
              }`}
            >
              {item.label}
            </RouterLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cream hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-charcoal z-40 transition-transform duration-500 ease-in-out pt-32 px-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 items-center">
           {NAV_ITEMS.map((item) => (
            <RouterLink
              key={item.label}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl text-cream hover:text-gold transition-colors"
            >
              {item.label}
            </RouterLink>
          ))}
        </div>
      </div>
    </header>
  );
};
