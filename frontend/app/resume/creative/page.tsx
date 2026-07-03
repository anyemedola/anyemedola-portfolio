import type { Metadata } from 'next';
import CreativeResume from '@/components/resume/CreativeResume';

export const metadata: Metadata = {
  title: 'Creative Resume — Any Medola',
  description: 'Creative resume of Any Medola, Senior Front-End Developer & UI/UX Designer based in Sicily, Italy.',
  robots: { index: false, follow: false },
};

export default function CreativeResumePage() {
  return <CreativeResume />;
}
