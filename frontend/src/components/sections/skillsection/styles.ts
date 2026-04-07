import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const SkillsRoot = styled('section')({
  background: tokens.ink,
  padding: '100px 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: "'SKILLS'",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 280,
    color: 'rgba(255,255,255,0.02)',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    letterSpacing: '0.1em',
  },
});

export const Inner = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 56px',
  '@media (max-width: 900px)': {
    padding: '0 24px',
  },
});

export const SkillsHeader = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: 64,
});

export const SkillsTitle = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(52px, 6vw, 88px)',
  lineHeight: 0.9,
  color: tokens.cream,
  '& em': {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    color: tokens.mintOnDark,
  },
});

export const SkillsSubtitle = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 18,
  fontWeight: 300,
  fontStyle: 'italic',
  color: 'rgba(249,245,238,0.65)',
  maxWidth: 280,
  textAlign: 'right',
  lineHeight: 1.5,
});

export const Grid = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 2,
  listStyle: 'none',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
});

export const Card = styled('li')({
  background: 'rgba(255,255,255,0.04)',
  padding: '36px 32px',
  border: '1px solid rgba(255,255,255,0.06)',
  transition: 'background 0.3s ease, transform 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: 3,
    height: 0,
    background: tokens.mintOnDark,
    transition: 'height 0.4s ease',
    pointerEvents: 'none',
  },
  '&:hover::before': { height: '100%' },
  '&:hover': {
    background: 'rgba(110,207,184,0.07)',
    transform: 'translateY(-3px)',
    '& .skill-tag': {
      color: tokens.cream,
      borderColor: 'rgba(110,207,184,0.3)',
    },
  },
});

export const CardIcon = styled('div')({ fontSize: 28, marginBottom: 16 });

export const CardTitle = styled('h3')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.mintOnDark,
  marginBottom: 20,
});

export const TagList = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  listStyle: 'none',
});

export const Tag = styled('li')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 12,
  color: 'rgba(249,245,238,0.85)',
  background: 'rgba(255,255,255,0.06)',
  padding: '5px 12px',
  borderRadius: 2,
  border: '1px solid rgba(255,255,255,0.1)',
  transition: 'all 0.2s',
});
