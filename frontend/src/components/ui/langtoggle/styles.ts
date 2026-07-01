import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  background: tokens.borderForm,
  padding: 4,
  borderRadius: 999,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 600,
});

export const LangBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
  background: active ? '#E0568A' : 'transparent',
  border: 'none',
  padding: '6px 11px',
  borderRadius: 999,
  cursor: 'none',
  transition: 'background 0.2s, color 0.2s',
  color: active ? '#fff' : tokens.warmBrownLight,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  minWidth: 36,
  minHeight: 32,
  '&:hover': {
    color: active ? tokens.cream : tokens.ink,
  },
  '&:focus-visible': { outlineOffset: -3 },
}));
