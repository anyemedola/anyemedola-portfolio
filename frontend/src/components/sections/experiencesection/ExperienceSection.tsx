'use client';

import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import T from '@/components/ui/t/T';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ExpRoot = styled('section')({
  padding: '100px 56px',
  maxWidth: 1200,
  margin: '0 auto',
  '@media (max-width: 900px)': {
    padding: '72px 24px',
  },
});

const ExpHeader = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 80,
  alignItems: 'end',
  marginBottom: 72,
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    gap: 24,
  },
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

const ExpIntro = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 19,
  fontWeight: 300,
  lineHeight: 1.7,
  color: '#4A4540',
  maxWidth: 440,
});

const Timeline = styled('ol')({
  position: 'relative',
  listStyle: 'none',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 16,
    width: 1,
    height: '100%',
    background: tokens.border,
    pointerEvents: 'none',
  },
});

const TimelineItem = styled('li')({
  display: 'grid',
  gridTemplateColumns: '40px 1fr',
  gap: 32,
  marginBottom: 56,
  '&:hover .timeline-dot': {
    background: tokens.pink,
    transform: 'scale(1.3)',
  },
});

const Dot = styled('div')({
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: tokens.cream,
  border: `2px solid ${tokens.pink}`,
  marginTop: 8,
  position: 'relative',
  zIndex: 1,
  flexShrink: 0,
  transition: 'background 0.3s, transform 0.3s',
});

const Role = styled('h3')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 28,
  letterSpacing: '0.04em',
  color: tokens.ink,
  lineHeight: 1,
  marginBottom: 4,
});

const Company = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: tokens.pink,
  marginBottom: 4,
});

const Period = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  color: tokens.warmGray,
  letterSpacing: '0.08em',
  marginBottom: 20,
});

const Bullets = styled('ul')({
  listStyle: 'none',
  '& li': {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 17,
    fontWeight: 300,
    lineHeight: 1.6,
    color: '#4A4540',
    padding: '6px 0 6px 20px',
    position: 'relative',
    '&::before': {
      content: "'→'",
      position: 'absolute',
      left: 0,
      color: tokens.mint,
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 13,
      top: 8,
    },
  },
});

const experiences = [
  {
    role: { en: 'Senior Front-End Developer', pt: 'Desenvolvedora Front-End Sênior' },
    company: 'Capgemini · Milan, Italy (Remote)',
    period: { en: 'Aug 2023 – Present', pt: 'Ago 2023 – Presente' },
    datetime: '2023-08',
    bullets: [
      { en: 'Led Front-End development of a large-scale streaming platform for the Portuguese Ministry of Health.', pt: 'Liderei o desenvolvimento Front-End de uma plataforma de streaming para o Ministério da Saúde de Portugal.' },
      { en: 'Built scalable web apps with React, Next.js, TypeScript and MUI design systems.', pt: 'Desenvolvi aplicações escaláveis com React, Next.js, TypeScript e sistemas de design MUI.' },
      { en: 'Acted as UI/UX designer, creating Figma prototypes from project inception.', pt: 'Atuei como designer UI/UX, criando protótipos no Figma desde o início do projeto.' },
      { en: 'Implemented unit tests, ESLint enforcement, and CI/CD via GitLab.', pt: 'Implementei testes unitários, ESLint e fluxos CI/CD via GitLab.' },
    ],
  },
  {
    role: { en: 'Front-End Developer', pt: 'Desenvolvedora Front-End' },
    company: 'Ambisig · São Paulo, Brazil (Remote)',
    period: { en: 'Sep 2022 – Aug 2023', pt: 'Set 2022 – Ago 2023' },
    datetime: '2022-09',
    bullets: [
      { en: 'Developed complex front-end apps using React.js, Next.js, and TypeScript for government-scale systems.', pt: 'Desenvolvi aplicações complexas com React.js, Next.js e TypeScript para sistemas governamentais.' },
      { en: 'Worked on traffic management and environmental monitoring platforms.', pt: 'Trabalhei em plataformas de gestão de tráfego e monitoramento ambiental.' },
    ],
  },
  {
    role: { en: 'Front-End Developer', pt: 'Desenvolvedora Front-End' },
    company: 'S2 Pets · São Paulo, Brazil (Remote)',
    period: { en: 'Feb 2022 – Sep 2022', pt: 'Fev 2022 – Set 2022' },
    datetime: '2022-02',
    bullets: [
      { en: 'Built mobile and web features using Ionic, Angular v6, TypeScript, and Firebase.', pt: 'Desenvolvi features mobile e web com Ionic, Angular v6, TypeScript e Firebase.' },
      { en: 'Developed geolocation-based lost & found feature and BMI calculator for the MEUPET app.', pt: 'Criei feature de achados e perdidos com geolocalização e calculadora de IMC para o MEUPET.' },
    ],
  },
  {
    role: { en: 'Web Developer · Early Career', pt: 'Desenvolvedora Web · Início de Carreira' },
    company: { en: 'Various Projects', pt: 'Projetos Variados' },
    period: { en: '2018 – 2022', pt: '2018 – 2022' },
    datetime: '2018',
    bullets: [
      { en: 'Built web and mobile projects using PHP, JavaScript, HTML, CSS, Ionic, and Angular.', pt: 'Desenvolvi projetos web e mobile com PHP, JavaScript, HTML, CSS, Ionic e Angular.' },
    ],
  },
];

export default function ExperienceSection() {
  const ref = useScrollReveal();
  const { dict } = useLang();

  return (
    <ExpRoot id="experience" aria-labelledby="exp-heading" ref={ref}>
      <ExpHeader>
        <div>
          <SectionLabel className="reveal" aria-hidden="true">{dict.experience.label}</SectionLabel>
          <SectionTitle className="reveal" id="exp-heading">
            {dict.experience.headingLine1}<br /><em>{dict.experience.headingEm}</em>
          </SectionTitle>
        </div>
        <ExpIntro className="reveal">{dict.experience.intro}</ExpIntro>
      </ExpHeader>
      <Timeline aria-label="Work experience timeline">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} className="reveal">
            <Dot className="timeline-dot" aria-hidden="true" />
            <div>
              <Role><T en={exp.role.en} pt={exp.role.pt} /></Role>
              <Company>
                {typeof exp.company === 'string'
                  ? exp.company
                  : <T en={exp.company.en} pt={exp.company.pt} />
                }
              </Company>
              <Period>
                <time dateTime={exp.datetime}>
                  <T en={exp.period.en} pt={exp.period.pt} />
                </time>
              </Period>
              <Bullets>
                {exp.bullets.map((b, j) => (
                  <li key={j}><T en={b.en} pt={b.pt} /></li>
                ))}
              </Bullets>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </ExpRoot>
  );
}
