import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

const floatTwinkle = keyframes({
  '0%, 100%': { opacity: 0.25 },
  '50%': { opacity: 0.9 },
});

export const WomanRoot = styled('section')({
  position: 'relative',
  scrollMarginTop: 70,
  padding: '90px 40px',
  background: 'linear-gradient(165deg,#0C2926 0%,#123B37 50%,#14403C 100%)',
  color: '#F5C0C3',
  overflow: 'hidden',
  '@media (max-width: 900px)': { padding: '64px 22px' },
});

export const Star = styled('div', {
  shouldForwardProp: (prop) => !['top', 'left', 'size', 'delay', 'color'].includes(prop as string),
})<{ top: string; left: string; size: number; delay: string; color: string }>(
  ({ top, left, size, delay, color }) => ({
    position: 'absolute',
    top,
    left,
    width: size,
    height: size,
    borderRadius: '50%',
    background: color,
    animation: `${floatTwinkle} 3.2s ease-in-out infinite`,
    animationDelay: delay,
    pointerEvents: 'none',
  }),
);

export const Inner = styled('div')({
  position: 'relative',
  maxWidth: 880,
  margin: '0 auto',
  textAlign: 'center',
});

export const Eyebrow = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  fontWeight: 800,
  letterSpacing: '0.24em',
  textTransform: 'uppercase',
  color: '#EFA8AC',
  margin: '0 0 18px',
});

export const Title = styled('h2')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 300,
  fontSize: 'clamp(24px, 3.5vw, 34px)',
  lineHeight: 1.4,
  color: '#F5C0C3',
  margin: '0 0 14px',
});

export const Sub = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  lineHeight: 1.7,
  color: 'rgba(184,200,151,0.8)',
  margin: '0 auto 40px',
  maxWidth: '60ch',
});

export const Cards = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: 14,
  flexWrap: 'wrap',
});

export const NumerologyCard = styled('div')({
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.14)',
  borderRadius: 14,
  padding: '18px 22px',
  minWidth: 150,
  transition: 'background .3s',
  '&:hover': { background: 'rgba(255,255,255,0.12)' },
});

export const CardNum = styled('div')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 28,
  color: '#EFA8AC',
  lineHeight: 1.1,
});

export const CardLabel = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  color: 'rgba(184,200,151,0.7)',
  marginTop: 4,
});
