import React from 'react';
import { render, screen } from '@testing-library/react';
import Polaroid from './Polaroid';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

jest.mock('./styles', () => ({
  Frame: ({
    children,
    rotate,
    className,
  }: {
    children: React.ReactNode;
    rotate?: number;
    className?: string;
  }) => (
    <div data-testid="polaroid-frame" data-rotate={rotate} className={className}>
      {children}
    </div>
  ),
  ImageArea: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="polaroid-image-area">{children}</div>
  ),
  Caption: ({
    children,
    small,
  }: {
    children: React.ReactNode;
    small?: boolean;
  }) => <p data-testid="polaroid-caption" data-small={String(small)}>{children}</p>,
}));

describe('Polaroid', () => {
  it('renders without crashing', () => {
    render(<Polaroid src="/photo.jpg" alt="Test photo" />);
  });

  it('renders the image with the correct alt text', () => {
    render(<Polaroid src="/photo.jpg" alt="Test photo" />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test photo');
  });

  it('renders the image with the correct src', () => {
    render(<Polaroid src="/photo.jpg" alt="Test photo" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', '/photo.jpg');
  });

  it('renders caption when the caption prop is provided', () => {
    render(<Polaroid src="/photo.jpg" alt="Test photo" caption="A nice photo" />);
    expect(screen.getByTestId('polaroid-caption')).toHaveTextContent('A nice photo');
  });

  it('does not render caption when the caption prop is omitted', () => {
    render(<Polaroid src="/photo.jpg" alt="Test photo" />);
    expect(screen.queryByTestId('polaroid-caption')).not.toBeInTheDocument();
  });

  it('passes the rotate value to the frame', () => {
    render(<Polaroid src="/photo.jpg" alt="Test photo" rotate={15} />);
    expect(screen.getByTestId('polaroid-frame')).toHaveAttribute('data-rotate', '15');
  });

  it('applies a custom className to the frame', () => {
    render(<Polaroid src="/photo.jpg" alt="Test photo" className="my-polaroid" />);
    expect(screen.getByTestId('polaroid-frame')).toHaveClass('my-polaroid');
  });

  it('passes small=true to Caption when captionSize is sm', () => {
    render(
      <Polaroid src="/photo.jpg" alt="Test photo" caption="Small text" captionSize="sm" />
    );
    expect(screen.getByTestId('polaroid-caption')).toHaveAttribute('data-small', 'true');
  });
});
