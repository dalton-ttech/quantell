import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Research', href: '#research' },
  { label: 'Strategy', href: '#strategy' },
  { label: 'Insights', href: '#insights' },
  { label: 'Heritage', href: '#heritage' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'EN' | 'CN'>('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-gray-200/50 py-4'
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-[90vw] mx-auto flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 border border-graphite group-hover:border-gold transition-colors duration-300 flex items-center justify-center relative overflow-hidden">
             {/* Abstract Q logo */}
             <div className="absolute w-[120%] h-[1px] bg-graphite group-hover:bg-gold rotate-45 transform origin-center transition-colors duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-wide leading-none text-graphite">QUANTELL</span>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] text-muted uppercase leading-none mt-1">Capital</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-sm font-mono tracking-widest text-graphite/80 hover:text-gold transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Lang Switch */}
        <button
          onClick={() => setLang(lang === 'EN' ? 'CN' : 'EN')}
          className="text-xs font-mono border border-gray-300 px-3 py-1 rounded-sm hover:border-gold hover:text-gold transition-colors duration-300"
        >
          {lang}
        </button>
      </div>
    </header>
  );
};

export default Header;