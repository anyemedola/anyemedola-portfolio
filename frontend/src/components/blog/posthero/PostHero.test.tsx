import React from 'react';
import { render, screen } from '@testing-library/react';
import PostHero from './PostHero';
import type { BlogPost } from '@/data/posts';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/components/ui/t/T', () => ({
  __esModule: true,
  default: ({ en }: { en: React.ReactNode }) => <>{en}</>,
}));

const mockPost: BlogPost = {
  slug: 'test-post',
  primaryTag: 'Tech',
  tags: ['React'],
  title: { en: 'Test Title', pt: 'Título de Teste' },
  subtitle: { en: 'Test Subtitle', pt: 'Subtítulo de Teste' },
  date: 'Jan 2025',
  datetime: '2025-01-01',
  readTime: 7,
  accentColor: '#FF0000',
  icon: '📝',
  excerpt: { en: 'Excerpt', pt: 'Trecho' },
  body: {
    en: { intro: '', sections: [], closing: '' },
    pt: { intro: '', sections: [], closing: '' },
  },
};

describe('PostHero', () => {
  it('renders without crashing', () => {
    render(<PostHero post={mockPost} />);
  });

  it('renders the post title', () => {
    render(<PostHero post={mockPost} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the post subtitle', () => {
    render(<PostHero post={mockPost} />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders the primary tag', () => {
    render(<PostHero post={mockPost} />);
    expect(screen.getByText('Tech')).toBeInTheDocument();
  });

  it('renders the post date', () => {
    render(<PostHero post={mockPost} />);
    expect(screen.getByText('Jan 2025')).toBeInTheDocument();
  });

  it('renders the read time with the minRead translation key', () => {
    render(<PostHero post={mockPost} />);
    expect(screen.getByText(/7.*blog\.minRead/)).toBeInTheDocument();
  });

  it('renders the author name', () => {
    render(<PostHero post={mockPost} />);
    expect(screen.getByText('por Any Medola')).toBeInTheDocument();
  });

  it('renders the author location', () => {
    render(<PostHero post={mockPost} />);
    expect(screen.getByText('Sicília, Itália')).toBeInTheDocument();
  });

  it('has id="post-main-title" on the title element', () => {
    render(<PostHero post={mockPost} />);
    expect(document.getElementById('post-main-title')).toBeInTheDocument();
  });
});
