import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

const fadeUp = keyframes`
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  to { opacity: 1; }
`;

export const HeroRoot = styled('section')({
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

export const HeroLeft = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '0 56px 80px 56px',
  position: 'relative',
  zIndex: 2,
  '@media (max-width: 900px)': {
    padding: '100px 24px 48px',
  },
});

export const Eyebrow = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: tokens.warmGray,
  marginBottom: 24,
  opacity: 0,
  transform: 'translateY(20px)',
  animation: `${fadeUp} 0.8s 0.2s forwards`,
});

export const HeroTitle = styled('h1')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(72px, 9vw, 130px)',
  lineHeight: 0.88,
  letterSpacing: '0.02em',
  color: tokens.ink,
  marginBottom: 32,
  opacity: 0,
  transform: 'translateY(30px)',
  animation: `${fadeUp} 0.9s 0.35s forwards`,
  '& span': {
    color: tokens.pink,
    display: 'block',
  },
});

export const HeroDesc = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 20,
  fontWeight: 300,
  lineHeight: 1.65,
  color: tokens.warmGray,
  maxWidth: 420,
  marginBottom: 48,
  opacity: 0,
  transform: 'translateY(20px)',
  animation: `${fadeUp} 0.9s 0.5s forwards`,
  '& em': {
    color: tokens.ink,
    fontStyle: 'italic',
  },
});

export const HeroCta = styled('div')({
  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',
  opacity: 0,
  transform: 'translateY(20px)',
  animation: `${fadeUp} 0.9s 0.65s forwards`,
});

const Btn = styled('a')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '14px 32px',
  border: `2px solid ${tokens.ink}`,
  cursor: 'none',
  transition: 'all 0.25s ease',
  display: 'inline-block',
  minHeight: 44,
});

export const BtnFill = styled(Btn)({
  background: tokens.ink,
  color: tokens.cream,
  '&:hover': {
    background: tokens.pink,
    borderColor: tokens.pink,
    transform: 'translateY(-2px)',
  },
});

export const BtnOutline = styled(Btn)({
  color: tokens.ink,
  background: 'transparent',
  '&:hover': {
    background: tokens.mintLight,
    transform: 'translateY(-2px)',
  },
});

export const HeroRight = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  opacity: 0,
  animation: `${fadeIn} 1.2s 0.4s forwards`,
  '&::before': {
    content: "''",
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(135deg, ${tokens.mint} 0%, transparent 60%)`,
    opacity: 0.25,
    zIndex: 1,
    pointerEvents: 'none',
  },
  '@media (max-width: 900px)': {
    minHeight: '55vw',
  },
});

export const HeroBadge = styled('div')({
  position: 'absolute',
  bottom: 48,
  left: -24,
  background: tokens.ink,
  color: tokens.cream,
  padding: '20px 32px',
  zIndex: 2,
  opacity: 0,
  animation: `${fadeUp} 0.9s 0.9s forwards`,
  '& strong': {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 36,
    letterSpacing: '0.04em',
    display: 'block',
  },
  '& span': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: tokens.mintOnDark,
  },
});
