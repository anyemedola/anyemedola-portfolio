'use client';

import T from '@/components/ui/t/T';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

const experiences = [
  {
    role: { en: 'Senior Front-End Developer', pt: 'Desenvolvedora Front-End Sênior', it: 'Sviluppatrice Front-End Senior' },
    company: 'Capgemini · Milan, Italy (Remote)',
    period: { en: 'Aug 2023 – Present', pt: 'Ago 2023 – Presente', it: 'Ago 2023 – Presente' },
    datetime: '2023-08',
    bullets: [
      { en: 'Led Front-End development of a large-scale streaming platform for the Portuguese Ministry of Health.', pt: 'Liderei o desenvolvimento Front-End de uma plataforma de streaming para o Ministério da Saúde de Portugal.', it: 'Ho guidato lo sviluppo Front-End di una piattaforma di streaming su larga scala per il Ministero della Salute portoghese.' },
      { en: 'Built scalable web apps with React, Next.js, TypeScript and MUI design systems.', pt: 'Desenvolvi aplicações escaláveis com React, Next.js, TypeScript e sistemas de design MUI.', it: 'Ho sviluppato applicazioni web scalabili con React, Next.js, TypeScript e sistemi di design MUI.' },
      { en: 'Acted as UI/UX designer, creating Figma prototypes from project inception.', pt: 'Atuei como designer UI/UX, criando protótipos no Figma desde o início do projeto.', it: 'Ho operato come designer UI/UX, creando prototipi Figma dall\'inizio del progetto.' },
      { en: 'Implemented unit tests, ESLint enforcement, and CI/CD via GitLab.', pt: 'Implementei testes unitários, ESLint e fluxos CI/CD via GitLab.', it: 'Ho implementato test unitari, ESLint e flussi CI/CD tramite GitLab.' },
    ],
  },
  {
    role: { en: 'Front-End Developer', pt: 'Desenvolvedora Front-End', it: 'Sviluppatrice Front-End' },
    company: 'Ambisig · São Paulo, Brazil (Remote)',
    period: { en: 'Sep 2022 – Aug 2023', pt: 'Set 2022 – Ago 2023', it: 'Set 2022 – Ago 2023' },
    datetime: '2022-09',
    bullets: [
      { en: 'Developed complex front-end apps using React.js, Next.js, and TypeScript for government-scale systems.', pt: 'Desenvolvi aplicações complexas com React.js, Next.js e TypeScript para sistemas governamentais.', it: 'Ho sviluppato applicazioni front-end complesse con React.js, Next.js e TypeScript per sistemi governativi.' },
      { en: 'Worked on traffic management and environmental monitoring platforms.', pt: 'Trabalhei em plataformas de gestão de tráfego e monitoramento ambiental.', it: 'Ho lavorato su piattaforme di gestione del traffico e monitoraggio ambientale.' },
    ],
  },
  {
    role: { en: 'Front-End Developer', pt: 'Desenvolvedora Front-End', it: 'Sviluppatrice Front-End' },
    company: 'S2 Pets · São Paulo, Brazil (Remote)',
    period: { en: 'Feb 2022 – Sep 2022', pt: 'Fev 2022 – Set 2022', it: 'Feb 2022 – Set 2022' },
    datetime: '2022-02',
    bullets: [
      { en: 'Built mobile and web features using Ionic, Angular v6, TypeScript, and Firebase.', pt: 'Desenvolvi features mobile e web com Ionic, Angular v6, TypeScript e Firebase.', it: 'Ho sviluppato funzionalità mobile e web con Ionic, Angular v6, TypeScript e Firebase.' },
      { en: 'Developed geolocation-based lost & found feature and BMI calculator for the MEUPET app.', pt: 'Criei feature de achados e perdidos com geolocalização e calculadora de IMC para o MEUPET.', it: 'Ho creato una funzionalità di oggetti smarriti con geolocalizzazione e un calcolatore BMI per l\'app MEUPET.' },
    ],
  },
  {
    role: { en: 'Web Developer · Early Career', pt: 'Desenvolvedora Web · Início de Carreira', it: 'Sviluppatrice Web · Inizio Carriera' },
    company: { en: 'Various Projects', pt: 'Projetos Variados', it: 'Progetti Vari' },
    period: { en: '2018 – 2022', pt: '2018 – 2022', it: '2018 – 2022' },
    datetime: '2018',
    bullets: [
      { en: 'Built web and mobile projects using PHP, JavaScript, HTML, CSS, Ionic, and Angular.', pt: 'Desenvolvi projetos web e mobile com PHP, JavaScript, HTML, CSS, Ionic e Angular.', it: 'Ho sviluppato progetti web e mobile con PHP, JavaScript, HTML, CSS, Ionic e Angular.' },
    ],
  },
];

export default function ExperienceSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.ExpRoot id="experience" aria-labelledby="exp-heading" ref={ref}>
      <S.ExpHeader>
        <div>
          <S.SectionLabel className="reveal" aria-hidden="true">{t('experience.label')}</S.SectionLabel>
          <S.SectionTitle className="reveal" id="exp-heading">
            {t('experience.headingLine1')}<br /><em>{t('experience.headingEm')}</em>
          </S.SectionTitle>
        </div>
        <S.ExpIntro className="reveal">{t('experience.intro')}</S.ExpIntro>
      </S.ExpHeader>
      <S.Timeline aria-label="Work experience timeline">
        {experiences.map((exp, i) => (
          <S.TimelineItem key={i} className="reveal">
            <S.Dot className="timeline-dot" aria-hidden="true" />
            <div>
              <S.Role><T en={exp.role.en} pt={exp.role.pt} it={exp.role.it} /></S.Role>
              <S.Company>
                {typeof exp.company === 'string'
                  ? exp.company
                  : <T en={exp.company.en} pt={exp.company.pt} it={exp.company.it} />
                }
              </S.Company>
              <S.Period>
                <time dateTime={exp.datetime}>
                  <T en={exp.period.en} pt={exp.period.pt} it={exp.period.it} />
                </time>
              </S.Period>
              <S.Bullets>
                {exp.bullets.map((b, j) => (
                  <li key={j}><T en={b.en} pt={b.pt} it={b.it} /></li>
                ))}
              </S.Bullets>
            </div>
          </S.TimelineItem>
        ))}
      </S.Timeline>
    </S.ExpRoot>
  );
}
