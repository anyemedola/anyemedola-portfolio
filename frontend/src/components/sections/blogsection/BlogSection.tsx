'use client';

import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

export default function BlogSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.EscritaRoot id="escrita" aria-labelledby="escrita-heading" ref={ref}>
      <S.Inner>
        <S.Left>
          <S.Eyebrow className="reveal">{t('writing.eyebrow')}</S.Eyebrow>
          <S.Title className="reveal" id="escrita-heading">
            {t('writing.notebookTitle')}
          </S.Title>
          <S.Lead className="reveal">{t('writing.notebookLead')}</S.Lead>
          <S.CtaBtn href="/blog/inteira" className="reveal">
            {t('writing.notebookCta')}
          </S.CtaBtn>
        </S.Left>

        <S.Cards>
          <S.NotebookCard accent="#E0568A" className="reveal" aria-labelledby="nb1-title">
            <S.CardKicker>{t('writing.nb1kicker')}</S.CardKicker>
            <S.CardTitle id="nb1-title">{t('writing.nb1title')}</S.CardTitle>
            <S.CardDesc>{t('writing.nb1desc')}</S.CardDesc>
          </S.NotebookCard>

          <S.NotebookCard accent="#F39C7E" className="reveal" aria-labelledby="nb2-title">
            <S.CardKicker>{t('writing.nb2kicker')}</S.CardKicker>
            <S.CardTitle id="nb2-title">{t('writing.nb2title')}</S.CardTitle>
            <S.CardDesc>{t('writing.nb2desc')}</S.CardDesc>
          </S.NotebookCard>
        </S.Cards>
      </S.Inner>
    </S.EscritaRoot>
  );
}
