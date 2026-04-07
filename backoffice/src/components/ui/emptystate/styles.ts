import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Root = styled('div')({
  textAlign: 'center',
  padding: '72px 40px',
  border: `1px dashed ${tokens.border}`,
  background: tokens.surface,
});

export const Icon = styled('span')({
  fontSize: 40,
  opacity: 0.15,
  marginBottom: 16,
  display: 'block',
});

export const Title = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 24,
  letterSpacing: '0.06em',
  color: tokens.cream,
  opacity: 0.4,
  marginBottom: 8,
});

export const Sub = styled('div')({
  fontSize: 12,
  color: tokens.textMuted,
  marginBottom: 24,
  lineHeight: 1.6,
});
