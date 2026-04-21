'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Translator } from '@/components/translator-i18n';
import * as S from './styles';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <S.HeroRoot aria-labelledby="hero-heading">
      <S.HeroLeft>
        <S.Eyebrow aria-hidden="true">{t('hero.eyebrow')}</S.Eyebrow>
        <S.HeroTitle id="hero-heading">
          Any<br /><span>Medola</span>
        </S.HeroTitle>
        <S.HeroDesc>
          <Translator path="hero.desc" html />
        </S.HeroDesc>
        <S.HeroCta>
          <S.BtnFill href="#experience">{t('hero.myWork')}</S.BtnFill>
          <S.BtnOutline href="#contact">{t('hero.letsTalk')}</S.BtnOutline>
          <S.BtnOutline href="/any_medola_cv.pdf" download>{t('hero.downloadCV')}</S.BtnOutline>
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
          <span>{t('hero.badge')}</span>
        </S.HeroBadge>
      </S.HeroRight>
    </S.HeroRoot>
  );
}
