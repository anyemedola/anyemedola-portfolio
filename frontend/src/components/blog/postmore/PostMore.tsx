'use client';

import { useState, useEffect } from 'react';
import * as S from './styles';
import T from '@/components/ui/t/T';
import { useTranslation } from 'react-i18next';
import { posts, type BlogPost } from '@/data/posts';

interface ApiPost {
  slug: string; title: string; titlePt: string; titleIt: string;
  excerptEn: string; excerptPt: string; excerptIt: string;
  primaryTag: string; tags: string[];
  date: string; readTime: number; accentColor: string; icon: string;
  subtitle: string; subtitlePt: string; subtitleIt: string;
  bodyEn: string; bodyPt: string; bodyIt: string; image: string | null;
}

export default function PostMore({ currentSlug }: { currentSlug: string }) {
  const { t } = useTranslation();
  const [apiPosts, setApiPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.ok ? r.json() : [])
      .then((data: ApiPost[]) => setApiPosts(data.map(p => ({
        slug: p.slug,
        primaryTag: p.primaryTag || p.tags?.[0] || '',
        tags: p.tags || [],
        title: { en: p.title, pt: p.titlePt || p.title, it: p.titleIt || p.title },
        subtitle: { en: p.subtitle, pt: p.subtitlePt || p.subtitle, it: p.subtitleIt || p.subtitle },
        date: p.date, datetime: p.date, readTime: p.readTime || 5,
        accentColor: p.accentColor, icon: p.icon,
        coverImage: p.image ?? undefined,
        excerpt: { en: p.excerptEn, pt: p.excerptPt || p.excerptEn, it: p.excerptIt || p.excerptEn },
        body: {
          en: { intro: '', sections: [], closing: '', html: p.bodyEn },
          pt: { intro: '', sections: [], closing: '', html: p.bodyPt || p.bodyEn },
          it: { intro: '', sections: [], closing: '', html: p.bodyIt || p.bodyEn },
        },
      }))))
      .catch(() => {});
  }, []);

  const apiSlugs = new Set(apiPosts.map(p => p.slug));
  const allPosts = [...apiPosts, ...posts.filter(p => !apiSlugs.has(p.slug))];
  const others = allPosts.filter(p => p.slug !== currentSlug).slice(0, 3);

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
