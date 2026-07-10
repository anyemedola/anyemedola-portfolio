import { render, screen } from '@testing-library/react';
import TravelContent from './TravelContent';
import translations from '../translator-i18n/i18n/locales/en/translations.json';

const en = translations.travelContent;

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'en',
      getResourceBundle: () => translations,
    },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

jest.mock('@/components/ui/cursor/lemonCursor', () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock('@/components/ui/langtoggle/LangToggle', () => ({
  __esModule: true,
  default: () => <div data-testid="lang-toggle" />,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

describe('TravelContent', () => {
  it('renders without crashing', () => {
    render(<TravelContent />);
  });

  it('renders the "Portfolio" back link (no page replaced)', () => {
    render(<TravelContent />);
    expect(screen.getByText(/Portfolio/)).toBeInTheDocument();
  });

  it('renders the language toggle', () => {
    render(<TravelContent />);
    expect(screen.getByTestId('lang-toggle')).toBeInTheDocument();
  });

  it('renders the hero "About Me" heading and bio', () => {
    render(<TravelContent />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(en.hero.p1)).toBeInTheDocument();
  });

  it('renders all three process steps', () => {
    render(<TravelContent />);
    expect(screen.getByText('Scouting')).toBeInTheDocument();
    expect(screen.getByText('Filming')).toBeInTheDocument();
    expect(screen.getByText('Editing & posting')).toBeInTheDocument();
  });

  it('renders the carousel posts', () => {
    render(<TravelContent />);
    expect(screen.getByText('📍 Ragusa Version')).toBeInTheDocument();
    expect(screen.getByText('📍 Giardino Ibleo')).toBeInTheDocument();
  });

  it('renders the featured video items', () => {
    render(<TravelContent />);
    expect(screen.getByText('A day in Ragusa Ibla')).toBeInTheDocument();
  });

  it('renders links to both Instagram channels', () => {
    render(<TravelContent />);
    const hrefs = screen.getAllByRole('link').map((el) => el.getAttribute('href'));
    expect(hrefs).toContain('https://www.instagram.com/anyinsicily/');
    expect(hrefs).toContain('https://www.instagram.com/anyemedola/');
  });

  it('renders the app toolbox names', () => {
    render(<TravelContent />);
    expect(screen.getByText('Rome2Rio')).toBeInTheDocument();
    expect(screen.getByText('Airbnb')).toBeInTheDocument();
  });

  it('renders the CTA email link without a hash href', () => {
    render(<TravelContent />);
    const email = screen.getByRole('link', { name: 'anynhamedola@gmail.com' });
    expect(email).toHaveAttribute('href', 'mailto:anynhamedola@gmail.com');
  });

  it('the "See the work" CTA is a button, not a hash-fragment link', () => {
    render(<TravelContent />);
    const cta = screen.getByRole('button', { name: /See the work/ });
    expect(cta).not.toHaveAttribute('href');
  });
});
