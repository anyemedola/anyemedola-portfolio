import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { SectionTitle, Lead as BaseLead } from '@/components/ui/sectionheader/styles';
import Polaroid from '@/components/ui/polaroid/Polaroid';

const floatTwinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50%       { opacity: 0.85; }
`;

export { SectionRootBordered as ViagensRoot } from '@/components/ui/sectionroot/styles';
export { SectionInner as Inner } from '@/components/ui/sectioninner/styles';
export { Eyebrow } from '@/components/ui/sectionheader/styles';
export { Frame as PolaroidFrame } from '@/components/ui/polaroid/styles';

export const Title = styled(SectionTitle)({
  fontSize: 'clamp(30px, 3.6vw, 46px)',
});

export const Lead = styled(BaseLead)({
  maxWidth: 440,
});

export const HeaderWrap = styled('div')({});

export const TopGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '0.9fr 1.25fr',
  gap: 56,
  alignItems: 'center',
  marginBottom: 28,
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    gap: 40,
  },
});

export const Gallery = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridAutoRows: 150,
  gap: 18,
  '@media (max-width: 760px)': { gridTemplateColumns: '1fr 1fr' },
});

export const GalleryMain = styled(Polaroid)({
  gridColumn: 'span 2',
  gridRow: 'span 2',
});

export const GallerySmall = styled(Polaroid)({
  gridColumn: 'span 2',
  gridRow: 'span 1',
});

export const PlaceholderPink = styled('div')({
  flex: '1 1 auto',
  minHeight: 0,
  borderRadius: 4,
  background: `linear-gradient(150deg, ${tokens.roseMid}, ${tokens.rose})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 14,
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  color: '#FFF7EE',
  fontSize: 15,
  lineHeight: 1.45,
});

export const PlaceholderGold = styled('div')({
  flex: '1 1 auto',
  minHeight: 0,
  borderRadius: 4,
  background: `linear-gradient(150deg, ${tokens.goldLight}, ${tokens.gold})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 14,
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  color: '#5A2E2E',
  fontSize: 15,
  lineHeight: 1.45,
});

export const TravelWithMe = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1.35fr .65fr',
  gap: 28,
  alignItems: 'center',
  background: 'linear-gradient(165deg,#1F1430 0%,#3A1E3A 50%,#5A2742 100%)',
  borderRadius: 24,
  padding: '44px 48px',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 760px)': {
    gridTemplateColumns: '1fr',
    padding: '36px 28px',
  },
});

export const TwmStar = styled('div', {
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

export const TwmGlow = styled('div')({
  position: 'absolute',
  right: -60,
  top: '50%',
  transform: 'translateY(-50%)',
  width: 280,
  height: 280,
  borderRadius: '50%',
  background: `radial-gradient(circle, ${tokens.goldLight} 0%, rgba(221,169,74,0) 70%)`,
  opacity: 0.5,
  pointerEvents: 'none',
});

export const TwmLeft = styled('div')({
  position: 'relative',
});

export const TwmEyebrow = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  letterSpacing: '.26em',
  textTransform: 'uppercase',
  color: tokens.gold,
  fontWeight: 700,
  marginBottom: 14,
});

export const TwmTitle = styled('h3')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 700,
  fontSize: 'clamp(28px, 3.6vw, 42px)',
  lineHeight: 1.02,
  color: tokens.cream,
  margin: '0 0 14px',
});

export const TwmP = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 16,
  lineHeight: 1.6,
  color: '#E7CFC4',
  margin: 0,
  maxWidth: 460,
});

export const TwmRight = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  '@media (max-width: 760px)': { justifyContent: 'flex-start' },
});

export const WaBtn = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  fontWeight: 600,
  padding: '15px 26px',
  borderRadius: 999,
  background: tokens.cream,
  color: tokens.ink,
  transition: 'transform .3s, box-shadow .3s',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 18px 34px -18px rgba(0,0,0,.4)',
  },
});

export const WaIcon = styled('span')({
  display: 'flex',
  alignItems: 'center',
});
