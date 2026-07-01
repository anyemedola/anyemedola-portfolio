import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Eyebrow = styled('p', {
  shouldForwardProp: (prop) => prop !== 'accentColor',
})<{ accentColor?: string }>(({ accentColor = tokens.roseDeep }) => ({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  letterSpacing: '.3em',
  textTransform: 'uppercase',
  color: accentColor,
  fontWeight: 700,
  marginBottom: 16,
}));

export const SectionTitle = styled('h2')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 700,
  fontSize: 'clamp(34px, 4.2vw, 58px)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  margin: '0 0 14px',
  color: tokens.ink,
});

export const Lead = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 17,
  color: tokens.warmBrownMid,
  maxWidth: 560,
  margin: '0 0 40px',
  lineHeight: 1.6,
});
