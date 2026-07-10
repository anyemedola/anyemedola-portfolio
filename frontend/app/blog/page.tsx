'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { posts, type BlogPost } from '@/data/posts';
import { useTranslation } from 'react-i18next';
import T from '@/components/ui/t/T';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import Header from '@/components/layout/Header/Header';
import { apiToPost, type ApiPost } from '@/lib/apiToPost';
import * as S from './styles';

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
          <S.FeatCard href={`/blog/${featured.slug}`} data-imgless={!featured.coverImage ? 'true' : undefined}>
            <S.FeatContent>
              <S.FeatMeta>
                <S.FeatTag>
                  {featured.localTag
                    ? <T en={featured.localTag.en} pt={featured.localTag.pt} it={featured.localTag.it ?? featured.localTag.en} />
                    : featured.primaryTag}
                </S.FeatTag>
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
            {featured.coverImage && (
              <S.FeatImgWrap>
                <Image
                  className="featimg"
                  src={featured.coverImage}
                  alt={featured.title.pt ?? featured.title.en}
                  fill
                  sizes="(max-width: 760px) 100vw, 45vw"
                />
              </S.FeatImgWrap>
            )}
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
            <S.PostRowLink key={post.slug} href={`/blog/${post.slug}`}>
              <S.PostRow>
                <S.PostMeta className="post-meta">
                  <S.PostPeriod>{post.date}</S.PostPeriod>
                  <S.PostCategory>
                    {post.localTag
                      ? <T en={post.localTag.en} pt={post.localTag.pt} it={post.localTag.it ?? post.localTag.en} />
                      : post.primaryTag}
                  </S.PostCategory>
                </S.PostMeta>
                <S.PostContent>
                  <S.PostTitle><T en={post.title.en} pt={post.title.pt} it={post.title.it ?? post.title.en} /></S.PostTitle>
                  <S.PostDesc><T en={post.excerpt.en} pt={post.excerpt.pt} it={post.excerpt.it ?? post.excerpt.en} /></S.PostDesc>
                </S.PostContent>
                <S.PostArrow className="post-arrow" aria-hidden="true">→</S.PostArrow>
              </S.PostRow>
            </S.PostRowLink>
          ))}

          <S.ClosingText>{t('blog.closingText')}</S.ClosingText>
        </S.UpcomingSection>
      )}
    </S.Root>
  );
}
