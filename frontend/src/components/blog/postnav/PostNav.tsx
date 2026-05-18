'use client';

import * as S from './styles';
import { useTranslation } from 'react-i18next';
import LangToggle from '@/components/ui/langtoggle/LangToggle';

export default function PostNav() {
  const { t } = useTranslation();

  return (
    <S.Nav aria-label="Blog post navigation">
      <S.BackBtn href="/" aria-label="Back to portfolio">
        <S.BackArrow className="back-arrow" aria-hidden="true">←</S.BackArrow>
        {t('post.back')}
      </S.BackBtn>
      <S.Right>
        <LangToggle />
        <S.NavLogo href="/" aria-label="Any Medola — Home">AM·</S.NavLogo>
      </S.Right>
    </S.Nav>
  );
}
