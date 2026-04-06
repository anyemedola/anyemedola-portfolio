'use client';

import * as S from './styles';
import { useRouter } from 'next/navigation';
import { useLang } from '@/context/LangContext';
import { useLang } from '@/context/LangContext';

export default function PostNav() {
  const router = useRouter();
  const { locale, setLocale, dict } = useLang();

  return (
    <S.Nav aria-label="Blog post navigation">
      <S.BackBtn onClick={() => router.back()} aria-label="Back to portfolio">
        <S.BackArrow className="back-arrow" aria-hidden="true">←</S.BackArrow>
        {dict.post.back}
      </S.BackBtn>
      <S.Right>
        <S.InlineLangToggle role="group" aria-label="Language selector">
          <S.LangBtn active={locale === 'en'} onClick={() => setLocale('en')} aria-pressed={locale === 'en'}>EN</S.LangBtn>
          <S.LangBtn active={locale === 'pt'} onClick={() => setLocale('pt')} aria-pressed={locale === 'pt'}>PT</S.LangBtn>
        </S.InlineLangToggle>
        <S.NavLogo href="/" aria-label="Any Medola — Home">AM·</S.NavLogo>
      </S.Right>
    </S.Nav>
  );
}
