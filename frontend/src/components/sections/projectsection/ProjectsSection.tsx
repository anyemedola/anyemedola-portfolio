'use client';

import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

const p2Tags = ['React / Next.js', 'Redux', 'Ionic'];
const p3Tags = ['Ionic', 'Angular', 'Firebase'];

export default function ProjectsSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.ProjectsRoot id="projetos" aria-labelledby="projects-heading" ref={ref}>
      <S.Inner>
        <S.HeaderRow className="reveal">
          <S.HeaderLeft>
            <S.Eyebrow>{t('projects.eyebrow')}</S.Eyebrow>
            <S.Title id="projects-heading">{t('projects.title')}</S.Title>
          </S.HeaderLeft>
          <S.RequestLink href="#contato">{t('projects.request')}</S.RequestLink>
        </S.HeaderRow>

        <S.Grid>
          <S.FeaturedCard className="reveal" aria-labelledby="p1-title">
            <S.FeaturedBody>
              <S.FeaturedLabel>{t('projects.p1.tag')}</S.FeaturedLabel>
              <S.FeaturedTitle id="p1-title">{t('projects.p1.title')}</S.FeaturedTitle>
              <S.FeaturedDesc>{t('projects.p1.desc')}</S.FeaturedDesc>
              <S.TagsRow>
                {['React', 'Next.js', 'TypeScript', 'WebRTC', 'Figma'].map(tag => (
                  <S.TagDark key={tag}>{tag}</S.TagDark>
                ))}
              </S.TagsRow>
            </S.FeaturedBody>
            <S.FeaturedVisual aria-hidden="true">LIVE</S.FeaturedVisual>
          </S.FeaturedCard>

          <S.Card className="reveal" aria-labelledby="p2-title">
            <S.CardLabel>{t('projects.p2.tag')}</S.CardLabel>
            <S.CardTitle id="p2-title">{t('projects.p2.title')}</S.CardTitle>
            <S.CardDesc>{t('projects.p2.desc')}</S.CardDesc>
            <S.TagsRow>
              {p2Tags.map(tag => <S.TagLight key={tag}>{tag}</S.TagLight>)}
            </S.TagsRow>
          </S.Card>

          <S.Card className="reveal" aria-labelledby="p3-title">
            <S.CardLabel>{t('projects.p3.tag')}</S.CardLabel>
            <S.CardTitle id="p3-title">{t('projects.p3.title')}</S.CardTitle>
            <S.CardDesc>{t('projects.p3.desc')}</S.CardDesc>
            <S.TagsRow>
              {p3Tags.map(tag => <S.TagLight key={tag}>{tag}</S.TagLight>)}
            </S.TagsRow>
          </S.Card>
        </S.Grid>
      </S.Inner>
    </S.ProjectsRoot>
  );
}
