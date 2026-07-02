import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Root = styled('aside')({
  width: tokens.sidebarW,
  background: tokens.sidebar,
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0, left: 0,
  height: '100vh',
  zIndex: 50,
  transition: 'transform 0.3s ease',
  '@media (max-width: 1024px)': { width: 220 },
  '@media (max-width: 768px)': {
    width: tokens.sidebarW,
    transform: 'translateX(-100%)',
    boxShadow: '4px 0 32px rgba(18,59,55,0.5)',
    '&[data-open="true"]': { transform: 'translateX(0)' },
  },
});

export const LogoArea = styled('div')({
  padding: '28px 24px 22px',
  borderBottom: `1px solid ${tokens.sidebarBorder}`,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const LogoMark = styled('div')({
  fontFamily: "'Newsreader', var(--font-newsreader), serif",
  fontStyle: 'italic',
  fontSize: 30,
  fontWeight: 400,
  color: tokens.sideText,
  lineHeight: 1,
  '& span': { color: tokens.rose },
});

export const LogoSub = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.sideTextMuted,
  lineHeight: 1.4,
});

export const Nav = styled('nav')({
  flex: 1,
  padding: '20px 0',
  overflowY: 'auto',
});

export const GroupLabel = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.sideTextMuted,
  padding: '16px 24px 8px',
});

export const NavBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '10px 24px',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: active ? 600 : 400,
  color: active ? '#fff' : tokens.sideTextDim,
  background: active ? tokens.sidebarSurf : 'none',
  border: 'none',
  borderLeftStyle: 'solid',
  borderLeftWidth: 2,
  borderLeftColor: active ? tokens.rose : 'transparent',
  cursor: 'pointer',
  width: '100%',
  textAlign: 'left',
  transition: 'color 0.2s, background 0.2s',
  '&:hover': { color: '#fff', background: tokens.sidebarSurf },
}));

export const NavIcon = styled('span')({
  fontSize: 15,
  width: 20,
  textAlign: 'center',
  flexShrink: 0,
});

export const NavBadge = styled('span')<{ active?: boolean }>(({ active }) => ({
  marginLeft: 'auto',
  background: active ? tokens.roseGlow : 'rgba(255,255,255,0.08)',
  color: active ? tokens.rose : tokens.sideTextDim,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  fontWeight: 600,
  padding: '2px 7px',
  borderRadius: 10,
  letterSpacing: '0.04em',
}));

export const SidebarFooter = styled('div')({
  padding: '20px 24px',
  borderTop: `1px solid ${tokens.sidebarBorder}`,
});

export const UserRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const Avatar = styled('div')({
  width: 34, height: 34,
  borderRadius: '50%',
  border: `1.5px solid ${tokens.sidebarBorder}`,
  flexShrink: 0,
  background: tokens.roseGlow,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: tokens.rose,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 700,
});

export const UserName = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 600,
  color: tokens.sideText,
});

export const UserRole = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  color: tokens.sideTextMuted,
  letterSpacing: '0.06em',
});

export const LogoutBtn = styled('button')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginTop: 10,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: tokens.sideTextMuted,
  padding: 0,
  transition: 'color 0.2s',
  '&:hover': { color: tokens.rose },
});

export const LangToggle = styled('button')<{ active?: boolean }>(({ active }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  background: active ? tokens.rose : 'transparent',
  color: active ? '#fff' : tokens.sideTextDim,
  border: `1px solid ${active ? tokens.rose : tokens.sidebarBorder}`,
  padding: '4px 10px',
  borderRadius: 6,
  cursor: 'pointer',
  transition: 'all 0.15s',
  minHeight: 28,
  '&:hover': { borderColor: tokens.rose, color: active ? '#fff' : tokens.rose },
}));

export const LangRow = styled('div')({
  display: 'flex',
  gap: 4,
  marginTop: 10,
});

export const PreviewLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginTop: 14,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: tokens.gold,
  opacity: 0.7,
  transition: 'opacity 0.2s, gap 0.2s',
  '&:hover': { opacity: 1, gap: 12 },
});

export const SidebarOverlay = styled('div')({
  display: 'none',
  position: 'fixed',
  inset: 0,
  background: 'rgba(18,59,55,0.55)',
  zIndex: 49,
  backdropFilter: 'blur(2px)',
  '@media (max-width: 768px)': {
    '&[data-open="true"]': { display: 'block' },
  },
});
