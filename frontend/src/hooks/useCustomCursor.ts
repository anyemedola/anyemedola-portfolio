'use client';

import { useEffect } from 'react';

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const grow = () => cursor.classList.add('big');
    const shrink = () => cursor.classList.remove('big');

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);
}
