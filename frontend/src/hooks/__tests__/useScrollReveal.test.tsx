import { renderHook } from '@testing-library/react';
import { useScrollReveal } from '../useScrollReveal';

let observerCallback: IntersectionObserverCallback;
let observeSpy: jest.Mock;
let disconnectSpy: jest.Mock;

beforeEach(() => {
  observeSpy    = jest.fn();
  disconnectSpy = jest.fn();

  (window.IntersectionObserver as unknown as jest.Mock) = jest.fn().mockImplementation(
    (cb: IntersectionObserverCallback) => {
      observerCallback = cb;
      return { observe: observeSpy, unobserve: jest.fn(), disconnect: disconnectSpy };
    },
  );
});

function hookWithContainer(container: HTMLDivElement) {
  return renderHook(() => {
    const ref = useScrollReveal();
    // @ts-expect-error mutate read-only ref in test
    ref.current = container;
    return ref;
  });
}

describe('useScrollReveal', () => {
  it('creates an IntersectionObserver with threshold 0.12', () => {
    hookWithContainer(document.createElement('div'));
    expect(window.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.12 },
    );
  });

  it('observes all .reveal elements inside the container', () => {
    const container = document.createElement('div');
    const el1 = document.createElement('p');
    const el2 = document.createElement('p');
    el1.className = 'reveal';
    el2.className = 'reveal';
    container.appendChild(el1);
    container.appendChild(el2);

    hookWithContainer(container);

    expect(observeSpy).toHaveBeenCalledWith(el1);
    expect(observeSpy).toHaveBeenCalledWith(el2);
  });

  it('adds "visible" class when element intersects', () => {
    const container = document.createElement('div');
    const el = document.createElement('div');
    el.className = 'reveal';
    container.appendChild(el);

    hookWithContainer(container);

    observerCallback(
      [{ isIntersecting: true, target: el } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );

    expect(el.classList.contains('visible')).toBe(true);
  });

  it('does not add "visible" class when not intersecting', () => {
    const container = document.createElement('div');
    const el = document.createElement('div');
    el.className = 'reveal';
    container.appendChild(el);

    hookWithContainer(container);

    observerCallback(
      [{ isIntersecting: false, target: el } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );

    expect(el.classList.contains('visible')).toBe(false);
  });

  it('disconnects the observer on unmount', () => {
    const { unmount } = hookWithContainer(document.createElement('div'));
    unmount();
    expect(disconnectSpy).toHaveBeenCalled();
  });
});
