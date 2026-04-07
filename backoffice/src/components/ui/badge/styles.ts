import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const BadgeRoot = styled('span')<{ variant: 'published' | 'draft' | 'featured' }>(({ variant }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  padding: '3px 10px',
  borderRadius: 2,
  fontFamily: "'DM Sans', sans-serif",
  ...(variant === 'published' && {
    background: 'rgba(110,207,184,0.12)',
    color: tokens.mint,
  }),
  ...(variant === 'draft' && {
    background: 'rgba(255,255,255,0.05)',
    color: tokens.textMuted,
  }),
  ...(variant === 'featured' && {
    background: 'rgba(240,168,48,0.12)',
    color: tokens.warning,
  }),
}));

export const BadgeDot = styled('span')({
  width: 5, height: 5,
  borderRadius: '50%',
  background: 'currentColor',
  flexShrink: 0,
});
