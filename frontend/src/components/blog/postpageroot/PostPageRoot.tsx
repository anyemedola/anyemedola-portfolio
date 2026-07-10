'use client';

import type { ReactNode } from 'react';
import * as S from './styles';

export default function PostPageRoot({ children }: { children: ReactNode }) {
  return <S.Root>{children}</S.Root>;
}
