import { renderHook } from '@testing-library/react';
import { useCustomCursor } from '../useCustomCursor';

function makeCursorEl() {
  const el = document.createElement('div');
  el.id = 'cursor';
  document.body.appendChild(el);
  return el;
}

function fireMousemove(x: number, y: number) {
  const ev = new MouseEvent('mousemove', { bubbles: true, cancelable: true });
  Object.defineProperty(ev, 'clientX', { value: x });
  Object.defineProperty(ev, 'clientY', { value: y });
  document.dispatchEvent(ev);
}

afterEach(() => {
  document.getElementById('cursor')?.remove();
  jest.restoreAllMocks();
});

describe('useCustomCursor', () => {
  it('does nothing when #cursor element is absent', () => {
    const addSpy = jest.spyOn(document, 'addEventListener');
    renderHook(() => useCustomCursor());
    const calls = addSpy.mock.calls.map(([event]) => event);
    expect(calls).not.toContain('mousemove');
  });

  it('attaches a mousemove listener when #cursor exists', () => {
    makeCursorEl();
    const addSpy = jest.spyOn(document, 'addEventListener');
    renderHook(() => useCustomCursor());
    const events = addSpy.mock.calls.map(([ev]) => ev);
    expect(events).toContain('mousemove');
  });

  it('updates cursor left/top position on mousemove', () => {
    const cursor = makeCursorEl();
    renderHook(() => useCustomCursor());
    fireMousemove(120, 80);
    expect(cursor.style.left).toBe('120px');
    expect(cursor.style.top).toBe('80px');
  });

  it('adds "big" class on mouseenter of a button', () => {
    const cursor = makeCursorEl();
    const btn = document.createElement('button');
    document.body.appendChild(btn);

    renderHook(() => useCustomCursor());
    btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

    expect(cursor.classList.contains('big')).toBe(true);
    btn.remove();
  });

  it('removes "big" class on mouseleave of a button', () => {
    const cursor = makeCursorEl();
    cursor.classList.add('big');
    const btn = document.createElement('button');
    document.body.appendChild(btn);

    renderHook(() => useCustomCursor());
    btn.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));

    expect(cursor.classList.contains('big')).toBe(false);
    btn.remove();
  });

  it('removes mousemove listener on unmount', () => {
    makeCursorEl();
    const removeSpy = jest.spyOn(document, 'removeEventListener');
    const { unmount } = renderHook(() => useCustomCursor());
    unmount();
    const events = removeSpy.mock.calls.map(([ev]) => ev);
    expect(events).toContain('mousemove');
  });
});
