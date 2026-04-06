import SkipLink from '@/components/ui/skiplink/SkipLink';
import CustomCursor from '@/components/ui/customcursor/CustomCursor';
import LangToggle from '@/components/ui/langtoggle/LangToggle';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import HeroSection from '@/components/sections/herosection/HeroSection';
import MarqueeSection from '@/components/sections/marqueesection/MarqueeSection';
import AboutSection from '@/components/sections/aboutsection/AboutSection';
import SkillsSection from '@/components/sections/skillsection/SkillsSection';
import ExperienceSection from '@/components/sections/experiencesection/ExperienceSection';
import ProjectsSection from '@/components/sections/projectsection/ProjectsSection';
import BlogSection from '@/components/sections/blogsection/BlogSection';
import LanguagesSection from '@/components/sections/languagesection/LanguagesSection';
import ContactSection from '@/components/sections/contactsection/ContactSection';

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <CustomCursor />
      <LangToggle />
      <Header />
      <main id="main-content">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
