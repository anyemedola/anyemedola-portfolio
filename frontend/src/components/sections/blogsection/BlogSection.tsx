'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import T from '@/components/ui/t/T';
import * as S from './styles';

interface ApiPost {
  slug: string;
  title: string; titlePt: string; titleIt: string;
  excerptEn: string; excerptPt: string; excerptIt: string;
  primaryTag: string; primaryTagEn?: string; primaryTagIt?: string; tags: string[];
  accentColor: string;
}

interface CardData {
  slug: string;
  kicker: { en: string; pt: string; it: string };
  title: { en: string; pt: string; it: string };
  desc: { en: string; pt: string; it: string };
  accent: string;
}

export default function BlogSection() {
  const { t, i18n } = useTranslation();
  const [apiCards, setApiCards] = useState<CardData[]>([]);
  const [latestSlug, setLatestSlug] = useState('/blog/inteira');
  const ref = useScrollReveal([apiCards]);

  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.ok ? r.json() : [])
      .then((data: ApiPost[]) => {
        if (!data.length) return;
        const extra: CardData[] = data
          .filter(p => p.slug !== 'inteira')
          .slice(0, 1)
          .map(p => ({
            slug: p.slug,
            kicker: {
              en: p.primaryTagEn || p.primaryTag,
              pt: p.primaryTag,
              it: p.primaryTagIt || p.primaryTag,
            },
            title: { en: p.title, pt: p.titlePt || p.title, it: p.titleIt || p.title },
            desc: { en: p.excerptEn, pt: p.excerptPt || p.excerptEn, it: p.excerptIt || p.excerptEn },
            accent: p.accentColor || '#EFA8AC',
          }));
        setLatestSlug(`/blog/${data[0].slug}`);
        setApiCards(extra);
      })
      .catch(() => {});
  }, []);

  const tEn = i18n.getFixedT('en');
  const tPt = i18n.getFixedT('pt');
  const tIt = i18n.getFixedT('it');

  const inteiraCard: CardData = {
    slug: 'inteira',
    kicker: {
      en: tEn('writing.nb1kicker'),
      pt: tPt('writing.nb1kicker'),
      it: tIt('writing.nb1kicker'),
    },
    title: {
      en: tEn('writing.nb1title'),
      pt: tPt('writing.nb1title'),
      it: tIt('writing.nb1title'),
    },
    desc: {
      en: tEn('writing.nb1desc'),
      pt: tPt('writing.nb1desc'),
      it: tIt('writing.nb1desc'),
    },
    accent: '#EFA8AC',
  };

  const displayCards = [inteiraCard, ...apiCards];

  return (
    <S.EscritaRoot id="escrita" aria-labelledby="escrita-heading" ref={ref}>
      <S.Inner>
        <S.Left>
          <S.Eyebrow className="reveal">{t('writing.eyebrow')}</S.Eyebrow>
          <S.Title className="reveal" id="escrita-heading">
            {t('writing.notebookTitle')}
          </S.Title>
          <S.Lead className="reveal">{t('writing.notebookLead')}</S.Lead>
          <S.CtaBtn href={latestSlug} className="reveal">
            {t('writing.notebookCta')}
          </S.CtaBtn>
        </S.Left>

        <S.Cards>
          {displayCards.map((card, i) => (
            <S.CardLink key={card.slug} href={`/blog/${card.slug}`} className="reveal" aria-labelledby={`nb${i + 1}-title`}>
              <S.NotebookCard accent={card.accent} as="div">
                <S.CardKicker>
                  <T en={card.kicker.en} pt={card.kicker.pt} it={card.kicker.it} />
                </S.CardKicker>
                <S.CardTitle id={`nb${i + 1}-title`}>
                  <T en={card.title.en} pt={card.title.pt} it={card.title.it} />
                </S.CardTitle>
                <S.CardDesc>
                  <T en={card.desc.en} pt={card.desc.pt} it={card.desc.it} />
                </S.CardDesc>
              </S.NotebookCard>
            </S.CardLink>
          ))}
        </S.Cards>
      </S.Inner>
    </S.EscritaRoot>
  );
}
