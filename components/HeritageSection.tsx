import React from 'react';
import SectionReveal from './SectionReveal';

const HeritageSection: React.FC = () => {
  return (
    <section id="heritage" className="py-32 bg-paper relative">
       {/* Background decorative sum symbol */}
       <div className="absolute left-[-5vw] bottom-0 text-[40vw] leading-none opacity-[0.02] font-serif pointer-events-none select-none text-graphite">
          Σ
        </div>

      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <SectionReveal>
            <h2 className="font-serif text-4xl mb-8">Heritage & <br/>Global Presence</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-sm font-bold text-gold mb-2">STANFORD, CA</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Our genesis lies in the academic halls of Stanford University. The firm maintains deep ties with the Department of Mathematics, fostering a pipeline of rigorous talent and cutting-edge research in stochastic analysis.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold text-gold mb-2">SINGAPORE</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Headquartered in the heart of Asia's financial hub, Quantell Capital leverages Singapore's robust regulatory framework and proximity to emerging markets to deploy capital with institutional-grade security and efficiency.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={200} className="relative h-full min-h-[300px] border border-gray-200 p-8 flex items-center justify-center bg-gray-50">
             {/* Abstract Map Visualization */}
             <div className="absolute inset-0 p-8">
                <div className="w-full h-full border border-dashed border-gray-300 relative">
                   <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-graphite rounded-full animate-ping"></div>
                   <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-graphite rounded-full"></div>
                   <span className="absolute top-[24%] left-[10%] font-mono text-[10px] tracking-widest text-muted">STANFORD</span>

                   {/* Connection Line */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                      <path d="M 50 80 Q 150 20 300 120" stroke="#EED184" strokeWidth="1" fill="none" strokeDasharray="4 4" className="opacity-50" />
                   </svg>

                   <div className="absolute bottom-[30%] right-[20%] w-2 h-2 bg-graphite rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                   <div className="absolute bottom-[30%] right-[20%] w-2 h-2 bg-graphite rounded-full"></div>
                   <span className="absolute bottom-[34%] right-[20%] font-mono text-[10px] tracking-widest text-muted">SINGAPORE</span>
                </div>
             </div>
             <div className="relative z-10 font-serif text-2xl text-graphite/10 tracking-[1em] text-center w-full">
                GLOBAL<br/>COORDINATES
             </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;