'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { AdminProvider } from '@/context/AdminContext';
import '@/components/translator-i18n/i18n';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <AdminProvider>
        {children}
      </AdminProvider>
    </AppRouterCacheProvider>
  );
}
