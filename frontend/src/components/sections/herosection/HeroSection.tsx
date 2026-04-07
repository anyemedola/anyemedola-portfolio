'use client';

import Image from 'next/image';
import T from '@/components/ui/t/T';
import { useLang } from '@/context/LangContext';
import * as S from './styles';

export default function HeroSection() {
  const { dict } = useLang();
  return (
    <S.HeroRoot aria-labelledby="hero-heading">
      <S.HeroLeft>
        <S.Eyebrow aria-hidden="true">{dict.hero.eyebrow}</S.Eyebrow>
        <S.HeroTitle id="hero-heading">
          Any<br /><span>Medola</span>
        </S.HeroTitle>
        <S.HeroDesc>
          <T
            en={<><em>Crafting interfaces </em> that don&apos;t just work — they feel right. React, Next.js &amp; TypeScript with a designer&apos;s eye.</>}
            pt={<><em>Criando interfaces </em> que não só funcionam — elas encantam. React, Next.js &amp; TypeScript com olhar de designer.</>}
          />
        </S.HeroDesc>
        <S.HeroCta>
          <S.BtnFill href="#experience">{dict.hero.myWork}</S.BtnFill>
          <S.BtnOutline href="#contact">{dict.hero.letsTalk}</S.BtnOutline>
        </S.HeroCta>
      </S.HeroLeft>
      <S.HeroRight aria-hidden="true">
        <Image
          src="/any_blue_focus.JPG"
          alt=""
          role="presentation"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
        <S.HeroBadge aria-hidden="true">
          <strong>5+</strong>
          <span>{dict.hero.badge}</span>
        </S.HeroBadge>
      </S.HeroRight>
    </S.HeroRoot>
  );
}
