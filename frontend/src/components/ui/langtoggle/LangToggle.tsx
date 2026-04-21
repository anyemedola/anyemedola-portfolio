'use client';

import { useTranslation } from 'react-i18next';
import * as S from './styles';

export default function LangToggle() {
  const { i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <S.Wrapper role="group" aria-label="Language selector">
      <S.LangBtn
        active={locale === 'en'}
        onClick={() => i18n.changeLanguage('en')}
        aria-pressed={locale === 'en'}
        aria-label="Switch to English"
      >
        EN
      </S.LangBtn>
      <S.LangBtn
        active={locale === 'pt'}
        onClick={() => i18n.changeLanguage('pt')}
        aria-pressed={locale === 'pt'}
        aria-label="Mudar para Português"
      >
        PT
      </S.LangBtn>
    </S.Wrapper>
  );
}
