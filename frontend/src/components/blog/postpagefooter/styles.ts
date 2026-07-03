import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Footer = styled('footer')({
  borderTop: `1px solid ${tokens.border}`,
  background: tokens.creamLight,
});

export const Inner = styled('div')({
  maxWidth: 680,
  margin: '0 auto',
  padding: '48px 32px',
  textAlign: 'center',
  '@media (max-width: 600px)': { padding: '40px 24px' },
});

export const FooterP = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  color: tokens.warmBrownLight,
  margin: '0 0 22px',
});

export const BackBtn = styled(Link)({
  display: 'inline-block',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  fontWeight: 600,
  padding: '13px 26px',
  borderRadius: 999,
  border: `1px solid ${tokens.ink}`,
  color: tokens.ink,
  textDecoration: 'none',
  transition: 'background .2s, color .2s',
  '&:hover': { background: tokens.ink, color: tokens.cream },
});
