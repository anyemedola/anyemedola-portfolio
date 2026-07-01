'use client';

import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

const stars = [
  { top: '8%',  left: '12%', size: 4, delay: '0s',    color: '#FBE6C8' },
  { top: '22%', left: '78%', size: 3, delay: '0.5s',  color: '#F3A98C' },
  { top: '64%', left: '24%', size: 3, delay: '1s',    color: '#FBE6C8' },
  { top: '40%', left: '60%', size: 5, delay: '0.8s',  color: '#E0568A' },
  { top: '78%', left: '84%', size: 4, delay: '0.3s',  color: '#FBE6C8' },
] as const;

export default function WomanSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.WomanRoot id="mulher" aria-labelledby="woman-heading" ref={ref}>
      {stars.map((s, i) => (
        <S.Star key={i} top={s.top} left={s.left} size={s.size} delay={s.delay} color={s.color} aria-hidden="true" />
      ))}

      <S.Inner>
        <S.Eyebrow className="reveal">{t('woman.eyebrow')}</S.Eyebrow>
        <S.Title className="reveal" id="woman-heading">
          {t('woman.title')}
        </S.Title>
        <S.Sub className="reveal">{t('woman.sub')}</S.Sub>

        <S.Cards className="reveal">
          <S.NumerologyCard>
            <S.CardNum>{t('woman.c1num')}</S.CardNum>
            <S.CardLabel>{t('woman.c1label')}</S.CardLabel>
          </S.NumerologyCard>
          <S.NumerologyCard>
            <S.CardNum>{t('woman.c2num')}</S.CardNum>
            <S.CardLabel>{t('woman.c2label')}</S.CardLabel>
          </S.NumerologyCard>
          <S.NumerologyCard>
            <S.CardNum>{t('woman.c3num')}</S.CardNum>
            <S.CardLabel>{t('woman.c3label')}</S.CardLabel>
          </S.NumerologyCard>
          <S.NumerologyCard>
            <S.CardNum>{t('woman.c4num')}</S.CardNum>
            <S.CardLabel>{t('woman.c4label')}</S.CardLabel>
          </S.NumerologyCard>
        </S.Cards>
      </S.Inner>
    </S.WomanRoot>
  );
}
