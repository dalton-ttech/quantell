import React from 'react';
import SectionReveal from './SectionReveal';

const LabSection: React.FC = () => {
  return (
    <section id="research" className="py-32 relative bg-gradient-to-b from-transparent to-gray-50/50">
      <div className="max-w-[90vw] mx-auto">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 border-b border-gray-200 pb-8">
            <h2 className="font-serif text-4xl md:text-5xl text-graphite">
              Quasar Alpha <span className="text-gold">Research</span>
            </h2>
            <span className="font-mono text-sm text-muted mt-4 md:mt-0">EST. 2024 • LAB PARADIGM</span>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Philosophy */}
          <div className="md:col-span-5 md:col-start-1">
            <SectionReveal delay={200}>
              <h3 className="font-mono text-sm tracking-widest uppercase text-muted mb-6">Methodology</h3>
              <p className="font-serif text-2xl leading-relaxed text-graphite mb-8">
                We believe alpha is not found, but constructed.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed mb-8 text-justify">
                Our team, rooted in the Stanford Mathematics Department (Probability & Metrics), treats the market not as a casino, but as a high-dimensional stochastic process. We apply measure theory and non-linear dynamics to identify structural inefficiencies invisible to standard statistical arbitrage.
              </p>
              <div className="p-6 bg-white border border-gray-100 shadow-sm">
                <p className="font-mono text-xs text-muted mb-4">STOCHASTIC DIFFERENTIAL EQUATION</p>
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
                    <span className="font-mono text-xs text-white/60 group-hover:text-graphite/60">DATA DEPTH</span>
                    <span className="font-serif text-4xl text-white group-hover:text-graphite">PB+</span>
                  </div>
                  <div className="aspect-square border border-graphite p-6 flex flex-col justify-between hover:bg-gray-50 transition-colors">
                    <span className="font-mono text-xs text-muted">MODEL INTEGRITY</span>
                    <span className="font-serif text-4xl text-graphite">99.9%</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-mono text-sm font-bold mb-4">CORE DISCIPLINES</h4>
                  <ul className="space-y-3 font-sans text-sm text-gray-600">
                     <li className="flex items-center gap-3">
                       <span className="w-1 h-1 bg-gold"></span> High-Frequency Econometrics
                     </li>
                     <li className="flex items-center gap-3">
                       <span className="w-1 h-1 bg-gold"></span> Convex Optimization
                     </li>
                     <li className="flex items-center gap-3">
                       <span className="w-1 h-1 bg-gold"></span> Deep Reinforcement Learning
                     </li>
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