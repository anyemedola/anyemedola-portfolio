'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import T from '@/components/ui/t/T';
import { posts, type BlogPost } from '@/data/posts';
import { apiToPost, type ApiPost } from '@/lib/apiToPost';
import * as S from './styles';

export default function BlogSection() {
  const { t } = useTranslation();
  const [apiPosts, setApiPosts] = useState<BlogPost[]>([]);
  const ref = useScrollReveal([apiPosts]);

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

  const displayCards = allPosts.slice(0, 2);
  const latestPost = displayCards[0];

  return (
    <S.EscritaRoot id="escrita" aria-labelledby="escrita-heading" ref={ref}>
      <S.Inner>
        <S.Left>
          <S.Eyebrow className="reveal">{t('writing.eyebrow')}</S.Eyebrow>
          <S.Title className="reveal" id="escrita-heading">
            {t('writing.notebookTitle')}
          </S.Title>
          <S.Lead className="reveal">{t('writing.notebookLead')}</S.Lead>
          {latestPost && (
            <S.CtaBtn href={`/blog/${latestPost.slug}`} className="reveal">
              {t('writing.notebookCta')}
            </S.CtaBtn>
          )}
        </S.Left>

        <S.Cards>
          {displayCards.map((post, i) => (
            <S.CardLink key={post.slug} href={`/blog/${post.slug}`} className="reveal" aria-labelledby={`nb${i + 1}-title`}>
              <S.NotebookCard accent={post.accentColor} as="div">
                <S.CardKicker>
                  {post.localTag
                    ? <T en={post.localTag.en} pt={post.localTag.pt} it={post.localTag.it ?? post.localTag.en} />
                    : post.primaryTag}
                </S.CardKicker>
                <S.CardTitle id={`nb${i + 1}-title`}>
                  <T en={post.title.en} pt={post.title.pt} it={post.title.it ?? post.title.en} />
                </S.CardTitle>
                <S.CardDesc>
                  <T en={post.excerpt.en} pt={post.excerpt.pt} it={post.excerpt.it ?? post.excerpt.en} />
                </S.CardDesc>
              </S.NotebookCard>
            </S.CardLink>
          ))}
        </S.Cards>
      </S.Inner>
    </S.EscritaRoot>
  );
}
