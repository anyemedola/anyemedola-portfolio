'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import * as S from './styles';
import { useSectionNav } from '@/hooks/useSectionNav';

export default function HeroSection() {
  const { t } = useTranslation();
  const { goToSection } = useSectionNav();

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
              priority
              sizes="(max-width: 380px) 136px, (max-width: 480px) 152px, (max-width: 760px) 200px, (max-width: 1024px) 320px, 380px"
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
          <S.BtnPrimary type="button" onClick={() => goToSection('contato')}>{t('hero.cta1')}</S.BtnPrimary>
          <S.BtnGhost type="button" onClick={() => goToSection('projetos')}>{t('hero.cta2')}</S.BtnGhost>
        </S.Cta>
      </S.Content>
    </S.HeroRoot>
  );
}
