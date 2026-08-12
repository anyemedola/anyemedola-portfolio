import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('defaults to variant="home" with id="contato" on the root element', () => {
    render(<Footer />);
    expect(document.getElementById('contato')).toBeInTheDocument();
  });

  it('has aria-labelledby="contact-heading" and the heading element exists', () => {
    render(<Footer />);
    expect(document.getElementById('contato')).toHaveAttribute('aria-labelledby', 'contact-heading');
    expect(document.getElementById('contact-heading')).toBeInTheDocument();
  });

  it('renders the home variant phrase keys', () => {
    render(<Footer variant="home" />);
    expect(screen.getByText('contact.eyebrow')).toBeInTheDocument();
    expect(screen.getByText('contact.title')).toBeInTheDocument();
    expect(screen.getByText('contact.p')).toBeInTheDocument();
  });

  it('renders the creator variant phrase keys on a distinct section id', () => {
    render(<Footer variant="creator" />);
    expect(screen.getByText('contentCreator.contact.eyebrow')).toBeInTheDocument();
    expect(screen.getByText('contentCreator.contact.title')).toBeInTheDocument();
    expect(screen.getByText('contentCreator.contact.p')).toBeInTheDocument();
    expect(document.getElementById('creator-contato')).toBeInTheDocument();
  });

  it('renders the email link with correct href', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: /contact@anyemedola\.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@anyemedola.com');
  });

  it('renders LinkedIn and GitHub social links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/dev-anyemedola/',
    );
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/anyemedola',
    );
  });

  it('renders the Instagram links for both accounts', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: '@anyemedola' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '@anyinsicily' })).toBeInTheDocument();
  });

  it('renders the same email and social links regardless of variant', () => {
    render(<Footer variant="creator" />);
    expect(screen.getByRole('link', { name: /contact@anyemedola\.com/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '@anyinsicily' })).toBeInTheDocument();
  });

  it('renders the footer bar with contentinfo role', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders footer made and rights copy identically for both variants', () => {
    render(<Footer variant="creator" />);
    expect(screen.getByText('contact.footerMade')).toBeInTheDocument();
    expect(screen.getByText('contact.footerRights')).toBeInTheDocument();
  });
});
