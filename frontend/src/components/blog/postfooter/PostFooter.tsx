'use client';

import * as S from './styles';
import { useLang } from '@/context/LangContext';

export default function PostFooter() {
  const { dict } = useLang();
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
  };

  return (
    <S.Wrap>
      <S.FooterTitle>{dict.post.share}</S.FooterTitle>
      <S.ShareLinks role="list">
        <S.ShareBtn href="#" role="listitem" aria-label="Share on LinkedIn">
          <span aria-hidden="true">in</span> LinkedIn
        </S.ShareBtn>
        <S.ShareBtn href="#" role="listitem" aria-label="Share on X / Twitter">
          <span aria-hidden="true">𝕏</span> Twitter/X
        </S.ShareBtn>
        <S.CopyBtn onClick={copyLink} aria-label="Copy link to clipboard">
          <span aria-hidden="true">⊕</span>
          {dict.post.copyLink}
        </S.CopyBtn>
      </S.ShareLinks>
    </S.Wrap>
  );
}
