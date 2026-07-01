import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { SectionInner } from '@/components/ui/sectioninner/styles';
import { Eyebrow as BaseEyebrow, SectionTitle } from '@/components/ui/sectionheader/styles';
import { ImageFrame as BaseImageFrame } from '@/components/ui/imageframe/styles';

export { SectionRoot as ExpatRoot } from '@/components/ui/sectionroot/styles';

export const Inner = styled(SectionInner)({
  display: 'grid',
  gridTemplateColumns: '1.1fr .9fr',
  gap: 56,
  alignItems: 'center',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    gap: 40,
  },
});

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const Eyebrow = styled(BaseEyebrow)({
  color: tokens.goldDeep,
  marginBottom: 18,
});

export const Title = styled(SectionTitle)({
  fontSize: 'clamp(34px, 4.2vw, 56px)',
  lineHeight: 1.02,
  margin: '0 0 26px',
});

export const Para = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 18,
  lineHeight: 1.65,
  color: tokens.warmBrown,
  margin: '0 0 30px',
  '& strong': { fontWeight: 600 },
});

export const InstagramBtn = styled('a')({
  display: 'inline-block',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  fontWeight: 600,
  padding: '13px 24px',
  borderRadius: 999,
  border: `1px solid ${tokens.borderLight}`,
  color: tokens.warmBrownMid,
  transition: 'border-color .25s, color .25s',
  alignSelf: 'flex-start',
  '&:hover': {
    borderColor: tokens.rose,
    color: tokens.rose,
  },
});

export const ImageFrame = styled(BaseImageFrame)({
  height: 440,
  '@media (max-width: 900px)': { height: 320 },
});
