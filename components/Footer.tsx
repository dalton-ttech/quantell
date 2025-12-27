import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite text-white pt-20 pb-10">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-700 pb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl mb-4 text-paper">Quantell Capital</h3>
            <p className="font-mono text-xs text-gray-400 max-w-sm">
              Mathematical Integrity. Institutional Scale.<br/>
              A research-driven quantitative hedge fund.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-gold mb-4 uppercase">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-sans">
              <li><a href="mailto:ir@quantell.cap" className="hover:text-white transition-colors">ir@quantell.cap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li>Singapore HQ</li>
            </ul>
          </div>
          <div>
             <h4 className="font-mono text-xs text-gold mb-4 uppercase">Legal</h4>
             <ul className="space-y-2 text-sm text-gray-400 font-sans">
               <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
             </ul>
          </div>
        </div>

        <div className="text-[10px] leading-relaxed text-gray-500 font-sans text-justify">
          <p className="mb-4">
            DISCLAIMER: This website is intended for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities or investment products. Quantell Capital is a licensed fund management company. Past performance is not indicative of future results. Investment involves risk, including possible loss of principal.
          </p>
          <div className="flex justify-between items-center mt-8 font-mono">
             <span>© {new Date().getFullYear()} Quantell Capital Pte. Ltd. All rights reserved.</span>
             <span className="hidden md:inline">DESIGNED BY QUASAR ALPHA LAB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;