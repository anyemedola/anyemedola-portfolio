import type { MetadataRoute } from 'next';

const BASE_URL = 'https://anyemedola.com.br';

interface ApiPost {
  slug: string;
  date: string;
  status: string;
}

async function getBlogSlugs(): Promise<{ slug: string; date: string }[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/posts`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const posts: ApiPost[] = await res.json();
    return posts
      .filter((p) => p.status === 'published')
      .map((p) => ({ slug: p.slug, date: p.date }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogSlugs();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...blogPosts.map(({ slug, date }) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(date),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
