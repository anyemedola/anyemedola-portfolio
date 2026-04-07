import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Root = styled('div')({ maxWidth: 600 });

export const SectionTitle = styled('div')({
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontFamily: "'DM Sans', sans-serif",
  '&::after': { content: "''", flex: 1, height: 1, background: tokens.border },
});

export const FormGroup = styled('div')({ marginBottom: 22 });

export const Label = styled('label')({
  display: 'block',
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 8,
  fontFamily: "'DM Sans', sans-serif",
});

export const Input = styled('input')({
  width: '100%',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  fontWeight: 300,
  padding: '10px 14px',
  borderRadius: 2,
  transition: 'border-color 0.2s',
  outline: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});

export const Textarea = styled('textarea')({
  width: '100%',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  fontWeight: 300,
  padding: '10px 14px',
  borderRadius: 2,
  resize: 'vertical',
  minHeight: 80,
  lineHeight: 1.6,
  transition: 'border-color 0.2s',
  outline: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});
