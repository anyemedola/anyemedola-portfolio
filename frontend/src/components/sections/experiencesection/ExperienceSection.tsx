'use client';

import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

const jobKeys = ['job4', 'job1', 'job2', 'job3', 'job5', 'job6', 'job7'] as const;

export default function ExperienceSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.WorkRoot id="trabalho" aria-labelledby="work-heading" ref={ref}>
      <S.Inner>
        <S.WorkHeader>
          <div>
            <S.Eyebrow className="reveal">{t('work.eyebrow')}</S.Eyebrow>
            <S.Title className="reveal" id="work-heading">{t('work.title')}</S.Title>
          </div>
          <S.Meta className="reveal">{t('work.meta')}</S.Meta>
        </S.WorkHeader>

        <S.JobList>
          {jobKeys.map((key) => (
            <S.JobRow key={key} className="reveal">
              <S.JobLeft>
                <S.JobPeriod>{t(`work.${key}.period`)}</S.JobPeriod>
                <S.JobCompany>{t(`work.${key}.company`)}</S.JobCompany>
              </S.JobLeft>
              <S.JobRight>
                <S.JobRole>{t(`work.${key}.role`)}</S.JobRole>
                <S.JobDesc>{t(`work.${key}.desc`)}</S.JobDesc>
              </S.JobRight>
            </S.JobRow>
          ))}
        </S.JobList>

        <S.ResumeCta className="reveal">
          <S.ResumeLabel>{t('work.resumeCta')}</S.ResumeLabel>
          <S.ResumePill href="/resume/creative">✦ {t('work.resumeCreative')}</S.ResumePill>
          <S.ResumePill href="/resume/ats">☰ {t('work.resumeATS')}</S.ResumePill>
        </S.ResumeCta>
      </S.Inner>
    </S.WorkRoot>
  );
}
