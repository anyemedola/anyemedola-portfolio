import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { SectionInner } from '@/components/ui/sectioninner/styles';
import { Eyebrow as BaseEyebrow, SectionTitle } from '@/components/ui/sectionheader/styles';

export { SectionRootBordered as StacksRoot } from '@/components/ui/sectionroot/styles';

export const Inner = styled(SectionInner)({
  padding: '96px 40px',
});

export const Eyebrow = styled(BaseEyebrow)({
  color: tokens.goldDeep,
});

export const Title = styled(SectionTitle)({
  fontSize: 'clamp(32px, 3.8vw, 52px)',
  margin: '0 0 48px',
});

export const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: 18,
});

export const Card = styled('div')({
  background: tokens.cream,
  border: `1px solid ${tokens.borderLight}`,
  borderRadius: 18,
  padding: 26,
  transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 24px 44px -26px rgba(120,60,50,.35)',
  },
});

export const CardGroup = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  letterSpacing: '.18em',
  textTransform: 'uppercase',
  color: tokens.roseDeep,
  fontWeight: 700,
  marginBottom: 16,
});

export const TagList = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 9,
  listStyle: 'none',
});

export const Tag = styled('li')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  background: tokens.creamLight,
  border: `1px solid ${tokens.borderLight}`,
  padding: '7px 14px',
  borderRadius: 999,
  color: tokens.ink,
});
