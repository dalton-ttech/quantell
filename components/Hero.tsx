import React from 'react';
import SectionReveal from './SectionReveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-[90vw] mx-auto w-full relative z-10">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-10 lg:col-start-2">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5vw] leading-[1.1] text-graphite mb-12 tracking-tight">
                Mathematical <span className="italic text-graphite/90">Integrity</span>.<br />
                Institutional <span className="text-gold">Scale</span>.
              </h1>
            </div>
            
            <div className="lg:col-span-4 lg:col-start-2">
              <div className="w-12 h-[1px] bg-gold mb-6"></div>
              <p className="font-mono text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Quantell Capital is a research-driven quantitative hedge fund operating on the frontier of stochastic calculus and machine learning. We function as a "Quasar Alpha Lab"—transforming rigorous academic theory into robust market infrastructure.
              </p>
            </div>

            <div className="lg:col-span-3 lg:col-start-9 flex flex-col justify-end pb-2">
               <div className="font-mono text-xs text-muted flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 SYSTEM STATUS: NOMINAL
               </div>
               <div className="font-mono text-xs text-muted mt-2">
                 SINGAPORE [HQ] / STANFORD [LAB]
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