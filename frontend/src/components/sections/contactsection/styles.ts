import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const ContactRoot = styled('section')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '60vh',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

export const Left = styled('div')({
  background: tokens.ink,
  padding: '80px 72px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media (max-width: 900px)': {
    padding: '56px 24px',
  },
});

export const Title = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(56px, 6vw, 96px)',
  lineHeight: 0.88,
  color: tokens.cream,
  marginBottom: 32,
  '& em': {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    color: tokens.mintOnDark,
    fontWeight: 300,
  },
});

export const ContactText = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 19,
  fontWeight: 300,
  fontStyle: 'italic',
  color: 'rgba(249,245,238,0.7)',
  lineHeight: 1.65,
  marginBottom: 48,
});

export const Links = styled('address')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontStyle: 'normal',
});

export const ContactLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  textDecoration: 'none',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  color: tokens.cream,
  opacity: 0.7,
  transition: 'opacity 0.2s, gap 0.2s',
  padding: '12px 0',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  minHeight: 44,
  '&:hover': { opacity: 1, gap: 24 },
});

export const LinkIcon = styled('span')({
  color: tokens.mintOnDark,
  fontSize: 16,
  flexShrink: 0,
});

export const Right = styled('div')({
  background: tokens.pink,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 900px)': {
    minHeight: 260,
  },
});

export const Overlay = styled('div')({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to bottom, ${tokens.pink} 0%, transparent 50%)`,
  zIndex: 1,
  pointerEvents: 'none',
});

export const WatermarkText = styled('div')({
  position: 'absolute',
  bottom: 40,
  left: 40,
  zIndex: 2,
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 88,
  lineHeight: 0.85,
  color: 'rgba(255,255,255,0.2)',
  pointerEvents: 'none',
});
