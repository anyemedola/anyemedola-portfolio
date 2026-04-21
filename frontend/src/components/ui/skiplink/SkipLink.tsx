'use client';

import { useTranslation } from 'react-i18next';
import * as S from './styles';

export default function SkipLink() {
  const { t } = useTranslation();
  return <S.SkipLinkEl href="#main-content">{t('skipLink.label')}</S.SkipLinkEl>;
}
