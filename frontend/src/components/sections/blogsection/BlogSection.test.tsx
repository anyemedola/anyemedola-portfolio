import { render, screen, waitFor } from '@testing-library/react';
import BlogSection from './BlogSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn(), on: jest.fn(), off: jest.fn() },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
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
  }) => {
    const React = require('react');
    return React.createElement('a', { href, ...rest }, children);
  },
}));

const mockFetch = (data: unknown) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(data),
  }) as jest.Mock;
};

describe('BlogSection', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders without crashing when the API returns no posts', async () => {
    mockFetch([]);
    render(<BlogSection />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('/api/posts'));
  });

  it('has id="escrita" on the root element', () => {
    mockFetch([]);
    render(<BlogSection />);
    expect(document.getElementById('escrita')).toBeInTheDocument();
  });

  it('has aria-labelledby="escrita-heading" on the root element', () => {
    mockFetch([]);
    render(<BlogSection />);
    expect(document.getElementById('escrita')).toHaveAttribute('aria-labelledby', 'escrita-heading');
  });

  it('has a heading with id="escrita-heading"', () => {
    mockFetch([]);
    render(<BlogSection />);
    expect(document.getElementById('escrita-heading')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    mockFetch([]);
    render(<BlogSection />);
    expect(screen.getByText('writing.eyebrow')).toBeInTheDocument();
  });

  it('renders the section title translation key', () => {
    mockFetch([]);
    render(<BlogSection />);
    expect(screen.getByText('writing.notebookTitle')).toBeInTheDocument();
  });

  it('renders the lead translation key', () => {
    mockFetch([]);
    render(<BlogSection />);
    expect(screen.getByText('writing.notebookLead')).toBeInTheDocument();
  });

  it('falls back to the only known post (inteira) when the API returns nothing', async () => {
    mockFetch([]);
    render(<BlogSection />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(await screen.findByRole('link', { name: 'writing.notebookCta' })).toHaveAttribute('href', '/blog/inteira');
    expect(document.getElementById('nb1-title')).toBeInTheDocument();
    expect(await screen.findByText('Whole')).toBeInTheDocument();
  });

  it('features the most recently dated API post instead of any hardcoded post', async () => {
    mockFetch([
      {
        slug: 'freedom-is-too-small',
        title: 'Freedom is too small', titlePt: 'Liberdade é pequena demais', titleIt: '',
        excerptEn: 'An older essay.', excerptPt: '', excerptIt: '',
        date: '2025-01-10',
        primaryTag: 'Essay', tags: [],
        accentColor: '#4DB89E',
      },
      {
        slug: 'newest-essay',
        title: 'The Newest Essay', titlePt: '', titleIt: '',
        excerptEn: 'This one was just published.', excerptPt: '', excerptIt: '',
        date: '2026-09-01',
        primaryTag: 'Essay', tags: [],
        accentColor: '#4DB89E',
      },
    ]);
    render(<BlogSection />);

    await waitFor(() =>
      expect(screen.getByRole('link', { name: 'writing.notebookCta' })).toHaveAttribute('href', '/blog/newest-essay')
    );
    expect(screen.getByText('The Newest Essay')).toBeInTheDocument();
    expect(screen.queryByText('writing.nb1title')).not.toBeInTheDocument();
  });
});
