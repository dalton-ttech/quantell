import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-silver text-white pt-20 pb-10">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-700 pb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl mb-4 text-paper">Quantell Capital</h3>
            <p className="font-mono text-xs text-gray-400 max-w-sm whitespace-pre-line">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-gold mb-4 uppercase">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-sans">
              <li><a href="mailto:ir@quantell.cap" className="hover:text-white transition-colors">ir@quantell.cap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li>{t.heritage.singapore_title}</li>
            </ul>
          </div>
          <div>
             <h4 className="font-mono text-xs text-gold mb-4 uppercase">{t.footer.legal}</h4>
             <ul className="space-y-2 text-sm text-gray-400 font-sans">
               <li><a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
               <li><a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a></li>
             </ul>
          </div>
        </div>

        <div className="text-[10px] leading-relaxed text-gray-500 font-sans text-justify">
          <p className="mb-4">
            {t.footer.disclaimer}
          </p>
          <div className="flex justify-between items-center mt-8 font-mono">
             <span>{t.footer.rights}</span>
             <span className="hidden md:inline">{t.footer.designed_by}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;