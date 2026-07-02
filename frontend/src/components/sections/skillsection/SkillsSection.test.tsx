import { render, screen } from '@testing-library/react';
import SkillsSection from './SkillsSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

describe('SkillsSection', () => {
  it('renders without crashing', () => {
    render(<SkillsSection />);
  });

  it('has id="stacks" on the root element', () => {
    render(<SkillsSection />);
    expect(document.getElementById('stacks')).toBeInTheDocument();
  });

  it('has aria-labelledby="stacks-heading" on the root element', () => {
    render(<SkillsSection />);
    expect(document.getElementById('stacks')).toHaveAttribute('aria-labelledby', 'stacks-heading');
  });

  it('has a heading with id="stacks-heading"', () => {
    render(<SkillsSection />);
    expect(document.getElementById('stacks-heading')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    render(<SkillsSection />);
    expect(screen.getByText('stacks.eyebrow')).toBeInTheDocument();
  });

  it('renders the section title translation key', () => {
    render(<SkillsSection />);
    expect(screen.getByText('stacks.title')).toBeInTheDocument();
  });

  it('renders 4 stack group cards', () => {
    render(<SkillsSection />);
    expect(screen.getByText('stacks.frontend')).toBeInTheDocument();
    expect(screen.getByText('stacks.styling')).toBeInTheDocument();
    expect(screen.getByText('stacks.state')).toBeInTheDocument();
    expect(screen.getByText('stacks.quality')).toBeInTheDocument();
  });

  it('renders key technology tags', () => {
    render(<SkillsSection />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
    expect(screen.getByText('Figma')).toBeInTheDocument();
  });

  it('renders the outer grid with role="list"', () => {
    render(<SkillsSection />);
    expect(screen.getAllByRole('list').length).toBeGreaterThanOrEqual(1);
  });

  it('renders 4 cards with role="listitem"', () => {
    render(<SkillsSection />);
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(4);
  });
});
