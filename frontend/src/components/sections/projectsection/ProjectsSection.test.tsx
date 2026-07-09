import { render, screen } from '@testing-library/react';
import ProjectsSection from './ProjectsSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => {
    const React = require('react');
    return React.createElement('a', { href, ...rest }, children);
  },
}));

describe('ProjectsSection', () => {
  it('renders without crashing', () => {
    render(<ProjectsSection />);
  });

  it('has id="projetos" on the root element', () => {
    render(<ProjectsSection />);
    expect(document.getElementById('projetos')).toBeInTheDocument();
  });

  it('has aria-labelledby="projects-heading" on the root element', () => {
    render(<ProjectsSection />);
    expect(document.getElementById('projetos')).toHaveAttribute('aria-labelledby', 'projects-heading');
  });

  it('has a heading with id="projects-heading"', () => {
    render(<ProjectsSection />);
    expect(document.getElementById('projects-heading')).toBeInTheDocument();
  });

  it('renders the eyebrow translation key', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('projects.eyebrow')).toBeInTheDocument();
  });

  it('renders the section title translation key', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('projects.title')).toBeInTheDocument();
  });

  it('renders the 3 project cards', () => {
    render(<ProjectsSection />);
    expect(document.getElementById('p1-title')).toBeInTheDocument();
    expect(document.getElementById('p2-title')).toBeInTheDocument();
    expect(document.getElementById('p3-title')).toBeInTheDocument();
  });

  it('renders featured project description and tags', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('projects.p1.desc')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders p2 and p3 tech tags', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Redux')).toBeInTheDocument();
    expect(screen.getAllByText('Ionic').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('Firebase')).toBeInTheDocument();
  });

  it('renders the request link pointing to the contact email', () => {
    render(<ProjectsSection />);
    expect(screen.getByRole('link', { name: 'projects.request' })).toHaveAttribute('href', 'mailto:contact@anyemedola.com');
  });

  it('renders "LIVE" in the featured project visual', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('LIVE')).toBeInTheDocument();
  });
});
