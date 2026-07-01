'use client';

import * as S from './styles';
import { useTranslation } from 'react-i18next';

export default function PostNav() {
  const { t } = useTranslation();

  return (
    <S.Nav aria-label="Blog post navigation">
      <S.NavInner>
        <S.BackBtn href="/#escrita" aria-label="Back to portfolio">
          <S.BackArrow className="back-arrow" aria-hidden="true">←</S.BackArrow>
          {t('post.back')}
        </S.BackBtn>
        <S.NavLogo href="/">Any <em>Medola</em></S.NavLogo>
      </S.NavInner>
    </S.Nav>
  );
}
