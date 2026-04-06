'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { en } from '@/i18n/en';
import { pt } from '@/i18n/pt';
import type { Dict } from '@/i18n/en';

export type Locale = 'en' | 'pt';

const dicts: Record<Locale, Dict> = { en, pt };

interface LangContextValue {
  locale: Locale;
  dict: Dict;
  setLocale: (l: Locale) => void;
}

const LangContext = createContext<LangContextValue>({
  locale: 'en',
  dict: en,
  setLocale: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('bo_locale') as Locale | null;
    if (saved === 'en' || saved === 'pt') setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('bo_locale', l);
  };

  return (
    <LangContext.Provider value={{ locale, dict: dicts[locale], setLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
