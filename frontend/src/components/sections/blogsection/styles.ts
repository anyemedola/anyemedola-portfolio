import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const EscritaRoot = styled('section')({
  scrollMarginTop: 70,
  background: 'linear-gradient(180deg,#FCE7DD,#FBEFE6)',
  padding: '84px 40px',
  '@media (max-width: 900px)': { padding: '64px 22px' },
});

export const Inner = styled('div')({
  maxWidth: 1240,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 50,
  alignItems: 'center',
  '@media (max-width: 760px)': {
    gridTemplateColumns: '1fr',
    gap: 36,
  },
});

export const Left = styled('div')({});

export const Eyebrow = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  letterSpacing: '.3em',
  textTransform: 'uppercase',
  color: '#E0568A',
  fontWeight: 700,
  margin: '0 0 16px',
});

export const Title = styled('h2')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 700,
  fontSize: 'clamp(28px, 3.5vw, 40px)',
  lineHeight: 1.2,
  margin: '0 0 18px',
  color: tokens.ink,
});

export const Lead = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 16,
  lineHeight: 1.7,
  color: '#564650',
  margin: '0 0 28px',
});

export const CtaBtn = styled('a')({
  display: 'inline-block',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14.5,
  fontWeight: 700,
  color: '#fff',
  background: '#E0568A',
  padding: '13px 24px',
  borderRadius: 999,
  textDecoration: 'none',
  boxShadow: '0 10px 24px rgba(224,86,138,0.28)',
  transition: 'background .25s, box-shadow .25s',
  '&:hover': {
    background: '#C24C76',
    boxShadow: '0 6px 16px rgba(224,86,138,0.36)',
  },
});

export const Cards = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const NotebookCard = styled('article', {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent: string }>(({ accent }) => ({
  background: '#fff',
  borderRadius: 16,
  padding: '24px 26px',
  borderLeft: `4px solid ${accent}`,
  boxShadow: '0 4px 18px -6px rgba(58,30,40,0.1)',
  transition: 'transform .3s, box-shadow .3s',
  '&:hover': {
    transform: 'translateX(4px)',
    boxShadow: '0 8px 24px -8px rgba(58,30,40,0.18)',
  },
}));

export const CardKicker = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#A85A6E',
  marginBottom: 7,
});

export const CardTitle = styled('h3')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: 26,
  color: tokens.ink,
  margin: '0 0 6px',
  '@media (max-width: 480px)': { fontSize: 22 },
});

export const CardDesc = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  lineHeight: 1.6,
  color: '#6E5A63',
  margin: 0,
});
