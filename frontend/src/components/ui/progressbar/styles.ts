import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const BarFill = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width',
})<{ width: number }>(({ width }) => ({
  height: '100%',
  width: `${width}%`,
  borderRadius: 999,
  transition: 'width 0.1s linear',
  background: tokens.gold,
}));
