import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const AboutRoot = styled('section')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '80vh',
  alignItems: 'center',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

export const ImageCol = styled('div')({
  position: 'relative',
  height: '100%',
  minHeight: 600,
  overflow: 'hidden',
  '& img': {
    transition: 'transform 0.6s ease',
  },
  '&:hover img': {
    transform: 'scale(1.03)',
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 80,
    height: 80,
    background: tokens.pink,
    pointerEvents: 'none',
  },
  '@media (max-width: 900px)': {
    minHeight: 280,
  },
});

export const Content = styled('div')({
  padding: '80px 72px 80px 64px',
  '@media (max-width: 900px)': {
    padding: '48px 24px',
  },
});

export const SectionLabel = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: tokens.pink,
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  '&::before': {
    content: "''",
    display: 'block',
    width: 32,
    height: 1.5,
    background: tokens.pink,
    flexShrink: 0,
  },
});

export const SectionTitle = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(48px, 5vw, 72px)',
  lineHeight: 0.9,
  letterSpacing: '0.02em',
  color: tokens.ink,
  marginBottom: 32,
  '& em': {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontWeight: 300,
    color: tokens.mint,
  },
});

export const AboutText = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 19,
  fontWeight: 300,
  lineHeight: 1.7,
  color: '#3D3830',
  marginBottom: 16,
  '& strong': { fontWeight: 600, color: tokens.ink },
});

export const Stats = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 24,
  marginTop: 48,
  paddingTop: 40,
  borderTop: `1px solid ${tokens.border}`,
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

export const StatNum = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 52,
  lineHeight: 1,
  color: tokens.ink,
  '& span': { color: tokens.pink },
});

export const StatLabel = styled('div')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: tokens.warmGray,
  marginTop: 4,
});
