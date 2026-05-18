'use client';

import { tokens } from '@/theme/tokens';
import { useTranslation } from 'react-i18next';
import { useAdmin } from '@/context/AdminContext';
import * as S from './styles';

export default function DashboardView() {
  const { projects, blogPosts, activities, setActiveView, openProjectPanel, openBlogPanel } = useAdmin();
  const { t } = useTranslation();

  const pubProj = projects.filter(p => p.published).length;
  const pubBlog = blogPosts.filter(b => b.status === 'published').length;
  const drafts = projects.filter(p => !p.published).length + blogPosts.filter(b => b.status === 'draft').length;
  const featured = projects.filter(p => p.featured).length;

  return (
    <>
      <S.StatsGrid>
        <S.StatCard accent={tokens.mint}>
          <S.StatIcon aria-hidden="true">◻</S.StatIcon>
          <S.StatLabel>{t('dashboard.totalProjects')}</S.StatLabel>
          <S.StatValue><S.StatAccentSpan accent={tokens.mint}>{projects.length}</S.StatAccentSpan></S.StatValue>
          <S.StatSub>{pubProj} {t('dashboard.published')}</S.StatSub>
        </S.StatCard>
        <S.StatCard accent={tokens.pink}>
          <S.StatIcon aria-hidden="true">✦</S.StatIcon>
          <S.StatLabel>{t('dashboard.blogPosts')}</S.StatLabel>
          <S.StatValue><S.StatAccentSpan accent={tokens.pink}>{blogPosts.length}</S.StatAccentSpan></S.StatValue>
          <S.StatSub>{pubBlog} {t('dashboard.published')}</S.StatSub>
        </S.StatCard>
        <S.StatCard accent={tokens.warning}>
          <S.StatIcon aria-hidden="true">◈</S.StatIcon>
          <S.StatLabel>{t('dashboard.drafts')}</S.StatLabel>
          <S.StatValue><S.StatAccentSpan accent={tokens.warning}>{drafts}</S.StatAccentSpan></S.StatValue>
          <S.StatSub>{t('dashboard.pendingReview')}</S.StatSub>
        </S.StatCard>
        <S.StatCard accent="#8B7355">
          <S.StatIcon aria-hidden="true">★</S.StatIcon>
          <S.StatLabel>{t('dashboard.featured')}</S.StatLabel>
          <S.StatValue><S.StatAccentSpan accent="#8B7355">{featured}</S.StatAccentSpan></S.StatValue>
          <S.StatSub>{t('dashboard.highlightedItems')}</S.StatSub>
        </S.StatCard>
      </S.StatsGrid>

      <S.DashGrid>
        <S.DashCard>
          <S.DashCardHeader>
            <S.DashCardTitle>{t('dashboard.recentActivity')}</S.DashCardTitle>
            <span style={{ fontSize: 10, color: tokens.textMuted, fontFamily: "'DM Sans', sans-serif" }}>{t('dashboard.today')}</span>
          </S.DashCardHeader>
          <S.ActivityList>
            {activities.map(a => (
              <S.ActivityItem key={a.id}>
                <S.ActivityDot dotType={a.type} aria-hidden="true" />
                <div>
                  <S.ActivityText dangerouslySetInnerHTML={{ __html: a.msg }} />
                  <S.ActivityTime>{a.time}</S.ActivityTime>
                </div>
              </S.ActivityItem>
            ))}
          </S.ActivityList>
        </S.DashCard>

        <S.DashCard>
          <S.DashCardHeader>
            <S.DashCardTitle>{t('dashboard.quickActions')}</S.DashCardTitle>
          </S.DashCardHeader>
          <S.QuickActions>
            <S.QuickAction onClick={() => { setActiveView('projects'); openProjectPanel(); }}>
              <S.QAIcon aria-hidden="true">◻</S.QAIcon>
              <S.QALabel>{t('dashboard.newProject')}</S.QALabel>
              <S.QASub>{t('dashboard.addToPortfolio')}</S.QASub>
              <S.QAArrow>→</S.QAArrow>
            </S.QuickAction>
            <S.QuickAction onClick={() => { setActiveView('blog'); openBlogPanel(); }}>
              <S.QAIcon aria-hidden="true">✦</S.QAIcon>
              <S.QALabel>{t('dashboard.newPost')}</S.QALabel>
              <S.QASub>{t('dashboard.writeArticle')}</S.QASub>
              <S.QAArrow>→</S.QAArrow>
            </S.QuickAction>
            <S.QuickAction onClick={() => setActiveView('projects')}>
              <S.QAIcon aria-hidden="true">◈</S.QAIcon>
              <S.QALabel>{t('dashboard.projects')}</S.QALabel>
              <S.QASub>{t('dashboard.manageAll')}</S.QASub>
              <S.QAArrow>→</S.QAArrow>
            </S.QuickAction>
            <S.QuickAction onClick={() => setActiveView('blog')}>
              <S.QAIcon aria-hidden="true">✐</S.QAIcon>
              <S.QALabel>{t('dashboard.blog')}</S.QALabel>
              <S.QASub>{t('dashboard.managePosts')}</S.QASub>
              <S.QAArrow>→</S.QAArrow>
            </S.QuickAction>
          </S.QuickActions>
        </S.DashCard>
      </S.DashGrid>
    </>
  );
}
