import { render, screen } from '@testing-library/react';
import ContactSection from './Footer';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

jest.mock('@/hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

describe('ContactSection (Footer)', () => {
  it('renders without crashing', () => {
    render(<ContactSection />);
  });

  it('has id="contato" on the root element', () => {
    render(<ContactSection />);
    expect(document.getElementById('contato')).toBeInTheDocument();
  });

  it('has aria-labelledby="contact-heading" and the heading element exists', () => {
    render(<ContactSection />);
    expect(document.getElementById('contato')).toHaveAttribute('aria-labelledby', 'contact-heading');
    expect(document.getElementById('contact-heading')).toBeInTheDocument();
  });

  it('renders the section heading text', () => {
    render(<ContactSection />);
    expect(screen.getByText('contact.title')).toBeInTheDocument();
  });

  it('renders the email link with correct href', () => {
    render(<ContactSection />);
    const emailLink = screen.getByRole('link', { name: /anynhamedola@gmail\.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:anynhamedola@gmail.com');
  });

  it('renders LinkedIn and GitHub social links', () => {
    render(<ContactSection />);
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
    render(<ContactSection />);
    expect(screen.getByRole('link', { name: '@anyemedola' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '@anyinsicily' })).toBeInTheDocument();
  });

  it('renders the footer bar with contentinfo role', () => {
    render(<ContactSection />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders footer made and rights copy', () => {
    render(<ContactSection />);
    expect(screen.getByText('contact.footerMade')).toBeInTheDocument();
    expect(screen.getByText('contact.footerRights')).toBeInTheDocument();
  });
});
