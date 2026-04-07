'use client';

import { useLang } from '@/context/LangContext';
import * as S from './styles';

export default function SkipLink() {
  const { dict } = useLang();
  return <S.SkipLinkEl href="#main-content">{dict.skipLink.label}</S.SkipLinkEl>;
}
