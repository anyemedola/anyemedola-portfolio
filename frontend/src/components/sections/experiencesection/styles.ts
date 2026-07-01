import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { SectionTitle } from '@/components/ui/sectionheader/styles';

export { SectionRoot as WorkRoot } from '@/components/ui/sectionroot/styles';
export { SectionInner as Inner } from '@/components/ui/sectioninner/styles';
export { Eyebrow } from '@/components/ui/sectionheader/styles';

export const Title = styled(SectionTitle)({
  margin: 0,
});

export const WorkHeader = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 16,
  marginBottom: 52,
});

export const Meta = styled('span')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontSize: 15,
  color: tokens.warmBrownLight,
});

export const JobList = styled('div')({
  borderTop: `1px solid ${tokens.borderLight}`,
});

export const JobRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gap: 32,
  padding: '30px 8px',
  borderBottom: `1px solid ${tokens.border}`,
  transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px -24px rgba(120,60,50,.35)',
  },
  '@media (max-width: 760px)': {
    gridTemplateColumns: '1fr',
    gap: 4,
  },
});

export const JobLeft = styled('div')({});

export const JobPeriod = styled('div')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 17,
  fontWeight: 700,
  color: tokens.goldDeep,
});

export const JobCompany = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  color: tokens.warmBrownLight,
  marginTop: 4,
});

export const JobRight = styled('div')({});

export const JobRole = styled('h3')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 21,
  fontWeight: 700,
  margin: '0 0 8px',
  color: tokens.ink,
});

export const JobDesc = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 16,
  lineHeight: 1.6,
  color: tokens.warmBrown,
  margin: 0,
});
