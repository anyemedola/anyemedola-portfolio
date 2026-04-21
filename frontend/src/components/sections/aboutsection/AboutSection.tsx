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
    <S.AboutRoot id="about" aria-labelledby="about-heading" ref={ref}>
      <S.ImageCol>
        <Image
          src="/any_pink_smile.jpg"
          alt="Any Medola, smiling with a teal top, arms crossed"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </S.ImageCol>
      <S.Content>
        <S.SectionLabel className="reveal" aria-hidden="true">{t('about.label')}</S.SectionLabel>
        <S.SectionTitle className="reveal" id="about-heading">
          <span>{t('about.titleLine')}<br /></span><em>{t('about.titleEm')}</em>
        </S.SectionTitle>
        <S.AboutText className="reveal reveal-delay-1">
          <Translator path="about.text1" html />
        </S.AboutText>
        <S.AboutText className="reveal reveal-delay-2">
          <Translator path="about.text2" html />
        </S.AboutText>
        <S.Stats className="reveal reveal-delay-3">
          <div>
            <S.StatNum>9<span>+</span></S.StatNum>
            <S.StatLabel>{t('about.stat1')}</S.StatLabel>
          </div>
          <div>
            <S.StatNum>5<span>+</span></S.StatNum>
            <S.StatLabel>{t('about.stat2')}</S.StatLabel>
          </div>
          <div>
            <S.StatNum>3<span>+</span></S.StatNum>
            <S.StatLabel>{t('about.stat3')}</S.StatLabel>
          </div>
        </S.Stats>
      </S.Content>
    </S.AboutRoot>
  );
}
