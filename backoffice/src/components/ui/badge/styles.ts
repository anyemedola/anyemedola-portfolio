import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const BadgeRoot = styled('span')<{ variant: 'published' | 'draft' | 'featured' }>(({ variant }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  padding: '3px 10px',
  borderRadius: 6,
  ...(variant === 'published' && {
    background: 'rgba(79,184,154,0.12)',
    color: tokens.published,
  }),
  ...(variant === 'draft' && {
    background: 'rgba(217,138,91,0.12)',
    color: tokens.draft,
  }),
  ...(variant === 'featured' && {
    background: tokens.goldGlow,
    color: tokens.gold,
  }),
}));

export const BadgeDot = styled('span')({
  width: 5, height: 5,
  borderRadius: '50%',
  background: 'currentColor',
  flexShrink: 0,
});
