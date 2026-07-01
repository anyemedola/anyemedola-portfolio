import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LangToggle from '../LangToggle';

const mockChangeLanguage = jest.fn();
let mockLanguage = 'en';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: {
      get language() { return mockLanguage; },
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

beforeEach(() => {
  mockLanguage = 'en';
  mockChangeLanguage.mockClear();
});

describe('LangToggle', () => {
  it('renders three language buttons', () => {
    render(<LangToggle />);
    expect(screen.getByRole('button', { name: /english/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /português/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /italiano/i })).toBeInTheDocument();
  });

  it('has aria-pressed=true on EN when language is en', () => {
    render(<LangToggle />);
    expect(screen.getByRole('button', { name: /english/i })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /português/i })).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByRole('button', { name: /italiano/i })).toHaveAttribute('aria-pressed', 'false');
  });

  it('has aria-pressed=true on PT when language is pt', () => {
    mockLanguage = 'pt';
    render(<LangToggle />);
    expect(screen.getByRole('button', { name: /português/i })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /english/i })).toHaveAttribute('aria-pressed', 'false');
  });

  it('calls changeLanguage("pt") when PT button is clicked', async () => {
    render(<LangToggle />);
    await userEvent.click(screen.getByRole('button', { name: /português/i }));
    expect(mockChangeLanguage).toHaveBeenCalledWith('pt');
  });

  it('calls changeLanguage("it") when IT button is clicked', async () => {
    render(<LangToggle />);
    await userEvent.click(screen.getByRole('button', { name: /italiano/i }));
    expect(mockChangeLanguage).toHaveBeenCalledWith('it');
  });

  it('calls changeLanguage("en") when EN button is clicked', async () => {
    render(<LangToggle />);
    await userEvent.click(screen.getByRole('button', { name: /english/i }));
    expect(mockChangeLanguage).toHaveBeenCalledWith('en');
  });

  it('groups buttons with role="group" and an accessible label', () => {
    render(<LangToggle />);
    expect(screen.getByRole('group', { name: /language selector/i })).toBeInTheDocument();
  });
});
