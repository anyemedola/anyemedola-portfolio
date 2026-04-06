'use client';

import * as S from './styles';
import { useLang } from '@/context/LangContext';

export default function Footer() {
  const { dict } = useLang();
  return (
    <S.FooterRoot role="contentinfo">
      <S.FooterText>© 2025 Any Elis Mendonça Medola</S.FooterText>
      <S.FooterLink href="https://anyemedola.com.br" target="_blank" rel="noopener noreferrer">
        anyemedola.com.br
      </S.FooterLink>
      <S.FooterText>{dict.footer.location}</S.FooterText>
    </S.FooterRoot>
  );
}
