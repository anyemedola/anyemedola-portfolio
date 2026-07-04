import type { BlogPost } from '@/data/posts';

export interface ApiPost {
  id?: number;
  slug: string;
  title: string; titlePt: string; titleIt: string;
  subtitle: string; subtitlePt: string; subtitleIt: string;
  excerptEn: string; excerptPt: string; excerptIt: string;
  bodyEn: string; bodyPt: string; bodyIt: string;
  date: string; readTime: number;
  primaryTag: string; primaryTagEn?: string; primaryTagIt?: string; tags: string[];
  accentColor: string; icon: string;
  image: string | null;
  status?: 'published' | 'draft';
}

export function formatDate(d: string): string {
  try { return new Date(d + 'T00:00:00').toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }); }
  catch { return d; }
}

export function apiToPost(p: ApiPost): BlogPost {
  return {
    slug:       p.slug,
    primaryTag: p.primaryTag || p.tags?.[0] || '',
    localTag:   { en: p.primaryTagEn || p.primaryTag, pt: p.primaryTag, it: p.primaryTagIt || p.primaryTag },
    tags:       p.tags || [],
    title:    { en: p.title,    pt: p.titlePt    || p.title,    it: p.titleIt    || p.title },
    subtitle: { en: p.subtitle, pt: p.subtitlePt || p.subtitle, it: p.subtitleIt || p.subtitle },
    date:     formatDate(p.date),
    datetime: p.date,
    readTime: p.readTime || 5,
    accentColor: p.accentColor || '#B5546A',
    icon:     p.icon || '✦',
    coverImage: p.image ?? undefined,
    excerpt: { en: p.excerptEn, pt: p.excerptPt || p.excerptEn, it: p.excerptIt || p.excerptEn },
    body: {
      en: { intro: '', sections: [], closing: '', html: p.bodyEn || p.bodyPt || '' },
      pt: { intro: '', sections: [], closing: '', html: p.bodyPt || '' },
      it: { intro: '', sections: [], closing: '', html: p.bodyIt || p.bodyPt || '' },
    },
  };
}
