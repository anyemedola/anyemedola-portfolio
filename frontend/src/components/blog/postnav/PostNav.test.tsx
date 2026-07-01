import { render, screen } from '@testing-library/react';
import PostNav from './PostNav';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string; [key: string]: unknown }) => {
    const React = require('react');
    return React.createElement('a', { href, ...rest }, children);
  },
}));

describe('PostNav', () => {
  it('renders without crashing', () => {
    render(<PostNav />);
  });

  it('renders a nav element with accessible label', () => {
    render(<PostNav />);
    expect(screen.getByRole('navigation', { name: 'Blog post navigation' })).toBeInTheDocument();
  });

  it('renders back link with href="/#escrita"', () => {
    render(<PostNav />);
    const backLink = screen.getByRole('link', { name: /back to portfolio/i });
    expect(backLink).toHaveAttribute('href', '/#escrita');
  });

  it('renders logo link with href="/"', () => {
    render(<PostNav />);
    const logoLink = screen.getByRole('link', { name: /any medola/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('displays the back arrow glyph', () => {
    render(<PostNav />);
    expect(screen.getByText('←')).toBeInTheDocument();
  });

  it('renders the back translation key', () => {
    render(<PostNav />);
    expect(screen.getByText('post.back')).toBeInTheDocument();
  });

  it('renders "Any" and "Medola" in the logo', () => {
    render(<PostNav />);
    const logo = screen.getByRole('link', { name: /any medola/i });
    expect(logo).toHaveTextContent('Any');
    expect(logo).toHaveTextContent('Medola');
  });
});
