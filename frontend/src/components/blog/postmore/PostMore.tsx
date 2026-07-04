'use client';

import { useState, useEffect } from 'react';
import * as S from './styles';
import T from '@/components/ui/t/T';
import { useTranslation } from 'react-i18next';
import { posts as staticPosts, type BlogPost } from '@/data/posts';
import { apiToPost, type ApiPost } from '@/lib/apiToPost';

export default function PostMore({ currentSlug }: { currentSlug: string }) {
  const { t } = useTranslation();
  const [apiPosts, setApiPosts]   = useState<BlogPost[]>([]);
  const [loading, setLoading]     = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.ok ? r.json() : [])
      .then((data: ApiPost[]) => setApiPosts(data.map(apiToPost)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const apiSlugs = new Set(apiPosts.map(p => p.slug));
  const inteira  = staticPosts.find(p => p.slug === 'inteira');
  const allPosts = [
    ...apiPosts,
    ...(inteira && !apiSlugs.has('inteira') ? [inteira] : []),
  ];
  const others = allPosts.filter(p => p.slug !== currentSlug).slice(0, 3);

  if (loading) {
    return (
      <S.Section aria-hidden="true">
        <S.Inner>
          <S.Eyebrow>{t('post.keepReading')}</S.Eyebrow>
          <S.Grid>
            {[0, 1, 2].map(i => (
              <S.SkeletonCard key={i} />
            ))}
          </S.Grid>
        </S.Inner>
      </S.Section>
    );
  }

  if (others.length === 0) return null;

  return (
    <S.Section aria-labelledby="more-posts-heading">
      <S.Inner>
        <S.Eyebrow id="more-posts-heading">{t('post.keepReading')}</S.Eyebrow>
        <S.Grid>
          {others.map((post) => (
            <S.CardLink key={post.slug} href={`/blog/${post.slug}`}>
              <S.Kicker>
                {post.localTag
                  ? <T en={post.localTag.en} pt={post.localTag.pt} it={post.localTag.it ?? post.localTag.en} />
                  : post.primaryTag}
              </S.Kicker>
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
