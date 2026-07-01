import { render, screen } from '@testing-library/react';
import { Eyebrow, SectionTitle, Lead } from '../styles';

describe('Eyebrow', () => {
  it('renders as a <p> element', () => {
    const { container } = render(<Eyebrow>sobre</Eyebrow>);
    expect(container.firstChild?.nodeName).toBe('P');
  });

  it('renders text content', () => {
    render(<Eyebrow>escrita</Eyebrow>);
    expect(screen.getByText('escrita')).toBeInTheDocument();
  });

  it('does not leak accentColor to the DOM', () => {
    const { container } = render(<Eyebrow accentColor="#FF0000">tag</Eyebrow>);
    expect(container.firstChild).not.toHaveAttribute('accentcolor');
    expect(container.firstChild).not.toHaveAttribute('accentColor');
  });

  it('renders without accentColor (uses default colour)', () => {
    render(<Eyebrow>default colour</Eyebrow>);
    expect(screen.getByText('default colour')).toBeInTheDocument();
  });
});

describe('SectionTitle', () => {
  it('renders as an <h2>', () => {
    render(<SectionTitle>Projetos</SectionTitle>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders text content', () => {
    render(<SectionTitle>Experiência</SectionTitle>);
    expect(screen.getByText('Experiência')).toBeInTheDocument();
  });

  it('accepts an id for aria-labelledby linking', () => {
    render(<SectionTitle id="projects-heading">Projetos</SectionTitle>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveAttribute('id', 'projects-heading');
  });
});

describe('Lead', () => {
  it('renders as a <p> element', () => {
    const { container } = render(<Lead>Lead text</Lead>);
    expect(container.firstChild?.nodeName).toBe('P');
  });

  it('renders text content', () => {
    render(<Lead>Uma introdução à seção</Lead>);
    expect(screen.getByText('Uma introdução à seção')).toBeInTheDocument();
  });
});
