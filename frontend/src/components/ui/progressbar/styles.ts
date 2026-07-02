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
      ? 'linear-gradient(90deg,#B8C897,#EFA8AC 55%,#C24C76)'
      : tokens.gold,
}));
