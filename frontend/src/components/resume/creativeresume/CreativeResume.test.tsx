import { render, screen } from '@testing-library/react';
import CreativeResume from './CreativeResume';
import translations from '../../translator-i18n/i18n/locales/en/translations.json';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'en',
      getResourceBundle: () => translations,
    },
  }),
}));

jest.mock('@/components/ui/cursor/lemonCursor', () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock('@/components/ui/langtoggle/LangToggle', () => ({
  __esModule: true,
  default: () => <div data-testid="lang-toggle" />,
}));

describe('CreativeResume', () => {
  it('renders without crashing', () => {
    render(<CreativeResume />);
  });

  it('renders the name and tagline', () => {
    render(<CreativeResume />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe('AnyMedola');
    expect(screen.getByText(translations.resumeCreative.tagline)).toBeInTheDocument();
  });

  it('renders a link to the ATS version', () => {
    render(<CreativeResume />);
    const link = screen.getByRole('link', { name: 'ATS' });
    expect(link).toHaveAttribute('href', '/resume/ats');
  });

  it('renders the back-to-portfolio link', () => {
    render(<CreativeResume />);
    const link = screen.getByRole('link', { name: /Portfolio/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('triggers window.print() when the download button is clicked', () => {
    const printSpy = jest.spyOn(window, 'print').mockImplementation(() => {});
    render(<CreativeResume />);
    screen.getByRole('button', { name: translations.resumeCreative.downloadBtn }).click();
    expect(printSpy).toHaveBeenCalledTimes(1);
    printSpy.mockRestore();
  });

  it('renders the personal projects', () => {
    render(<CreativeResume />);
    translations.resumeCreative.projects.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
