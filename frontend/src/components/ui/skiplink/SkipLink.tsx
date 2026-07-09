'use client';

import { useTranslation } from 'react-i18next';
import * as S from './styles';

export default function SkipLink() {
  const { t } = useTranslation();

  const handleClick = () => {
    const target = document.getElementById('main-content');
    target?.focus();
    target?.scrollIntoView();
  };

  return (
    <S.SkipLinkEl type="button" onClick={handleClick} suppressHydrationWarning>
      {t('skipLink.label')}
    </S.SkipLinkEl>
  );
}
