'use client';

import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

const stackGroups = [
  { key: 'frontend', tags: ['React', 'Next.js', 'TypeScript', 'Ionic'] },
  { key: 'styling', tags: ['Tailwind', 'MUI', 'Styled Components', 'shadcn/ui', 'Kendo UI'] },
  { key: 'state', tags: ['React Query', 'Redux', 'REST API'] },
  { key: 'quality', tags: ['Jest', 'ESLint', 'GitLab', 'Azure', 'Figma'] },
];

export default function SkillsSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.StacksRoot id="stacks" aria-labelledby="stacks-heading" ref={ref}>
      <S.Inner>
        <S.Eyebrow className="reveal">{t('stacks.eyebrow')}</S.Eyebrow>
        <S.Title className="reveal" id="stacks-heading">{t('stacks.title')}</S.Title>
        <S.Grid role="list">
          {stackGroups.map(({ key, tags }) => (
            <S.Card key={key} className="reveal" role="listitem">
              <S.CardGroup>{t(`stacks.${key}`)}</S.CardGroup>
              <S.TagList role="list">
                {tags.map((tag) => (
                  <S.Tag key={tag}>{tag}</S.Tag>
                ))}
              </S.TagList>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.StacksRoot>
  );
}
