import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Section = styled('section')({
  background: tokens.creamLight,
  borderTop: `1px solid ${tokens.border}`,
  padding: '80px 0',
});

export const Inner = styled('div')({
  maxWidth: 920,
  margin: '0 auto',
  padding: '0 32px',
  '@media (max-width: 600px)': { padding: '0 22px' },
});

export const Title = styled('h2')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 700,
  fontSize: 'clamp(28px, 3.5vw, 40px)',
  color: tokens.ink,
  marginBottom: 32,
  '& em': {
    fontStyle: 'italic',
    color: '#E0568A',
  },
});

export const Grid = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 20,
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '@media (max-width: 760px)': { gridTemplateColumns: '1fr' },
});

export const Card = styled('li')({
  background: tokens.cream,
  border: `1px solid ${tokens.borderLight}`,
  borderRadius: 20,
  overflow: 'hidden',
  transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 34px 60px -36px rgba(120,60,50,.45)',
  },
  '&:hover .card-title': { color: '#E0568A' },
  '&:hover .card-arrow': { transform: 'translateX(4px)', color: '#C24C76' },
});

export const CardBar = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>(({ color }) => ({
  height: 3,
  background: color,
  width: '100%',
}));

export const CardBody = styled('div')({
  padding: '28px 28px 32px',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const Meta = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Tag = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '.18em',
  textTransform: 'uppercase',
  color: '#E0568A',
  background: 'rgba(224,86,138,.08)',
  padding: '4px 10px',
  borderRadius: 999,
});

export const DateEl = styled('time')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  letterSpacing: '.08em',
  color: tokens.warmBrownLight,
});

export const CardTitle = styled('h3')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 700,
  fontSize: 22,
  lineHeight: 1.15,
  color: tokens.ink,
  margin: 0,
  transition: 'color .2s',
  flex: 1,
});

export const Footer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 16,
  borderTop: `1px solid ${tokens.borderLight}`,
  marginTop: 4,
});

export const ReadTime = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: tokens.warmBrownLight,
});

export const Arrow = styled('span')({
  fontSize: 16,
  color: tokens.warmBrownLight,
  transition: 'transform .25s, color .25s',
});

export const CardLink = styled(Link)({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  color: 'inherit',
  '&:focus-visible': {
    outline: `3px solid ${tokens.gold}`,
    outlineOffset: 2,
  },
});
