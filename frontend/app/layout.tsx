import type { Metadata } from 'next';
import { Bebas_Neue, Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Providers from './providers';
import JsonLd from '@/components/seo/JsonLd';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const BASE_URL = 'https://anyemedola.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Any Medola — Senior Front-End Developer',
    template: '%s | Any Medola',
  },
  description:
    "Senior Front-End Developer based in Milan, Italy. 5+ years building scalable React, Next.js & TypeScript applications with a designer's eye for UI/UX.",
  keywords: [
    'Front-End Developer', 'React Developer', 'Next.js Developer',
    'TypeScript', 'Senior Developer', 'Milan', 'Italy', 'Brazil',
    'UI/UX Design', 'Figma', 'Any Medola', 'Capgemini',
    'Remote Developer Europe', 'Remote Developer LATAM',
  ],
  authors: [{ name: 'Any Medola', url: BASE_URL }],
  creator: 'Any Medola',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Any Medola — Senior Front-End Developer',
    description:
      "Senior Front-End Developer based in Milan, Italy. React, Next.js & TypeScript with a designer's eye. Open to remote roles across Europe and LATAM.",
    siteName: 'Any Medola',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Any Medola — Senior Front-End Developer based in Milan, Italy',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Any Medola — Senior Front-End Developer',
    description:
      "Senior Front-End Developer based in Milan, Italy. React, Next.js & TypeScript with a designer's eye.",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
