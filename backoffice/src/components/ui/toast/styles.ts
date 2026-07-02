import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import type { ToastItem } from '@/context/AdminContext';

const toastIn = keyframes`
  from { transform: translateX(20px); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

export const Container = styled('div')({
  position: 'fixed',
  bottom: 24,
  right: 24,
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  '@media (max-width: 768px)': { bottom: 12, right: 12, left: 12 },
});

export const ToastEl = styled('div')<{ toastType: ToastItem['type'] }>(({ toastType }) => ({
  background: tokens.cream,
  border: `1px solid ${tokens.border}`,
  borderLeft: `3px solid ${
    toastType === 'error' ? tokens.danger :
    toastType === 'warning' ? tokens.warning :
    tokens.success
  }`,
  padding: '12px 18px',
  borderRadius: 12,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  color: tokens.text,
  minWidth: 240,
  animation: `${toastIn} 0.25s ease`,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  boxShadow: '0 4px 20px -4px rgba(18,59,55,0.14)',
  '@media (max-width: 768px)': { minWidth: 'unset' },
}));

export const ToastIcon = styled('span')({ fontSize: 14, flexShrink: 0 });
