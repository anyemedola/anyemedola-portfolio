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
  background: 'linear-gradient(165deg,#1F1430 0%,#3A1E3A 50%,#5A2742 100%)',
  color: '#F6E4EC',
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
  color: '#F3A98C',
  margin: '0 0 18px',
});

export const Title = styled('h2')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 300,
  fontSize: 'clamp(24px, 3.5vw, 34px)',
  lineHeight: 1.4,
  color: '#F9EAF0',
  margin: '0 0 14px',
});

export const Sub = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  lineHeight: 1.7,
  color: '#D9BFCB',
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
  color: '#F3A98C',
  lineHeight: 1.1,
});

export const CardLabel = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  color: '#CDAFBD',
  marginTop: 4,
});
