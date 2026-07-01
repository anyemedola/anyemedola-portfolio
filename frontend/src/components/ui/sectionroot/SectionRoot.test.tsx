import { render, screen } from '@testing-library/react';
import { SectionRoot, SectionRootBordered } from '../styles';

describe('SectionRoot', () => {
  it('renders as a <section> element', () => {
    const { container } = render(<SectionRoot>content</SectionRoot>);
    expect(container.firstChild?.nodeName).toBe('SECTION');
  });

  it('renders children', () => {
    render(<SectionRoot><span>hello</span></SectionRoot>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('accepts id for anchor navigation', () => {
    const { container } = render(<SectionRoot id="sobre">content</SectionRoot>);
    expect(container.querySelector('#sobre')).toBeInTheDocument();
  });

  it('forwards aria-labelledby to the DOM', () => {
    const { container } = render(
      <SectionRoot aria-labelledby="heading-id">content</SectionRoot>,
    );
    expect(container.firstChild).toHaveAttribute('aria-labelledby', 'heading-id');
  });
});

describe('SectionRootBordered', () => {
  it('renders as a <section> element', () => {
    const { container } = render(<SectionRootBordered>content</SectionRootBordered>);
    expect(container.firstChild?.nodeName).toBe('SECTION');
  });

  it('renders children', () => {
    render(<SectionRootBordered><p>body text</p></SectionRootBordered>);
    expect(screen.getByText('body text')).toBeInTheDocument();
  });

  it('accepts id and aria-labelledby', () => {
    const { container } = render(
      <SectionRootBordered id="escrita" aria-labelledby="escrita-heading">
        content
      </SectionRootBordered>,
    );
    expect(container.querySelector('#escrita')).toBeInTheDocument();
    expect(container.firstChild).toHaveAttribute('aria-labelledby', 'escrita-heading');
  });
});
