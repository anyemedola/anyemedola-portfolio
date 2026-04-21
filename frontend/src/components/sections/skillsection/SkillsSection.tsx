'use client';

import { useTranslation } from 'react-i18next';
import { Translator } from '@/components/translator-i18n';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

const skillCards = [
  { icon: '⚛️', title: 'Front-End & Frameworks', tags: ['React.js', 'Next.js', 'TypeScript', 'Ionic', 'Angular'] },
  { icon: '🎨', title: 'Styling & UI Systems', tags: ['Tailwind CSS', 'MUI', 'Styled Components', 'Kendo UI', 'shadcn/ui'] },
  { icon: '🔄', title: 'State & Data', tags: ['Redux', 'React Query', 'REST APIs', 'Context API'] },
  { icon: '✏️', title: 'UX & Design', tags: ['Figma', 'Design Systems', 'Prototyping', 'Accessibility'] },
  { icon: '🧪', title: 'Testing & Quality', tags: ['Jest', 'ESLint', 'Unit Testing', 'Integration Tests'] },
  { icon: '🚀', title: 'DevOps & Collab', tags: ['GitLab', 'Azure Repos', 'Agile/Scrum', 'Jira', 'CI/CD'] },
];

const delays = ['', ' reveal-delay-1', ' reveal-delay-2', '', ' reveal-delay-1', ' reveal-delay-2'];

export default function SkillsSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.SkillsRoot id="skills" aria-labelledby="skills-heading" ref={ref}>
      <S.Inner>
        <S.SkillsHeader className="reveal">
          <S.SkillsTitle id="skills-heading">
            <Translator path="skills.title" html />
          </S.SkillsTitle>
          <S.SkillsSubtitle>{t('skills.subtitle')}</S.SkillsSubtitle>
        </S.SkillsHeader>
        <S.Grid role="list">
          {skillCards.map((card, i) => (
            <S.Card key={card.title} className={`reveal${delays[i]}`}>
              <S.CardIcon aria-hidden="true">{card.icon}</S.CardIcon>
              <S.CardTitle>{card.title}</S.CardTitle>
              <S.TagList role="list" aria-label={card.title}>
                {card.tags.map((tag) => (
                  <S.Tag key={tag} className="skill-tag">{tag}</S.Tag>
                ))}
              </S.TagList>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.SkillsRoot>
  );
}
