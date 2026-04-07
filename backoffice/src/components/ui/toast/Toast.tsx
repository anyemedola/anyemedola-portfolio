'use client';

import { useAdmin } from '@/context/AdminContext';
import * as S from './styles';

const icons = { success: '✓', error: '✕', warning: '⚠' };

export default function Toast() {
  const { toasts } = useAdmin();

  return (
    <S.Container aria-live="polite" aria-atomic="true">
      {toasts.map(t => (
        <S.ToastEl key={t.id} toastType={t.type} role="status">
          <S.ToastIcon aria-hidden="true">{icons[t.type]}</S.ToastIcon>
          {t.msg}
        </S.ToastEl>
      ))}
    </S.Container>
  );
}
