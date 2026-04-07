'use client';

import { tokens } from '@/theme/tokens';
import { useAdmin } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import * as S from './styles';

export default function DashboardView() {
  const { projects, blogPosts, activities, setActiveView, openProjectPanel, openBlogPanel } = useAdmin();
  const { dict } = useLang();
  const d = dict.dashboard;

  const pubProj = projects.filter(p => p.published).length;
  const pubBlog = blogPosts.filter(b => b.status === 'published').length;
  const drafts = projects.filter(p => !p.published).length + blogPosts.filter(b => b.status === 'draft').length;
  const featured = projects.filter(p => p.featured).length;

  return (
    <>
      <S.StatsGrid>
        <S.StatCard accent={tokens.mint}>
          <S.StatIcon aria-hidden="true">◻</S.StatIcon>
          <S.StatLabel>{d.totalProjects}</S.StatLabel>
          <S.StatValue><S.StatAccentSpan accent={tokens.mint}>{projects.length}</S.StatAccentSpan></S.StatValue>
          <S.StatSub>{pubProj} {d.published}</S.StatSub>
        </S.StatCard>
        <S.StatCard accent={tokens.pink}>
          <S.StatIcon aria-hidden="true">✦</S.StatIcon>
          <S.StatLabel>{d.blogPosts}</S.StatLabel>
          <S.StatValue><S.StatAccentSpan accent={tokens.pink}>{blogPosts.length}</S.StatAccentSpan></S.StatValue>
          <S.StatSub>{pubBlog} {d.published}</S.StatSub>
        </S.StatCard>
        <S.StatCard accent={tokens.warning}>
          <S.StatIcon aria-hidden="true">◈</S.StatIcon>
          <S.StatLabel>{d.drafts}</S.StatLabel>
          <S.StatValue><S.StatAccentSpan accent={tokens.warning}>{drafts}</S.StatAccentSpan></S.StatValue>
          <S.StatSub>{d.pendingReview}</S.StatSub>
        </S.StatCard>
        <S.StatCard accent="#8B7355">
          <S.StatIcon aria-hidden="true">★</S.StatIcon>
          <S.StatLabel>{d.featured}</S.StatLabel>
          <S.StatValue><S.StatAccentSpan accent="#8B7355">{featured}</S.StatAccentSpan></S.StatValue>
          <S.StatSub>{d.highlightedItems}</S.StatSub>
        </S.StatCard>
      </S.StatsGrid>

      <S.DashGrid>
        <S.DashCard>
          <S.DashCardHeader>
            <S.DashCardTitle>{d.recentActivity}</S.DashCardTitle>
            <span style={{ fontSize: 10, color: tokens.textMuted, fontFamily: "'DM Sans', sans-serif" }}>{d.today}</span>
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
            <S.DashCardTitle>{d.quickActions}</S.DashCardTitle>
          </S.DashCardHeader>
          <S.QuickActions>
            <S.QuickAction onClick={() => { setActiveView('projects'); openProjectPanel(); }}>
              <S.QAIcon aria-hidden="true">◻</S.QAIcon>
              <S.QALabel>{d.newProject}</S.QALabel>
              <S.QASub>{d.addToPortfolio}</S.QASub>
              <S.QAArrow>→</S.QAArrow>
            </S.QuickAction>
            <S.QuickAction onClick={() => { setActiveView('blog'); openBlogPanel(); }}>
              <S.QAIcon aria-hidden="true">✦</S.QAIcon>
              <S.QALabel>{d.newPost}</S.QALabel>
              <S.QASub>{d.writeArticle}</S.QASub>
              <S.QAArrow>→</S.QAArrow>
            </S.QuickAction>
            <S.QuickAction onClick={() => setActiveView('projects')}>
              <S.QAIcon aria-hidden="true">◈</S.QAIcon>
              <S.QALabel>{d.projects}</S.QALabel>
              <S.QASub>{d.manageAll}</S.QASub>
              <S.QAArrow>→</S.QAArrow>
            </S.QuickAction>
            <S.QuickAction onClick={() => setActiveView('blog')}>
              <S.QAIcon aria-hidden="true">✐</S.QAIcon>
              <S.QALabel>{d.blog}</S.QALabel>
              <S.QASub>{d.managePosts}</S.QASub>
              <S.QAArrow>→</S.QAArrow>
            </S.QuickAction>
          </S.QuickActions>
        </S.DashCard>
      </S.DashGrid>
    </>
  );
}
