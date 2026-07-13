'use client';

import { useEffect, useRef } from 'react';

/** Plays the wrapped `<video>` while its container is in view, pauses it otherwise. */
export function useAutoplayVideo<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    const video = el?.querySelector('video');
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
