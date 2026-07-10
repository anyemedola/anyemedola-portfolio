import type { Metadata } from 'next';
import TravelContent from '@/components/travelcontent/TravelContent';

const BASE_URL = 'https://anyemedola.com.br';

export const metadata: Metadata = {
  title: 'Travel Content — Any Medola · Sicily Diaries',
  description: 'Travel films, photo diaries and hand-built itineraries from Sicily — behind the scenes of @anyinsicily and @anyemedola.',
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/travel-content`,
    title: 'Any Medola — Travel Content · Sicily Diaries',
    description: 'Travel films, photo diaries and hand-built itineraries from Sicily — behind the scenes of @anyinsicily and @anyemedola.',
    siteName: 'Any Medola',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Any Medola — Travel Content · Sicily Diaries',
    description: 'Travel films, photo diaries and hand-built itineraries from Sicily.',
  },
  alternates: {
    canonical: `${BASE_URL}/travel-content`,
  },
};

export default function TravelContentPage() {
  return <TravelContent />;
}
