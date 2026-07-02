import { render, screen } from '@testing-library/react';
import ExperienceSection from './ExperienceSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

describe('ExperienceSection', () => {
  it('renders without crashing', () => {
    render(<ExperienceSection />);
  });

  it('has id="trabalho" on the root element', () => {
    render(<ExperienceSection />);
    expect(document.getElementById('trabalho')).toBeInTheDocument();
  });

  it('has aria-labelledby="work-heading" on the root element', () => {
    render(<ExperienceSection />);
    expect(document.getElementById('trabalho')).toHaveAttribute('aria-labelledby', 'work-heading');
  });

  it('has a heading with id="work-heading"', () => {
    render(<ExperienceSection />);
    expect(document.getElementById('work-heading')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('work.eyebrow')).toBeInTheDocument();
  });

  it('renders the section title translation key', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('work.title')).toBeInTheDocument();
  });

  it('renders the meta translation key', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('work.meta')).toBeInTheDocument();
  });

  it('renders 4 job entries', () => {
    render(<ExperienceSection />);
    const jobs = ['job1', 'job2', 'job3', 'job4'];
    jobs.forEach((key) => {
      expect(screen.getByText(`work.${key}.company`)).toBeInTheDocument();
      expect(screen.getByText(`work.${key}.role`)).toBeInTheDocument();
      expect(screen.getByText(`work.${key}.period`)).toBeInTheDocument();
    });
  });
});
