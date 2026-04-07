'use client';

import { useState, useEffect } from 'react';
import T from '@/components/ui/t/T';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { posts as staticPosts, type BlogPost } from '@/data/posts';
import * as S from './styles';

interface ApiPost {
  id: number; slug: string;
  title: string; titlePt: string;
  subtitle: string; subtitlePt: string;
  excerptEn: string; excerptPt: string;
  bodyEn: string; bodyPt: string;
  date: string; readTime: number;
  primaryTag: string; tags: string[];
  accentColor: string; icon: string;
  status: string;
}

function formatDate(d: string): string {
  try { return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' }); }
  catch { return d; }
}

function apiToPost(p: ApiPost): BlogPost {
  return {
    slug: p.slug,
    primaryTag: p.primaryTag || p.tags?.[0] || '',
    tags: p.tags || [],
    title: { en: p.title, pt: p.titlePt || p.title },
    subtitle: { en: p.subtitle, pt: p.subtitlePt || p.subtitle },
    date: formatDate(p.date),
    datetime: p.date,
    readTime: p.readTime || 5,
    accentColor: p.accentColor || '#4DB89E',
    icon: p.icon || '✦',
    excerpt: { en: p.excerptEn, pt: p.excerptPt || p.excerptEn },
    body: {
      en: { intro: '', sections: [], closing: '', html: p.bodyEn },
      pt: { intro: '', sections: [], closing: '', html: p.bodyPt || p.bodyEn },
    },
  };
}

const delays = ['', ' reveal-delay-1', ' reveal-delay-2'];

export default function BlogSection() {
  const ref = useScrollReveal();
  const { dict } = useLang();
  const [apiPosts, setApiPosts] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.ok ? r.json() : [])
      .then((data: ApiPost[]) => setApiPosts(data.length > 0 ? data.map(apiToPost) : []))
      .catch(() => setApiPosts([]));
  }, []);

  const posts = (apiPosts && apiPosts.length > 0) ? apiPosts : staticPosts;

  return (
    <S.BlogRoot id="blog" aria-labelledby="blog-heading" ref={ref}>
      <S.Inner>
        <S.BlogHeader className="reveal">
          <S.BlogTitle id="blog-heading">
            {dict.blog.headingLine1} &amp;<br /><em>{dict.blog.headingEm}</em>
          </S.BlogTitle>
          <S.HeaderRight>
            <S.BlogSubtitle>{dict.blog.subtitle}</S.BlogSubtitle>
            <S.AllLink href="#" aria-label="View all blog posts">
              {dict.blog.allPosts} →
            </S.AllLink>
          </S.HeaderRight>
        </S.BlogHeader>
        <S.Grid role="list">
          {posts.map((post, i) => (
            <S.Card key={post.slug} className={`reveal${delays[i]}`} cardColor={post.accentColor}>
              <S.CardLink href={`/blog/${post.slug}`}>
                <S.CardBar className="card-bar" aria-hidden="true" />
                <S.Cover aria-hidden="true">
                  <S.PlaceholderIcon>{post.icon}</S.PlaceholderIcon>
                </S.Cover>
                <S.Body>
                  <S.Meta>
                    <S.Tag>{post.primaryTag}</S.Tag>
                    <S.DateEl dateTime={post.datetime}>{post.date}</S.DateEl>
                  </S.Meta>
                  <S.CardTitle className="card-title">
                    <T en={post.title.en} pt={post.title.pt} />
                  </S.CardTitle>
                  <S.Excerpt>
                    <T en={post.excerpt.en} pt={post.excerpt.pt} />
                  </S.Excerpt>
                  <S.CardFooter>
                    <S.ReadTime>{post.readTime} {dict.blog.minRead}</S.ReadTime>
                    <S.Arrow className="card-arrow" aria-hidden="true">↗</S.Arrow>
                  </S.CardFooter>
                </S.Body>
              </S.CardLink>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.BlogRoot>
  );
}
