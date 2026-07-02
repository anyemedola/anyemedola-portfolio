import { render, fireEvent } from '@testing-library/react';
import ReadingProgress from './ReadingProgress';

describe('ReadingProgress', () => {
  it('renders without crashing', () => {
    render(<ReadingProgress />);
  });

  it('renders a track element with aria-hidden="true"', () => {
    const { container } = render(<ReadingProgress />);
    const track = container.firstChild as HTMLElement;
    expect(track).toHaveAttribute('aria-hidden', 'true');
    expect(track).toHaveAttribute('role', 'presentation');
  });

  it('renders a bar inside the track', () => {
    const { container } = render(<ReadingProgress />);
    expect(container.firstChild?.childNodes.length).toBeGreaterThanOrEqual(1);
  });

  it('adds and removes the scroll event listener on mount/unmount', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const removeSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = render(<ReadingProgress />);
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true });

    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('handles scroll event without throwing', () => {
    render(<ReadingProgress />);
    expect(() => fireEvent.scroll(window)).not.toThrow();
  });
});
