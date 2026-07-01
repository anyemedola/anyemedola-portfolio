import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { SectionRoot } from '@/components/ui/sectionroot/styles';
import { SectionInner } from '@/components/ui/sectioninner/styles';
import { Eyebrow as BaseEyebrow, SectionTitle } from '@/components/ui/sectionheader/styles';

const floatTwinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50%       { opacity: 0.85; }
`;

const sunPulse = keyframes`
  0%, 100% { opacity: .88; transform: translateY(-50%) scale(1); }
  50%       { opacity: 1;   transform: translateY(-50%) scale(1.06); }
`;

const raysSpin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

export const Star = styled('div', {
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

export const ContactRoot = styled(SectionRoot)({
  background: 'linear-gradient(165deg,#1F1430 0%,#3A1E3A 50%,#5A2742 100%)',
  color: tokens.cream,
  position: 'relative',
  overflow: 'hidden',
});

export const SunGlow = styled('div')({
  position: 'absolute',
  right: -100,
  top: '50%',
  width: 440,
  height: 440,
  borderRadius: '50%',
  background: `radial-gradient(circle, ${tokens.goldLight} 0%, ${tokens.gold} 38%, rgba(221,169,74,0.08) 66%, transparent 70%)`,
  animation: `${sunPulse} 7s ease-in-out infinite`,
  pointerEvents: 'none',

  /* sun rays via conic-gradient, masked to appear only outside the disc */
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: -90,
    borderRadius: '50%',
    background: `conic-gradient(
      rgba(246,215,154,0.55)  0deg,   transparent  22deg,
      rgba(246,215,154,0.45) 45deg,   transparent  67deg,
      rgba(246,215,154,0.55) 90deg,   transparent 112deg,
      rgba(246,215,154,0.45) 135deg,  transparent 157deg,
      rgba(246,215,154,0.55) 180deg,  transparent 202deg,
      rgba(246,215,154,0.45) 225deg,  transparent 247deg,
      rgba(246,215,154,0.55) 270deg,  transparent 292deg,
      rgba(246,215,154,0.45) 315deg,  transparent 337deg
    )`,
    maskImage: 'radial-gradient(circle 175px at center, transparent 100%, black 100%)',
    WebkitMaskImage: 'radial-gradient(circle 175px at center, transparent 100%, black 100%)',
    animation: `${raysSpin} 36s linear infinite`,
  },
});

export const Inner = styled(SectionInner)({
  padding: '120px 40px',
  position: 'relative',
  '@media (max-width: 900px)': { padding: '80px 22px' },
});

export const Eyebrow = styled(BaseEyebrow)({
  color: tokens.gold,
  letterSpacing: '.34em',
  marginBottom: 24,
});

export const Title = styled(SectionTitle)({
  fontSize: 'clamp(56px, 8vw, 120px)',
  fontWeight: 900,
  lineHeight: 0.9,
  letterSpacing: '-0.02em',
  margin: '0 0 28px',
  color: tokens.cream,
});

export const ContactP = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 19,
  lineHeight: 1.6,
  color: '#E7CFC4',
  maxWidth: 520,
  margin: '0 0 44px',
});

export const Links = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 14,
});

export const ContactLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  fontWeight: 500,
  padding: '14px 24px',
  borderRadius: 999,
  border: `1px solid rgba(110,90,82,.55)`,
  color: tokens.cream,
  textDecoration: 'none',
  transition: 'border-color .2s, background .2s',
  '&:first-of-type': {
    fontWeight: 600,
    background: tokens.cream,
    color: tokens.ink,
    border: 'none',
    '&:hover': { background: '#F3E3D3' },
  },
  '&:not(:first-of-type):hover': {
    borderColor: tokens.gold,
    color: tokens.gold,
  },
});

export const FooterBar = styled('footer')({
  borderTop: `1px solid rgba(74,58,53,.8)`,
  position: 'relative',
});

export const FooterInner = styled('div')({
  maxWidth: 1240,
  margin: '0 auto',
  padding: '28px 40px',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 10,
  '@media (max-width: 900px)': { padding: '28px 22px' },
});

export const FooterMade = styled('span')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontSize: 16,
  color: '#C9B4AA',
});

export const FooterRights = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  color: tokens.warmBrownLight,
});
