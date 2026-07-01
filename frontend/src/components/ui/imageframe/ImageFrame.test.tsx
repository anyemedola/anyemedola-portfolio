import { render } from '@testing-library/react';
import { ImageFrame } from '../styles';

describe('ImageFrame', () => {
  it('renders as a <div>', () => {
    const { container } = render(<ImageFrame>content</ImageFrame>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders children', () => {
    const { container } = render(
      <ImageFrame>
        <img src="/photo.jpg" alt="Ragusa, Sicília" />
      </ImageFrame>,
    );
    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute('alt', 'Ragusa, Sicília');
  });

  it('accepts className for reveal animations', () => {
    const { container } = render(<ImageFrame className="reveal">img</ImageFrame>);
    expect(container.firstChild).toHaveClass('reveal');
  });
});
