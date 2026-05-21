'use client';

import { useEffect } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import i18n from '@/components/translator-i18n/i18n';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
    const persist = (lang: string) => localStorage.setItem('locale', lang);
    i18n.on('languageChanged', persist);
    return () => { i18n.off('languageChanged', persist); };
  }, []);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
