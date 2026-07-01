import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { SectionInner } from '@/components/ui/sectioninner/styles';
import { Eyebrow as BaseEyebrow, SectionTitle } from '@/components/ui/sectionheader/styles';
import { ImageFrame as BaseImageFrame } from '@/components/ui/imageframe/styles';

export { SectionRootBordered as AboutRoot } from '@/components/ui/sectionroot/styles';

export const Inner = styled(SectionInner)({
  display: 'grid',
  gridTemplateColumns: '.82fr 1.18fr',
  gap: 64,
  alignItems: 'center',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    gap: 40,
  },
});

export const ImageFrame = styled(BaseImageFrame)({
  height: 520,
  '@media (max-width: 900px)': { height: 340 },
});

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const Eyebrow = styled(BaseEyebrow)({
  color: '#E0568A',
  marginBottom: 18,
});

export const Title = styled(SectionTitle)({
  fontSize: 'clamp(20px, 2vw, 26px)',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '-0.005em',
  margin: '0 0 28px',
  '& em': {
    fontStyle: 'italic',
    color: '#E0568A',
  },
});

export const Para = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 18,
  lineHeight: 1.65,
  color: tokens.warmBrown,
  margin: '0 0 20px',
  '&:last-of-type': { marginBottom: 30 },
});

export const Stats = styled('div')({
  display: 'flex',
  gap: 40,
  marginTop: 30,
  flexWrap: 'wrap',
  '@media (max-width: 480px)': { gap: 28 },
});

export const Stat = styled('div')({});

export const StatNumber = styled('div')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 40,
  fontWeight: 700,
  color: '#E0568A',
  lineHeight: 1,
});

export const StatLabel = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: 600,
  color: tokens.warmBrownMid,
  marginTop: 4,
});
