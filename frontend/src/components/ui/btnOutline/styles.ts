import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Root = styled('a')({
  display: 'inline-block',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '14px 32px',
  border: `2px solid ${tokens.ink}`,
  background: 'transparent',
  color: tokens.ink,
  cursor: 'none',
  minHeight: 44,
  transition: 'all 0.25s ease',
  '&:hover': {
    background: tokens.mintLight,
    transform: 'translateY(-2px)',
  },
});
