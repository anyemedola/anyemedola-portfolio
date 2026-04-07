'use client';

import { useLang } from '@/context/LangContext';
import * as S from './styles';

export default function LangToggle() {
  const { locale, setLocale } = useLang();

  return (
    <S.Wrapper role="group" aria-label="Language selector">
      <S.LangBtn
        active={locale === 'en'}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        aria-label="Switch to English"
      >
        EN
      </S.LangBtn>
      <S.LangBtn
        active={locale === 'pt'}
        onClick={() => setLocale('pt')}
        aria-pressed={locale === 'pt'}
        aria-label="Mudar para Português"
      >
        PT
      </S.LangBtn>
    </S.Wrapper>
  );
}
