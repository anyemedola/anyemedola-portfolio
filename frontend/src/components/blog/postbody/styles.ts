import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Wrap = styled('div')({
  maxWidth: 680,
  margin: '0 auto',
  padding: '64px 32px 80px',
  '@media (max-width: 900px)': {
    padding: '48px 24px 64px',
  },
});

export const Cover = styled('div')({
  maxWidth: 960,
  margin: '0 auto 72px',
  padding: '0 40px',
  '@media (max-width: 900px)': {
    padding: '0 24px',
  },
});

export const CoverWide = styled('div')({
  maxWidth: 920,
  margin: '48px auto 0',
  padding: '0 32px',
  '@media (max-width: 900px)': {
    padding: '0 24px',
  },
});

export const CoverReal = styled('div')({
  borderRadius: 20,
  overflow: 'hidden',
  height: 420,
  position: 'relative',
  boxShadow: '0 34px 64px -38px rgba(120,60,50,.5)',
  '@media (max-width: 900px)': { height: 260 },
});

export const CoverImg = styled('div')({
  width: '100%',
  aspectRatio: '16/7',
  background: tokens.ink,
  overflow: 'hidden',
  borderRadius: 16,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 16,
  '&::before': {
    content: "''",
    position: 'absolute',
    inset: 0,
    background: `
      repeating-linear-gradient(45deg, rgba(221,169,74,0.05) 0px, rgba(221,169,74,0.05) 1px, transparent 1px, transparent 48px),
      repeating-linear-gradient(-45deg, rgba(181,84,106,0.05) 0px, rgba(181,84,106,0.05) 1px, transparent 1px, transparent 48px)
    `,
  },
});

export const CoverPlaceholderIcon = styled('span')({
  fontSize: 56,
  opacity: 0.12,
  zIndex: 1,
});

export const CoverPlaceholderText = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: 'rgba(251,241,230,0.2)',
  zIndex: 1,
});

export const CoverCaption = styled('figcaption')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  color: tokens.warmBrownMid,
  letterSpacing: '0.08em',
  marginTop: 12,
  fontStyle: 'italic',
});

export const Body = styled('article')({
  '& p': {
    fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.85,
    color: '#3A2A28',
    marginBottom: 28,
  },
  '& h2': {
    fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
    fontWeight: 700,
    fontSize: 'clamp(28px, 3.5vw, 42px)',
    letterSpacing: '-0.01em',
    color: tokens.ink,
    margin: '56px 0 20px',
    lineHeight: 1.05,
  },
  '& h3': {
    fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: tokens.goldDeep,
    margin: '40px 0 16px',
  },
  '& strong': { fontWeight: 700, color: tokens.ink },
  '& em': { fontStyle: 'italic', color: tokens.warmBrownMid },
  '& a': {
    color: '#E0568A',
    textDecoration: 'underline',
    textUnderlineOffset: 3,
    transition: 'color 0.2s',
    '&:hover': { color: '#C24C76' },
  },
  '& ul, & ol': {
    fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.7,
    color: '#3A2A28',
    paddingLeft: 28,
    marginBottom: 28,
  },
  '& ul li': { listStyle: 'disc', marginBottom: 8 },
  '& ol li': { listStyle: 'decimal', marginBottom: 8 },
  '& blockquote': {
    borderLeft: `3px solid ${tokens.gold}`,
    padding: '4px 0 4px 28px',
    margin: '52px 0',
    '& p': {
      fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
      fontSize: 'clamp(24px, 3.4vw, 32px)',
      fontStyle: 'italic',
      fontWeight: 500,
      color: tokens.ink,
      lineHeight: 1.3,
      marginBottom: 0,
    },
    '& cite': {
      fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: tokens.warmBrownMid,
      fontStyle: 'normal',
    },
  },
  '& pre': {
    background: tokens.ink,
    color: tokens.gold,
    fontFamily: "'Courier New', monospace",
    fontSize: 14,
    lineHeight: 1.7,
    padding: '28px 32px',
    margin: '32px 0',
    overflowX: 'auto',
    borderRadius: 8,
  },
  '& code': {
    fontFamily: "'Courier New', monospace",
    fontSize: 14,
    background: 'rgba(46,33,31,.07)',
    padding: '2px 8px',
    borderRadius: 4,
    color: tokens.ink,
  },
  '& pre code': { background: 'transparent', padding: 0, color: 'inherit', fontSize: 'inherit' },
  '& hr': { border: 'none', borderTop: `1px solid ${tokens.border}`, margin: '56px 0' },
});

export const Pullquote = styled('div')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 26,
  fontWeight: 400,
  fontStyle: 'italic',
  lineHeight: 1.45,
  color: tokens.ink,
  textAlign: 'center',
  padding: '48px 0',
  margin: '16px 0 44px',
  borderTop: `1px solid ${tokens.border}`,
  borderBottom: `1px solid ${tokens.border}`,
  position: 'relative',
  '&::before': {
    content: '"""',
    fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
    fontSize: 120,
    lineHeight: 0,
    position: 'absolute',
    top: 60,
    left: -20,
    color: '#E0568A',
    opacity: 0.12,
  },
});
