'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Translator } from '@/components/translator-i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

export default function AboutSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.AboutRoot id="sobre" aria-labelledby="about-heading" ref={ref}>
      <S.Inner>
        <S.ImageFrame className="reveal">
          <Image
            src="/sicily-ragusa.jpg"
            alt="Any na Sicília"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 28%' }}
          />
        </S.ImageFrame>

        <S.Content>
          <S.Eyebrow className="reveal">{t('about.eyebrow')}</S.Eyebrow>
          <S.Title className="reveal" id="about-heading">
            <Translator path="about.title" html />
          </S.Title>
          <S.Para className="reveal reveal-delay-1">{t('about.p1')}</S.Para>
          <S.Para className="reveal reveal-delay-2">{t('about.p2')}</S.Para>
          <S.Stats className="reveal reveal-delay-3">
            <S.Stat>
              <S.StatNumber>5+</S.StatNumber>
              <S.StatLabel>{t('about.stat1')}</S.StatLabel>
            </S.Stat>
            <S.Stat>
              <S.StatNumber>3</S.StatNumber>
              <S.StatLabel>{t('about.stat2')}</S.StatLabel>
            </S.Stat>
            <S.Stat>
              <S.StatNumber>5</S.StatNumber>
              <S.StatLabel>{t('about.stat3')}</S.StatLabel>
            </S.Stat>
          </S.Stats>
        </S.Content>
      </S.Inner>
    </S.AboutRoot>
  );
}
