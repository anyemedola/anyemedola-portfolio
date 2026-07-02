import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Root = styled('header')({
  height: tokens.headerH,
  background: tokens.creamBg,
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
  fontFamily: "'Newsreader', var(--font-newsreader), serif",
  fontStyle: 'italic',
  fontSize: 22,
  fontWeight: 400,
  color: tokens.ink,
  '@media (max-width: 768px)': { fontSize: 18 },
});

export const Breadcrumb = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  color: tokens.textMuted,
  letterSpacing: '0.08em',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
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
  borderRadius: 8,
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  flexShrink: 0,
  transition: 'all 0.15s',
  '&:hover': { background: tokens.surface2, color: tokens.text },
  '@media (max-width: 768px)': { display: 'flex' },
});

export const Btn = styled('button')<{ variant?: 'primary' | 'ghost' }>(({ variant = 'ghost' }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  border: 'none',
  padding: '9px 20px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  minHeight: 36,
  borderRadius: 8,
  whiteSpace: 'nowrap',
  ...(variant === 'primary' && {
    background: tokens.rose,
    color: '#fff',
    '&:hover': { background: tokens.roseDim, transform: 'translateY(-1px)', boxShadow: '0 6px 20px -6px rgba(18,59,55,0.35)' },
  }),
  ...(variant === 'ghost' && {
    background: 'transparent',
    color: tokens.textDim,
    border: `1px solid ${tokens.border}`,
    '&:hover': { color: tokens.text, borderColor: tokens.borderHover, background: tokens.surface2 },
  }),
  '@media (max-width: 768px)': { '& span': { display: 'none' } },
}));
