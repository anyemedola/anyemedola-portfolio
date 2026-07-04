'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import LangToggle from '@/components/ui/langtoggle/LangToggle';
import * as S from './styles';
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const SCROLL_KEY = 'pendingScroll';

const anchorItems = [
  { key: 'about',    section: 'sobre' },
  { key: 'work',     section: 'trabalho' },
  { key: 'projects', section: 'projetos' },
  { key: 'create',   section: 'criacao' },
  { key: 'travel',   section: 'viagens' },
] as const;

function scrollSmooth(id: string) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === '/';

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
    const id = setTimeout(() => scrollSmooth(target), 80);
    return () => clearTimeout(id);
  }, [onHome]);

  const handleSectionNav = useCallback((section: string) => {
    if (onHome) {
      scrollSmooth(section);
    } else {
      sessionStorage.setItem(SCROLL_KEY, section);
      router.push('/');
    }
  }, [onHome, router]);

  const handleLogoClick = useCallback(() => {
    if (onHome) {
      scrollSmooth('top');
    } else {
      router.push('/');
    }
  }, [onHome, router]);

  return (
    <S.HeaderRoot role="banner" data-scrolled={scrolled ? 'true' : 'false'}>
      <S.Inner>
        <S.LogoBtn onClick={handleLogoClick} aria-label="Any Medola — Home">
          <Image
            src="/android-chrome-192x192.png"
            alt="Logotipo de Any Medola"
            width={80}
            height={80}
            priority
            quality={100}
          />
        </S.LogoBtn>

        <S.NavRight>
          <S.DesktopNav aria-label="Main navigation">
            {anchorItems.map(({ key, section }) => (
              <S.NavBtn key={key} onClick={() => handleSectionNav(section)} className="navlink">
                {t(`nav.${key}`)}
              </S.NavBtn>
            ))}
            <S.NavLink href="/blog" className="navlink">
              {t('nav.writing')}
            </S.NavLink>
          </S.DesktopNav>

          <LangToggle />

          <S.CtaBtn onClick={() => handleSectionNav('contato')} className="nav-cta" aria-label={t('nav.cta')}>
            {t('nav.cta')}
          </S.CtaBtn>
        </S.NavRight>
      </S.Inner>
    </S.HeaderRoot>
  );
}
