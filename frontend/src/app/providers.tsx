'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import { LangProvider } from '@/context/LangContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LangProvider>
          {children}
        </LangProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
