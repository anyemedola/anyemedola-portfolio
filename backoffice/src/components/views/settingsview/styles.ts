import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Root = styled('div')({
  maxWidth: 600,
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
  borderRadius: 16,
  padding: '32px 36px',
  '@media (max-width: 768px)': { padding: '24px 20px' },
});

export const SectionTitle = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  '&::after': { content: "''", flex: 1, height: 1, background: tokens.border },
});

export const FormGroup = styled('div')({ marginBottom: 22 });

export const Label = styled('label')({
  display: 'block',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 8,
});

export const Input = styled('input')({
  width: '100%',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: 400,
  padding: '10px 14px',
  borderRadius: 10,
  transition: 'border-color 0.2s, box-shadow 0.2s',
  outline: 'none',
  '&:focus': { borderColor: tokens.rose, boxShadow: `0 0 0 3px ${tokens.roseGlow}`, background: tokens.surface },
  '&::placeholder': { color: tokens.textMuted },
});

export const Textarea = styled('textarea')({
  width: '100%',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: 400,
  padding: '10px 14px',
  borderRadius: 10,
  resize: 'vertical',
  minHeight: 80,
  lineHeight: 1.6,
  transition: 'border-color 0.2s, box-shadow 0.2s',
  outline: 'none',
  '&:focus': { borderColor: tokens.rose, boxShadow: `0 0 0 3px ${tokens.roseGlow}`, background: tokens.surface },
  '&::placeholder': { color: tokens.textMuted },
});
