import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import { tokens } from '@/theme/theme';
import { Eyebrow as BaseEyebrow } from '@/components/ui/sectionheader/styles';

const portraitDrift = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-14px)' },
});

export const HeroRoot = styled('header')({
  maxWidth: 1240,
  margin: '0 auto',
  padding: '64px 40px 96px',
  minHeight: '100dvh',
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
    display: 'flex',
    flexDirection: 'column',
    height: '100dvh',
    minHeight: '100dvh',
    padding: '80px 22px 24px',
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  '@media (max-width: 480px)': {
    padding: '76px 18px 20px',
  },
  '@media (max-width: 380px)': {
    padding: '76px 16px 16px',
  },
});

export const PortraitArea = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  '@media (max-width: 760px)': {
    display: 'flex',
    justifyContent: 'center',
    flexShrink: 0,
    alignSelf: 'auto',
  },
});

export const PortraitGlow = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -52%)',
  width: 460,
  height: 580,
  borderRadius: '230px 230px 22px 22px',
  background: `linear-gradient(180deg, ${tokens.goldLight}, ${tokens.roseMid} 55%, ${tokens.rose})`,
  opacity: 0.2,
  filter: 'blur(8px)',
  pointerEvents: 'none',
  '@media (max-width: 760px)': {
    width: 260,
    height: 320,
    borderRadius: '130px 130px 16px 16px',
    transform: 'translate(-50%, -50%)',
  },
});

export const PortraitWrap = styled('div')({
  position: 'relative',
  zIndex: 1,
  width: 380,
  height: 500,
  borderRadius: '190px 190px 22px 22px',
  padding: 9,
  background: 'linear-gradient(160deg,#F2C6C9,#EFA8AC 52%,#1A615D)',
  boxShadow: '0 30px 70px rgba(20,48,45,0.32)',
  animation: `${portraitDrift} 5s ease-in-out infinite alternate`,
  flexShrink: 0,
  '@media (max-width: 1024px)': { width: 320, height: 422 },
  '@media (max-width: 760px)': {
    width: 200,
    height: 260,
    borderRadius: '100px 100px 12px 12px',
    padding: 8,
  },
  '@media (max-width: 480px)': { width: 170, height: 221, borderRadius: '85px 85px 10px 10px' },
  '@media (max-width: 380px)': { width: 150, height: 195, borderRadius: '75px 75px 10px 10px' },
});

export const PortraitImgWrap = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '181px 181px 14px 14px',
  overflow: 'hidden',
  '@media (max-width: 760px)': { borderRadius: '92px 92px 4px 4px' },
  '@media (max-width: 480px)': { borderRadius: '78px 78px 3px 3px' },
  '@media (max-width: 380px)': { borderRadius: '68px 68px 3px 3px' },
});

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
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
  color: '#EFA8AC',
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
  background: '#1A615D',
  color: '#fff',
  boxShadow: '0 12px 30px rgba(26,97,93,0.32)',
  transition: 'background .25s, box-shadow .25s',
  '&:hover': {
    background: '#0E4E4A',
    boxShadow: '0 8px 20px rgba(26,97,93,0.4)',
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
  border: '1px solid rgba(26,97,93,0.3)',
  color: '#1A615D',
  transition: 'background .25s, color .25s',
  '&:hover': {
    background: 'rgba(255,255,255,0.85)',
    color: '#0E4E4A',
  },
  '@media (max-width: 380px)': {
    textAlign: 'center',
    padding: '13px 24px',
  },
});
