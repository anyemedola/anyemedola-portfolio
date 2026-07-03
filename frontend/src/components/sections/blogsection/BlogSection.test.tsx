import { render, screen } from '@testing-library/react';
import BlogSection from './BlogSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
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

describe('BlogSection', () => {
  it('renders without crashing', () => {
    render(<BlogSection />);
  });

  it('has id="escrita" on the root element', () => {
    render(<BlogSection />);
    expect(document.getElementById('escrita')).toBeInTheDocument();
  });

  it('has aria-labelledby="escrita-heading" on the root element', () => {
    render(<BlogSection />);
    expect(document.getElementById('escrita')).toHaveAttribute('aria-labelledby', 'escrita-heading');
  });

  it('has a heading with id="escrita-heading"', () => {
    render(<BlogSection />);
    expect(document.getElementById('escrita-heading')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    render(<BlogSection />);
    expect(screen.getByText('writing.eyebrow')).toBeInTheDocument();
  });

  it('renders the section title translation key', () => {
    render(<BlogSection />);
    expect(screen.getByText('writing.notebookTitle')).toBeInTheDocument();
  });

  it('renders the lead translation key', () => {
    render(<BlogSection />);
    expect(screen.getByText('writing.notebookLead')).toBeInTheDocument();
  });

  it('renders the CTA link pointing to /blog/inteira', () => {
    render(<BlogSection />);
    expect(screen.getByRole('link', { name: 'writing.notebookCta' })).toHaveAttribute('href', '/blog/inteira');
  });

  it('renders the inteira notebook card', () => {
    render(<BlogSection />);
    expect(document.getElementById('nb1-title')).toBeInTheDocument();
    expect(screen.getByText('writing.nb1title')).toBeInTheDocument();
    expect(screen.getByText('writing.nb1desc')).toBeInTheDocument();
  });
});
