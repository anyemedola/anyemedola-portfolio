'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  en: React.ReactNode;
  pt: React.ReactNode;
  it?: React.ReactNode;
}

export default function T({ en, pt, it }: Props) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>('en');

  useEffect(() => {
    setLang(i18n.language);
    const handleChange = (newLang: string) => setLang(newLang);
    i18n.on('languageChanged', handleChange);
    return () => { i18n.off('languageChanged', handleChange); };
  }, [i18n]);

  if (lang === 'it') return <>{it ?? en}</>;
  if (lang === 'pt') return <>{pt}</>;
  return <>{en}</>;
}
