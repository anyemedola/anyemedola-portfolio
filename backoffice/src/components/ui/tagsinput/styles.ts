import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Wrap = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  padding: '8px 10px',
  borderRadius: 2,
  minHeight: 44,
  cursor: 'text',
  transition: 'border-color 0.2s',
  '&:focus-within': { borderColor: tokens.mint },
});

export const Chip = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  background: tokens.surface3,
  color: tokens.mint,
  fontSize: 11,
  fontWeight: 500,
  padding: '3px 8px',
  borderRadius: 2,
  letterSpacing: '0.06em',
  fontFamily: "'DM Sans', sans-serif",
});

export const RemoveBtn = styled('button')({
  background: 'none',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  fontSize: 13,
  lineHeight: 1,
  padding: 0,
  opacity: 0.6,
  transition: 'opacity 0.15s',
  '&:hover': { opacity: 1 },
});

export const Field = styled('input')({
  border: 'none',
  background: 'none',
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  flex: 1,
  minWidth: 80,
  padding: '2px 4px',
  outline: 'none',
  '&::placeholder': { color: tokens.textMuted },
});

export const Hint = styled('p')({
  fontSize: 10,
  color: tokens.textMuted,
  marginTop: 6,
  letterSpacing: '0.04em',
  lineHeight: 1.5,
  fontFamily: "'DM Sans', sans-serif",
  '& strong': { color: tokens.textDim },
});
