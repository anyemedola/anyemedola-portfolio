import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const ProjectsRoot = styled('section')({
  scrollMarginTop: 70,
  background: 'linear-gradient(180deg,#FBEFE6,#FCE7DD)',
  padding: '84px 40px',
  '@media (max-width: 900px)': { padding: '64px 22px' },
});

export const Inner = styled('div')({
  maxWidth: 1240,
  margin: '0 auto',
});

export const HeaderRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: 40,
  flexWrap: 'wrap',
  gap: 16,
});

export const HeaderLeft = styled('div')({});

export const Eyebrow = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  letterSpacing: '.3em',
  textTransform: 'uppercase',
  color: '#E0568A',
  fontWeight: 700,
  margin: '0 0 10px',
});

export const Title = styled('h2')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 700,
  fontSize: 'clamp(28px, 3.5vw, 44px)',
  lineHeight: 1.1,
  margin: 0,
  color: tokens.ink,
});

export const RequestLink = styled('a')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  fontWeight: 700,
  color: '#C24C76',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  '&:hover': { color: '#E0568A' },
});

export const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 22,
  '@media (max-width: 760px)': { gridTemplateColumns: '1fr' },
});

/* ── Featured card (full-width, dark) ── */

export const FeaturedCard = styled('article')({
  gridColumn: '1 / -1',
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',
  background: '#33212B',
  borderRadius: 22,
  overflow: 'hidden',
  color: '#fff',
  transition: 'transform .3s, box-shadow .3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 24px 50px -20px rgba(50,15,30,0.5)',
  },
  '@media (max-width: 760px)': { gridTemplateColumns: '1fr' },
});

export const FeaturedBody = styled('div')({
  padding: '42px 44px',
  '@media (max-width: 600px)': { padding: '32px 28px' },
});

export const FeaturedLabel = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#F3A98C',
});

export const FeaturedTitle = styled('h3')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 500,
  fontSize: 34,
  margin: '14px 0 12px',
  lineHeight: 1.1,
  color: '#fff',
  '@media (max-width: 480px)': { fontSize: 26 },
});

export const FeaturedDesc = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  lineHeight: 1.65,
  color: '#E4CDD3',
  margin: '0 0 18px',
});

export const FeaturedVisual = styled('div')({
  background: 'linear-gradient(150deg,#E0568A,#F39C7E)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontSize: 64,
  color: 'rgba(255,255,255,0.92)',
  letterSpacing: '0.02em',
  minHeight: 200,
  '@media (max-width: 760px)': { minHeight: 160, fontSize: 48 },
});

export const TagsRow = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

export const TagDark = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 600,
  background: 'rgba(255,255,255,0.12)',
  borderRadius: 7,
  padding: '5px 10px',
  color: '#fff',
});

/* ── Regular cards (white) ── */

export const Card = styled('article')({
  background: '#fff',
  borderRadius: 22,
  padding: '34px 32px',
  border: '1px solid rgba(224,86,138,0.12)',
  transition: 'transform .3s, box-shadow .3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px -20px rgba(160,60,90,0.2)',
  },
  '@media (max-width: 600px)': { padding: '26px 22px' },
});

export const CardLabel = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: '#C24C76',
});

export const CardTitle = styled('h3')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 500,
  fontSize: 26,
  color: '#33212B',
  margin: '12px 0 10px',
  '@media (max-width: 480px)': { fontSize: 22 },
});

export const CardDesc = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14.5,
  lineHeight: 1.6,
  color: '#564650',
  margin: '0 0 16px',
});

export const TagLight = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11.5,
  fontWeight: 600,
  color: '#3F2F38',
  background: '#FBEAE0',
  borderRadius: 7,
  padding: '5px 9px',
});
