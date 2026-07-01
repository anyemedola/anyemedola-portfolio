import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import { tokens } from '@/theme/theme';
import { Eyebrow as BaseEyebrow } from '@/components/ui/sectionheader/styles';
import Polaroid from '@/components/ui/polaroid/Polaroid';

const slowDrift = keyframes({
  from: { transform: 'rotate(-4deg) translateY(0)' },
  to: { transform: 'rotate(-4deg) translateY(-14px)' },
});

export const HeroRoot = styled('header')({
  maxWidth: 1240,
  margin: '0 auto',
  padding: '64px 40px 96px',
  display: 'grid',
  gridTemplateColumns: '1.04fr .96fr',
  gap: 36,
  alignItems: 'center',
  scrollMarginTop: 70,
  '@media (max-width: 1024px)': {
    padding: '48px 32px 72px',
    gap: 28,
  },
  '@media (max-width: 760px)': {
    gridTemplateColumns: '1fr',
    gap: 20,
    padding: '32px 22px 56px',
  },
  '@media (max-width: 480px)': {
    gap: 16,
    padding: '24px 18px 48px',
  },
  '@media (max-width: 380px)': {
    gap: 12,
    padding: '20px 16px 40px',
  },
});

export const Collage = styled('div')({
  position: 'relative',
  height: 600,
  '@media (max-width: 1024px)': { height: 480 },
  '@media (max-width: 760px)': { height: 'auto' },
});

export const GlowOrb = styled('div')({
  position: 'absolute',
  top: 24,
  right: 30,
  width: '58%',
  height: '78%',
  borderRadius: '220px 220px 18px 18px',
  background: `linear-gradient(180deg, ${tokens.goldLight}, ${tokens.roseMid} 55%, ${tokens.rose})`,
  opacity: 0.22,
  filter: 'blur(2px)',
  '@media (max-width: 760px)': { display: 'none' },
});

export const MainFrame = styled(Polaroid)({
  position: 'absolute',
  top: 0,
  left: 8,
  width: 300,
  height: 392,
  animation: `${slowDrift} 5s ease-in-out infinite alternate`,
  '&:hover': { animation: 'none' },
  '@media (max-width: 760px)': {
    position: 'relative',
    left: 0,
    top: 0,
    width: '100%',
    height: 320,
    transform: 'none',
    animation: 'none',
  },
  '@media (max-width: 480px)': {
    height: 280,
  },
  '@media (max-width: 380px)': {
    height: 240,
  },
});

export const SmallFrameRight = styled(Polaroid)({
  position: 'absolute',
  bottom: 26,
  right: 28,
  width: 232,
  height: 300,
  '@media (max-width: 760px)': { display: 'none' },
});

export const SmallFrameLeft = styled(Polaroid)({
  position: 'absolute',
  bottom: 0,
  left: 40,
  width: 168,
  height: 210,
  '@media (max-width: 760px)': { display: 'none' },
});

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 760px)': { order: -1 },
});

export const Eyebrow = styled(BaseEyebrow)({
  letterSpacing: '.34em',
  marginBottom: 22,
  '@media (max-width: 480px)': { marginBottom: 14 },
  '@media (max-width: 380px)': { marginBottom: 10 },
});

export const HeroTitle = styled('h1')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 900,
  fontSize: 'clamp(64px, 7vw, 104px)',
  lineHeight: 0.9,
  letterSpacing: '-0.015em',
  margin: 0,
  color: tokens.ink,
  '@media (max-width: 1024px)': { fontSize: 'clamp(52px, 6vw, 88px)' },
  '@media (max-width: 760px)': { fontSize: 56 },
  '@media (max-width: 480px)': { fontSize: 48 },
  '@media (max-width: 380px)': { fontSize: 42 },
});

export const TitleItalic = styled('span')({
  fontStyle: 'italic',
  fontWeight: 500,
  color: '#E0568A',
  display: 'block',
});

export const HeroTag = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 21,
  lineHeight: 1.45,
  color: tokens.ink,
  fontWeight: 500,
  margin: '28px 0 14px',
  maxWidth: 460,
  '@media (max-width: 760px)': { fontSize: 18, margin: '22px 0 12px' },
  '@media (max-width: 480px)': { fontSize: 17, margin: '18px 0 10px' },
  '@media (max-width: 380px)': { fontSize: 16, margin: '14px 0 8px' },
});

export const HeroSub = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 16,
  lineHeight: 1.6,
  color: tokens.warmBrownMid,
  margin: '0 0 34px',
  maxWidth: 460,
  '@media (max-width: 760px)': { margin: '0 0 28px' },
  '@media (max-width: 480px)': { fontSize: 15, margin: '0 0 24px' },
  '@media (max-width: 380px)': { margin: '0 0 20px' },
});

export const Cta = styled('div')({
  display: 'flex',
  gap: 14,
  flexWrap: 'wrap',
  '@media (max-width: 380px)': {
    flexDirection: 'column',
    gap: 10,
  },
});

export const BtnPrimary = styled('a')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14.5,
  fontWeight: 700,
  padding: '14px 26px',
  borderRadius: 999,
  background: '#E0568A',
  color: '#fff',
  boxShadow: '0 12px 30px rgba(224,86,138,0.32)',
  transition: 'background .25s, box-shadow .25s',
  '&:hover': {
    background: '#C24C76',
    boxShadow: '0 8px 20px rgba(224,86,138,0.4)',
  },
  '@media (max-width: 380px)': {
    textAlign: 'center',
    padding: '13px 24px',
  },
});

export const BtnGhost = styled('a')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14.5,
  fontWeight: 700,
  padding: '14px 26px',
  borderRadius: 999,
  background: 'rgba(255,255,255,0.6)',
  border: '1px solid rgba(168,66,94,0.3)',
  color: '#A8425E',
  transition: 'background .25s, color .25s',
  '&:hover': {
    background: 'rgba(255,255,255,0.85)',
    color: '#C24C76',
  },
  '@media (max-width: 380px)': {
    textAlign: 'center',
    padding: '13px 24px',
  },
});
