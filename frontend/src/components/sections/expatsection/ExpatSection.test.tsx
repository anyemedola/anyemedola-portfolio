import { render, screen } from '@testing-library/react';
import ExpatSection from './ExpatSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

jest.mock('@/components/translator-i18n', () => ({
  __esModule: true,
  default: ({ path }: { path: string }) => <span>{path}</span>,
  Translator: ({ path }: { path: string }) => <span>{path}</span>,
}));

describe('ExpatSection', () => {
  it('renders without crashing', () => {
    render(<ExpatSection />);
  });

  it('has id="expat" on the root element', () => {
    render(<ExpatSection />);
    expect(document.getElementById('expat')).toBeInTheDocument();
  });

  it('has aria-labelledby="expat-heading" on the root element', () => {
    render(<ExpatSection />);
    expect(document.getElementById('expat')).toHaveAttribute('aria-labelledby', 'expat-heading');
  });

  it('has a heading with id="expat-heading"', () => {
    render(<ExpatSection />);
    expect(document.getElementById('expat-heading')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    render(<ExpatSection />);
    expect(screen.getByText('expat.eyebrow')).toBeInTheDocument();
  });

  it('renders the title translation key', () => {
    render(<ExpatSection />);
    expect(screen.getByText('expat.title')).toBeInTheDocument();
  });

  it('renders the Translator component with expat.p path', () => {
    render(<ExpatSection />);
    expect(screen.getByText('expat.p')).toBeInTheDocument();
  });

  it('renders the Instagram CTA link with correct href', () => {
    render(<ExpatSection />);
    const link = screen.getByRole('link', { name: 'expat.cta' });
    expect(link).toHaveAttribute('href', 'https://instagram.com/anyinsicily');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the section image with alt text', () => {
    render(<ExpatSection />);
    expect(screen.getByRole('img', { name: 'Any em um show na Itália' })).toBeInTheDocument();
  });
});
