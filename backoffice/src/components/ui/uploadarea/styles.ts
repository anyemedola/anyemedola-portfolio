import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Area = styled('div')({
  border: `1.5px dashed ${tokens.border}`,
  borderRadius: 2,
  padding: '28px 20px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.2s, background 0.2s',
  position: 'relative',
  background: tokens.surface2,
  '&:hover': { borderColor: tokens.mint, background: tokens.mintGlow },
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
  fontSize: 12,
  color: tokens.textDim,
  fontWeight: 400,
  fontFamily: "'DM Sans', sans-serif",
  '& strong': { color: tokens.mint, fontWeight: 500 },
});

export const UploadSub = styled('div')({
  fontSize: 10,
  color: tokens.textMuted,
  marginTop: 4,
  letterSpacing: '0.06em',
  fontFamily: "'DM Sans', sans-serif",
});

export const Preview = styled('img')({
  width: '100%',
  height: 140,
  objectFit: 'cover',
  borderRadius: 2,
  marginBottom: 8,
  display: 'block',
});
