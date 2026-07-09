'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const SCROLL_KEY = 'pendingScroll';

export function scrollToSection(id: string) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Navigates to an in-page section without hash-fragment hrefs: scrolls directly
 * when already on the home page, otherwise stores the target and redirects home
 * (Header consumes `SCROLL_KEY` on mount to finish the scroll there).
 */
export function useSectionNav() {
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === '/';

  const goToSection = useCallback((section: string) => {
    if (onHome) {
      scrollToSection(section);
    } else {
      sessionStorage.setItem(SCROLL_KEY, section);
      router.push('/');
    }
  }, [onHome, router]);

  return { onHome, goToSection };
}
