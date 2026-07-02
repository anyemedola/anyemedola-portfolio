import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Root = styled('div')({
  textAlign: 'center',
  padding: '72px 40px',
  border: `1px dashed ${tokens.border}`,
  background: tokens.surface,
  borderRadius: 16,
});

export const Icon = styled('span')({
  fontSize: 40,
  opacity: 0.15,
  marginBottom: 16,
  display: 'block',
});

export const Title = styled('div')({
  fontFamily: "'Newsreader', var(--font-newsreader), serif",
  fontStyle: 'italic',
  fontSize: 26,
  fontWeight: 400,
  color: tokens.ink,
  opacity: 0.4,
  marginBottom: 8,
});

export const Sub = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  color: tokens.textMuted,
  marginBottom: 24,
  lineHeight: 1.6,
});
