'use client';

import * as S from './styles';
import T from '@/components/ui/t/T';
import { useTranslation } from 'react-i18next';
import type { BlogPost } from '@/data/posts';

export default function PostHero({ post }: { post: BlogPost }) {
  const { t } = useTranslation();

  return (
    <S.Hero>
      <S.Tags>
        <S.TagPrimary>{post.primaryTag}</S.TagPrimary>
        <S.Sep aria-hidden="true">·</S.Sep>
        <S.TagMeta>{post.date}</S.TagMeta>
        <S.Sep aria-hidden="true">·</S.Sep>
        <S.TagMeta>{post.readTime} {t('blog.minRead')}</S.TagMeta>
      </S.Tags>

      <S.Title id="post-main-title">
        <T en={post.title.en} pt={post.title.pt} it={post.title.it ?? post.title.en} />
      </S.Title>

      <S.Subtitle>
        <T en={post.subtitle.en} pt={post.subtitle.pt} it={post.subtitle.it ?? post.subtitle.en} />
      </S.Subtitle>

      <S.Author>
        <S.AuthorName>por Any Medola</S.AuthorName>
        <S.Sep aria-hidden="true">·</S.Sep>
        <span>Sicília, Itália</span>
      </S.Author>

      <S.Rule aria-hidden="true" />
    </S.Hero>
  );
}
