import { render, screen } from '@testing-library/react';
import { SectionInner } from '../styles';

describe('SectionInner', () => {
  it('renders as a <div>', () => {
    const { container } = render(<SectionInner>content</SectionInner>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders text children', () => {
    render(<SectionInner>Inner content</SectionInner>);
    expect(screen.getByText('Inner content')).toBeInTheDocument();
  });

  it('renders element children', () => {
    render(
      <SectionInner>
        <h2>Section title</h2>
        <p>Lead paragraph</p>
      </SectionInner>,
    );
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByText('Lead paragraph')).toBeInTheDocument();
  });
});
