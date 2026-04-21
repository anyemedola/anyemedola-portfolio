'use client';

import * as S from './styles';

interface Props {
  variant: 'published' | 'draft' | 'featured';
  children: React.ReactNode;
}

export default function Badge({ variant, children }: Props) {
  return (
    <S.BadgeRoot variant={variant}>
      <S.BadgeDot aria-hidden="true" />
      {children}
    </S.BadgeRoot>
  );
}
