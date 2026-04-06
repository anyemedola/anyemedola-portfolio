'use client';

import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

const marqueeAnim = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Wrap = styled('div')({
  background: tokens.ink,
  overflow: 'hidden',
  padding: '14px 0',
});

const Track = styled('div')({
  display: 'flex',
  animation: `${marqueeAnim} 22s linear infinite`,
  width: 'max-content',
});

const Item = styled('span')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 18,
  letterSpacing: '0.12em',
  color: tokens.cream,
  padding: '0 40px',
  whiteSpace: 'nowrap',
  '& span': {
    color: tokens.mintOnDark,
    marginRight: 40,
  },
});

const skills = ['React.js', 'Next.js', 'TypeScript', 'UI/UX Design', 'Tailwind CSS', 'Figma', 'Ionic', 'React Query', 'Redux'];

export default function MarqueeSection() {
  const items = [...skills, ...skills];

  return (
    <Wrap aria-hidden="true" role="presentation">
      <Track>
        {items.map((skill, i) => (
          <Item key={i}>
            {skill} <span>✦</span>
          </Item>
        ))}
      </Track>
    </Wrap>
  );
}
