'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useAdmin, View } from '@/context/AdminContext';
import * as S from './styles';

const navKeys: View[] = ['dashboard', 'projects', 'blog', 'settings'];
const navIcons: Record<View, string> = {
  dashboard: '◈', projects: '◻', blog: '✦', settings: '◎',
};

const groupKey: Record<View, 'overview' | 'content' | 'settings'> = {
  dashboard: 'overview', projects: 'content', blog: 'content', settings: 'settings',
};

export default function Sidebar() {
  const { activeView, setActiveView, projects, blogPosts, sidebarOpen, setSidebarOpen } = useAdmin();
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

  const handleNav = (view: View) => {
    setActiveView(view);
    setSidebarOpen(false);
  };

  const navLabels: Record<View, string> = {
    dashboard: t('sidebar.dashboard'),
    projects:  t('sidebar.projects'),
    blog:      t('sidebar.blog'),
    settings:  t('sidebar.siteInfo'),
  };
  const groupLabels = {
    overview: t('sidebar.overview'),
    content:  t('sidebar.content'),
    settings: t('sidebar.settings'),
  };

  let lastGroup = '';

  return (
    <>
      <S.SidebarOverlay
        data-open={sidebarOpen ? 'true' : 'false'}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      <S.Root data-open={sidebarOpen ? 'true' : 'false'} role="navigation" aria-label="Admin sidebar">
        <S.LogoArea>
          <div>
            <S.LogoMark>AM<span>·</span></S.LogoMark>
            <S.LogoSub>{t('sidebar.brand')}</S.LogoSub>
          </div>
        </S.LogoArea>

        <S.Nav>
          {navKeys.map(view => {
            const gKey = groupKey[view];
            const group = groupLabels[gKey];
            const showGroup = group !== lastGroup;
            lastGroup = group;
            const isActive = activeView === view;
            const badge = view === 'projects' ? projects.length
                        : view === 'blog' ? blogPosts.length
                        : null;
            return (
              <div key={view}>
                {showGroup && <S.GroupLabel>{group}</S.GroupLabel>}
                <S.NavBtn
                  active={isActive}
                  onClick={() => handleNav(view)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <S.NavIcon aria-hidden="true">{navIcons[view]}</S.NavIcon>
                  {navLabels[view]}
                  {badge !== null && (
                    <S.NavBadge active={isActive}>{badge}</S.NavBadge>
                  )}
                </S.NavBtn>
              </div>
            );
          })}
        </S.Nav>

        <S.SidebarFooter>
          <S.UserRow>
            <S.Avatar aria-hidden="true">AM</S.Avatar>
            <div>
              <S.UserName>Any Medola</S.UserName>
              <S.UserRole>Admin</S.UserRole>
            </div>
          </S.UserRow>
          <S.LangRow>
            <S.LangToggle active={i18n.language === 'en'} onClick={() => i18n.changeLanguage('en')} aria-pressed={i18n.language === 'en'}>EN</S.LangToggle>
            <S.LangToggle active={i18n.language === 'pt'} onClick={() => i18n.changeLanguage('pt')} aria-pressed={i18n.language === 'pt'}>PT</S.LangToggle>
            <S.LangToggle active={i18n.language === 'it'} onClick={() => i18n.changeLanguage('it')} aria-pressed={i18n.language === 'it'}>IT</S.LangToggle>
          </S.LangRow>
          <S.PreviewLink href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">↗</span> {t('sidebar.viewPortfolio')}
          </S.PreviewLink>
          <S.LogoutBtn onClick={handleLogout}>
            <span aria-hidden="true">→</span> {t('sidebar.signOut')}
          </S.LogoutBtn>
        </S.SidebarFooter>
      </S.Root>
    </>
  );
}
