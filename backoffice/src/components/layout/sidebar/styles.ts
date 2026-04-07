import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Root = styled('aside')({
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

export const LogoArea = styled('div')({
  padding: '28px 24px 24px',
  borderBottom: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const LogoMark = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 28,
  letterSpacing: '0.1em',
  color: tokens.cream,
  lineHeight: 1,
  '& span': { color: tokens.mint },
});

export const LogoSub = styled('div')({
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  lineHeight: 1.4,
  fontFamily: "'DM Sans', sans-serif",
});

export const Nav = styled('nav')({
  flex: 1,
  padding: '20px 0',
  overflowY: 'auto',
});

export const GroupLabel = styled('div')({
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  padding: '16px 24px 8px',
  fontFamily: "'DM Sans', sans-serif",
});

export const NavBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '10px 24px',
  fontSize: 13,
  fontWeight: active ? 500 : 400,
  color: active ? tokens.mint : tokens.textDim,
  background: active ? tokens.mintGlow : 'none',
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

export const NavIcon = styled('span')({
  fontSize: 15,
  width: 20,
  textAlign: 'center',
  flexShrink: 0,
});

export const NavBadge = styled('span')<{ active?: boolean }>(({ active }) => ({
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

export const SidebarFooter = styled('div')({
  padding: '20px 24px',
  borderTop: `1px solid ${tokens.border}`,
});

export const UserRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const Avatar = styled('div')({
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

export const UserName = styled('div')({
  fontSize: 12,
  fontWeight: 500,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
});

export const UserRole = styled('div')({
  fontSize: 10,
  color: tokens.textMuted,
  letterSpacing: '0.06em',
  fontFamily: "'DM Sans', sans-serif",
});

export const LogoutBtn = styled('button')({
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

export const LangToggle = styled('button')<{ active?: boolean }>(({ active }) => ({
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

export const SidebarOverlay = styled('div')({
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
