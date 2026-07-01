'use client';

import Image from 'next/image';
import * as S from './styles';

type Props = {
  src: string;
  alt: string;
  rotate?: number;
  caption?: string;
  captionSize?: 'sm' | 'lg';
  objectPosition?: string;
  priority?: boolean;
  className?: string;
};

export default function Polaroid({
  src,
  alt,
  rotate = 0,
  caption,
  captionSize = 'lg',
  objectPosition,
  priority,
  className,
}: Props) {
  return (
    <S.Frame rotate={rotate} className={className}>
      <S.ImageArea>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover', objectPosition }}
          priority={priority}
        />
      </S.ImageArea>
      {caption && <S.Caption small={captionSize === 'sm'}>{caption}</S.Caption>}
    </S.Frame>
  );
}
