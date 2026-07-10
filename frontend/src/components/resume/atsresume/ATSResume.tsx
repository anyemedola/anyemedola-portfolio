'use client';

import { GlobalStyles } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import LangToggle from '@/components/ui/langtoggle/LangToggle';
import * as S from './styles';

interface Job { role: string; period: string; bullets: string[]; }
interface EduItem { degree?: string; school?: string; }
interface D {
  role: string; phone: string; location: string; downloadBtn: string;
  summary: { heading: string; body: string; };
  experience: { heading: string; jobs: Job[]; };
  skills: {
    heading: string;
    frontend: string; backend: string; crm: string; ui: string; quality: string; versioning: string;
    frontendLabel: string; backendLabel: string; crmLabel: string; uiLabel: string; qualityLabel: string; versioningLabel: string;
  };
  education: { heading: string; items: EduItem[]; certsLabel: string; certsList: string; };
  languages: { heading: string; items: string[]; };
}

export default function ATSResume() {
  const { i18n } = useTranslation();
  const d: D = ((i18n.getResourceBundle(i18n.language, 'translations') ??
                 i18n.getResourceBundle('en', 'translations'))?.resumeATS) as D;

  if (!d) return null;

  return (
    <>
      <GlobalStyles styles={S.printPageStyles} />

      <LemonCursor />

      <S.TopBar>
        <S.BackLink href="/">← Portfolio</S.BackLink>
        <S.TopBarActions>
          <LangToggle />
          <S.CreativeLink href="/resume/creative">Creative version</S.CreativeLink>
          <S.DownloadButton onClick={() => window.print()}>
            {d.downloadBtn}
          </S.DownloadButton>
        </S.TopBarActions>
      </S.TopBar>

      <S.PageBg>
        <S.DocWrap>

          {/* HEADER */}
          <S.Header>
            <S.Name>Any Elis Mendonça Medola</S.Name>
            <S.RoleLine>{d.role}</S.RoleLine>
            <S.ContactRow>
              <span>contact@anyemedola.com</span>
              <span>{d.phone}</span>
              <span>{d.location}</span>
              <span>linkedin.com/in/dev-anyemedola</span>
              <span>github.com/anyemedola</span>
              <span>anyemedola.com.br</span>
            </S.ContactRow>
          </S.Header>

          {/* SUMMARY */}
          <S.Block>
            <S.SectionHeading>{d.summary.heading}</S.SectionHeading>
            <S.SummaryText>{d.summary.body}</S.SummaryText>
          </S.Block>

          {/* EXPERIENCE */}
          <S.ExperienceSection>
            <S.SectionHeading>{d.experience.heading}</S.SectionHeading>
            {d.experience.jobs.map((job, idx) => (
              <S.JobItem key={idx} $last={idx === d.experience.jobs.length - 1}>
                <S.JobHeaderRow>
                  <S.JobRole>{job.role}</S.JobRole>
                  <S.JobPeriod>{job.period}</S.JobPeriod>
                </S.JobHeaderRow>
                <S.JobBullets>
                  {job.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </S.JobBullets>
              </S.JobItem>
            ))}
          </S.ExperienceSection>

          {/* SKILLS */}
          <S.Block>
            <S.SectionHeading>{d.skills.heading}</S.SectionHeading>
            <S.SkillsBody>
              <S.SkillLine><S.SkillLabel>{d.skills.frontendLabel}:</S.SkillLabel> {d.skills.frontend}</S.SkillLine>
              <S.SkillLine><S.SkillLabel>{d.skills.backendLabel}:</S.SkillLabel> {d.skills.backend}</S.SkillLine>
              <S.SkillLine><S.SkillLabel>{d.skills.crmLabel}:</S.SkillLabel> {d.skills.crm}</S.SkillLine>
              <S.SkillLine><S.SkillLabel>{d.skills.uiLabel}:</S.SkillLabel> {d.skills.ui}</S.SkillLine>
              <S.SkillLine><S.SkillLabel>{d.skills.qualityLabel}:</S.SkillLabel> {d.skills.quality}</S.SkillLine>
              <S.SkillLine><S.SkillLabel>{d.skills.versioningLabel}:</S.SkillLabel> {d.skills.versioning}</S.SkillLine>
            </S.SkillsBody>
          </S.Block>

          {/* EDUCATION + LANGUAGES */}
          <S.EduLangsGrid>
            <div>
              <S.SectionHeading>{d.education.heading}</S.SectionHeading>
              <S.ColBody>
                {d.education.items.map((edu, idx) => (
                  <S.EduItemP key={idx}>
                    <S.SkillLabel>{edu.degree}</S.SkillLabel><br />
                    {edu.school}
                  </S.EduItemP>
                ))}
                <S.CertsP>
                  <S.SkillLabel>{d.education.certsLabel}:</S.SkillLabel> {d.education.certsList}
                </S.CertsP>
              </S.ColBody>
            </div>
            <div>
              <S.SectionHeading>{d.languages.heading}</S.SectionHeading>
              <S.LangColBody>
                {d.languages.items.map((lang) => (
                  <S.LangLine key={lang}>{lang}</S.LangLine>
                ))}
              </S.LangColBody>
            </div>
          </S.EduLangsGrid>

        </S.DocWrap>
      </S.PageBg>
    </>
  );
}
