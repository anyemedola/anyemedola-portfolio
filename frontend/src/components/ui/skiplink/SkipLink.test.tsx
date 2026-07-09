import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    onClick,
    type,
    suppressHydrationWarning,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    type?: string;
    suppressHydrationWarning?: boolean;
  }) => (
    <button type={type as 'button'} onClick={onClick} suppressHydrationWarning={suppressHydrationWarning}>
      {children}
    </button>
  ),
}));

describe('SkipLink', () => {
  it('renders without crashing', () => {
    render(<SkipLink />);
  });

  it('renders a button element (not a hash-fragment link)', () => {
    render(<SkipLink />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).not.toHaveAttribute('href');
  });

  it('focuses and scrolls #main-content on click', () => {
    const main = document.createElement('main');
    main.id = 'main-content';
    document.body.appendChild(main);
    const scrollSpy = jest.spyOn(main, 'scrollIntoView');
    const focusSpy = jest.spyOn(main, 'focus');

    render(<SkipLink />);
    fireEvent.click(screen.getByRole('button'));

    expect(focusSpy).toHaveBeenCalled();
    expect(scrollSpy).toHaveBeenCalled();
    document.body.removeChild(main);
  });

  it('renders the translated label text', () => {
    render(<SkipLink />);
    expect(screen.getByText('skipLink.label')).toBeInTheDocument();
  });

  it('link text is accessible (non-empty)', () => {
    render(<SkipLink />);
    const btn = screen.getByRole('button');
    expect(btn.textContent).not.toBe('');
  });
});
