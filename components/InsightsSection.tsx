import React from 'react';
import SectionReveal from './SectionReveal';
import { Paper } from '../types';

const papers: Paper[] = [
  {
    title: "Asymptotic Behavior of Liquidity Pools in Fragmented Markets",
    category: "MARKET MICROSTRUCTURE",
    date: "OCT 2023",
    abstract: "Analyzing the stability of automated market makers under high volatility regimes using mean-field game theory."
  },
  {
    title: "Non-Linear Dependence in Cross-Asset Correlations",
    category: "RISK MANAGEMENT",
    date: "AUG 2023",
    abstract: "A copula-based approach to modeling tail risk dependencies during black swan events."
  },
  {
    title: "Transformer Architectures for Time-Series Forecasting",
    category: "MACHINE LEARNING",
    date: "JUN 2023",
    abstract: "Adapting large language model attention mechanisms to identify long-range dependencies in price action."
  }
];

const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-32 bg-paper">
      <div className="max-w-[90vw] mx-auto">
        <SectionReveal>
           <div className="flex justify-between items-end mb-16">
             <h2 className="font-serif text-4xl text-graphite">Insights</h2>
             <a href="#" className="font-mono text-xs text-graphite border-b border-graphite hover:text-gold hover:border-gold transition-colors pb-1">VIEW ARCHIVE</a>
           </div>
        </SectionReveal>

        <div className="space-y-0">
          {papers.map((paper, index) => (
            <SectionReveal key={index} delay={index * 150}>
              <div className="group border-t border-gray-200 py-10 hover:bg-gray-50 transition-colors cursor-pointer relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-2 font-mono text-xs text-gold font-bold">
                    {paper.category}
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="font-serif text-2xl md:text-3xl text-graphite group-hover:text-gray-600 transition-colors mb-2">
                      {paper.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-500 max-w-2xl">
                      {paper.abstract}
                    </p>
                  </div>
                  <div className="md:col-span-3 text-right font-mono text-xs text-muted">
                    {paper.date} <span className="ml-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity text-gold">↓ PDF</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;