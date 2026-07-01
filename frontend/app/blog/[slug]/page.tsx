import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPost, type BlogPost } from '@/data/posts';
import ReadingProgress from '@/components/blog/readingpostprogress/ReadingProgress';
import PostNav from '@/components/blog/postnav/PostNav';
import PostHero from '@/components/blog/posthero/PostHero';
import PostBody from '@/components/blog/postbody/PostBody';
import PostMore from '@/components/blog/postmore/PostMore';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import PostPageFooter from '@/components/blog/postpagefooter/PostPageFooter';

export const dynamic = 'force-dynamic';

const BACKEND = process.env.BACKEND_URL ?? 'http://localhost:4000';

interface ApiPost {
  id: number; slug: string;
  title: string; titlePt: string; titleIt: string;
  subtitle: string; subtitlePt: string; subtitleIt: string;
  excerptEn: string; excerptPt: string; excerptIt: string;
  bodyEn: string; bodyPt: string; bodyIt: string;
  date: string; readTime: number;
  primaryTag: string; tags: string[];
  accentColor: string; icon: string;
}

function formatDate(d: string): string {
  try { return new Date(d + 'T00:00:00').toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }); }
  catch { return d; }
}

function apiToPost(p: ApiPost): BlogPost {
  return {
    slug: p.slug,
    primaryTag: p.primaryTag || p.tags?.[0] || '',
    tags: p.tags || [],
    title: { en: p.title, pt: p.titlePt || p.title, it: p.titleIt || p.title },
    subtitle: { en: p.subtitle, pt: p.subtitlePt || p.subtitle, it: p.subtitleIt || p.subtitle },
    date: formatDate(p.date),
    datetime: p.date,
    readTime: p.readTime || 5,
    accentColor: p.accentColor || '#B5546A',
    icon: p.icon || '✦',
    excerpt: { en: p.excerptEn, pt: p.excerptPt || p.excerptEn, it: p.excerptIt || p.excerptEn },
    body: {
      en: { intro: '', sections: [], closing: '', html: p.bodyEn },
      pt: { intro: '', sections: [], closing: '', html: p.bodyPt || p.bodyEn },
      it: { intro: '', sections: [], closing: '', html: p.bodyIt || p.bodyEn },
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
    title: `${post.title.pt ?? post.title.en} — Any Medola`,
    description: post.excerpt.pt ?? post.excerpt.en,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const apiPost = await fetchApiPost(slug);
  const post = apiPost ?? getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ background: '#FBF1E6', minHeight: '100vh' }}>
      <LemonCursor />
      <ReadingProgress />
      <PostNav />
      <article aria-labelledby="post-main-title">
        <PostHero post={post} />
        <PostBody post={post} />
      </article>
      <PostMore currentSlug={slug} />
      <PostPageFooter />
    </div>
  );
}
