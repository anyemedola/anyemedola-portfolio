import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

const marqueeAnim = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const Wrap = styled('div')({
  background: tokens.ink,
  overflow: 'hidden',
  padding: '14px 0',
});

export const Track = styled('div')({
  display: 'flex',
  animation: `${marqueeAnim} 22s linear infinite`,
  width: 'max-content',
});

export const Item = styled('span')({
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
