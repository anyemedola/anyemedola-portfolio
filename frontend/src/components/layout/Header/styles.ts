import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const HeaderRoot = styled('header')({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backdropFilter: 'blur(14px)',
  background: 'rgba(251,241,230,.82)',
  borderBottom: `1px solid ${tokens.border}`,
  transition: 'box-shadow 0.3s ease',
  '&[data-scrolled="true"]': {
    boxShadow: '0 2px 20px -10px rgba(46,33,31,.2)',
  },
});

export const Inner = styled('div')({
  maxWidth: 1240,
  margin: '0 auto',
  padding: '0 40px',
  height: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 900px)': {
    padding: '0 20px',
  },
});

export const Logo = styled('a')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 700,
  fontSize: 22,
  letterSpacing: '0.01em',
  color: tokens.ink,
  textDecoration: 'none',
  display: 'flex',
  gap: 5,
});


export const NavRight = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 30,
  '@media (max-width: 900px)': {
    gap: 10,
  },
});

export const DesktopNav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  gap: 26,
  '@media (max-width: 900px)': {
    display: 'none',
  },
});

export const NavLink = styled('a')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  fontWeight: 500,
  color: tokens.warmBrownMid,
  textDecoration: 'none',
  transition: 'color .2s',
  '&:hover': { color: tokens.roseDeep },
});

export const CtaLink = styled('a')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  fontWeight: 700,
  padding: '9px 18px',
  borderRadius: 999,
  background: '#E0568A',
  color: '#fff',
  transition: 'background .25s',
  whiteSpace: 'nowrap',
  '&:hover': {
    background: '#C24C76',
  },
  '@media (max-width: 900px)': {
    display: 'none',
  },
});
