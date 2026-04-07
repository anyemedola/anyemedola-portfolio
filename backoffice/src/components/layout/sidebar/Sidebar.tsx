'use client';

import { useRouter } from 'next/navigation';
import { useAdmin, View } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
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
  const { dict, locale, setLocale } = useLang();
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
    dashboard: dict.sidebar.dashboard,
    projects:  dict.sidebar.projects,
    blog:      dict.sidebar.blog,
    settings:  dict.sidebar.siteInfo,
  };
  const groupLabels = {
    overview: dict.sidebar.overview,
    content:  dict.sidebar.content,
    settings: dict.sidebar.settings,
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
            <S.LogoSub>{dict.sidebar.brand}</S.LogoSub>
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
            <S.LangToggle active={locale === 'en'} onClick={() => setLocale('en')} aria-pressed={locale === 'en'}>EN</S.LangToggle>
            <S.LangToggle active={locale === 'pt'} onClick={() => setLocale('pt')} aria-pressed={locale === 'pt'}>PT</S.LangToggle>
          </S.LangRow>
          <S.PreviewLink href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">↗</span> {dict.sidebar.viewPortfolio}
          </S.PreviewLink>
          <S.LogoutBtn onClick={handleLogout}>
            <span aria-hidden="true">→</span> {dict.sidebar.signOut}
          </S.LogoutBtn>
        </S.SidebarFooter>
      </S.Root>
    </>
  );
}
