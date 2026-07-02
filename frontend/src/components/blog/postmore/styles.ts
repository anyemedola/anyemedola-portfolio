import Link from 'next/link';
import { styled } from '@mui/material/styles';

export const Section = styled('section')({
  padding: '64px 56px',
  background: 'linear-gradient(180deg,#FBEFE6,#FCE7DD)',
  '@media (max-width: 760px)': { padding: '52px 24px' },
});

export const Inner = styled('div')({
  maxWidth: 1000,
  margin: '0 auto',
});

export const Eyebrow = styled('h2')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  fontWeight: 800,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#E0568A',
  margin: '0 0 24px',
  textAlign: 'center',
});

export const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 20,
  '@media (max-width: 900px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@media (max-width: 560px)': { gridTemplateColumns: '1fr' },
});

export const CardLink = styled(Link)({
  background: '#fff',
  borderRadius: 16,
  padding: 26,
  border: '1px solid rgba(224,86,138,0.12)',
  textDecoration: 'none',
  display: 'block',
  transition: 'transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 48px -20px rgba(180,60,100,.25)',
  },
  '&:hover h3': { color: '#E0568A' },
  '&:focus-visible': {
    outline: '3px solid #DDA94A',
    outlineOffset: 2,
  },
});

export const Kicker = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11.5,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#A85A6E',
  marginBottom: 10,
});

export const CardTitle = styled('h3')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 23,
  fontWeight: 500,
  lineHeight: 1.15,
  color: '#33212B',
  margin: '0 0 8px',
  transition: 'color .2s',
});

export const Excerpt = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13.5,
  lineHeight: 1.55,
  color: '#6E5A63',
  margin: 0,
});
