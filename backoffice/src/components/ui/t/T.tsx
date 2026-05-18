'use client';

import { useTranslation } from 'react-i18next';

interface Props {
  en: React.ReactNode;
  pt: React.ReactNode;
  it?: React.ReactNode;
}

export default function T({ en, pt, it }: Props) {
  const { i18n } = useTranslation();
  if (i18n.language === 'it') return <>{it ?? en}</>;
  if (i18n.language === 'pt') return <>{pt}</>;
  return <>{en}</>;
}
