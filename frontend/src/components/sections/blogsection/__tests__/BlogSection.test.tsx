import { render, screen, waitFor } from '@testing-library/react';
import BlogSection from '../BlogSection';
import { posts as staticPosts } from '@/data/posts';

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

const mockApiPosts = [
  {
    id: 1, slug: 'api-post-one',
    title: 'API Post One', titlePt: 'Post API Um', titleIt: '',
    subtitle: 'Sub', subtitlePt: '', subtitleIt: '',
    excerptEn: 'Excerpt EN', excerptPt: '', excerptIt: '',
    bodyEn: '', bodyPt: '', bodyIt: '',
    date: '2025-03-01', readTime: 4,
    primaryTag: 'React', tags: ['React'],
    accentColor: '#4DB89E', icon: '✦', status: 'published',
  },
];

beforeEach(() => {
  jest.resetAllMocks();
});

describe('BlogSection', () => {
  it('shows static posts when fetch fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('network error'));
    render(<BlogSection />);
    await waitFor(() => {
      expect(screen.getByText(staticPosts[0].title.en as string)).toBeInTheDocument();
    });
  });

  it('shows static posts when API returns an empty array', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve([]) });
    render(<BlogSection />);
    await waitFor(() => {
      expect(screen.getByText(staticPosts[0].title.en as string)).toBeInTheDocument();
    });
  });

  it('renders API posts when fetch returns data', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve(mockApiPosts),
    });
    render(<BlogSection />);
    await waitFor(() => {
      expect(screen.getByText('API Post One')).toBeInTheDocument();
    });
  });

  it('each post card links to /blog/[slug]', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve(mockApiPosts),
    });
    render(<BlogSection />);
    await waitFor(() => {
      expect(screen.getByRole('link', { name: /api post one/i })).toHaveAttribute(
        'href', '/blog/api-post-one',
      );
    });
  });

  it('shows the primary tag of each post', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve(mockApiPosts),
    });
    render(<BlogSection />);
    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
    });
  });

  it('shows read time for each post', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true, json: () => Promise.resolve(mockApiPosts),
    });
    render(<BlogSection />);
    await waitFor(() => {
      expect(screen.getByText(/4/)).toBeInTheDocument();
    });
  });

  it('renders post list with role="list"', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve([]) });
    render(<BlogSection />);
    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });
});
