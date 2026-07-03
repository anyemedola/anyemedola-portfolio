import { render, screen } from '@testing-library/react';
import PostPageFooter from './PostPageFooter';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
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

describe('PostPageFooter', () => {
  it('renders without crashing', () => {
    render(<PostPageFooter />);
  });

  it('renders a footer element', () => {
    render(<PostPageFooter />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the back link pointing to /blog', () => {
    render(<PostPageFooter />);
    expect(screen.getByRole('link', { name: /post\.back/ })).toHaveAttribute('href', '/blog');
  });

  it('renders the back arrow glyph', () => {
    render(<PostPageFooter />);
    expect(screen.getByText(/←/)).toBeInTheDocument();
  });

  it('renders the teaser paragraph text', () => {
    render(<PostPageFooter />);
    expect(screen.getByText(/O primeiro de muitos/)).toBeInTheDocument();
  });
});
