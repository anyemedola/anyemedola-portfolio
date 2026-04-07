import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Root = styled('header')({
  height: tokens.headerH,
  background: tokens.surface,
  borderBottom: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 32px',
  position: 'sticky',
  top: 0,
  zIndex: 40,
  '@media (max-width: 768px)': { padding: '0 16px', gap: 10 },
});

export const Left = styled('div')({ display: 'flex', alignItems: 'center', gap: 12 });

export const Title = styled('h1')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 22,
  letterSpacing: '0.06em',
  color: tokens.cream,
  '@media (max-width: 768px)': { fontSize: 18 },
});

export const Breadcrumb = styled('div')({
  fontSize: 11,
  color: tokens.textMuted,
  letterSpacing: '0.08em',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  fontFamily: "'DM Sans', sans-serif",
  '@media (max-width: 768px)': { display: 'none' },
});

export const Actions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const MenuBtn = styled('button')({
  display: 'none',
  background: 'none',
  border: `1px solid ${tokens.border}`,
  color: tokens.textDim,
  width: 36, height: 36,
  borderRadius: 4,
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  flexShrink: 0,
  transition: 'all 0.15s',
  fontFamily: "'DM Sans', sans-serif",
  '&:hover': { background: tokens.surface3, color: tokens.text },
  '@media (max-width: 768px)': { display: 'flex' },
});

export const Btn = styled('button')<{ variant?: 'primary' | 'ghost' }>(({ variant = 'ghost' }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  border: 'none',
  padding: '9px 20px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  minHeight: 36,
  borderRadius: 2,
  whiteSpace: 'nowrap',
  ...(variant === 'primary' && {
    background: tokens.mint,
    color: tokens.ink,
    '&:hover': { background: '#88d9c7', transform: 'translateY(-1px)' },
  }),
  ...(variant === 'ghost' && {
    background: 'transparent',
    color: tokens.textDim,
    border: `1px solid ${tokens.border}`,
    '&:hover': { color: tokens.text, borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)' },
  }),
  '@media (max-width: 768px)': { '& span': { display: 'none' } },
}));
