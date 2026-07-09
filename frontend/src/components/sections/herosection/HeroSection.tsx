'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <S.HeroRoot id="top" aria-labelledby="hero-heading">
      <S.PortraitArea aria-hidden="true">
        <S.PortraitGlow />
        <S.PortraitWrap>
          <S.PortraitImgWrap>
            <Image
              src="/ibla.jpeg"
              alt="Any em Ragusa Ibla, Sicília"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
              priority
            />
          </S.PortraitImgWrap>
        </S.PortraitWrap>
      </S.PortraitArea>

      <S.Content>
        <S.Eyebrow>{t('hero.eyebrow')}</S.Eyebrow>
        <S.HeroTitle id="hero-heading">
          Any<br /><S.TitleItalic>Medola</S.TitleItalic>
        </S.HeroTitle>
        <S.HeroTag>{t('hero.tag')}</S.HeroTag>
        <S.HeroSub>{t('hero.sub')}</S.HeroSub>
        <S.Cta>
          <S.BtnPrimary href="#contato">{t('hero.cta1')}</S.BtnPrimary>
          <S.BtnGhost href="#projetos">{t('hero.cta2')}</S.BtnGhost>
        </S.Cta>
        <S.ResumeCta>
          <S.ResumeLabel>{t('hero.resumeCta')}</S.ResumeLabel>
          <S.ResumePill href="/resume/creative">✦ {t('hero.resumeCreative')}</S.ResumePill>
          <S.ResumePill href="/resume/ats">☰ {t('hero.resumeATS')}</S.ResumePill>
        </S.ResumeCta>
      </S.Content>
    </S.HeroRoot>
  );
}
