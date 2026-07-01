import React from 'react';
import { render } from '@testing-library/react';
import LemonCursor from './lemonCursor';

jest.mock('./styles', () => ({
  CursorWrapper: React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    (props, ref) => <div ref={ref} data-testid="cursor-wrapper" {...props} />
  ),
}));

describe('LemonCursor', () => {
  it('renders without crashing', () => {
    render(<LemonCursor />);
  });

  it('mounts a visible DOM element', () => {
    const { getByTestId } = render(<LemonCursor />);
    expect(getByTestId('cursor-wrapper')).toBeInTheDocument();
  });

  it('registers and removes the mousemove listener on mount/unmount', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const removeSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = render(<LemonCursor />);
    expect(addSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));

    unmount();
    expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
