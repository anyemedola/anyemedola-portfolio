'use client';

import { useTranslation } from 'react-i18next';
import { Translator } from '@/components/translator-i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

export default function TravelSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.ViagensRoot id="viagens" aria-labelledby="viagens-heading" ref={ref}>
      <S.Inner>
        <S.TopGrid>
          <S.HeaderWrap>
            <S.Eyebrow className="reveal">{t('travel.eyebrow')}</S.Eyebrow>
            <S.Title className="reveal" id="viagens-heading">{t('travel.title')}</S.Title>
            <S.Lead className="reveal">{t('travel.lead')}</S.Lead>
          </S.HeaderWrap>

          <S.Gallery className="reveal" aria-label="Travel gallery">
            <S.GalleryMain
              src="/sicily-ragusa.jpg"
              alt="Ragusa Ibla, Sicily"
              objectPosition="center 30%"
              rotate={-1.5}
              caption={t('travel.cap1')}
            />

            <S.GallerySmall
              src="/sunset-sea.jpg"
              alt="Sunset over the Mediterranean"
              objectPosition="center 35%"
              rotate={1.2}
              caption={t('travel.cap2')}
              captionSize="sm"
            />

            <S.PolaroidFrame rotate={2}>
              <S.PlaceholderPink>
                <Translator path="travel.cap3" html />
              </S.PlaceholderPink>
            </S.PolaroidFrame>

            <S.PolaroidFrame rotate={-1.8}>
              <S.PlaceholderGold>
                <Translator path="travel.cap4" html />
              </S.PlaceholderGold>
            </S.PolaroidFrame>
          </S.Gallery>
        </S.TopGrid>

        <S.TravelWithMe className="reveal" aria-label="Travel with me group">
          <S.TwmStar top="10%" left="8%"  size={3} delay="0s"   color="#FBE6C8" aria-hidden="true" />
          <S.TwmStar top="25%" left="52%" size={4} delay="0.7s" color="#F3A98C" aria-hidden="true" />
          <S.TwmStar top="65%" left="20%" size={3} delay="1.2s" color="#FBE6C8" aria-hidden="true" />
          <S.TwmStar top="45%" left="75%" size={5} delay="0.4s" color="#E0568A" aria-hidden="true" />
          <S.TwmStar top="82%" left="60%" size={3} delay="1.0s" color="#FBE6C8" aria-hidden="true" />
          <S.TwmGlow aria-hidden="true" />
          <S.TwmLeft>
            <S.TwmEyebrow>{t('travel.twmEyebrow')}</S.TwmEyebrow>
            <S.TwmTitle>{t('travel.twmTitle')}</S.TwmTitle>
            <S.TwmP>{t('travel.twmP')}</S.TwmP>
          </S.TwmLeft>
          <S.TwmRight>
            <S.WaBtn
              href="https://chat.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('travel.twmCta')}
            >
              <S.WaIcon aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </S.WaIcon>
              {t('travel.twmCta')}
            </S.WaBtn>
          </S.TwmRight>
        </S.TravelWithMe>
      </S.Inner>
    </S.ViagensRoot>
  );
}
