import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

describe('Footer', () => {
  it('renders with role="contentinfo"', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/Any Elis Mendonça Medola/)).toBeInTheDocument();
  });

  it('renders the website link with correct href', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /anyemedola\.com\.br/i });
    expect(link).toHaveAttribute('href', 'https://anyemedola.com.br');
  });

  it('opens the website link in a new tab', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /anyemedola\.com\.br/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
