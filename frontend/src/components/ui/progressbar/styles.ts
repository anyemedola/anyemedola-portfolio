import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const BarFill = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'variant',
})<{ width: number; variant?: 'gradient' | 'solid' }>(({ width, variant = 'solid' }) => ({
  height: '100%',
  width: `${width}%`,
  borderRadius: 999,
  transition: 'width 0.1s linear',
  background:
    variant === 'gradient'
      ? 'linear-gradient(90deg,#F6D79A,#E79CA8 55%,#B5546A)'
      : tokens.gold,
}));
