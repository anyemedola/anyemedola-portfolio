'use client';

import { useTranslation } from 'react-i18next';
import * as S from './styles';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <S.HeroRoot id="top" aria-labelledby="hero-heading">
      <S.Collage aria-hidden="true">
        <S.GlowOrb />
        <S.MainFrame
          src="/sicily-ragusa.jpg"
          alt="Any em Ragusa Ibla, Sicília, ao pôr do sol"
          objectPosition="center 30%"
          rotate={-4}
          caption={t('hero.cap1')}
          priority
        />
        <S.SmallFrameRight
          src="/sunset-sea.jpg"
          alt="Any ao pôr do sol no mar"
          rotate={4}
          caption={t('hero.cap2')}
          captionSize="sm"
          priority
        />
        <S.SmallFrameLeft
          src="/concert.jpg"
          alt="Any em um show"
          rotate={-7}
          caption={t('hero.cap3')}
          captionSize="sm"
        />
      </S.Collage>

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
      </S.Content>
    </S.HeroRoot>
  );
}
