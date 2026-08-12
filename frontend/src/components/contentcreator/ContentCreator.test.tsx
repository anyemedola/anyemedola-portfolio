import { render, screen } from '@testing-library/react';
import ContentCreator from './ContentCreator';
import translations from '../translator-i18n/i18n/locales/en/translations.json';

const en = translations.contentCreator;

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

describe('ContentCreator', () => {
  it('renders without crashing', () => {
    render(<ContentCreator />);
  });

  it('renders the "Portfolio" back link (no page replaced)', () => {
    render(<ContentCreator />);
    expect(screen.getByText(/Portfolio/)).toBeInTheDocument();
  });

  it('renders the language toggle', () => {
    render(<ContentCreator />);
    expect(screen.getByTestId('lang-toggle')).toBeInTheDocument();
  });

  it('renders the hero handle and stats', () => {
    render(<ContentCreator />);
    expect(screen.getByText(en.hero.handle)).toBeInTheDocument();
    expect(screen.getByText(en.stats.stat1Num)).toBeInTheDocument();
  });

  it('renders the About section copy', () => {
    render(<ContentCreator />);
    expect(screen.getByRole('heading', { name: en.about.title })).toBeInTheDocument();
    expect(screen.getByText(en.about.p1)).toBeInTheDocument();
  });

  it('renders the carousel posts', () => {
    render(<ContentCreator />);
    expect(screen.getByText(en.carousel.posts[0].pin)).toBeInTheDocument();
    expect(screen.getByText(en.carousel.posts[2].pin)).toBeInTheDocument();
  });

  it('renders the featured reel items', () => {
    render(<ContentCreator />);
    expect(screen.getByText(en.videos.items[0].title)).toBeInTheDocument();
  });

  it('renders the brand collaboration logos', () => {
    render(<ContentCreator />);
    expect(screen.getByText(en.brands.title)).toBeInTheDocument();
    expect(screen.getByAltText('Airlearn')).toBeInTheDocument();
    expect(screen.getByAltText('Wise')).toBeInTheDocument();
    expect(screen.getByAltText('A Sciarria')).toBeInTheDocument();
  });

  it('the "View Work" CTA is a button, not a hash-fragment link', () => {
    render(<ContentCreator />);
    const cta = screen.getByRole('button', { name: en.hero.ctaWork });
    expect(cta).not.toHaveAttribute('href');
  });

  it('renders the shared Footer component with variant="creator"', () => {
    render(<ContentCreator />);
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveAttribute('data-variant', 'creator');
  });
});
