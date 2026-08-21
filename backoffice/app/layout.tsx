import type { Metadata } from 'next';
import { Newsreader, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const newsreader = Newsreader({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Any Medola — Portfolio Admin',
  description: 'Portfolio admin dashboard',
  icons: { icon: '/favicon-16x16.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable}`}>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
