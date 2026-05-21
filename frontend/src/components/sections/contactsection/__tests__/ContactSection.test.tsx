import { render, screen } from '@testing-library/react';
import ContactSection from '../ContactSection';

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

describe('ContactSection', () => {
  it('renders the section with correct id', () => {
    render(<ContactSection />);
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  it('renders the email link with correct mailto href', () => {
    render(<ContactSection />);
    const link = screen.getByRole('link', { name: /any@aeait\.com/i });
    expect(link).toHaveAttribute('href', 'mailto:any@aeait.com');
  });

  it('renders the LinkedIn link', () => {
    render(<ContactSection />);
    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/dev-anyemedola');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the GitHub link', () => {
    render(<ContactSection />);
    const link = screen.getByRole('link', { name: /github/i });
    expect(link).toHaveAttribute('href', 'https://github.com/anyemedola');
  });

  it('renders the website link', () => {
    render(<ContactSection />);
    const link = screen.getByRole('link', { name: /anyemedola\.com\.br/i });
    expect(link).toHaveAttribute('href', 'https://anyemedola.com.br');
  });

  it('renders the phone link with correct tel href', () => {
    render(<ContactSection />);
    const link = screen.getByRole('link', { name: /\+39/i });
    expect(link).toHaveAttribute('href', 'tel:+393515869527');
  });

  it('links group has aria-label', () => {
    render(<ContactSection />);
    expect(screen.getByRole('group', { name: /contact information/i })).toBeInTheDocument();
  });
});
