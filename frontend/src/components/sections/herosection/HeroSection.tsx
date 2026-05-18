'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Translator } from '@/components/translator-i18n';
import BtnFill from '@/components/ui/btnFill/BtnFill';
import BtnOutline from '@/components/ui/btnOutline/BtnOutline';
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
          <BtnFill href="#experience">{t('hero.myWork')}</BtnFill>
          <BtnOutline href="#contact">{t('hero.letsTalk')}</BtnOutline>
        </S.HeroCta>
      </S.HeroLeft>
      <S.HeroRight>
        <Image
          src="/any_blue_focus.JPG"
          alt="Any Medola smiling, wearing a teal blouse with her hand resting on her chin"
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
