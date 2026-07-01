'use client';

import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

const contentCards: { key: string; icon: string; iconColor: string; href?: string }[] = [
  { key: 'c1', icon: '◑', iconColor: '#B5546A' },
  { key: 'c2', icon: '✈', iconColor: '#DDA94A', href: 'https://instagram.com/anyemedola' },
  { key: 'c3', icon: '❧', iconColor: '#E79CA8' },
  { key: 'c4', icon: '☼', iconColor: '#C28A2C', href: 'https://instagram.com/anyinsicily' },
];

const traitCards = ['t1', 't2', 't3'] as const;

export default function CriacaoSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.CriacaoRoot id="criacao" aria-labelledby="criacao-heading" ref={ref}>
      <S.Inner>
        <S.Eyebrow className="reveal">{t('create.eyebrow')}</S.Eyebrow>
        <S.Title className="reveal" id="criacao-heading">{t('create.title')}</S.Title>
        <S.Lead className="reveal">{t('create.lead')}</S.Lead>

        <S.TopGrid className="reveal">
          <S.FigmaMock aria-hidden="true">
            <S.MockWindow>
              <S.MockBar>
                <S.MockDot color="#E79CA8" />
                <S.MockDot color="#DDA94A" />
                <S.MockDot color="#B5546A" />
              </S.MockBar>
              <S.MockContent>
                <S.MockSidebar>
                  <S.MockLine h={10} w="100%" bg="#E79CA8" />
                  <S.MockLine h={10} w="100%" bg="#EFD9C0" />
                  <S.MockLine h={10} w="100%" bg="#EFD9C0" />
                  <S.MockLine h={10} w="100%" bg="#EFD9C0" />
                </S.MockSidebar>
                <S.MockMain>
                  <S.MockHero />
                  <S.MockRow>
                    <S.MockBlock h={42} />
                    <S.MockBlock h={42} />
                  </S.MockRow>
                  <S.MockLine h={14} w="70%" bg="#EFD9C0" />
                  <S.MockBtn />
                </S.MockMain>
              </S.MockContent>
            </S.MockWindow>
            <S.MockLabel>{t('create.mocklabel')}</S.MockLabel>
          </S.FigmaMock>

          <S.TraitList>
            {traitCards.map((key) => (
              <S.TraitCard key={key}>
                <S.TraitTitle>{t(`create.${key}title`)}</S.TraitTitle>
                <S.TraitDesc>{t(`create.${key}desc`)}</S.TraitDesc>
              </S.TraitCard>
            ))}
          </S.TraitList>
        </S.TopGrid>

        <S.CreateH className="reveal">{t('create.createH')}</S.CreateH>
        <S.ContentGrid className="reveal">
          {contentCards.map(({ key, icon, iconColor, href }) => (
            href ? (
              <S.ContentCardLink key={key} href={href} target="_blank" rel="noopener noreferrer">
                <S.ContentIcon color={iconColor}>{icon}</S.ContentIcon>
                <S.ContentTitle>{t(`create.${key}title`)}</S.ContentTitle>
                <S.ContentDesc>{t(`create.${key}desc`)}</S.ContentDesc>
              </S.ContentCardLink>
            ) : (
              <S.ContentCard key={key}>
                <S.ContentIcon color={iconColor}>{icon}</S.ContentIcon>
                <S.ContentTitle>{t(`create.${key}title`)}</S.ContentTitle>
                <S.ContentDesc>{t(`create.${key}desc`)}</S.ContentDesc>
              </S.ContentCard>
            )
          ))}
        </S.ContentGrid>
      </S.Inner>
    </S.CriacaoRoot>
  );
}
