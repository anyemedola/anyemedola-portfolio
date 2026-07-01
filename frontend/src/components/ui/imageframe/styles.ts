import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const ImageFrame = styled('div')({
  position: 'relative',
  borderRadius: 20,
  overflow: 'hidden',
  boxShadow: '0 34px 64px -34px rgba(120,60,50,.5)',
  border: `6px solid ${tokens.cream}`,
  '& img': { transition: 'transform .6s cubic-bezier(.2,.7,.2,1)' },
  '&:hover img': { transform: 'scale(1.04)' },
});
