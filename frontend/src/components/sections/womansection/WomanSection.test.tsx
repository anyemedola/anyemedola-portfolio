import { render, screen } from '@testing-library/react';
import WomanSection from './WomanSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

describe('WomanSection', () => {
  it('renders without crashing', () => {
    render(<WomanSection />);
  });

  it('has id="mulher" on the root element', () => {
    render(<WomanSection />);
    expect(document.getElementById('mulher')).toBeInTheDocument();
  });

  it('has aria-labelledby="woman-heading" on the root element', () => {
    render(<WomanSection />);
    expect(document.getElementById('mulher')).toHaveAttribute('aria-labelledby', 'woman-heading');
  });

  it('has a heading with id="woman-heading"', () => {
    render(<WomanSection />);
    expect(document.getElementById('woman-heading')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    render(<WomanSection />);
    expect(screen.getByText('woman.eyebrow')).toBeInTheDocument();
  });

  it('renders the section title translation key', () => {
    render(<WomanSection />);
    expect(screen.getByText('woman.title')).toBeInTheDocument();
  });

  it('renders the sub translation key', () => {
    render(<WomanSection />);
    expect(screen.getByText('woman.sub')).toBeInTheDocument();
  });

  it('renders 4 numerology cards', () => {
    render(<WomanSection />);
    expect(screen.getByText('woman.c1num')).toBeInTheDocument();
    expect(screen.getByText('woman.c2num')).toBeInTheDocument();
    expect(screen.getByText('woman.c3num')).toBeInTheDocument();
    expect(screen.getByText('woman.c4num')).toBeInTheDocument();
  });

  it('renders card labels for all 4 cards', () => {
    render(<WomanSection />);
    expect(screen.getByText('woman.c1label')).toBeInTheDocument();
    expect(screen.getByText('woman.c2label')).toBeInTheDocument();
    expect(screen.getByText('woman.c3label')).toBeInTheDocument();
    expect(screen.getByText('woman.c4label')).toBeInTheDocument();
  });

  it('renders 5 decorative stars with aria-hidden="true"', () => {
    const { container } = render(<WomanSection />);
    const stars = container.querySelectorAll('[aria-hidden="true"]');
    expect(stars.length).toBeGreaterThanOrEqual(5);
  });
});
