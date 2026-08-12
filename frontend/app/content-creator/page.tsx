import type { Metadata } from 'next';
import ContentCreator from '@/components/contentcreator/ContentCreator';

const BASE_URL = 'https://anyemedola.com.br';

export const metadata: Metadata = {
  title: 'Content Creator — Any Medola · @anyemedola & @anyinsicily',
  description: 'Lifestyle and travel photography, video and stories across two Instagram profiles — @anyemedola and @anyinsicily.',
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/content-creator`,
    title: 'Any Medola — Content Creator · @anyemedola & @anyinsicily',
    description: 'Lifestyle and travel photography, video and stories across two Instagram profiles — @anyemedola and @anyinsicily.',
    siteName: 'Any Medola',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Any Medola — Content Creator · @anyemedola & @anyinsicily',
    description: 'Lifestyle and travel photography, video and stories across two Instagram profiles.',
  },
  alternates: {
    canonical: `${BASE_URL}/content-creator`,
  },
};

export default function ContentCreatorPage() {
  return <ContentCreator />;
}
