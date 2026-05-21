import { render, screen } from '@testing-library/react';
import SkillsSection from '../SkillsSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));
jest.mock('@/components/translator-i18n', () => ({
  __esModule: true,
  Translator: ({ path }: { path: string }) => <span>{path}</span>,
  default: ({ path }: { path: string }) => <span>{path}</span>,
}));

const CARDS = [
  { title: 'Front-End & Frameworks', tags: ['React.js', 'Next.js', 'TypeScript', 'Ionic', 'Angular'] },
  { title: 'Styling & UI Systems',   tags: ['Tailwind CSS', 'MUI', 'Styled Components'] },
  { title: 'State & Data',           tags: ['Redux', 'React Query', 'REST APIs'] },
  { title: 'UX & Design',            tags: ['Figma', 'Accessibility'] },
  { title: 'Testing & Quality',      tags: ['Jest', 'ESLint'] },
  { title: 'DevOps & Collab',        tags: ['GitLab', 'CI/CD'] },
];

describe('SkillsSection', () => {
  it('renders the section with correct id', () => {
    render(<SkillsSection />);
    expect(document.getElementById('skills')).toBeInTheDocument();
  });

  it('renders all six skill card titles', () => {
    render(<SkillsSection />);
    CARDS.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('renders skill tags for the Front-End card', () => {
    render(<SkillsSection />);
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('renders skill tags for the Testing card', () => {
    render(<SkillsSection />);
    expect(screen.getByText('Jest')).toBeInTheDocument();
    expect(screen.getByText('ESLint')).toBeInTheDocument();
  });

  it('grid has role="list"', () => {
    render(<SkillsSection />);
    const lists = screen.getAllByRole('list');
    expect(lists.length).toBeGreaterThanOrEqual(1);
  });

  it('tag lists have aria-label matching the card title', () => {
    render(<SkillsSection />);
    expect(screen.getByRole('list', { name: 'Front-End & Frameworks' })).toBeInTheDocument();
    expect(screen.getByRole('list', { name: 'Testing & Quality' })).toBeInTheDocument();
  });
});
