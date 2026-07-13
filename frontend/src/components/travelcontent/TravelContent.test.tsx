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

jest.mock('@/components/layout/Footer/Footer', () => ({
  __esModule: true,
  default: ({ variant }: { variant?: string }) => <div data-testid="footer" data-variant={variant} />,
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
    expect(screen.getByText(en.carousel.posts[0].pin)).toBeInTheDocument();
    expect(screen.getByText(en.carousel.posts[2].pin)).toBeInTheDocument();
  });

  it('renders the featured video items', () => {
    render(<TravelContent />);
    expect(screen.getByText(en.videos.items[0].title)).toBeInTheDocument();
  });

  it('renders the app toolbox names', () => {
    render(<TravelContent />);
    expect(screen.getByText('Rome2Rio')).toBeInTheDocument();
    expect(screen.getByText('Airbnb')).toBeInTheDocument();
  });

  it('the "See the work" CTA is a button, not a hash-fragment link', () => {
    render(<TravelContent />);
    const cta = screen.getByRole('button', { name: /See the work/ });
    expect(cta).not.toHaveAttribute('href');
  });

  it('renders the shared Footer component with variant="travel"', () => {
    render(<TravelContent />);
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveAttribute('data-variant', 'travel');
  });
});
