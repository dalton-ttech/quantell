import React from 'react';
import SectionReveal from './SectionReveal';

const StrategySection: React.FC = () => {
  return (
    <section id="strategy" className="py-32 bg-graphite text-paper relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[90vw] mx-auto relative z-10">
        <SectionReveal>
          <div className="mb-24">
            <h2 className="font-serif text-4xl md:text-6xl text-paper mb-4">
              Execution <span className="text-gold italic">&</span> Strategy
            </h2>
            <p className="font-mono text-muted max-w-xl">
              From theoretical formulation to millisecond execution.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-white/20">
          {[
            {
              id: '01',
              title: "Signal Generation",
              desc: "Multi-factor models synthesizing fundamental data, alternative datasets, and market microstructure signals."
            },
            {
              id: '02',
              title: "Portfolio Construction",
              desc: "Dynamic risk budgeting using convex optimization to maximize Sharpe ratio under strict drawdown constraints."
            },
            {
              id: '03',
              title: "Algorithmic Execution",
              desc: "Proprietary low-latency routing engine designed to minimize market impact and slippage globally."
            }
          ].map((item, idx) => (
            <SectionReveal key={item.id} delay={idx * 200} className="border-b lg:border-b-0 lg:border-r border-white/20 p-8 lg:p-12 hover:bg-white/5 transition-colors duration-300 group">
               <div className="font-mono text-gold text-xs mb-8">STEP {item.id}</div>
               <h3 className="font-serif text-2xl mb-4 text-paper group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
               <p className="font-sans text-sm text-gray-400 leading-relaxed text-justify">
                 {item.desc}
               </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;