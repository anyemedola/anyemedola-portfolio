'use client';

import { GlobalStyles } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import LangToggle from '@/components/ui/langtoggle/LangToggle';
import * as S from './styles';

interface Job {
  period: string; periodEnd: string; role: string; company: string; desc: string;
}
interface LangItem { name: string; level: string; pct: number; }
interface EduItem { degree?: string; school?: string; }
interface BeyondItem { icon: string; title: string; body: string; }
interface ProjectItem { title: string; desc: string; link: string; }
interface D {
  tagline: string; role: string; quote: string; phone: string; location: string; downloadBtn: string;
  about: { heading: string; body_before: string; body_em: string; body_after: string; };
  experience: { heading: string; jobs: Job[]; };
  projects: { heading: string; items: ProjectItem[]; };
  toolkit: { heading: string; items: string[]; };
  languages: { heading: string; items: LangItem[]; };
  education: { heading: string; items: EduItem[]; };
  certifications: { heading: string; items: string[]; };
  beyond: { heading: string; subtitle: string; items: BeyondItem[]; };
  footer: { tagline: string; meta: string; };
}

const contactItems = (d: D) => [
  { icon: '✉', text: 'contact@anyemedola.com' },
  { icon: '☎', text: d.phone },
  { icon: '⌖', text: d.location },
  { icon: '', text: 'in/dev-anyemedola' },
  { icon: '', text: 'github.com/anyemedola' },
  { icon: '', text: 'anyemedola.com.br' },
];

export default function CreativeResume() {
  const { i18n } = useTranslation();
  const d: D = ((i18n.getResourceBundle(i18n.language, 'translations') ??
                 i18n.getResourceBundle('en', 'translations'))?.resumeCreative) as D;

  if (!d) return null;

  return (
    <>
      <GlobalStyles styles={S.printPageStyles} />

      <LemonCursor />

      <S.TopBar>
        <S.BackLink href="/">← Portfolio</S.BackLink>
        <S.TopBarActions>
          <LangToggle />
          <S.AtsLink href="/resume/ats">ATS</S.AtsLink>
          <S.DownloadButton onClick={() => window.print()}>
            {d.downloadBtn}
          </S.DownloadButton>
        </S.TopBarActions>
      </S.TopBar>

      <S.PageBg>
        <S.DocWrap>

          {/* HERO */}
          <S.Header>
            <S.HeroGlow />
            <S.HeroInner>
              <S.HeroTextCol>
                <S.Tagline>
                  <S.TaglineDash />
                  {d.tagline}
                </S.Tagline>
                <S.Name>Any<br />Medola</S.Name>
                <S.RoleLine>{d.role}</S.RoleLine>
                <S.QuoteLine>{d.quote}</S.QuoteLine>
              </S.HeroTextCol>
              <S.HeroPhotoCol>
                <S.PhotoWrap>
                  <S.PhotoImg
                    src="/resume-photo.png"
                    alt="Any Medola in Ragusa Ibla, Sicily"
                  />
                </S.PhotoWrap>
              </S.HeroPhotoCol>
            </S.HeroInner>
          </S.Header>

          {/* CONTACT BAR */}
          <S.ContactBar>
            {contactItems(d).map((item) => (
              <S.ContactChip key={item.text}>
                {item.icon && <S.ContactIcon>{item.icon}</S.ContactIcon>}
                {item.text}
              </S.ContactChip>
            ))}
          </S.ContactBar>

          {/* BODY */}
          <S.Body>

            {/* ABOUT */}
            <S.Section>
              <S.SectionHeading>{d.about.heading}</S.SectionHeading>
              <S.AboutText>
                {d.about.body_before}
                <S.AboutEm>{d.about.body_em}</S.AboutEm>
                {d.about.body_after}
              </S.AboutText>
            </S.Section>

            {/* EXPERIENCE */}
            <S.Section>
              <S.SectionHeading>{d.experience.heading}</S.SectionHeading>
              {d.experience.jobs.map((job, idx) => (
                <S.JobItem key={idx} $last={idx === d.experience.jobs.length - 1}>
                  <S.JobPeriod>
                    {job.period}<br />
                    <S.JobPeriodEnd>— {job.periodEnd}</S.JobPeriodEnd>
                  </S.JobPeriod>
                  <div>
                    <S.JobRole>{job.role}</S.JobRole>
                    <S.JobCompany>{job.company}</S.JobCompany>
                    <S.JobDesc>{job.desc}</S.JobDesc>
                  </div>
                </S.JobItem>
              ))}
            </S.Section>

            {/* PROJECTS */}
            <S.Section>
              <S.SectionHeading>{d.projects.heading}</S.SectionHeading>
              <S.ProjectsGrid>
                {d.projects.items.map((item) => (
                  <S.ProjectCard key={item.title}>
                    <S.ProjectTitle>{item.title}</S.ProjectTitle>
                    <S.ProjectDesc>{item.desc}</S.ProjectDesc>
                    <S.ProjectLink>{item.link}</S.ProjectLink>
                  </S.ProjectCard>
                ))}
              </S.ProjectsGrid>
            </S.Section>

            {/* TOOLKIT */}
            <S.Section>
              <S.SectionHeading>{d.toolkit.heading}</S.SectionHeading>
              <S.TagRow>
                {d.toolkit.items.map((item) => (
                  <S.ToolkitTag key={item}>{item}</S.ToolkitTag>
                ))}
              </S.TagRow>
            </S.Section>

            {/* LANGUAGES + EDUCATION */}
            <S.LangsEduRow>
              <div>
                <S.SectionHeading>{d.languages.heading}</S.SectionHeading>
                <S.LangList>
                  {d.languages.items.map((lang) => (
                    <S.LangRow key={lang.name}>
                      <S.LangName>{lang.name}</S.LangName>
                      <S.LangBarTrack>
                        <S.LangBarFill $pct={lang.pct} />
                      </S.LangBarTrack>
                      <S.LangLevel>{lang.level}</S.LangLevel>
                    </S.LangRow>
                  ))}
                </S.LangList>
              </div>
              <div>
                <S.SectionHeading>{d.education.heading}</S.SectionHeading>
                <S.EduList>
                  {d.education.items.map((edu, idx) => (
                    <div key={idx}>
                      <S.EduDegree>{edu.degree}</S.EduDegree>
                      <S.EduSchool>{edu.school}</S.EduSchool>
                    </div>
                  ))}
                </S.EduList>
              </div>
            </S.LangsEduRow>

            {/* CERTIFICATIONS */}
            <S.Section>
              <S.SectionHeading>{d.certifications.heading}</S.SectionHeading>
              <S.TagRow>
                {d.certifications.items.map((item) => (
                  <S.CertTag key={item}>{item}</S.CertTag>
                ))}
              </S.TagRow>
            </S.Section>

            {/* BEYOND */}
            <S.SectionSmallGap>
              <S.SectionHeading>{d.beyond.heading}</S.SectionHeading>
              <S.BeyondSubtitle>{d.beyond.subtitle}</S.BeyondSubtitle>
              <S.BeyondGrid>
                {d.beyond.items.map((item) => (
                  <S.BeyondCard key={item.title}>
                    <S.BeyondIcon>{item.icon}</S.BeyondIcon>
                    <div>
                      <S.BeyondTitle>{item.title}</S.BeyondTitle>
                      <S.BeyondBody>{item.body}</S.BeyondBody>
                    </div>
                  </S.BeyondCard>
                ))}
              </S.BeyondGrid>
            </S.SectionSmallGap>
          </S.Body>

          {/* FOOTER */}
          <S.Footer>
            <S.FooterTagline>{d.footer.tagline}</S.FooterTagline>
            <S.FooterMeta>{d.footer.meta}</S.FooterMeta>
          </S.Footer>
        </S.DocWrap>
      </S.PageBg>
    </>
  );
}
