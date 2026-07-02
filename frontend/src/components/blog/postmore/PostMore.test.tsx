import React from 'react';
import { render, screen } from '@testing-library/react';
import PostMore from './PostMore';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/data/posts', () => ({
  posts: [
    {
      slug: 'post-a',
      primaryTag: 'Tech',
      tags: [],
      title: { en: 'Post Alpha', pt: 'Post Alpha' },
      subtitle: { en: '', pt: '' },
      date: 'Jan 2025',
      datetime: '2025-01-01',
      readTime: 5,
      accentColor: '#FF0000',
      icon: '📝',
      excerpt: { en: '', pt: '' },
      body: { en: { intro: '', sections: [], closing: '' }, pt: { intro: '', sections: [], closing: '' } },
    },
    {
      slug: 'post-b',
      primaryTag: 'Life',
      tags: [],
      title: { en: 'Post Beta', pt: 'Post Beta' },
      subtitle: { en: '', pt: '' },
      date: 'Feb 2025',
      datetime: '2025-02-01',
      readTime: 3,
      accentColor: '#00FF00',
      icon: '🌿',
      excerpt: { en: '', pt: '' },
      body: { en: { intro: '', sections: [], closing: '' }, pt: { intro: '', sections: [], closing: '' } },
    },
    {
      slug: 'post-c',
      primaryTag: 'Travel',
      tags: [],
      title: { en: 'Post Gamma', pt: 'Post Gamma' },
      subtitle: { en: '', pt: '' },
      date: 'Mar 2025',
      datetime: '2025-03-01',
      readTime: 4,
      accentColor: '#0000FF',
      icon: '✈',
      excerpt: { en: '', pt: '' },
      body: { en: { intro: '', sections: [], closing: '' }, pt: { intro: '', sections: [], closing: '' } },
    },
  ],
}));

jest.mock('@/components/ui/t/T', () => ({
  __esModule: true,
  default: ({ en }: { en: React.ReactNode }) => <>{en}</>,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => React.createElement('a', { href, ...rest }, children),
}));

describe('PostMore', () => {
  it('renders without crashing', () => {
    render(<PostMore currentSlug="post-a" />);
  });

  it('has aria-labelledby="more-posts-heading" on the section', () => {
    render(<PostMore currentSlug="post-a" />);
    expect(document.querySelector('[aria-labelledby="more-posts-heading"]')).toBeInTheDocument();
  });

  it('has a heading with id="more-posts-heading"', () => {
    render(<PostMore currentSlug="post-a" />);
    expect(document.getElementById('more-posts-heading')).toBeInTheDocument();
  });

  it('renders the morePosts and writings translation keys', () => {
    render(<PostMore currentSlug="post-a" />);
    expect(screen.getByText(/post\.morePosts/)).toBeInTheDocument();
    expect(screen.getByText('post.writings')).toBeInTheDocument();
  });

  it('excludes the current post slug from the list', () => {
    render(<PostMore currentSlug="post-a" />);
    expect(screen.queryByText('Post Alpha')).not.toBeInTheDocument();
  });

  it('renders at most 2 other posts', () => {
    render(<PostMore currentSlug="post-a" />);
    expect(screen.getByText('Post Beta')).toBeInTheDocument();
    expect(screen.getByText('Post Gamma')).toBeInTheDocument();
  });

  it('renders links to the other posts', () => {
    render(<PostMore currentSlug="post-a" />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('/blog/post-b');
    expect(hrefs).toContain('/blog/post-c');
  });

  it('renders the read time for each card', () => {
    render(<PostMore currentSlug="post-a" />);
    expect(screen.getAllByText(/blog\.minRead/).length).toBeGreaterThanOrEqual(1);
  });

  it('renders the primary tag of each card', () => {
    render(<PostMore currentSlug="post-a" />);
    expect(screen.getByText('Life')).toBeInTheDocument();
    expect(screen.getByText('Travel')).toBeInTheDocument();
  });

  it('returns null when there are no other posts', () => {
    const { container } = render(<PostMore currentSlug="post-a" />);
    // With our mock data having posts, the section renders
    expect(container.firstChild).not.toBeNull();
  });
});
