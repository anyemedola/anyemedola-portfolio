import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

const slideIn = keyframes`
  from { transform: translateX(40px); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

export const Overlay = styled('div')({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.65)',
  zIndex: 200,
  backdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  '@media (max-width: 768px)': { alignItems: 'flex-end' },
});

export const Panel = styled('div')({
  width: 780,
  maxWidth: '100vw',
  height: '100vh',
  background: tokens.surface,
  borderLeft: `1px solid ${tokens.border}`,
  display: 'flex',
  flexDirection: 'column',
  animation: `${slideIn} 0.28s ease`,
  overflow: 'hidden',
  '@media (max-width: 768px)': {
    width: '100%',
    maxWidth: '100%',
    height: '92vh',
    borderLeft: 'none',
    borderTop: `1px solid ${tokens.border}`,
    borderRadius: '12px 12px 0 0',
  },
});

export const PanelHeader = styled('div')({
  padding: '24px 28px',
  borderBottom: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  '@media (max-width: 768px)': { padding: '18px 20px' },
});

export const PanelTitle = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 20,
  letterSpacing: '0.06em',
  color: tokens.cream,
});

export const PanelSubtitle = styled('div')({
  fontSize: 11,
  color: tokens.textMuted,
  marginTop: 2,
  fontFamily: "'DM Sans', sans-serif",
});

export const CloseBtn = styled('button')({
  width: 32, height: 32,
  borderRadius: 4,
  background: 'transparent',
  border: `1px solid ${tokens.border}`,
  color: tokens.textDim,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  transition: 'all 0.15s',
  flexShrink: 0,
  '&:hover': { background: tokens.surface3, color: tokens.text },
});

export const Body = styled('div')({
  flex: 1,
  overflowY: 'auto',
  padding: 28,
  '@media (max-width: 768px)': { padding: 20 },
});

export const Footer = styled('div')({
  padding: '20px 28px',
  borderTop: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  background: tokens.surface2,
  '@media (max-width: 768px)': { padding: '14px 20px', flexWrap: 'wrap', gap: 8 },
});

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

export const Divider = styled('hr')({ border: 'none', borderTop: `1px solid ${tokens.border}`, margin: '24px 0' });
export const FormGroup = styled('div')({ marginBottom: 22 });
export const FormRow3 = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 16,
  '@media (max-width: 768px)': { gridTemplateColumns: '1fr' },
});

export const Label = styled('label')({
  display: 'block',
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 8,
  fontFamily: "'DM Sans', sans-serif",
  '& span': { color: tokens.pink, marginLeft: 2 },
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
  outline: 'none',
  transition: 'border-color 0.2s',
  appearance: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});

export const Select = styled('select')({
  width: '100%',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  fontWeight: 300,
  padding: '10px 14px',
  borderRadius: 2,
  outline: 'none',
  cursor: 'pointer',
  transition: 'border-color 0.2s',
  appearance: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '& option': { background: tokens.surface2 },
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
  outline: 'none',
  transition: 'border-color 0.2s',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});

export const BtnDanger = styled('button')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  background: 'transparent',
  color: tokens.danger,
  border: `1px solid rgba(232,84,122,0.25)`,
  padding: '6px 14px',
  cursor: 'pointer',
  borderRadius: 2,
  minHeight: 30,
  transition: 'all 0.2s',
  '&:hover': { background: 'rgba(232,84,122,0.1)' },
});

export const FooterRight = styled('div')({
  display: 'flex', gap: 10, marginLeft: 'auto',
  '@media (max-width: 768px)': { flex: 1, justifyContent: 'flex-end' },
});
