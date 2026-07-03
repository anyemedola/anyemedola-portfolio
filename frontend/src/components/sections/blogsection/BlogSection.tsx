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
  primaryTag: string; tags: string[];
  accentColor: string;
}

interface CardData {
  slug: string;
  kicker: string;
  title: { en: string; pt: string; it: string };
  desc: { en: string; pt: string; it: string };
  accent: string;
}

export default function BlogSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const [apiCards, setApiCards] = useState<CardData[]>([]);
  const [latestSlug, setLatestSlug] = useState('/blog/inteira');

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
            kicker: p.primaryTag || (p.tags?.[0] ?? ''),
            title: { en: p.title, pt: p.titlePt || p.title, it: p.titleIt || p.title },
            desc: { en: p.excerptEn, pt: p.excerptPt || p.excerptEn, it: p.excerptIt || p.excerptEn },
            accent: p.accentColor || '#EFA8AC',
          }));
        setLatestSlug(`/blog/${data[0].slug}`);
        setApiCards(extra);
      })
      .catch(() => {});
  }, []);

  const inteiraCard: CardData = {
    slug: 'inteira',
    kicker: t('writing.nb1kicker'),
    title: { en: t('writing.nb1title'), pt: t('writing.nb1title'), it: t('writing.nb1title') },
    desc:  { en: t('writing.nb1desc'),  pt: t('writing.nb1desc'),  it: t('writing.nb1desc')  },
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
                <S.CardKicker>{card.kicker}</S.CardKicker>
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
