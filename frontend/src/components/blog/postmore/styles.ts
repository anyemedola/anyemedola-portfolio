import Link from 'next/link';
import { styled } from '@mui/material/styles';

export const Section = styled('section')({
  padding: '64px 56px',
  background: 'linear-gradient(180deg,#FBEDEE,#EEF2E4)',
  borderTop: '1px solid rgba(242,216,218,0.8)',
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
  color: '#1A615D',
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
  border: '1px solid rgba(239,168,172,0.25)',
  textDecoration: 'none',
  display: 'block',
  transition: 'transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 48px -20px rgba(26,97,93,.25)',
  },
  '&:hover h3': { color: '#EFA8AC' },
  '&:focus-visible': {
    outline: '3px solid #1A615D',
    outlineOffset: 2,
  },
});

export const Kicker = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11.5,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#C24C76',
  marginBottom: 10,
});

export const CardTitle = styled('h3')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 23,
  fontWeight: 500,
  lineHeight: 1.15,
  color: '#123B37',
  margin: '0 0 8px',
  transition: 'color .2s',
});

export const Excerpt = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13.5,
  lineHeight: 1.55,
  color: '#4A5D58',
  margin: 0,
});

export const SkeletonCard = styled('div')({
  background: 'rgba(255,255,255,0.5)',
  borderRadius: 16,
  padding: 26,
  border: '1px solid rgba(239,168,172,0.15)',
  height: 130,
  animation: 'pulse 1.6s ease-in-out infinite',
  '@keyframes pulse': {
    '0%, 100%': { opacity: 0.5 },
    '50%': { opacity: 0.9 },
  },
});
