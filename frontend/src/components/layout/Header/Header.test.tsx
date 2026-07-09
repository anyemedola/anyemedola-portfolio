import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: jest.fn() }),
}));

// LangToggle uses the same mock — stub it to keep Header tests focused
jest.mock('@/components/ui/langtoggle/LangToggle', () => ({
  __esModule: true,
  default: () => <div data-testid="lang-toggle" />,
}));

describe('Header', () => {
  it('renders with role="banner"', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the logo with correct aria-label', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /any medola.*home/i })).toBeInTheDocument();
  });

  it('renders the main navigation', () => {
    render(<Header />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  });

  it('renders five scroll buttons and one route link in nav', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav.querySelectorAll('button')).toHaveLength(5);
    expect(nav.querySelectorAll('a')).toHaveLength(1);
  });

  it('starts with data-scrolled="false"', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toHaveAttribute('data-scrolled', 'false');
  });

  it('sets data-scrolled="true" after a scroll event', () => {
    render(<Header />);
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true });
    fireEvent.scroll(window);
    expect(screen.getByRole('banner')).toHaveAttribute('data-scrolled', 'true');
  });

  it('renders the language toggle', () => {
    render(<Header />);
    expect(screen.getByTestId('lang-toggle')).toBeInTheDocument();
  });
});
