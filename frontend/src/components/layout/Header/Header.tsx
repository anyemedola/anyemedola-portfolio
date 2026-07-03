'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LangToggle from '@/components/ui/langtoggle/LangToggle';
import * as S from './styles';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const navItems = [
  { key: 'about', href: '#sobre' },
  { key: 'work', href: '#trabalho' },
  { key: 'projects', href: '#projetos' },
  { key: 'create', href: '#criacao' },
  { key: 'travel', href: '#viagens' },
  { key: 'writing', href: '/blog' },
] as const;

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const anchorHref = (href: string) =>
    href.startsWith('#') && !onHome ? `/${href}` : href;

  return (
    <S.HeaderRoot role="banner" data-scrolled={scrolled ? 'true' : 'false'}>
      <S.Inner>
        <S.Logo href={onHome ? '#top' : '/'} aria-label="Any Medola — Home">
          <Image
            src="/android-chrome-192x192.png"
            alt="Logotipo de Any Medola"
            width={80}
            height={80}
            priority
            quality={100}
          />
        </S.Logo>

        <S.NavRight>
          <S.DesktopNav aria-label="Main navigation">
            {navItems.map(({ key, href }) => (
              <S.NavLink key={key} href={anchorHref(href)} className="navlink">
                {t(`nav.${key}`)}
              </S.NavLink>
            ))}
          </S.DesktopNav>

          <LangToggle />

          <S.CtaLink href={onHome ? '#contato' : '/#contato'} className="nav-cta" aria-label={t('nav.cta')}>
            {t('nav.cta')}
          </S.CtaLink>
        </S.NavRight>
      </S.Inner>
    </S.HeaderRoot>
  );
}
