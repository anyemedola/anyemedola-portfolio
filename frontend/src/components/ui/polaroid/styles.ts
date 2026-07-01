import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Frame = styled('div', {
  shouldForwardProp: (prop) => prop !== 'rotate',
})<{ rotate?: number }>(({ rotate = 0 }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: tokens.creamLight,
  borderRadius: 10,
  padding: '10px 10px 16px',
  boxShadow: '0 16px 32px -18px rgba(46,33,31,.4)',
  transform: `rotate(${rotate}deg)`,
  transition: 'transform .45s cubic-bezier(.2,.7,.2,1), box-shadow .45s',
  '&:hover': {
    transform: 'rotate(0deg) translateY(-6px)',
    boxShadow: '0 26px 44px -20px rgba(46,33,31,.5)',
  },
  '&:hover img': { transform: 'scale(1.06)' },
}));

export const ImageArea = styled('div')({
  position: 'relative',
  flex: '1 1 auto',
  minHeight: 0,
  borderRadius: 4,
  overflow: 'hidden',
  background: tokens.border,
  '& img': { transition: 'transform .6s cubic-bezier(.2,.7,.2,1)' },
});

export const Caption = styled('p', {
  shouldForwardProp: (prop) => prop !== 'small',
})<{ small?: boolean }>(({ small }) => ({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  color: tokens.goldDeep,
  fontSize: small ? 14 : 19,
  lineHeight: 1.3,
  margin: '10px 2px 0',
}));
