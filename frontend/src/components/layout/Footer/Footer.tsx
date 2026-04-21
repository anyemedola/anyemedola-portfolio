'use client';

import * as S from './styles';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <S.FooterRoot role="contentinfo">
      <S.FooterText>© 2025 Any Elis Mendonça Medola</S.FooterText>
      <S.FooterLink href="https://anyemedola.com.br" target="_blank" rel="noopener noreferrer">
        anyemedola.com.br
      </S.FooterLink>
      <S.FooterText>{t('footer.location')}</S.FooterText>
    </S.FooterRoot>
  );
}
