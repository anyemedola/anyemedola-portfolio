import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import Link from 'next/link';
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
    height: 'auto',
    minHeight: 'auto',
    padding: '72px 22px 40px',
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  '@media (max-width: 480px)': {
    padding: '68px 18px 16px',
    gap: 14,
  },
  '@media (max-width: 380px)': {
    padding: '68px 16px 12px',
    gap: 12,
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
  '@media (max-width: 480px)': {
    width: 210,
    height: 260,
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
  '@media (max-width: 480px)': { width: 152, height: 198, borderRadius: '76px 76px 9px 9px' },
  '@media (max-width: 380px)': { width: 136, height: 177, borderRadius: '68px 68px 8px 8px' },
});

export const PortraitImgWrap = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '181px 181px 14px 14px',
  overflow: 'hidden',
  '& img': { objectFit: 'cover', objectPosition: '50% 20%' },
  '@media (max-width: 760px)': { borderRadius: '92px 92px 4px 4px' },
  '@media (max-width: 480px)': { borderRadius: '68px 68px 3px 3px' },
  '@media (max-width: 380px)': { borderRadius: '60px 60px 3px 3px' },
});

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const Eyebrow = styled(BaseEyebrow)({
  letterSpacing: '.34em',
  marginBottom: 22,
  '@media (max-width: 480px)': { marginBottom: 10 },
  '@media (max-width: 380px)': { marginBottom: 8 },
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
  '@media (max-width: 760px)': { fontSize: 54 },
  '@media (max-width: 480px)': { fontSize: 44, lineHeight: 0.92 },
  '@media (max-width: 380px)': { fontSize: 40, lineHeight: 0.92 },
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
  '@media (max-width: 480px)': { fontSize: 16, margin: '14px 0 8px' },
  '@media (max-width: 380px)': { fontSize: 15, margin: '12px 0 6px' },
});

export const HeroSub = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 16,
  lineHeight: 1.6,
  color: tokens.warmBrownMid,
  margin: '0 0 34px',
  maxWidth: 460,
  '@media (max-width: 760px)': { margin: '0 0 28px' },
  '@media (max-width: 480px)': { fontSize: 14, margin: '0 0 18px' },
  '@media (max-width: 380px)': { margin: '0 0 14px' },
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

export const BtnPrimary = styled('button')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14.5,
  fontWeight: 700,
  padding: '14px 26px',
  borderRadius: 999,
  border: 'none',
  cursor: 'pointer',
  background: '#1A615D',
  color: '#fff',
  boxShadow: '0 12px 30px rgba(26,97,93,0.32)',
  transition: 'background .25s, box-shadow .25s',
  '&:hover': {
    background: '#0E4E4A',
    boxShadow: '0 8px 20px rgba(26,97,93,0.4)',
  },
  '@media (max-width: 480px)': {
    padding: '11px 22px',
    fontSize: 14,
  },
  '@media (max-width: 380px)': {
    textAlign: 'center',
    padding: '10px 20px',
  },
});

export const ResumeCta = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 8,
  marginTop: 14,
  '@media (max-width: 480px)': { marginTop: 10 },
});

export const ResumeLabel = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: tokens.warmBrownMid,
});

export const ResumePill = styled(Link)({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: 600,
  color: '#1A615D',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: 999,
  border: '1px solid rgba(26,97,93,0.25)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  transition: 'background .2s, border-color .2s',
  '&:hover': {
    background: 'rgba(26,97,93,0.07)',
    borderColor: 'rgba(26,97,93,0.5)',
  },
});

export const BtnGhost = styled('button')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14.5,
  fontWeight: 700,
  padding: '14px 26px',
  borderRadius: 999,
  cursor: 'pointer',
  background: 'rgba(255,255,255,0.6)',
  border: '1px solid rgba(26,97,93,0.3)',
  color: '#1A615D',
  transition: 'background .25s, color .25s',
  '&:hover': {
    background: 'rgba(255,255,255,0.85)',
    color: '#0E4E4A',
  },
  '@media (max-width: 480px)': {
    padding: '11px 22px',
    fontSize: 14,
  },
  '@media (max-width: 380px)': {
    textAlign: 'center',
    padding: '10px 20px',
  },
});
