import { styled, keyframes } from '@mui/material/styles';

const floatTwinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50%       { opacity: 0.85; }
`;

export const StarDot = styled('div', {
  shouldForwardProp: (p) => !['top', 'left', 'size', 'delay', 'color'].includes(p as string),
})<{ top: string; left: string; size: number; delay: string; color: string }>(
  ({ top, left, size, delay, color }) => ({
    position: 'absolute',
    top,
    left,
    width: size,
    height: size,
    borderRadius: '50%',
    background: color,
    animation: `${floatTwinkle} 3.2s ease-in-out infinite`,
    animationDelay: delay,
    pointerEvents: 'none',
  }),
);
