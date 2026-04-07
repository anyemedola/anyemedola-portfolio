'use client';

import { useCustomCursor } from '@/hooks/useCustomCursor';
import * as S from './styles';

export default function CustomCursor() {
  useCustomCursor();

  return <S.CursorDot id="cursor" aria-hidden="true" role="presentation" />;
}
