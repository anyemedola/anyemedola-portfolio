'use client';

import Image from 'next/image';
import LangToggle from '@/components/ui/langtoggle/LangToggle';
import * as S from './styles';
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSectionNav, scrollToSection, SCROLL_KEY } from '@/hooks/useSectionNav';

const anchorItems = [
  { key: 'about',    section: 'sobre' },
  { key: 'work',     section: 'trabalho' },
  { key: 'projects', section: 'projetos' },
  { key: 'create',   section: 'criacao' },
  { key: 'travel',   section: 'viagens' },
] as const;

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const { onHome, goToSection } = useSectionNav();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // After navigating to home, execute any pending scroll stored before navigation
  useEffect(() => {
    if (!onHome) return;
    const target = sessionStorage.getItem(SCROLL_KEY);
    if (!target) return;
    sessionStorage.removeItem(SCROLL_KEY);
    const id = setTimeout(() => scrollToSection(target), 80);
    return () => clearTimeout(id);
  }, [onHome]);

  const handleLogoClick = useCallback(() => {
    goToSection('top');
  }, [goToSection]);

  return (
    <S.HeaderRoot role="banner" data-scrolled={scrolled ? 'true' : 'false'}>
      <S.Inner>
        <S.LogoBtn onClick={handleLogoClick} aria-label="Any Medola — Home">
          <Image
            src="/anye-logo.png"
            alt="Logotipo de Any Medola"
            width={200}
            height={80}
            priority
            quality={100}
          />
        </S.LogoBtn>

        <S.NavRight>
          <S.DesktopNav aria-label="Main navigation">
            {anchorItems.map(({ key, section }) => (
              <S.NavBtn key={key} onClick={() => goToSection(section)} className="navlink">
                {t(`nav.${key}`)}
              </S.NavBtn>
            ))}
            <S.NavLink href="/blog" className="navlink">
              {t('nav.writing')}
            </S.NavLink>
          </S.DesktopNav>

          <LangToggle />

          <S.CtaBtn onClick={() => goToSection('contato')} className="nav-cta" aria-label={t('nav.cta')}>
            {t('nav.cta')}
          </S.CtaBtn>
        </S.NavRight>
      </S.Inner>
    </S.HeaderRoot>
  );
}
