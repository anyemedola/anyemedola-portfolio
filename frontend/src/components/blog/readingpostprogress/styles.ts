import { styled } from '@mui/material/styles';
import { BarFill } from '@/components/ui/progressbar/styles';

export const Track = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: 4,
  zIndex: 60,
  background: 'rgba(18,59,55,.06)',
  pointerEvents: 'none',
});

export const Bar = styled(BarFill)({
  borderRadius: 0,
  background: 'linear-gradient(90deg,#B8C897,#EFA8AC 55%,#C24C76)',
});
