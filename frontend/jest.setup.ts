import '@testing-library/jest-dom';

// ─── IntersectionObserver ─────────────────────────────────────────────────────
class MockIntersectionObserver {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds: ReadonlyArray<number> = [];
  observe   = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  takeRecords = jest.fn(() => [] as IntersectionObserverEntry[]);
  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit,
  ) {}
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true, configurable: true, value: MockIntersectionObserver,
});

// ─── matchMedia ───────────────────────────────────────────────────────────────
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false, media: query, onchange: null,
    addListener: jest.fn(), removeListener: jest.fn(),
    addEventListener: jest.fn(), removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
