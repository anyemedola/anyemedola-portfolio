'use client';

import { useLang } from '@/context/LangContext';

interface Props {
  en: React.ReactNode;
  pt: React.ReactNode;
}

export default function T({ en, pt }: Props) {
  const { locale } = useLang();
  return <>{locale === 'en' ? en : pt}</>;
}
