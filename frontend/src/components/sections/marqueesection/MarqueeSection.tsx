'use client';

import * as S from './styles';

const skills = ['React.js', 'Next.js', 'TypeScript', 'UI/UX Design', 'Tailwind CSS', 'Figma', 'Ionic', 'React Query', 'Redux'];

export default function MarqueeSection() {
  const items = [...skills, ...skills];

  return (
    <S.Wrap aria-hidden="true" role="presentation">
      <S.Track>
        {items.map((skill, i) => (
          <S.Item key={i}>
            {skill} <span>✦</span>
          </S.Item>
        ))}
      </S.Track>
    </S.Wrap>
  );
}
