'use client';

import { useTranslation } from 'react-i18next';

interface Props {
  en: React.ReactNode;
  pt: React.ReactNode;
}

export default function T({ en, pt }: Props) {
  const { i18n } = useTranslation();
  return <>{i18n.language === 'en' ? en : pt}</>;
}
