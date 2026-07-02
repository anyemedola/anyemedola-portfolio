import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const Row = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 0',
  borderBottom: `1px solid ${tokens.border}`,
  '&:last-child': { borderBottom: 'none' },
});

export const Info = styled('div')({ flex: 1 });

export const LabelText = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: 500,
  color: tokens.text,
});

export const LabelSub = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  color: tokens.textMuted,
  marginTop: 2,
});

export const SwitchLabel = styled('label')({
  position: 'relative',
  width: 40,
  height: 22,
  flexShrink: 0,
  marginLeft: 16,
  cursor: 'pointer',
  '& input': { opacity: 0, width: 0, height: 0, position: 'absolute' },
});

export const Slider = styled('span')({
  position: 'absolute',
  inset: 0,
  background: tokens.surface3,
  borderRadius: 22,
  transition: 'background 0.2s',
  '&::before': {
    content: "''",
    position: 'absolute',
    width: 16, height: 16,
    borderRadius: '50%',
    background: tokens.textMuted,
    top: 3, left: 3,
    transition: 'transform 0.2s, background 0.2s',
  },
  'input:checked + &': {
    background: tokens.roseGlow,
    border: `1px solid ${tokens.rose}`,
  },
  'input:checked + &::before': {
    transform: 'translateX(18px)',
    background: tokens.rose,
  },
});
