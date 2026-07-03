'use client';

import { useTranslation } from 'react-i18next';
import * as S from './styles';

export default function PostPageFooter() {
  const { t } = useTranslation();

  return (
    <S.Footer>
      <S.Inner>
        <S.FooterP>{t('post.footerText')}</S.FooterP>
        <S.BackBtn href="/blog">← {t('post.back')}</S.BackBtn>
      </S.Inner>
    </S.Footer>
  );
}
