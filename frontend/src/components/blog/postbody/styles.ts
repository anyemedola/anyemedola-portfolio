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
  boxShadow: '0 34px 64px -38px rgba(18,59,55,.5)',
  '@media (max-width: 900px)': { height: 260 },
});

export const Body = styled('article')({
  // Base typography — covers plain text nodes and br-separated lines
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 20,
  fontWeight: 400,
  lineHeight: 1.85,
  color: '#123B37',
  // !important is required: the GitHub Copilot browser extension injects inline styles
  // (font-family: "Ginto Copilot Variable", font-size: 15px, etc.) that override normal rules.
  // Inline styles always beat author CSS unless the author rule uses !important.
  '& p, & div': {
    fontFamily: "'Bodoni Moda', var(--font-bodoni), serif !important",
    fontSize: '20px !important',
    fontWeight: '400 !important',
    lineHeight: '1.85 !important',
    color: '#123B37 !important',
    marginBottom: '28px !important',
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
    color: '#EFA8AC',
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
    color: '#123B37',
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
      fontFamily: "'Bodoni Moda', var(--font-bodoni), serif !important",
      fontSize: 'clamp(24px, 3.4vw, 32px) !important',
      fontStyle: 'italic',
      fontWeight: '500 !important',
      color: `${tokens.ink} !important`,
      lineHeight: '1.3 !important',
      marginBottom: '0 !important',
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
    background: 'rgba(18,59,55,.07)',
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
    color: '#EFA8AC',
    opacity: 0.12,
  },
});
