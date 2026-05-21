import { render, screen } from '@testing-library/react';
import T from '../T';

let mockLanguage = 'en';
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { get language() { return mockLanguage; } },
  }),
}));

beforeEach(() => { mockLanguage = 'en'; });

describe('T', () => {
  it('renders English text when language is en', () => {
    render(<T en="Hello" pt="Olá" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('renders Portuguese text when language is pt', () => {
    mockLanguage = 'pt';
    render(<T en="Hello" pt="Olá" />);
    expect(screen.getByText('Olá')).toBeInTheDocument();
    expect(screen.queryByText('Hello')).not.toBeInTheDocument();
  });

  it('renders Italian text when language is it', () => {
    mockLanguage = 'it';
    render(<T en="Hello" pt="Olá" it="Ciao" />);
    expect(screen.getByText('Ciao')).toBeInTheDocument();
    expect(screen.queryByText('Hello')).not.toBeInTheDocument();
  });

  it('falls back to English when it prop is undefined and language is it', () => {
    mockLanguage = 'it';
    render(<T en="Hello" pt="Olá" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('accepts ReactNode children', () => {
    render(<T en={<strong>Bold</strong>} pt={<em>Negrito</em>} />);
    expect(screen.getByText('Bold')).toBeInTheDocument();
  });
});
