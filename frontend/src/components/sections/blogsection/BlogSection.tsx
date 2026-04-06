'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import T from '@/components/ui/t/T';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { posts as staticPosts, type BlogPost } from '@/data/posts';

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

const BlogRoot = styled('section')({
  background: tokens.ink,
  padding: '120px 0',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: "'BLOG'",
    position: 'absolute',
    bottom: -40,
    right: -20,
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 220,
    color: 'rgba(255,255,255,0.025)',
    pointerEvents: 'none',
    lineHeight: 1,
  },
});

const Inner = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 56px',
  '@media (max-width: 900px)': {
    padding: '0 24px',
  },
});

const BlogHeader = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: 64,
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 24,
  },
});

const BlogTitle = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(52px, 6vw, 88px)',
  lineHeight: 0.9,
  color: tokens.cream,
  '& em': {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    color: tokens.pinkOnDark,
    fontWeight: 300,
  },
});

const HeaderRight = styled('div')({
  textAlign: 'right',
  '@media (max-width: 900px)': {
    textAlign: 'left',
  },
});

const BlogSubtitle = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 18,
  fontWeight: 300,
  fontStyle: 'italic',
  color: 'rgba(249,245,238,0.55)',
  maxWidth: 260,
  lineHeight: 1.6,
  marginBottom: 20,
});

const AllLink = styled('a')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: tokens.mintOnDark,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  transition: 'gap 0.2s',
  minHeight: 44,
  '&:hover': { gap: 14 },
});

const Grid = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 2,
  listStyle: 'none',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

const Card = styled('li')<{ cardColor?: string }>(({ cardColor }) => ({
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.06)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, background 0.3s ease',
  cursor: 'none',
  position: 'relative',
  '--card-color': cardColor ?? tokens.mintOnDark,
  '&:hover': {
    background: 'rgba(255,255,255,0.07)',
    transform: 'translateY(-4px)',
    '& .card-bar': { transform: 'scaleX(1)' },
    '& .card-title': { color: 'var(--card-color)' },
    '& .card-arrow': {
      background: 'var(--card-color)',
      borderColor: 'var(--card-color)',
      color: tokens.ink,
      transform: 'rotate(45deg)',
    },
  },
} as React.CSSProperties));

const CardBar = styled('div')({
  height: 3,
  width: '100%',
  background: 'var(--card-color)',
  transform: 'scaleX(0)',
  transformOrigin: 'left',
  transition: 'transform 0.4s ease',
});

const Cover = styled('div')({
  width: '100%',
  aspectRatio: '16/9',
  overflow: 'hidden',
  position: 'relative',
  background: 'rgba(255,255,255,0.03)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const PlaceholderIcon = styled('span')({ fontSize: 36, opacity: 0.12, zIndex: 1 });

const Body = styled('div')({
  padding: '28px 28px 32px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const Meta = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
});

const Tag = styled('span')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--card-color)',
  background: 'rgba(255,255,255,0.05)',
  padding: '4px 10px',
  borderRadius: 2,
});

const DateEl = styled('time')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  letterSpacing: '0.1em',
  color: 'rgba(249,245,238,0.4)',
});

const CardTitle = styled('h3')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 24,
  letterSpacing: '0.03em',
  lineHeight: 1.05,
  color: tokens.cream,
  marginBottom: 14,
  transition: 'color 0.2s',
});

const Excerpt = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 15,
  fontWeight: 300,
  lineHeight: 1.65,
  color: 'rgba(249,245,238,0.55)',
  flex: 1,
  marginBottom: 24,
});

const CardFooter = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 20,
  borderTop: '1px solid rgba(255,255,255,0.07)',
});

const ReadTime = styled('span')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(249,245,238,0.4)',
});

const Arrow = styled('div')({
  width: 32,
  height: 32,
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  color: 'rgba(249,245,238,0.5)',
  transition: 'all 0.25s',
  flexShrink: 0,
});

const CardLink = styled(Link)({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  color: 'inherit',
  '&:focus-visible': {
    outline: `3px solid ${tokens.mintOnDark}`,
    outlineOffset: 2,
  },
});

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
    <BlogRoot id="blog" aria-labelledby="blog-heading" ref={ref}>
      <Inner>
        <BlogHeader className="reveal">
          <BlogTitle id="blog-heading">
            {dict.blog.headingLine1} &amp;<br /><em>{dict.blog.headingEm}</em>
          </BlogTitle>
          <HeaderRight>
            <BlogSubtitle>{dict.blog.subtitle}</BlogSubtitle>
            <AllLink href="#" aria-label="View all blog posts">
              {dict.blog.allPosts} →
            </AllLink>
          </HeaderRight>
        </BlogHeader>
        <Grid role="list">
          {posts.map((post, i) => (
            <Card key={post.slug} className={`reveal${delays[i]}`} cardColor={post.accentColor}>
              <CardLink href={`/blog/${post.slug}`}>
                <CardBar className="card-bar" aria-hidden="true" />
                <Cover aria-hidden="true">
                  <PlaceholderIcon>{post.icon}</PlaceholderIcon>
                </Cover>
                <Body>
                  <Meta>
                    <Tag>{post.primaryTag}</Tag>
                    <DateEl dateTime={post.datetime}>{post.date}</DateEl>
                  </Meta>
                  <CardTitle className="card-title">
                    <T en={post.title.en} pt={post.title.pt} />
                  </CardTitle>
                  <Excerpt>
                    <T en={post.excerpt.en} pt={post.excerpt.pt} />
                  </Excerpt>
                  <CardFooter>
                    <ReadTime>{post.readTime} {dict.blog.minRead}</ReadTime>
                    <Arrow className="card-arrow" aria-hidden="true">↗</Arrow>
                  </CardFooter>
                </Body>
              </CardLink>
            </Card>
          ))}
        </Grid>
      </Inner>
    </BlogRoot>
  );
}
