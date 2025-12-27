import React from 'react';
import SectionReveal from './SectionReveal';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-[90vw] mx-auto w-full relative z-10">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-10 lg:col-start-2">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5vw] leading-[1.1] text-graphite mb-12 tracking-tight">
                {t.hero.title_line1} <span className="italic text-graphite/90">{t.hero.title_italic}</span>.<br />
                {t.hero.title_line2} <span className="text-gold">{t.hero.title_gold}</span>.
              </h1>
            </div>
            
            <div className="lg:col-span-4 lg:col-start-2">
              <div className="w-12 h-[1px] bg-gold mb-6"></div>
              <p className="font-mono text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                {t.hero.desc}
              </p>
            </div>

            <div className="lg:col-span-3 lg:col-start-9 flex flex-col justify-end pb-2">
               <div className="font-mono text-xs text-muted flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 {t.hero.system_status}
               </div>
               <div className="font-mono text-xs text-muted mt-2">
                 {t.hero.location}
               </div>
            </div>
          </div>
        </SectionReveal>
        
        {/* Decorative giant math symbol */}
        <div className="absolute right-[-5vw] top-[-10vh] text-[30vw] opacity-[0.03] font-serif pointer-events-none select-none">
          ∫
        </div>
      </div>
    </section>
  );
};

export default Hero;