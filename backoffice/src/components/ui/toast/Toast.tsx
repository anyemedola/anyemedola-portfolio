'use client';

import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import { useAdmin, ToastItem } from '@/context/AdminContext';

const toastIn = keyframes`
  from { transform: translateX(20px); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

const Container = styled('div')({
  position: 'fixed',
  bottom: 24,
  right: 24,
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  '@media (max-width: 768px)': { bottom: 12, right: 12, left: 12 },
});

const ToastEl = styled('div')<{ toastType: ToastItem['type'] }>(({ toastType }) => ({
  background: tokens.surface3,
  border: `1px solid ${tokens.border}`,
  borderLeft: `3px solid ${
    toastType === 'error' ? tokens.danger :
    toastType === 'warning' ? tokens.warning :
    tokens.mint
  }`,
  padding: '12px 18px',
  borderRadius: 2,
  fontSize: 12,
  color: tokens.text,
  minWidth: 240,
  animation: `${toastIn} 0.25s ease`,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontFamily: "'DM Sans', sans-serif",
  '@media (max-width: 768px)': { minWidth: 'unset' },
}));

const ToastIcon = styled('span')({ fontSize: 14, flexShrink: 0 });

const icons = { success: '✓', error: '✕', warning: '⚠' };

export default function Toast() {
  const { toasts } = useAdmin();

  return (
    <Container aria-live="polite" aria-atomic="true">
      {toasts.map(t => (
        <ToastEl key={t.id} toastType={t.type} role="status">
          <ToastIcon aria-hidden="true">{icons[t.type]}</ToastIcon>
          {t.msg}
        </ToastEl>
      ))}
    </Container>
  );
}
