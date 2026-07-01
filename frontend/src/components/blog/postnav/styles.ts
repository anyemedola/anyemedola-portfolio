import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Nav = styled('nav')({
  position: 'sticky',
  top: 0,
  background: 'rgba(251,241,230,.92)',
  backdropFilter: 'blur(14px)',
  borderBottom: `1px solid ${tokens.border}`,
  zIndex: 50,
});

export const NavInner = styled('div')({
  maxWidth: 920,
  margin: '0 auto',
  padding: '0 32px',
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 600px)': { padding: '0 22px' },
});

export const BackBtn = styled(Link)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textDecoration: 'none',
  color: tokens.warmBrown,
  transition: 'color .2s',
  minHeight: 44,
  padding: 0,
  '&:hover': { color: '#E0568A' },
  '&:hover .back-arrow': { transform: 'translateX(-4px)' },
});

export const BackArrow = styled('span')({
  transition: 'transform 0.2s',
  display: 'inline-block',
});

export const NavLogo = styled(Link)({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 700,
  fontSize: 19,
  textDecoration: 'none',
  color: tokens.ink,
  '& em': { fontStyle: 'italic', color: '#E0568A' },
});
