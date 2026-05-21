import { render, screen, waitFor } from '@testing-library/react';
import ProjectsSection from '../ProjectsSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));
jest.mock('@/components/ui/t/T', () => ({
  __esModule: true,
  default: ({ en }: { en: React.ReactNode }) => <>{en}</>,
}));

const mockApiProjects = [
  {
    id: 101, title: 'My Portfolio', type: 'Personal · Web App',
    order: 1, descEn: 'A portfolio site', descPt: 'Um site de portfólio',
    url: 'https://anyemedola.com.br', github: 'https://github.com/anyemedola',
    published: true, featured: true,
    stack: ['React', 'TypeScript', 'Next.js'],
    accentColor: '#4DB89E',
  },
];

beforeEach(() => {
  jest.resetAllMocks();
});

describe('ProjectsSection', () => {
  it('renders static projects on initial render (before fetch resolves)', () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: () => new Promise(() => {}) });
    render(<ProjectsSection />);
    expect(screen.getAllByText('Project Name Here').length).toBeGreaterThan(0);
  });

  it('replaces static projects with API projects when fetch succeeds', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve(mockApiProjects),
    });
    render(<ProjectsSection />);
    await waitFor(() => {
      expect(screen.getByText('My Portfolio')).toBeInTheDocument();
    });
  });

  it('keeps static projects when fetch returns empty array', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve([]) });
    render(<ProjectsSection />);
    await waitFor(() => {
      expect(screen.getAllByText('Project Name Here').length).toBeGreaterThan(0);
    });
  });

  it('keeps static projects when fetch fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('network error'));
    render(<ProjectsSection />);
    await waitFor(() => {
      expect(screen.getAllByText('Project Name Here').length).toBeGreaterThan(0);
    });
  });

  it('shows tech stack tags for API projects', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve(mockApiProjects),
    });
    render(<ProjectsSection />);
    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('Next.js')).toBeInTheDocument();
    });
  });

  it('shows project type for API projects', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve(mockApiProjects),
    });
    render(<ProjectsSection />);
    await waitFor(() => {
      expect(screen.getByText('Personal · Web App')).toBeInTheDocument();
    });
  });

  it('renders project count counter', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve(mockApiProjects),
    });
    render(<ProjectsSection />);
    await waitFor(() => {
      expect(screen.getByText('01')).toBeInTheDocument();
    });
  });

  it('stack list has correct aria-label', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve(mockApiProjects),
    });
    render(<ProjectsSection />);
    await waitFor(() => {
      expect(screen.getByRole('list', { name: /technologies used/i })).toBeInTheDocument();
    });
  });
});
