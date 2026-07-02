import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe('HeroSection', () => {
  it('renders without crashing', () => {
    render(<HeroSection />);
  });

  it('has id="top" on the root element', () => {
    render(<HeroSection />);
    expect(document.getElementById('top')).toBeInTheDocument();
  });

  it('has aria-labelledby="hero-heading" on the root element', () => {
    render(<HeroSection />);
    expect(document.getElementById('top')).toHaveAttribute('aria-labelledby', 'hero-heading');
  });

  it('has a heading with id="hero-heading"', () => {
    render(<HeroSection />);
    expect(document.getElementById('hero-heading')).toBeInTheDocument();
  });

  it('renders the name "Any" and "Medola"', () => {
    render(<HeroSection />);
    expect(screen.getByText('Any')).toBeInTheDocument();
    expect(screen.getByText('Medola')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    render(<HeroSection />);
    expect(screen.getByText('hero.eyebrow')).toBeInTheDocument();
  });

  it('renders the tag and sub translation keys', () => {
    render(<HeroSection />);
    expect(screen.getByText('hero.tag')).toBeInTheDocument();
    expect(screen.getByText('hero.sub')).toBeInTheDocument();
  });

  it('renders the primary CTA link pointing to #contato', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: 'hero.cta1' })).toHaveAttribute('href', '#contato');
  });

  it('renders the secondary CTA link pointing to #projetos', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: 'hero.cta2' })).toHaveAttribute('href', '#projetos');
  });

  it('renders the collage with aria-hidden="true"', () => {
    const { container } = render(<HeroSection />);
    const collage = container.querySelector('[aria-hidden="true"]');
    expect(collage).toBeInTheDocument();
  });

  it('renders the main photo with correct alt text', () => {
    const { container } = render(<HeroSection />);
    const img = container.querySelector('img[alt="Any em Ragusa Ibla, Sicília, ao pôr do sol"]');
    expect(img).toBeInTheDocument();
  });
});
