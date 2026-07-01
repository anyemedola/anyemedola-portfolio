import { render, screen } from '@testing-library/react';
import AboutSection from './AboutSection';

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

describe('AboutSection', () => {
  it('renders without crashing', () => {
    render(<AboutSection />);
  });

  it('has id="sobre" on the root section', () => {
    render(<AboutSection />);
    expect(document.getElementById('sobre')).toBeInTheDocument();
  });

  it('has aria-labelledby="about-heading" and the heading element exists', () => {
    render(<AboutSection />);
    expect(document.getElementById('sobre')).toHaveAttribute('aria-labelledby', 'about-heading');
    expect(document.getElementById('about-heading')).toBeInTheDocument();
  });

  it('renders the about heading via Translator', () => {
    render(<AboutSection />);
    expect(screen.getByText('about.title')).toBeInTheDocument();
  });

  it('renders the eyebrow text', () => {
    render(<AboutSection />);
    expect(screen.getByText('about.eyebrow')).toBeInTheDocument();
  });

  it('renders the section photo with alt text', () => {
    render(<AboutSection />);
    expect(screen.getByAltText('Any na Sicília')).toBeInTheDocument();
  });

  it('renders paragraph translation keys', () => {
    render(<AboutSection />);
    expect(screen.getByText('about.p1')).toBeInTheDocument();
    expect(screen.getByText('about.p2')).toBeInTheDocument();
  });

  it('renders the three stat numbers', () => {
    render(<AboutSection />);
    expect(screen.getByText('5+')).toBeInTheDocument();
    // "3" and "5" appear as stat numbers
    const statNumbers = screen.getAllByText(/^[0-9]+$/);
    expect(statNumbers.length).toBeGreaterThanOrEqual(2);
  });
});
