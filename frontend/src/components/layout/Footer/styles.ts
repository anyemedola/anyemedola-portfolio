import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { SectionRoot } from '@/components/ui/sectionroot/styles';
import { SectionInner } from '@/components/ui/sectioninner/styles';
import { Eyebrow as BaseEyebrow, SectionTitle } from '@/components/ui/sectionheader/styles';

const floatTwinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50%       { opacity: 0.85; }
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
  background: 'linear-gradient(165deg,#0C2926 0%,#123B37 50%,#14403C 100%)',
  color: tokens.cream,
  position: 'relative',
  overflow: 'hidden',
});


export const Inner = styled(SectionInner)({
  padding: '120px 40px',
  position: 'relative',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
  color: 'rgba(245,192,195,0.85)',
  maxWidth: 520,
  margin: '0 0 44px',
});

export const Links = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 14,
  justifyContent: 'center',
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
  border: `1px solid rgba(26,97,93,.55)`,
  color: tokens.cream,
  textDecoration: 'none',
  transition: 'border-color .2s, background .2s',
  '&:first-of-type': {
    fontWeight: 600,
    background: tokens.cream,
    color: tokens.ink,
    border: 'none',
    '&:hover': { background: '#FBE0E2' },
  },
  '&:not(:first-of-type):hover': {
    borderColor: tokens.gold,
    color: tokens.gold,
  },
});

export const FooterBar = styled('footer')({
  borderTop: `1px solid rgba(26,97,93,.4)`,
  position: 'relative',
});

export const FooterInner = styled('div')({
  maxWidth: 1240,
  margin: '0 auto',
  padding: '28px 40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 16,
  textAlign: 'center',
  '@media (max-width: 900px)': { padding: '28px 22px' },
});

export const FooterMade = styled('span')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontSize: 16,
  color: 'rgba(245,192,195,0.7)',
});

export const FooterRights = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  color: tokens.warmBrownLight,
});
