'use client';

import { styled } from '@mui/material/styles';
import { useCustomCursor } from '@/hooks/useCustomCursor';
import { tokens } from '@/theme/theme';

const CursorDot = styled('div')({
  position: 'fixed',
  width: 12,
  height: 12,
  background: tokens.pink,
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 9999,
  transform: 'translate(-50%, -50%)',
  transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
  mixBlendMode: 'multiply',
  '&.big': {
    width: 48,
    height: 48,
    background: tokens.mint,
  },
  '@media (pointer: coarse)': {
    display: 'none',
  },
});

export default function CustomCursor() {
  useCustomCursor();

  return <CursorDot id="cursor" aria-hidden="true" role="presentation" />;
}
