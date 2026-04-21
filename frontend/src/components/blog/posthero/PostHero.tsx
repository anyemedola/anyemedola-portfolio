'use client';

import * as S from './styles';
import Image from 'next/image';
import T from '@/components/ui/t/T';
import { useTranslation } from 'react-i18next';
import type { BlogPost } from '@/data/posts';

export default function PostHero({ post }: { post: BlogPost }) {
  const { t } = useTranslation();
  return (
    <S.Hero>
      <S.Tags role="list" aria-label="Post categories">
        <S.Tag primary role="listitem">{post.primaryTag}</S.Tag>
        {post.tags.map((tag) => (
          <S.Tag key={tag} role="listitem">{tag}</S.Tag>
        ))}
      </S.Tags>
      <S.Title id="post-main-title">
        <T en={post.title.en} pt={post.title.pt} />
      </S.Title>
      <S.Subtitle><T en={post.subtitle.en} pt={post.subtitle.pt} /></S.Subtitle>
      <S.Meta>
        <S.Author>
          <S.Avatar>
            <Image src="/IMG_2338.jpg" alt="Any Medola" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
          </S.Avatar>
          <div>
            <S.AuthorName>Any Medola</S.AuthorName>
            <S.AuthorRole>Senior Front-End Developer</S.AuthorRole>
          </div>
        </S.Author>
        <S.Divider aria-hidden="true" />
        <S.MetaItem><time dateTime={post.datetime}>{post.date}</time></S.MetaItem>
        <S.Divider aria-hidden="true" />
        <S.MetaItem>{post.readTime} {t('blog.minRead')}</S.MetaItem>
      </S.Meta>
    </S.Hero>
  );
}
