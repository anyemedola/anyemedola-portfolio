import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPost, type BlogPost } from '@/data/posts';
import ReadingProgress from '@/components/blog/readingpostprogress/ReadingProgress';
import PostNav from '@/components/blog/postnav/PostNav';
import PostHero from '@/components/blog/posthero/PostHero';
import PostBody from '@/components/blog/postbody/PostBody';
import PostFooter from '@/components/blog/postfooter/PostFooter';
import PostMore from '@/components/blog/postmore/PostMore';

export const dynamic = 'force-dynamic';

const BACKEND = process.env.BACKEND_URL ?? 'http://localhost:4000';

interface ApiPost {
  id: number; slug: string;
  title: string; titlePt: string;
  subtitle: string; subtitlePt: string;
  excerptEn: string; excerptPt: string;
  bodyEn: string; bodyPt: string;
  date: string; readTime: number;
  primaryTag: string; tags: string[];
  accentColor: string; icon: string;
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

async function fetchApiPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${BACKEND}/api/posts/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return apiToPost(await res.json() as ApiPost);
  } catch {
    return null;
  }
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const apiPost = await fetchApiPost(slug);
  const post = apiPost ?? getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title.en} — Any Medola`,
    description: post.excerpt.en,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const apiPost = await fetchApiPost(slug);
  const post = apiPost ?? getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ background: 'var(--cream, #F9F5EE)', minHeight: '100vh' }}>
      <ReadingProgress />
      <PostNav />
      <article aria-labelledby="post-main-title">
        <PostHero post={post} />
        <PostBody post={post} />
      </article>
      <PostFooter />
      <PostMore currentSlug={slug} />
    </div>
  );
}
