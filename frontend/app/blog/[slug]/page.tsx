import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPost, type BlogPost } from '@/data/posts';
import { apiToPost, formatDate, type ApiPost as SharedApiPost } from '@/lib/apiToPost';
import ReadingProgress from '@/components/blog/readingpostprogress/ReadingProgress';
import Header from '@/components/layout/Header/Header';
import PostHero from '@/components/blog/posthero/PostHero';
import PostBody from '@/components/blog/postbody/PostBody';
import PostMore from '@/components/blog/postmore/PostMore';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import PostPageFooter from '@/components/blog/postpagefooter/PostPageFooter';
import PostPageRoot from '@/components/blog/postpageroot/PostPageRoot';

export const dynamic = 'force-dynamic';

const BACKEND = process.env.BACKEND_URL ?? 'http://localhost:4000';

type ApiPost = SharedApiPost;

async function fetchApiPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${BACKEND}/api/posts/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const raw = await res.json() as ApiPost;
    return apiToPost(raw);
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
    <PostPageRoot>
      <LemonCursor />
      <ReadingProgress />
      <Header />
      <article aria-labelledby="post-main-title">
        <PostHero post={post} />
        <PostBody post={post} />
      </article>
      <PostMore currentSlug={slug} />
      <PostPageFooter />
    </PostPageRoot>
  );
}
