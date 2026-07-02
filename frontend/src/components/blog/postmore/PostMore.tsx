'use client';

import * as S from './styles';
import T from '@/components/ui/t/T';
import { useTranslation } from 'react-i18next';
import { posts } from '@/data/posts';

export default function PostMore({ currentSlug }: { currentSlug: string }) {
  const { t } = useTranslation();
  const others = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (others.length === 0) return null;

  return (
    <S.Section aria-labelledby="more-posts-heading">
      <S.Inner>
        <S.Eyebrow id="more-posts-heading">{t('post.keepReading')}</S.Eyebrow>
        <S.Grid>
          {others.map((post) => (
            <S.CardLink key={post.slug} href={`/blog/${post.slug}`}>
              <S.Kicker>{post.primaryTag}</S.Kicker>
              <S.CardTitle>
                <T en={post.title.en} pt={post.title.pt} it={post.title.it ?? post.title.en} />
              </S.CardTitle>
              <S.Excerpt>
                <T en={post.excerpt.en} pt={post.excerpt.pt} it={post.excerpt.it ?? post.excerpt.en} />
              </S.Excerpt>
            </S.CardLink>
          ))}
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
