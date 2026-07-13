import { render, screen } from '@testing-library/react';
import ATSResume from './ATSResume';
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

describe('ATSResume', () => {
  it('renders without crashing', () => {
    render(<ATSResume />);
  });

  it('renders the full legal name and role', () => {
    render(<ATSResume />);
    expect(screen.getByText('Any Elis Mendonça Medola')).toBeInTheDocument();
    expect(screen.getByText(translations.resumeATS.role)).toBeInTheDocument();
  });

  it('renders a link back to the Creative version', () => {
    render(<ATSResume />);
    const link = screen.getByRole('link', { name: /Creative version/i });
    expect(link).toHaveAttribute('href', '/resume/creative');
  });

  it('renders the back-to-portfolio link', () => {
    render(<ATSResume />);
    const link = screen.getByRole('link', { name: /Portfolio/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('triggers window.print() when the download button is clicked', () => {
    const printSpy = jest.spyOn(window, 'print').mockImplementation(() => {});
    render(<ATSResume />);
    screen.getByRole('button', { name: translations.resumeATS.downloadBtn }).click();
    expect(printSpy).toHaveBeenCalledTimes(1);
    printSpy.mockRestore();
  });

  it('renders all experience jobs', () => {
    render(<ATSResume />);
    translations.resumeATS.experience.jobs.forEach((job) => {
      expect(screen.getByText(job.role)).toBeInTheDocument();
    });
  });
});
