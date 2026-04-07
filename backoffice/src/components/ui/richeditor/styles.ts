import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Wrap = styled('div')({
  border: `1px solid ${tokens.border}`,
  borderRadius: 2,
  overflow: 'hidden',
  transition: 'border-color 0.2s',
  '&:focus-within': { borderColor: tokens.mint },
});

export const Toolbar = styled('div')({
  background: tokens.surface2,
  borderBottom: `1px solid ${tokens.border}`,
  padding: '8px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  flexWrap: 'wrap',
});

export const Sep = styled('div')({
  width: 1,
  height: 18,
  background: tokens.border,
  margin: '0 6px',
});

export const ToolBtn = styled('button')({
  background: 'none',
  border: 'none',
  color: tokens.textDim,
  fontSize: 12,
  fontWeight: 500,
  padding: '4px 8px',
  borderRadius: 2,
  cursor: 'pointer',
  transition: 'all 0.15s',
  minWidth: 28,
  minHeight: 26,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "'DM Sans', sans-serif",
  '&:hover': { background: tokens.surface3, color: tokens.text },
});

export const Body = styled('div')({
  background: tokens.surface2,
  minHeight: 240,
  padding: 16,
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 17,
  color: tokens.text,
  lineHeight: 1.7,
  outline: 'none',
  border: 'none',
  width: '100%',
  '& [data-placeholder]:empty::before': {
    content: 'attr(data-placeholder)',
    color: tokens.textMuted,
    pointerEvents: 'none',
  },
});
