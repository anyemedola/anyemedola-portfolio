import { render, screen } from '@testing-library/react';
import TravelSection from './TravelSection';

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

describe('TravelSection', () => {
  it('renders without crashing', () => {
    render(<TravelSection />);
  });

  it('has id="viagens" on the root element', () => {
    render(<TravelSection />);
    expect(document.getElementById('viagens')).toBeInTheDocument();
  });

  it('has aria-labelledby="viagens-heading" on the root element', () => {
    render(<TravelSection />);
    expect(document.getElementById('viagens')).toHaveAttribute('aria-labelledby', 'viagens-heading');
  });

  it('has a heading with id="viagens-heading"', () => {
    render(<TravelSection />);
    expect(document.getElementById('viagens-heading')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    render(<TravelSection />);
    expect(screen.getByText('travel.eyebrow')).toBeInTheDocument();
  });

  it('renders the section title translation key', () => {
    render(<TravelSection />);
    expect(screen.getByText('travel.title')).toBeInTheDocument();
  });

  it('renders the lead translation key', () => {
    render(<TravelSection />);
    expect(screen.getByText('travel.lead')).toBeInTheDocument();
  });

  it('renders the travel gallery with accessible label', () => {
    render(<TravelSection />);
    expect(screen.getByLabelText('Travel gallery')).toBeInTheDocument();
  });

  it('renders the travel with me group', () => {
    render(<TravelSection />);
    expect(screen.getByLabelText('Travel with me group')).toBeInTheDocument();
  });

  it('renders the WhatsApp CTA button', () => {
    render(<TravelSection />);
    const waBtn = screen.getByRole('link', { name: 'travel.twmCta' });
    expect(waBtn).toBeInTheDocument();
    expect(waBtn).toHaveAttribute('target', '_blank');
    expect(waBtn).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders travel gallery images', () => {
    render(<TravelSection />);
    expect(screen.getByAltText('Ragusa Ibla, Sicily')).toBeInTheDocument();
    expect(screen.getByAltText('Sunset over the Mediterranean')).toBeInTheDocument();
  });

  it('renders travel with me title', () => {
    render(<TravelSection />);
    expect(screen.getByText('travel.twmTitle')).toBeInTheDocument();
  });
});
