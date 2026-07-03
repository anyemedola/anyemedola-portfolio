'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts, type BlogPost } from '@/data/posts';
import { useTranslation } from 'react-i18next';
import T from '@/components/ui/t/T';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import Header from '@/components/layout/Header/Header';
import * as S from './styles';

interface ApiPost {
  id: number; slug: string;
  title: string; titlePt: string; titleIt: string;
  subtitle: string; subtitlePt: string; subtitleIt: string;
  excerptEn: string; excerptPt: string; excerptIt: string;
  bodyEn: string; bodyPt: string; bodyIt: string;
  date: string; readTime: number;
  primaryTag: string; tags: string[];
  accentColor: string; icon: string; image: string | null;
  status: 'published' | 'draft';
}

function apiToPost(p: ApiPost): BlogPost {
  const fmt = (d: string) => {
    try { return new Date(d + 'T00:00:00').toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }); }
    catch { return d; }
  };
  return {
    slug: p.slug,
    primaryTag: p.primaryTag || p.tags?.[0] || '',
    tags: p.tags || [],
    title: { en: p.title, pt: p.titlePt || p.title, it: p.titleIt || p.title },
    subtitle: { en: p.subtitle, pt: p.subtitlePt || p.subtitle, it: p.subtitleIt || p.subtitle },
    date: fmt(p.date),
    datetime: p.date,
    readTime: p.readTime || 5,
    accentColor: p.accentColor || '#B5546A',
    icon: p.icon || '✦',
    coverImage: p.image ?? undefined,
    excerpt: { en: p.excerptEn, pt: p.excerptPt || p.excerptEn, it: p.excerptIt || p.excerptEn },
    body: {
      en: { intro: '', sections: [], closing: '', html: p.bodyEn },
      pt: { intro: '', sections: [], closing: '', html: p.bodyPt || p.bodyEn },
      it: { intro: '', sections: [], closing: '', html: p.bodyIt || p.bodyEn },
    },
  };
}

export default function BlogListingPage() {
  const { t } = useTranslation();
  const [apiPosts, setApiPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.ok ? r.json() : [])
      .then((data: ApiPost[]) => setApiPosts(data.map(apiToPost)))
      .catch(() => {});
  }, []);

  const apiSlugs = new Set(apiPosts.map(p => p.slug));
  const inteira = posts.find(p => p.slug === 'inteira');
  const staticEssays = inteira && !apiSlugs.has('inteira') ? [inteira] : [];
  const allPosts = [...apiPosts, ...staticEssays]
    .sort((a, b) => (b.datetime ?? '').localeCompare(a.datetime ?? ''));

  const featured = allPosts[0] ?? null;
  const restPosts = allPosts.slice(1);

  return (
    <S.Root>
      <LemonCursor />
      <Header />

      <S.PageHeader>
        <S.Eyebrow>{t('blog.eyebrow')}</S.Eyebrow>
        <S.PageTitle>{t('blog.title')}</S.PageTitle>
        <S.PageLead>{t('blog.lead')}</S.PageLead>
      </S.PageHeader>

      {featured && (
        <S.FeatSection aria-label={t('blog.eyebrow')}>
          <S.FeatCard href={`/blog/${featured.slug}`}>
            <S.FeatContent>
              <S.FeatMeta>
                <S.FeatTag>{featured.primaryTag}</S.FeatTag>
                <S.FeatDate>{featured.date} · {featured.readTime} min</S.FeatDate>
              </S.FeatMeta>
              <S.FeatTitle>
                <T en={featured.title.en} pt={featured.title.pt} it={featured.title.it ?? featured.title.en} />
              </S.FeatTitle>
              <S.FeatExcerpt>
                <T en={featured.excerpt.en} pt={featured.excerpt.pt} it={featured.excerpt.it ?? featured.excerpt.en} />
              </S.FeatExcerpt>
              <S.FeatCta>{t('writing.featCta')}</S.FeatCta>
            </S.FeatContent>
            <S.FeatImgWrap>
              <Image
                className="featimg"
                src={featured.coverImage ?? '/inteira.jpeg'}
                alt={featured.title.pt ?? featured.title.en}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 760px) 100vw, 45vw"
              />
            </S.FeatImgWrap>
          </S.FeatCard>
        </S.FeatSection>
      )}

      {restPosts.length > 0 && (
        <S.UpcomingSection aria-label={t('blog.moreArticles')}>
          <S.SectionDivider>
            <S.SectionLabel>{t('blog.moreArticles')}</S.SectionLabel>
            <S.DividerLine aria-hidden="true" />
          </S.SectionDivider>

          {restPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <S.PostRow>
                <S.PostMeta className="post-meta">
                  <S.PostPeriod>{post.date}</S.PostPeriod>
                  <S.PostCategory>{post.primaryTag}</S.PostCategory>
                </S.PostMeta>
                <S.PostContent>
                  <S.PostTitle><T en={post.title.en} pt={post.title.pt} it={post.title.it ?? post.title.en} /></S.PostTitle>
                  <S.PostDesc><T en={post.excerpt.en} pt={post.excerpt.pt} it={post.excerpt.it ?? post.excerpt.en} /></S.PostDesc>
                </S.PostContent>
                <S.PostArrow className="post-arrow" aria-hidden="true">→</S.PostArrow>
              </S.PostRow>
            </Link>
          ))}

          <S.ClosingText>{t('blog.closingText')}</S.ClosingText>
        </S.UpcomingSection>
      )}
    </S.Root>
  );
}
