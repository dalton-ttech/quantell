import React, { useEffect } from 'react';
import SectionReveal from './SectionReveal';
import { Paper } from '../types';
import { useLanguage } from '../LanguageContext';

interface ArticlePageProps {
  paper: Paper;
  onBack: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ paper, onBack }) => {
  const { t } = useLanguage();

  // Scroll to top when article loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [paper]);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[90vw] md:max-w-3xl mx-auto">
        <SectionReveal>
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 font-mono text-xs text-muted mb-12 hover:text-gold transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> 
            {t.nav.research} / {t.nav.insights}
          </button>
        </SectionReveal>

        <article>
          <SectionReveal delay={100}>
            <div className="border-b border-gold/30 pb-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                 <span className="font-mono text-xs text-gold font-bold tracking-widest">{paper.category}</span>
                 <span className="font-mono text-xs text-muted">{paper.date}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl text-graphite leading-tight">
                {paper.title}
              </h1>
            </div>
          </SectionReveal>

          <div className="space-y-8">
            {paper.content.map((paragraph, index) => (
              <SectionReveal key={index} delay={200 + (index * 50)}>
                <p className={`font-sans text-lg leading-loose text-gray-700 text-justify ${index === 0 ? 'first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]' : ''}`}>
                  {paragraph}
                </p>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={600}>
             <div className="mt-20 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="font-serif italic text-xl text-graphite">
                  Quantell Capital
                </div>
                <button 
                  onClick={onBack}
                  className="px-8 py-3 border border-graphite text-graphite font-mono text-xs hover:bg-graphite hover:text-white transition-all duration-300"
                >
                  RETURN TO ARCHIVE
                </button>
             </div>
          </SectionReveal>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;