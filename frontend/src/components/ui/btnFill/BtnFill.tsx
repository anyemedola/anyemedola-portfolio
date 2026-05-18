'use client';

import { ComponentProps } from 'react';
import * as S from './styles';

type Props = ComponentProps<typeof S.Root>;

export default function BtnFill(props: Props) {
  return <S.Root {...props} />;
}
