'use client';

import * as S from './styles';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function PostNav() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <S.Nav aria-label="Blog post navigation">
      <S.BackBtn onClick={() => router.back()} aria-label="Back to portfolio">
        <S.BackArrow className="back-arrow" aria-hidden="true">←</S.BackArrow>
        {t('post.back')}
      </S.BackBtn>
      <S.Right>
        <S.InlineLangToggle role="group" aria-label="Language selector">
          <S.LangBtn active={locale === 'en'} onClick={() => i18n.changeLanguage('en')} aria-pressed={locale === 'en'}>EN</S.LangBtn>
          <S.LangBtn active={locale === 'pt'} onClick={() => i18n.changeLanguage('pt')} aria-pressed={locale === 'pt'}>PT</S.LangBtn>
        </S.InlineLangToggle>
        <S.NavLogo href="/" aria-label="Any Medola — Home">AM·</S.NavLogo>
      </S.Right>
    </S.Nav>
  );
}
