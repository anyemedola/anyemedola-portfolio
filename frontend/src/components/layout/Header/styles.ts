import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { ButtonPrimary } from '@/components/ui/button/styles';

export const HeaderRoot = styled('header')({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backdropFilter: 'blur(14px)',
  background: 'rgba(251,237,238,.82)',
  borderBottom: `1px solid ${tokens.border}`,
  transition: 'box-shadow 0.3s ease',
  '&[data-scrolled="true"]': {
    boxShadow: '0 2px 20px -10px rgba(18,59,55,.2)',
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

export const LogoBtn = styled('button')({
  display: 'flex',
  gap: 5,
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
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

const navLinkBase = {
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  fontWeight: 500,
  color: tokens.warmBrownMid,
  textDecoration: 'none',
  transition: 'color .2s',
  '&:hover': { color: tokens.roseDeep },
} as const;

export const NavLink = styled('a')(navLinkBase);

export const NavBtn = styled('button')({
  ...navLinkBase,
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const CtaBtn = styled(ButtonPrimary)({
  fontSize: 14,
  padding: '9px 18px',
  boxShadow: 'none',
  whiteSpace: 'nowrap',
  '&:hover': { boxShadow: 'none' },
  '@media (max-width: 900px)': {
    display: 'none',
  },
});
