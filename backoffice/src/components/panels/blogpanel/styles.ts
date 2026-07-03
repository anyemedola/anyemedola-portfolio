import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

const drawerIn = keyframes`
  from { transform: translateX(24px); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

export const Overlay = styled('div')({
  position: 'fixed',
  inset: 0,
  background: 'rgba(18,59,55,0.45)',
  zIndex: 200,
  backdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  '@media (max-width: 768px)': { alignItems: 'flex-end' },
});

export const Panel = styled('div')({
  width: 680,
  maxWidth: '100vw',
  height: '100vh',
  background: tokens.cream,
  borderLeft: `1px solid ${tokens.border}`,
  display: 'flex',
  flexDirection: 'column',
  animation: `${drawerIn} 0.28s cubic-bezier(.2,.7,.2,1)`,
  overflow: 'hidden',
  boxShadow: '-8px 0 40px -8px rgba(18,59,55,0.18)',
  '@media (max-width: 768px)': {
    width: '100%',
    maxWidth: '100%',
    height: '92vh',
    borderLeft: 'none',
    borderTop: `1px solid ${tokens.border}`,
    borderRadius: '16px 16px 0 0',
  },
});

export const PanelHeader = styled('div')({
  padding: '24px 28px',
  borderBottom: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  background: tokens.creamBg,
  '@media (max-width: 768px)': { padding: '18px 20px' },
});

export const PanelTitle = styled('div')({
  fontFamily: "'Newsreader', var(--font-newsreader), serif",
  fontStyle: 'italic',
  fontSize: 22,
  fontWeight: 400,
  color: tokens.ink,
});

export const PanelSubtitle = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  color: tokens.textMuted,
  marginTop: 2,
});

export const CloseBtn = styled('button')({
  width: 32, height: 32,
  borderRadius: 8,
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
  '&:hover': { background: tokens.surface2, color: tokens.text },
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
  background: tokens.creamBg,
  '@media (max-width: 768px)': { padding: '14px 20px', flexWrap: 'wrap', gap: 8 },
});

export const SectionTitle = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  '&::after': { content: "''", flex: 1, height: 1, background: tokens.border },
});

export const AutoTranslateNote = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 8,
  fontSize: 11,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontWeight: 500,
  color: tokens.gold,
  background: 'rgba(26,97,93,0.07)',
  border: '1px solid rgba(26,97,93,0.15)',
  borderRadius: 10,
  padding: '10px 14px',
  marginBottom: 22,
  lineHeight: 1.5,
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
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 8,
  '& span': { color: tokens.rose, marginLeft: 2 },
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
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  appearance: 'none',
  '&:focus': { borderColor: tokens.rose, boxShadow: `0 0 0 3px ${tokens.roseGlow}`, background: tokens.surface },
  '&::placeholder': { color: tokens.textMuted },
});

export const Select = styled('select')({
  width: '100%',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: 400,
  padding: '10px 14px',
  borderRadius: 10,
  outline: 'none',
  cursor: 'pointer',
  transition: 'border-color 0.2s',
  appearance: 'none',
  '&:focus': { borderColor: tokens.rose, background: tokens.surface },
  '& option': { background: tokens.cream },
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
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  '&:focus': { borderColor: tokens.rose, boxShadow: `0 0 0 3px ${tokens.roseGlow}`, background: tokens.surface },
  '&::placeholder': { color: tokens.textMuted },
});

export const BtnDanger = styled('button')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  background: 'transparent',
  color: tokens.danger,
  border: `1px solid rgba(208,80,96,0.25)`,
  padding: '6px 14px',
  cursor: 'pointer',
  borderRadius: 8,
  minHeight: 30,
  transition: 'all 0.2s',
  '&:hover': { background: 'rgba(208,80,96,0.08)' },
});

export const FooterRight = styled('div')({
  display: 'flex', gap: 10, marginLeft: 'auto',
  '@media (max-width: 768px)': { flex: 1, justifyContent: 'flex-end' },
});
