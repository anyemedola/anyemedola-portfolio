import { render, screen } from '@testing-library/react';
import { Translator } from './index';

jest.mock('./i18n', () => ({}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (path: string, options?: Record<string, unknown>) => {
      if (path === 'about.title') return 'Sicilian by <em>sunset</em>';
      return options ? `${path}:${JSON.stringify(options)}` : path;
    },
  }),
}));

describe('Translator', () => {
  it('renders the translated text for a given path', () => {
    render(<Translator path="hero.cta1" />);
    expect(screen.getByText('hero.cta1')).toBeInTheDocument();
  });

  it('passes interpolation options through to t()', () => {
    render(<Translator path="greeting" options={{ name: 'Any' }} />);
    expect(screen.getByText('greeting:{"name":"Any"}')).toBeInTheDocument();
  });

  it('renders raw HTML via dangerouslySetInnerHTML when html is true', () => {
    const { container } = render(<Translator path="about.title" html />);
    expect(container.querySelector('em')).toBeInTheDocument();
    expect(container.querySelector('em')?.textContent).toBe('sunset');
  });

  it('does not parse HTML tags as markup when html is false', () => {
    const { container } = render(<Translator path="about.title" />);
    expect(container.querySelector('em')).not.toBeInTheDocument();
    expect(container.textContent).toBe('Sicilian by <em>sunset</em>');
  });
});
