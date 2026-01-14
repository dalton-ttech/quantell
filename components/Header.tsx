import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navItems: NavItem[] = [
    { label: t.nav.research, href: '#research' },
    { label: t.nav.strategy, href: '#strategy' },
    { label: t.nav.insights, href: '#insights' },
    { label: t.nav.heritage, href: '#heritage' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onHomeClick(); // Reset to home view first
    // Small timeout to allow render to switch back to home before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleLogoClick = () => {
    onHomeClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
        <div className="flex items-center gap-3 group cursor-pointer" onClick={handleLogoClick}>
          <div className="h-8 md:h-10 w-auto min-w-[120px] flex items-center justify-start relative">
             <img 
               src="/quantell.svg" 
               alt="Quantell Capital" 
               className="h-full w-auto object-contain"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling?.classList.remove('hidden');
               }}
             />
             {/* Fallback Text Logo if SVG is missing */}
             <div className="hidden flex flex-col">
               <span className="font-serif font-bold text-lg tracking-wide leading-none text-graphite">QUANTELL</span>
               <span className="font-mono text-[0.6rem] tracking-[0.2em] text-muted uppercase leading-none mt-1">Capital</span>
             </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.href}
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
          onClick={toggleLang}
          className="text-xs font-mono border border-gray-300 px-3 py-1 rounded-sm hover:border-gold hover:text-gold transition-colors duration-300 w-12"
        >
          {lang}
        </button>
      </div>
    </header>
  );
};

export default Header;