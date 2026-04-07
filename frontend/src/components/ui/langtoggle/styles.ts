import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Wrapper = styled('div')({
  position: 'fixed',
  top: 28,
  right: 32,
  zIndex: 1000,
  display: 'flex',
  border: `1.5px solid ${tokens.ink}`,
  borderRadius: 2,
  overflow: 'hidden',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  '@media (max-width: 900px)': {
    top: 16,
    right: 16,
  },
});

export const LangBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
  background: active ? tokens.ink : 'transparent',
  border: 'none',
  padding: '8px 16px',
  cursor: 'none',
  transition: 'background 0.2s, color 0.2s',
  color: active ? tokens.cream : tokens.ink,
  minWidth: 44,
  minHeight: 44,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  letterSpacing: 'inherit',
  textTransform: 'inherit',
  '&:hover:not([data-active])': {
    background: tokens.mintLight,
  },
  '&:focus-visible': { outlineOffset: -3 },
}));
