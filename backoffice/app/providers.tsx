'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { AdminProvider } from '@/context/AdminContext';
import { LangProvider } from '@/context/LangContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <LangProvider>
        <AdminProvider>
          {children}
        </AdminProvider>
      </LangProvider>
    </AppRouterCacheProvider>
  );
}
