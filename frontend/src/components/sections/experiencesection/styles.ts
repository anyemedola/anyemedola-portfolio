import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const ExpRoot = styled('section')({
  padding: '100px 56px',
  maxWidth: 1200,
  margin: '0 auto',
  '@media (max-width: 900px)': {
    padding: '72px 24px',
  },
});

export const ExpHeader = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 80,
  alignItems: 'end',
  marginBottom: 72,
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    gap: 24,
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
  '& em': {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontWeight: 300,
    color: tokens.mint,
  },
});

export const ExpIntro = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 19,
  fontWeight: 300,
  lineHeight: 1.7,
  color: '#4A4540',
  maxWidth: 440,
});

export const Timeline = styled('ol')({
  position: 'relative',
  listStyle: 'none',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 16,
    width: 1,
    height: '100%',
    background: tokens.border,
    pointerEvents: 'none',
  },
});

export const TimelineItem = styled('li')({
  display: 'grid',
  gridTemplateColumns: '40px 1fr',
  gap: 32,
  marginBottom: 56,
  '&:hover .timeline-dot': {
    background: tokens.pink,
    transform: 'scale(1.3)',
  },
});

export const Dot = styled('div')({
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: tokens.cream,
  border: `2px solid ${tokens.pink}`,
  marginTop: 8,
  position: 'relative',
  zIndex: 1,
  flexShrink: 0,
  transition: 'background 0.3s, transform 0.3s',
});

export const Role = styled('h3')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 28,
  letterSpacing: '0.04em',
  color: tokens.ink,
  lineHeight: 1,
  marginBottom: 4,
});

export const Company = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: tokens.pink,
  marginBottom: 4,
});

export const Period = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  color: tokens.warmGray,
  letterSpacing: '0.08em',
  marginBottom: 20,
});

export const Bullets = styled('ul')({
  listStyle: 'none',
  '& li': {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 17,
    fontWeight: 300,
    lineHeight: 1.6,
    color: '#4A4540',
    padding: '6px 0 6px 20px',
    position: 'relative',
    '&::before': {
      content: "'→'",
      position: 'absolute',
      left: 0,
      color: tokens.mint,
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 13,
      top: 8,
    },
  },
});
