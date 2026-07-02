import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Area = styled('div')({
  border: `1.5px dashed ${tokens.border}`,
  borderRadius: 10,
  padding: '28px 20px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.2s, background 0.2s',
  position: 'relative',
  background: tokens.surface2,
  '&:hover': { borderColor: tokens.rose, background: tokens.roseGlow },
});

export const HiddenInput = styled('input')({
  position: 'absolute',
  inset: 0,
  opacity: 0,
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  border: 'none',
  padding: 0,
  background: 'none',
});

export const UploadIcon = styled('span')({
  fontSize: 28,
  opacity: 0.3,
  marginBottom: 10,
  display: 'block',
});

export const UploadLabel = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  color: tokens.textDim,
  fontWeight: 400,
  '& strong': { color: tokens.rose, fontWeight: 600 },
});

export const UploadSub = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  color: tokens.textMuted,
  marginTop: 4,
  letterSpacing: '0.06em',
});

export const Preview = styled('img')({
  width: '100%',
  height: 140,
  objectFit: 'cover',
  borderRadius: 8,
  marginBottom: 8,
  display: 'block',
});
