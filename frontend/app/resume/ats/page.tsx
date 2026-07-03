import type { Metadata } from 'next';
import ATSResume from '@/components/resume/ATSResume';

export const metadata: Metadata = {
  title: 'ATS Resume — Any Medola',
  description: 'ATS-optimized resume of Any Medola, Senior Front-End Developer & UI/UX Designer based in Sicily, Italy.',
  robots: { index: false, follow: false },
};

export default function ATSResumePage() {
  return <ATSResume />;
}
