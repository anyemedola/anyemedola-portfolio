import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Hero = styled('header')({
  maxWidth: 760,
  margin: '0 auto',
  padding: '84px 32px 0',
  textAlign: 'center',
  '@media (max-width: 900px)': {
    padding: '56px 24px 0',
  },
});

export const Tags = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 14,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  letterSpacing: '.26em',
  textTransform: 'uppercase',
  fontWeight: 700,
  marginBottom: 30,
});

export const TagPrimary = styled('span')({
  color: '#E0568A',
});

export const Sep = styled('span')({
  color: '#D9C3AE',
});

export const TagMeta = styled('span')({
  color: tokens.warmBrownLight,
});

export const Title = styled('h1')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 900,
  fontSize: 'clamp(64px, 11vw, 128px)',
  lineHeight: 0.92,
  letterSpacing: '-0.02em',
  color: tokens.ink,
  margin: 0,
});

export const Subtitle = styled('p')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: 'clamp(22px, 3vw, 30px)',
  lineHeight: 1.3,
  color: '#E0568A',
  margin: '26px auto 0',
  maxWidth: 560,
});

export const Author = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  marginTop: 34,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  color: tokens.warmBrown,
});

export const AuthorName = styled('span')({
  fontWeight: 600,
  color: tokens.ink,
});

export const Rule = styled('div')({
  height: 1,
  background: '#E2CDB8',
  maxWidth: 80,
  margin: '40px auto 0',
});
