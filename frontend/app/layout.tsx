import type { Metadata } from 'next';
import { Bodoni_Moda, Hanken_Grotesk } from 'next/font/google';
import Providers from './providers';
import JsonLd from '@/components/seo/JsonLd';
import './globals.css';

const bodoniModa = Bodoni_Moda({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

const BASE_URL = 'https://anyemedola.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Any Medola — Full Stack Engineer · Sicily',
    template: '%s | Any Medola',
  },
  description:
    "Full Stack Engineer based in Sicily, Italy. 5+ years building scalable React, Next.js & TypeScript applications with a designer's eye for UI/UX.",
  keywords: [
    'Full Stack Engineer', 'React Developer', 'Next.js Developer',
    'TypeScript', 'Senior Developer', 'Sicily', 'Italy', 'Brazil',
    'UI/UX Design', 'Figma', 'Any Medola', 'Capgemini',
    'Remote Developer Europe', 'Remote Developer LATAM', 'Expat Sicily',
  ],
  authors: [{ name: 'Any Medola', url: BASE_URL }],
  creator: 'Any Medola',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Any Medola — Full Stack Engineer · Sicily',
    description:
      "Full Stack Engineer based in Sicily, Italy. React, Next.js & TypeScript with a designer's eye. Open to remote roles across Europe and LATAM.",
    siteName: 'Any Medola',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Any Medola — Full Stack Engineer based in Sicily, Italy',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Any Medola — Full Stack Engineer · Sicily',
    description:
      "Full Stack Engineer based in Sicily, Italy. React, Next.js & TypeScript with a designer's eye.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${hankenGrotesk.variable}`}>
      <body>
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
