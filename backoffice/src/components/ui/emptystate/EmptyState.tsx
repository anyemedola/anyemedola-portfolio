'use client';

import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

const Root = styled('div')({
  textAlign: 'center',
  padding: '72px 40px',
  border: `1px dashed ${tokens.border}`,
  background: tokens.surface,
});

const Icon = styled('span')({
  fontSize: 40,
  opacity: 0.15,
  marginBottom: 16,
  display: 'block',
});

const Title = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 24,
  letterSpacing: '0.06em',
  color: tokens.cream,
  opacity: 0.4,
  marginBottom: 8,
});

const Sub = styled('div')({
  fontSize: 12,
  color: tokens.textMuted,
  marginBottom: 24,
  lineHeight: 1.6,
});

interface Props {
  icon: string;
  title: string;
  sub: string;
  action?: React.ReactNode;
}

export default function EmptyState({ icon, title, sub, action }: Props) {
  return (
    <Root>
      <Icon aria-hidden="true">{icon}</Icon>
      <Title>{title}</Title>
      <Sub dangerouslySetInnerHTML={{ __html: sub }} />
      {action}
    </Root>
  );
}
