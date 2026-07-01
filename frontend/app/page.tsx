import SkipLink from '@/components/ui/skiplink/SkipLink';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import Header from '@/components/layout/Header/Header';
import HeroSection from '@/components/sections/herosection/HeroSection';
import AboutSection from '@/components/sections/aboutsection/AboutSection';
import ExperienceSection from '@/components/sections/experiencesection/ExperienceSection';
import SkillsSection from '@/components/sections/skillsection/SkillsSection';
import ProjectsSection from '@/components/sections/projectsection/ProjectsSection';
import CriacaoSection from '@/components/sections/criacaosection/CriacaoSection';
import ExpatSection from '@/components/sections/expatsection/ExpatSection';
import BlogSection from '@/components/sections/blogsection/BlogSection';
import WomanSection from '@/components/sections/womansection/WomanSection';
import Footer from '@/components/layout/Footer/Footer';
import TravelSection from '@/components/sections/travelsection/TravelSection';

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <LemonCursor />
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CriacaoSection />
        <WomanSection />
        <TravelSection />
        <ExpatSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
