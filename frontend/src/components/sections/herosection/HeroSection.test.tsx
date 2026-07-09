import { render, screen, fireEvent } from '@testing-library/react';
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

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: jest.fn() }),
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

  it('renders the primary CTA as a button that scrolls to the contact section (no hash href)', () => {
    render(<HeroSection />);
    const contato = document.createElement('div');
    contato.id = 'contato';
    document.body.appendChild(contato);
    const scrollSpy = jest.spyOn(contato, 'scrollIntoView');

    const btn = screen.getByRole('button', { name: 'hero.cta1' });
    expect(btn).not.toHaveAttribute('href');
    fireEvent.click(btn);
    expect(scrollSpy).toHaveBeenCalled();

    document.body.removeChild(contato);
  });

  it('renders the secondary CTA as a button that scrolls to the projects section (no hash href)', () => {
    render(<HeroSection />);
    const projetos = document.createElement('div');
    projetos.id = 'projetos';
    document.body.appendChild(projetos);
    const scrollSpy = jest.spyOn(projetos, 'scrollIntoView');

    const btn = screen.getByRole('button', { name: 'hero.cta2' });
    expect(btn).not.toHaveAttribute('href');
    fireEvent.click(btn);
    expect(scrollSpy).toHaveBeenCalled();

    document.body.removeChild(projetos);
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
