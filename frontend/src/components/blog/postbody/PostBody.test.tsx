import { render, screen } from '@testing-library/react';
import PostBody from './PostBody';
import type { BlogPost } from '@/data/posts';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

const basePost: BlogPost = {
  slug: 'test',
  primaryTag: 'Test',
  tags: [],
  title: { en: 'Test Post', pt: 'Post de Teste' },
  subtitle: { en: 'Subtitle', pt: 'Subtítulo' },
  date: 'Jan 2025',
  datetime: '2025-01-01',
  readTime: 5,
  accentColor: '#FF0000',
  icon: '📝',
  excerpt: { en: 'Excerpt', pt: 'Trecho' },
  body: {
    en: { intro: 'Test intro', sections: [], closing: 'Test closing' },
    pt: { intro: 'Introdução de teste', sections: [], closing: 'Conclusão de teste' },
  },
};

describe('PostBody', () => {
  it('renders without crashing', () => {
    render(<PostBody post={basePost} />);
  });

  it('has id="post-content" on the content wrapper', () => {
    render(<PostBody post={basePost} />);
    expect(document.getElementById('post-content')).toBeInTheDocument();
  });

  it('renders the intro text', () => {
    render(<PostBody post={basePost} />);
    expect(screen.getByText('Test intro')).toBeInTheDocument();
  });

  it('renders the closing text', () => {
    render(<PostBody post={basePost} />);
    expect(screen.getByText('Test closing')).toBeInTheDocument();
  });

  it('renders the cover image when coverImage prop is provided', () => {
    const post: BlogPost = { ...basePost, coverImage: '/cover.jpg' };
    const { container } = render(<PostBody post={post} />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', '/cover.jpg');
  });

  it('renders a placeholder when coverImage is not provided', () => {
    render(<PostBody post={basePost} />);
    expect(screen.getByRole('img', { name: 'Post cover image placeholder' })).toBeInTheDocument();
  });

  it('renders the post icon in the placeholder', () => {
    render(<PostBody post={basePost} />);
    expect(screen.getByText('📝')).toBeInTheDocument();
  });

  it('renders section headings', () => {
    const post: BlogPost = {
      ...basePost,
      body: {
        ...basePost.body,
        en: {
          intro: '',
          sections: [{ heading: 'Section Heading', paragraphs: ['Paragraph text'] }],
          closing: '',
        },
      },
    };
    render(<PostBody post={post} />);
    expect(screen.getByText('Section Heading')).toBeInTheDocument();
    expect(screen.getByText('Paragraph text')).toBeInTheDocument();
  });

  it('renders raw HTML when body.html is defined', () => {
    const post: BlogPost = {
      ...basePost,
      body: {
        ...basePost.body,
        en: { intro: '', sections: [], closing: '', html: '<p>HTML body content</p>' },
      },
    };
    render(<PostBody post={post} />);
    expect(screen.getByText('HTML body content')).toBeInTheDocument();
  });

  it('renders a blockquote and cite when present', () => {
    const post: BlogPost = {
      ...basePost,
      body: {
        ...basePost.body,
        en: {
          intro: '',
          sections: [{ blockquote: { text: 'Quote text', cite: 'Author Name' } }],
          closing: '',
        },
      },
    };
    render(<PostBody post={post} />);
    expect(screen.getByText('Quote text')).toBeInTheDocument();
    expect(screen.getByText('Author Name')).toBeInTheDocument();
  });

  it('renders list items when a section has a list', () => {
    const post: BlogPost = {
      ...basePost,
      body: {
        ...basePost.body,
        en: {
          intro: '',
          sections: [{ list: ['First item', 'Second item'] }],
          closing: '',
        },
      },
    };
    render(<PostBody post={post} />);
    expect(screen.getByText('First item')).toBeInTheDocument();
    expect(screen.getByText('Second item')).toBeInTheDocument();
  });

  it('renders a code block when a section has code', () => {
    const post: BlogPost = {
      ...basePost,
      body: {
        ...basePost.body,
        en: {
          intro: '',
          sections: [{ code: 'const x = 1;' }],
          closing: '',
        },
      },
    };
    render(<PostBody post={post} />);
    expect(screen.getByText('const x = 1;')).toBeInTheDocument();
  });

  it('renders a pullquote when present', () => {
    const post: BlogPost = {
      ...basePost,
      body: {
        ...basePost.body,
        en: {
          intro: '',
          sections: [{ pullquote: 'A meaningful quote' }],
          closing: '',
        },
      },
    };
    render(<PostBody post={post} />);
    expect(screen.getByRole('note')).toHaveTextContent('A meaningful quote');
  });

  it('renders a subheading when present', () => {
    const post: BlogPost = {
      ...basePost,
      body: {
        ...basePost.body,
        en: {
          intro: '',
          sections: [{ subheading: 'Sub-section title' }],
          closing: '',
        },
      },
    };
    render(<PostBody post={post} />);
    expect(screen.getByText('Sub-section title')).toBeInTheDocument();
  });
});
