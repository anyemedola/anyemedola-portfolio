'use client';

import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import T from '@/components/ui/t/T';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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
      { label: { en: tx.projects.liveProject.en, pt: tx.projects.liveProject.pt }, icon: '↗', href: p.url || '#', disabled: !p.url },
      { label: 'GitHub', icon: '⌥', href: p.github || '#', disabled: !p.github },
    ],
    flip: idx % 2 === 1,
  };
}

const ProjectsRoot = styled('section')({
  padding: '120px 0',
  background: tokens.cream,
  overflow: 'hidden',
});

const Inner = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 56px',
  '@media (max-width: 900px)': {
    padding: '0 24px',
  },
});

const ProjectsHeader = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: 72,
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const Counter = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 100,
  lineHeight: 1,
  color: 'rgba(26,20,16,0.06)',
  pointerEvents: 'none',
  alignSelf: 'flex-start',
});

const SectionLabel = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: tokens.pink,
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  '&::before': {
    content: "''",
    display: 'block',
    width: 32,
    height: 1.5,
    background: tokens.pink,
    flexShrink: 0,
  },
});

const SectionTitle = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(48px, 5vw, 72px)',
  lineHeight: 0.9,
  letterSpacing: '0.02em',
  color: tokens.ink,
  '& em': {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontWeight: 300,
    color: tokens.mint,
  },
});

const Showcase = styled('article')<{ flip?: boolean; accent?: string }>(({ flip, accent }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 2,
  background: tokens.border,
  border: `1px solid ${tokens.border}`,
  marginBottom: 2,
  direction: flip ? 'rtl' : 'ltr',
  '--project-accent': accent ?? tokens.mint,
  '& > *': { direction: 'ltr' },
  '&:hover .showcase-visual::after': { transform: 'scaleX(1)' },
  '&:hover .project-stack-tag': {
    borderColor: 'var(--project-accent)',
    color: 'var(--project-accent)',
  },
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    direction: 'ltr',
  },
} as React.CSSProperties));

const Visual = styled('div')({
  position: 'relative',
  aspectRatio: '4/3',
  overflow: 'hidden',
  background: tokens.ink,
  '&::after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: 'var(--project-accent)',
    zIndex: 2,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s ease',
    pointerEvents: 'none',
  },
  '@media (max-width: 900px)': {
    aspectRatio: '16/9',
  },
});

const Placeholder = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: tokens.ink,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: "''",
    position: 'absolute',
    inset: 0,
    background: `
      repeating-linear-gradient(45deg, rgba(110,207,184,0.04) 0px, rgba(110,207,184,0.04) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(-45deg, rgba(232,84,122,0.04) 0px, rgba(232,84,122,0.04) 1px, transparent 1px, transparent 40px)
    `,
    pointerEvents: 'none',
  },
});

const PlaceholderText = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 13,
  letterSpacing: '0.25em',
  color: 'rgba(249,245,238,0.25)',
  textTransform: 'uppercase',
  textAlign: 'center',
  zIndex: 1,
  lineHeight: 2,
});

const ShowcaseNum = styled('span')({
  position: 'absolute',
  top: 24,
  left: 24,
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 13,
  letterSpacing: '0.2em',
  color: 'rgba(249,245,238,0.4)',
  zIndex: 2,
});

const Info = styled('div')({
  background: tokens.cream,
  padding: '52px 48px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media (max-width: 900px)': {
    padding: '32px 24px',
  },
});

const ProjectType = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--project-accent)',
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  '&::before': {
    content: "''",
    display: 'block',
    width: 24,
    height: 1.5,
    background: 'var(--project-accent)',
    flexShrink: 0,
  },
});

const ProjectName = styled('h3')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(36px, 4vw, 58px)',
  lineHeight: 0.9,
  color: tokens.ink,
  letterSpacing: '0.02em',
  marginBottom: 24,
});

const ProjectDesc = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 18,
  fontWeight: 300,
  lineHeight: 1.7,
  color: '#4A4540',
  flex: 1,
  marginBottom: 32,
});

const Stack = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  marginBottom: 36,
  listStyle: 'none',
});

const StackTag = styled('li')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  color: tokens.ink,
  background: 'transparent',
  border: `1px solid ${tokens.border}`,
  padding: '5px 14px',
  borderRadius: 2,
  transition: 'all 0.2s',
});

const Links = styled('div')({
  display: 'flex',
  gap: 14,
  flexWrap: 'wrap',
});

const ProjectLink = styled('a')<{ disabled?: boolean }>(({ disabled }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '12px 24px',
  border: `1.5px solid ${tokens.ink}`,
  color: tokens.ink,
  cursor: disabled ? 'default' : 'none',
  transition: 'all 0.25s ease',
  minHeight: 44,
  opacity: disabled ? 0.35 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
  '&:hover': disabled ? {} : {
    background: tokens.ink,
    color: tokens.cream,
    transform: 'translateY(-2px)',
  },
}));

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

export default function ProjectsSection() {
  const ref = useScrollReveal();
  const { dict } = useLang();
  const [apiProjects, setApiProjects] = useState<ProjectItem[] | null>(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.ok ? r.json() : [])
      .then((data: ApiProject[]) => setApiProjects(data.length > 0 ? data.map(apiToProject) : []))
      .catch(() => setApiProjects([]));
  }, []);

  const projects = (apiProjects && apiProjects.length > 0) ? apiProjects : staticProjects;
  const count = String(projects.length).padStart(2, '0');

  return (
    <ProjectsRoot id="projects" aria-labelledby="projects-heading" ref={ref}>
      <Inner>
        <ProjectsHeader>
          <div>
            <SectionLabel className="reveal" aria-hidden="true">{dict.projects.label}</SectionLabel>
            <SectionTitle className="reveal" id="projects-heading">
              {dict.projects.headingLine1} &amp;<br /><em>freelance</em>
            </SectionTitle>
          </div>
          <Counter aria-hidden="true">{count}</Counter>
        </ProjectsHeader>

        {projects.map((p) => (
          <Showcase
            key={p.id}
            className="reveal showcase"
            flip={p.flip}
            accent={p.accent}
            aria-labelledby={p.id}
          >
            <Visual className="showcase-visual">
              <Placeholder role="img" aria-label="Project screenshot placeholder">
                <PlaceholderText>Your Screenshot<br /><span style={{ fontSize: 10, opacity: 0.6 }}>Replace with image</span></PlaceholderText>
              </Placeholder>
              <ShowcaseNum aria-hidden="true">{p.num}</ShowcaseNum>
            </Visual>
            <Info>
              <div>
                <ProjectType><T en={p.type.en} pt={p.type.pt} /></ProjectType>
                <ProjectName id={p.id}>{p.name}</ProjectName>
                <ProjectDesc><T en={p.desc.en} pt={p.desc.pt} /></ProjectDesc>
                <Stack role="list" aria-label="Technologies used">
                  {p.stack.map((tag) => (
                    <StackTag key={tag} className="project-stack-tag">{tag}</StackTag>
                  ))}
                </Stack>
              </div>
              <Links>
                {p.links.map((link, i) => (
                  <ProjectLink key={i} href={link.href} disabled={link.disabled} aria-disabled={link.disabled}>
                    <span aria-hidden="true">{link.icon}</span>
                    {typeof link.label === 'string'
                      ? link.label
                      : <T en={link.label.en} pt={link.label.pt} />
                    }
                  </ProjectLink>
                ))}
              </Links>
            </Info>
          </Showcase>
        ))}
      </Inner>
    </ProjectsRoot>
  );
}
