'use client';

import { useTranslation } from 'react-i18next';
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

          <S.TravelCollage aria-hidden="true">
            <S.TravelGlowOrb />
            <S.TravelMainFrame
              src="/verona.jpeg"
              alt="Casa di Giulietta, Verona"
              objectPosition="center 30%"
              rotate={-4}
              caption={t('travel.cap1')}
            />
            <S.TravelSmallRight
              src="/brazil.jpeg"
              alt="Any torcendo pelo Brasil na Copa do Mundo 2026"
              objectPosition="center 35%"
              rotate={4}
              caption={t('travel.cap2')}
              captionSize="sm"
            />
            <S.TravelSmallLeft
            src="/snow.jpeg"
              alt="Etna, Sicília"
              rotate={-7}
              caption={t('travel.cap3')}
              captionSize="sm"
            />
          </S.TravelCollage>
        </S.TopGrid>

        <S.TravelWithMe className="reveal" aria-label="Travel with me group">
          <S.TwmStar top="10%" left="8%"  size={3} delay="0s"   color="#F5C0C3" aria-hidden="true" />
          <S.TwmStar top="25%" left="52%" size={4} delay="0.7s" color="#EFA8AC" aria-hidden="true" />
          <S.TwmStar top="65%" left="20%" size={3} delay="1.2s" color="#F5C0C3" aria-hidden="true" />
          <S.TwmStar top="45%" left="75%" size={5} delay="0.4s" color="#C24C76" aria-hidden="true" />
          <S.TwmStar top="82%" left="60%" size={3} delay="1.0s" color="#F5C0C3" aria-hidden="true" />
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
