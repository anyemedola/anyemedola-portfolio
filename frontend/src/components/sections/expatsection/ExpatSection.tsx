'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Translator } from '@/components/translator-i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

export default function ExpatSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.ExpatRoot id="expat" aria-labelledby="expat-heading" ref={ref}>
      <S.Inner>
        <S.Content>
          <S.Eyebrow className="reveal">{t('expat.eyebrow')}</S.Eyebrow>
          <S.Title className="reveal" id="expat-heading">{t('expat.title')}</S.Title>
          <S.Para className="reveal reveal-delay-1">
            <Translator path="expat.p" html />
          </S.Para>
          <S.InstagramBtn
            href="https://instagram.com/anyinsicily"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-delay-2"
          >
            {t('expat.cta')}
          </S.InstagramBtn>
        </S.Content>

        <S.ImageFrame className="reveal">
          <Image
            src="/concert.jpg"
            alt="Any em um show na Itália"
            fill
            style={{ objectFit: 'cover', transition: 'transform .6s cubic-bezier(.2,.7,.2,1)' }}
          />
        </S.ImageFrame>
      </S.Inner>
    </S.ExpatRoot>
  );
}
