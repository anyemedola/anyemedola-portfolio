import React from 'react';
import { render, screen } from '@testing-library/react';
import SkipLink from './SkipLink';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('./styles', () => ({
  SkipLinkEl: ({
    children,
    href,
    suppressHydrationWarning,
  }: {
    children: React.ReactNode;
    href: string;
    suppressHydrationWarning?: boolean;
  }) => (
    <a href={href} suppressHydrationWarning={suppressHydrationWarning}>
      {children}
    </a>
  ),
}));

describe('SkipLink', () => {
  it('renders without crashing', () => {
    render(<SkipLink />);
  });

  it('renders a link element', () => {
    render(<SkipLink />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('link href points to #main-content', () => {
    render(<SkipLink />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '#main-content');
  });

  it('renders the translated label text', () => {
    render(<SkipLink />);
    expect(screen.getByText('skipLink.label')).toBeInTheDocument();
  });

  it('link text is accessible (non-empty)', () => {
    render(<SkipLink />);
    const link = screen.getByRole('link');
    expect(link.textContent).not.toBe('');
  });
});
