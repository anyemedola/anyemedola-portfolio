'use client';

import * as S from './styles';

interface Props {
  icon: string;
  title: string;
  sub: string;
  action?: React.ReactNode;
}

export default function EmptyState({ icon, title, sub, action }: Props) {
  return (
    <S.Root>
      <S.Icon aria-hidden="true">{icon}</S.Icon>
      <S.Title>{title}</S.Title>
      <S.Sub dangerouslySetInnerHTML={{ __html: sub }} />
      {action}
    </S.Root>
  );
}
