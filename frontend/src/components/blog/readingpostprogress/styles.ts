import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Bar = styled('div')<{ width: number }>(({ width }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    height: 3,
    width: `${width}%`,
    background: tokens.pink,
    zIndex: 200,
    transition: 'width 0.1s linear',
    pointerEvents: 'none',
}));