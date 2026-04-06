'use client';

import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { tokens } from '@/theme/tokens';
import { useAdmin, View } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';

const Root = styled('aside')({
  width: tokens.sidebarW,
  background: tokens.surface,
  borderRight: `1px solid ${tokens.border}`,
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0, left: 0,
  height: '100vh',
  zIndex: 50,
  transition: 'transform 0.3s ease',
  '@media (max-width: 1024px)': { width: 200 },
  '@media (max-width: 768px)': {
    width: tokens.sidebarW,
    transform: 'translateX(-100%)',
    boxShadow: '4px 0 24px rgba(0,0,0,0.4)',
    '&[data-open="true"]': { transform: 'translateX(0)' },
  },
});

const LogoArea = styled('div')({
  padding: '28px 24px 24px',
  borderBottom: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

const LogoMark = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 28,
  letterSpacing: '0.1em',
  color: tokens.cream,
  lineHeight: 1,
  '& span': { color: tokens.mint },
});

const LogoSub = styled('div')({
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  lineHeight: 1.4,
  fontFamily: "'DM Sans', sans-serif",
});

const Nav = styled('nav')({
  flex: 1,
  padding: '20px 0',
  overflowY: 'auto',
});

const GroupLabel = styled('div')({
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  padding: '16px 24px 8px',
  fontFamily: "'DM Sans', sans-serif",
});

const NavBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '10px 24px',
  fontSize: 13,
  fontWeight: active ? 500 : 400,
  color: active ? tokens.mint : tokens.textDim,
  background: active ? tokens.mintGlow : 'none',
  borderLeft: `2px solid ${active ? tokens.mint : 'transparent'}`,
  border: 'none',
  borderLeftStyle: 'solid',
  borderLeftWidth: 2,
  borderLeftColor: active ? tokens.mint : 'transparent',
  cursor: 'pointer',
  width: '100%',
  textAlign: 'left',
  transition: 'color 0.2s, background 0.2s',
  fontFamily: "'DM Sans', sans-serif",
  '&:hover': { color: tokens.text, background: 'rgba(255,255,255,0.03)' },
}));

const NavIcon = styled('span')({
  fontSize: 15,
  width: 20,
  textAlign: 'center',
  flexShrink: 0,
});

const NavBadge = styled('span')<{ active?: boolean }>(({ active }) => ({
  marginLeft: 'auto',
  background: active ? tokens.mintGlow : tokens.surface3,
  color: active ? tokens.mint : tokens.textDim,
  fontSize: 10,
  fontWeight: 500,
  padding: '2px 7px',
  borderRadius: 10,
  letterSpacing: '0.04em',
  fontFamily: "'DM Sans', sans-serif",
}));

const Footer = styled('div')({
  padding: '20px 24px',
  borderTop: `1px solid ${tokens.border}`,
});

const UserRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

const Avatar = styled('div')({
  width: 32, height: 32,
  borderRadius: '50%',
  overflow: 'hidden',
  border: `1.5px solid ${tokens.border}`,
  flexShrink: 0,
  background: tokens.surface3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: tokens.textMuted,
  fontSize: 13,
});

const UserName = styled('div')({
  fontSize: 12,
  fontWeight: 500,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
});

const UserRole = styled('div')({
  fontSize: 10,
  color: tokens.textMuted,
  letterSpacing: '0.06em',
  fontFamily: "'DM Sans', sans-serif",
});

const LogoutBtn = styled('button')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginTop: 10,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: tokens.textMuted,
  padding: 0,
  transition: 'color 0.2s',
  fontFamily: "'DM Sans', sans-serif",
  '&:hover': { color: tokens.pink },
});

const LangToggle = styled('button')<{ active?: boolean }>(({ active }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  background: active ? tokens.mint : 'transparent',
  color: active ? tokens.ink : tokens.textMuted,
  border: `1px solid ${active ? tokens.mint : tokens.border}`,
  padding: '4px 10px',
  borderRadius: 2,
  cursor: 'pointer',
  transition: 'all 0.15s',
  minHeight: 28,
  '&:hover': { borderColor: tokens.mint, color: active ? tokens.ink : tokens.mint },
}));

const LangRow = styled('div')({
  display: 'flex',
  gap: 4,
  marginTop: 10,
});

const PreviewLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginTop: 14,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: tokens.mint,
  opacity: 0.7,
  transition: 'opacity 0.2s, gap 0.2s',
  fontFamily: "'DM Sans', sans-serif",
  '&:hover': { opacity: 1, gap: 12 },
});

const Overlay = styled('div')({
  display: 'none',
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.6)',
  zIndex: 49,
  backdropFilter: 'blur(2px)',
  '@media (max-width: 768px)': {
    '&[data-open="true"]': { display: 'block' },
  },
});

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
      <Overlay
        data-open={sidebarOpen ? 'true' : 'false'}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      <Root data-open={sidebarOpen ? 'true' : 'false'} role="navigation" aria-label="Admin sidebar">
        <LogoArea>
          <div>
            <LogoMark>AM<span>·</span></LogoMark>
            <LogoSub>{dict.sidebar.brand}</LogoSub>
          </div>
        </LogoArea>

        <Nav>
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
                {showGroup && <GroupLabel>{group}</GroupLabel>}
                <NavBtn
                  active={isActive}
                  onClick={() => handleNav(view)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <NavIcon aria-hidden="true">{navIcons[view]}</NavIcon>
                  {navLabels[view]}
                  {badge !== null && (
                    <NavBadge active={isActive}>{badge}</NavBadge>
                  )}
                </NavBtn>
              </div>
            );
          })}
        </Nav>

        <Footer>
          <UserRow>
            <Avatar aria-hidden="true">AM</Avatar>
            <div>
              <UserName>Any Medola</UserName>
              <UserRole>Admin</UserRole>
            </div>
          </UserRow>
          <LangRow>
            <LangToggle active={locale === 'en'} onClick={() => setLocale('en')} aria-pressed={locale === 'en'}>EN</LangToggle>
            <LangToggle active={locale === 'pt'} onClick={() => setLocale('pt')} aria-pressed={locale === 'pt'}>PT</LangToggle>
          </LangRow>
          <PreviewLink href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">↗</span> {dict.sidebar.viewPortfolio}
          </PreviewLink>
          <LogoutBtn onClick={handleLogout}>
            <span aria-hidden="true">→</span> {dict.sidebar.signOut}
          </LogoutBtn>
        </Footer>
      </Root>
    </>
  );
}
