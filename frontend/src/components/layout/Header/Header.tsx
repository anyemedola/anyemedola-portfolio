'use client';

import * as S from './styles';
import { useState, useEffect } from 'react';
import { useLang } from '@/context/LangContext';

const navKeys = ['about', 'skills', 'experience', 'projects', 'blog', 'contact'] as const;
const navHrefs: Record<string, string> = {
  about: '#about', skills: '#skills', experience: '#experience',
  projects: '#projects', blog: '#blog', contact: '#contact',
};

export default function Header() {
  const { dict } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <S.HeaderRoot role="banner" data-scrolled={scrolled ? 'true' : 'false'}>
      <S.Logo href="#" aria-label="Any Medola — Home">AM·</S.Logo>

      <S.DesktopNav aria-label="Main navigation">
        <ul role="list">
          {navKeys.map((key) => (
            <li key={key}>
              <a href={navHrefs[key]}>{dict.nav[key]}</a>
            </li>
          ))}
        </ul>
      </S.DesktopNav>
    </S.HeaderRoot>
  );
}
