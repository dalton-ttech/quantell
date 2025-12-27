import React from 'react';
import SectionReveal from './SectionReveal';
import { useLanguage } from '../LanguageContext';

const LabSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="research" className="py-32 relative bg-gradient-to-b from-transparent to-gray-50/50">
      <div className="max-w-[90vw] mx-auto">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 border-b border-gray-200 pb-8">
            <h2 className="font-serif text-4xl md:text-5xl text-graphite">
              {t.lab.title_main} <span className="text-gold">{t.lab.title_gold}</span>
            </h2>
            <span className="font-mono text-sm text-muted mt-4 md:mt-0">{t.lab.subtitle}</span>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Philosophy */}
          <div className="md:col-span-5 md:col-start-1">
            <SectionReveal delay={200}>
              <h3 className="font-mono text-sm tracking-widest uppercase text-muted mb-6">{t.lab.methodology}</h3>
              <p className="font-serif text-2xl leading-relaxed text-graphite mb-8">
                {t.lab.methodology_quote}
              </p>
              <p className="font-sans text-gray-600 leading-relaxed mb-8 text-justify">
                {t.lab.methodology_desc}
              </p>
              <div className="p-6 bg-white border border-gray-100 shadow-sm">
                <p className="font-mono text-xs text-muted mb-4">{t.lab.equation_label}</p>
                <div className="font-serif italic text-xl md:text-2xl text-graphite text-center py-4">
                  dX<sub className="text-xs">t</sub> = μ(X<sub className="text-xs">t</sub>, t)dt + σ(X<sub className="text-xs">t</sub>, t)dW<sub className="text-xs">t</sub>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Visuals/Stats */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8 justify-center">
             <SectionReveal delay={400}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-graphite p-6 flex flex-col justify-between group hover:bg-gold transition-colors duration-500 cursor-default">
                    <span className="font-mono text-xs text-white/60 group-hover:text-graphite/60">{t.lab.data_depth}</span>
                    <span className="font-serif text-4xl text-white group-hover:text-graphite">PB+</span>
                  </div>
                  <div className="aspect-square border border-graphite p-6 flex flex-col justify-between hover:bg-gray-50 transition-colors">
                    <span className="font-mono text-xs text-muted">{t.lab.model_integrity}</span>
                    <span className="font-serif text-4xl text-graphite">99.9%</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-mono text-sm font-bold mb-4">{t.lab.core_disciplines}</h4>
                  <ul className="space-y-3 font-sans text-sm text-gray-600">
                     {t.lab.disciplines.map((item, i) => (
                       <li key={i} className="flex items-center gap-3">
                         <span className="w-1 h-1 bg-gold"></span> {item}
                       </li>
                     ))}
                  </ul>
                </div>
             </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;