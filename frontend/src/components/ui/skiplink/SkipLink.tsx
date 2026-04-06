'use client';

import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { useLang } from '@/context/LangContext';

const Link = styled('a')({
  position: 'absolute',
  top: -100,
  left: 16,
  zIndex: 9999,
  background: tokens.ink,
  color: tokens.cream,
  padding: '12px 24px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textDecoration: 'none',
  borderRadius: '0 0 4px 4px',
  transition: 'top 0.2s',
  '&:focus': { top: 0 },
});

export default function SkipLink() {
  const { dict } = useLang();
  return <Link href="#main-content">{dict.skipLink.label}</Link>;
}
