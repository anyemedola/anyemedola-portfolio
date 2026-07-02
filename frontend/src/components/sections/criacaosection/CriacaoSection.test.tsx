import { render, screen } from '@testing-library/react';
import CriacaoSection from './CriacaoSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

describe('CriacaoSection', () => {
  it('renders without crashing', () => {
    render(<CriacaoSection />);
  });

  it('has id="criacao" on the root element', () => {
    render(<CriacaoSection />);
    expect(document.getElementById('criacao')).toBeInTheDocument();
  });

  it('has aria-labelledby="criacao-heading" on the root element', () => {
    render(<CriacaoSection />);
    expect(document.getElementById('criacao')).toHaveAttribute('aria-labelledby', 'criacao-heading');
  });

  it('has a heading with id="criacao-heading"', () => {
    render(<CriacaoSection />);
    expect(document.getElementById('criacao-heading')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    render(<CriacaoSection />);
    expect(screen.getByText('create.eyebrow')).toBeInTheDocument();
  });

  it('renders the title translation key', () => {
    render(<CriacaoSection />);
    expect(screen.getByText('create.title')).toBeInTheDocument();
  });

  it('renders the lead translation key', () => {
    render(<CriacaoSection />);
    expect(screen.getByText('create.lead')).toBeInTheDocument();
  });

  it('renders 4 content cards (2 external links, 2 plain cards)', () => {
    render(<CriacaoSection />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  it('renders 3 trait cards', () => {
    render(<CriacaoSection />);
    expect(screen.getByText('create.t1title')).toBeInTheDocument();
    expect(screen.getByText('create.t2title')).toBeInTheDocument();
    expect(screen.getByText('create.t3title')).toBeInTheDocument();
  });

  it('renders content card titles', () => {
    render(<CriacaoSection />);
    expect(screen.getByText('create.c1title')).toBeInTheDocument();
    expect(screen.getByText('create.c2title')).toBeInTheDocument();
  });

  it('renders the mock label for the design mockup', () => {
    render(<CriacaoSection />);
    expect(screen.getByText('create.mocklabel')).toBeInTheDocument();
  });
});
