import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { SectionTitle, Lead as BaseLead } from '@/components/ui/sectionheader/styles';

export { SectionRoot as CriacaoRoot } from '@/components/ui/sectionroot/styles';
export { SectionInner as Inner } from '@/components/ui/sectioninner/styles';
export { Eyebrow } from '@/components/ui/sectionheader/styles';

export const Title = styled(SectionTitle)({
  lineHeight: 1.02,
  maxWidth: 760,
});

export const Lead = styled(BaseLead)({
  fontSize: 18,
  color: tokens.warmBrown,
  maxWidth: 640,
  margin: '0 0 48px',
});

export const TopGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 36,
  alignItems: 'stretch',
  marginBottom: 56,
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    gap: 24,
  },
});

export const FigmaMock = styled('div')({
  background: tokens.creamLight,
  border: `1px solid ${tokens.borderLight}`,
  borderRadius: 22,
  padding: 22,
  boxShadow: '0 30px 60px -42px rgba(120,60,50,.45)',
});

export const MockWindow = styled('div')({
  borderRadius: 14,
  overflow: 'hidden',
  border: `1px solid ${tokens.borderLight}`,
  background: tokens.cream,
});

export const MockBar = styled('div')({
  height: 30,
  background: tokens.borderForm,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '0 12px',
});

export const MockDot = styled('span', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>(({ color }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: color,
  display: 'block',
}));

export const MockContent = styled('div')({
  display: 'grid',
  gridTemplateColumns: '64px 1fr',
  gap: 12,
  padding: 16,
});

export const MockSidebar = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const MockLine = styled('div', {
  shouldForwardProp: (prop) => !['h', 'w', 'bg'].includes(prop as string),
})<{ h: number; w: string; bg: string }>(({ h, w, bg }) => ({
  height: h,
  borderRadius: 4,
  background: bg,
  width: w,
}));

export const MockMain = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const MockHero = styled('div')({
  height: 60,
  borderRadius: 8,
  background: `linear-gradient(120deg, ${tokens.goldLight}, ${tokens.roseMid})`,
});

export const MockRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 10,
});

export const MockBlock = styled('div', {
  shouldForwardProp: (prop) => prop !== 'h',
})<{ h: number }>(({ h }) => ({
  height: h,
  borderRadius: 8,
  background: tokens.borderForm,
}));

export const MockBtn = styled('div')({
  height: 30,
  width: 120,
  borderRadius: 999,
  background: tokens.ink,
});

export const MockLabel = styled('p')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontSize: 13,
  color: tokens.warmBrownLight,
  marginTop: 14,
  paddingLeft: 4,
});

export const TraitList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  justifyContent: 'center',
});

export const TraitCard = styled('div')({
  background: tokens.creamLight,
  border: `1px solid ${tokens.borderLight}`,
  borderRadius: 18,
  padding: '24px 26px',
});

export const TraitTitle = styled('h3')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 19,
  fontWeight: 700,
  margin: '0 0 6px',
  color: tokens.ink,
});

export const TraitDesc = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  lineHeight: 1.55,
  color: tokens.warmBrown,
  margin: 0,
});

export const CreateH = styled('h3')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  color: tokens.goldDeep,
  fontWeight: 700,
  margin: '0 0 22px',
});

export const ContentGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 18,
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr 1fr' },
  '@media (max-width: 600px)': { gridTemplateColumns: '1fr' },
});

export const ContentCard = styled('div')({
  background: tokens.creamLight,
  border: `1px solid ${tokens.borderLight}`,
  borderRadius: 18,
  padding: 26,
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 34px 60px -36px rgba(120,60,50,.55)',
  },
});

export const ContentCardLink = styled('a')({
  background: tokens.creamLight,
  border: `1px solid ${tokens.borderLight}`,
  borderRadius: 18,
  padding: 26,
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 34px 60px -36px rgba(120,60,50,.55)',
  },
});

export const ContentIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>(({ color }) => ({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 34,
  fontWeight: 900,
  color,
  lineHeight: 1,
  marginBottom: 14,
}));

export const ContentTitle = styled('h4')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 17,
  fontWeight: 700,
  margin: '0 0 8px',
  color: tokens.ink,
});

export const ContentDesc = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  lineHeight: 1.5,
  color: tokens.warmBrownLight,
  margin: 0,
});
