import React, { createContext, useContext, useState, ReactNode } from 'react';
import { content } from './content';

type Language = 'EN' | 'CN';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: typeof content.EN;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('EN');

  const toggleLang = () => {
    setLang(prev => (prev === 'EN' ? 'CN' : 'EN'));
  };

  const value = {
    lang,
    toggleLang,
    t: content[lang]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};