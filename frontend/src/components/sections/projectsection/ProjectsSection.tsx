'use client';

import { useState, useEffect } from 'react';
import T from '@/components/ui/t/T';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

interface ApiProject {
  id: number; title: string; type: string;
  order: number; descEn: string; descPt: string;
  url: string; github: string;
  published: boolean; featured: boolean;
  stack: string[]; accentColor: string;
}

type ProjectItem = {
  num: string; accent: string;
  type: { en: string; pt: string };
  name: string; id: string;
  desc: { en: string; pt: string };
  stack: string[];
  links: { label: string | { en: string; pt: string }; icon: string; href: string; disabled: boolean }[];
  flip: boolean;
};

const staticProjects: ProjectItem[] = [
  {
    num: '01', accent: '#4DB89E',
    type: { en: 'Freelance · Web App', pt: 'Freelance · Web App' },
    name: 'Project Name Here', id: 'proj1-title',
    desc: { en: 'Add your project description here — what it does, who it was built for, and what problem it solves.', pt: 'Adicione a descrição do seu projeto aqui — o que faz, para quem foi construído e qual problema resolve.' },
    stack: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    links: [{ label: { en: 'Live Project', pt: 'Ver Projeto' }, icon: '↗', href: '#', disabled: false }, { label: 'GitHub', icon: '⌥', href: '#', disabled: false }],
    flip: false,
  },
  {
    num: '02', accent: '#C43560',
    type: { en: 'Freelance · Mobile App', pt: 'Freelance · App Mobile' },
    name: 'Project Name Here', id: 'proj2-title',
    desc: { en: 'Add your project description here — what it does, who it was built for, and what problem it solves.', pt: 'Adicione a descrição do seu projeto aqui — o que faz, para quem foi construído e qual problema resolve.' },
    stack: ['Ionic', 'Angular', 'Firebase', 'TypeScript'],
    links: [{ label: { en: 'Live Project', pt: 'Ver Projeto' }, icon: '↗', href: '#', disabled: false }, { label: 'GitHub', icon: '⌥', href: '#', disabled: true }],
    flip: true,
  },
  {
    num: '03', accent: '#8B7355',
    type: { en: 'Personal · Open Source', pt: 'Pessoal · Open Source' },
    name: 'Project Name Here', id: 'proj3-title',
    desc: { en: 'Add your project description here — what it does, who it was built for, and what problem it solves.', pt: 'Adicione a descrição do seu projeto aqui — o que faz, para quem foi construído e qual problema resolve.' },
    stack: ['React', 'Node.js', 'REST API'],
    links: [{ label: { en: 'Live Project', pt: 'Ver Projeto' }, icon: '↗', href: '#', disabled: true }, { label: 'GitHub', icon: '⌥', href: '#', disabled: false }],
    flip: false,
  },
];

function apiToProject(p: ApiProject, idx: number): ProjectItem {
  return {
    num: String(idx + 1).padStart(2, '0'),
    accent: p.accentColor || '#4DB89E',
    type: { en: p.type, pt: p.type },
    name: p.title,
    id: `proj-api-${p.id}`,
    desc: { en: p.descEn, pt: p.descPt || p.descEn },
    stack: p.stack || [],
    links: [
      { label: { en: 'Live Project', pt: 'Ver Projeto' }, icon: '↗', href: p.url || '#', disabled: !p.url },
      { label: 'GitHub', icon: '⌥', href: p.github || '#', disabled: !p.github },
    ],
    flip: idx % 2 === 1,
  };
}

export default function ProjectsSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const [projects, setProjects] = useState<ProjectItem[]>(staticProjects);

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.ok ? r.json() : [])
      .then((data: ApiProject[]) => {
        if (data.length > 0) setProjects(data.map(apiToProject));
      })
      .catch(() => {});
  }, []);

  const count = String(projects.length).padStart(2, '0');

  return (
    <S.ProjectsRoot id="projects" aria-labelledby="projects-heading" ref={ref}>
      <S.Inner>
        <S.ProjectsHeader>
          <div>
            <S.SectionLabel className="reveal" aria-hidden="true">{t('projects.label')}</S.SectionLabel>
            <S.SectionTitle className="reveal" id="projects-heading">
              {t('projects.headingLine1')} &amp;<br /><em>freelance</em>
            </S.SectionTitle>
          </div>
          <S.Counter aria-hidden="true">{count}</S.Counter>
        </S.ProjectsHeader>

        {projects.map((p) => (
          <S.Showcase
            key={p.id}
            className="reveal showcase"
            flip={p.flip}
            accent={p.accent}
            aria-labelledby={p.id}
          >
            <S.Visual className="showcase-visual">
              <S.Placeholder role="img" aria-label="Project screenshot placeholder">
                <S.PlaceholderText>Your Screenshot<br /><span style={{ fontSize: 10, opacity: 0.6 }}>Replace with image</span></S.PlaceholderText>
              </S.Placeholder>
              <S.ShowcaseNum aria-hidden="true">{p.num}</S.ShowcaseNum>
            </S.Visual>
            <S.Info>
              <div>
                <S.ProjectType><T en={p.type.en} pt={p.type.pt} /></S.ProjectType>
                <S.ProjectName id={p.id}>{p.name}</S.ProjectName>
                <S.ProjectDesc><T en={p.desc.en} pt={p.desc.pt} /></S.ProjectDesc>
                <S.Stack role="list" aria-label="Technologies used">
                  {p.stack.map((tag) => (
                    <S.StackTag key={tag} className="project-stack-tag">{tag}</S.StackTag>
                  ))}
                </S.Stack>
              </div>
              <S.Links>
                {p.links.map((link, i) => (
                  <S.ProjectLink key={i} href={link.href} disabled={link.disabled} aria-disabled={link.disabled}>
                    <span aria-hidden="true">{link.icon}</span>
                    {typeof link.label === 'string'
                      ? link.label
                      : <T en={link.label.en} pt={link.label.pt} />
                    }
                  </S.ProjectLink>
                ))}
              </S.Links>
            </S.Info>
          </S.Showcase>
        ))}
      </S.Inner>
    </S.ProjectsRoot>
  );
}
