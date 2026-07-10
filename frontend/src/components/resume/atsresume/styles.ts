import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { tokens } from '@/theme/theme';

export const TEAL = tokens.gold;
export const INK = '#1C1916';
export const BODY = '#34302B';

export const printPageStyles = {
  '@media print': {
    '@page': { margin: '0.5in', size: 'letter portrait' },
  },
};

export const TopBar = styled('div')({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 24px',
  background: 'rgba(255,255,255,0.96)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid rgba(40,30,30,0.1)',
  gap: 12,
  flexWrap: 'wrap',
  '@media print': { display: 'none' },
});

export const BackLink = styled(Link)({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: 600,
  color: TEAL,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const TopBarActions = styled('div')({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const CreativeLink = styled(Link)({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  fontWeight: 600,
  color: '#857D75',
  textDecoration: 'none',
  padding: '6px 14px',
  borderRadius: 999,
  border: '1px solid rgba(40,30,30,0.15)',
});

export const DownloadButton = styled('button')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: 700,
  background: TEAL,
  color: '#fff',
  border: 'none',
  borderRadius: 999,
  padding: '8px 20px',
  cursor: 'pointer',
  boxShadow: '0 4px 14px rgba(26,97,93,0.3)',
});

export const PageBg = styled('div')({
  background: '#E8EBE0',
  minHeight: '100vh',
  padding: '32px 16px 48px',
  '@media print': {
    background: 'transparent !important',
    padding: '0 !important',
    minHeight: 'unset !important',
  },
  '@media (max-width: 640px)': {
    padding: '10px 10px 24px !important',
  },
});

export const DocWrap = styled('div')({
  maxWidth: '8.5in',
  margin: '0 auto',
  background: '#fff',
  boxShadow: '0 24px 64px rgba(40,30,30,0.12)',
  padding: '54px 60px 40px',
  '@media print': {
    maxWidth: 'none !important',
    width: '100% !important',
    margin: '0 !important',
    padding: '54px 0 40px !important',
    boxShadow: 'none !important',
    '& *, & *::before, & *::after': {
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
    },
  },
  '@media (max-width: 640px)': {
    padding: '28px 18px 24px !important',
  },
});

export const Header = styled('header')({
  borderBottom: `2px solid ${TEAL}`,
  paddingBottom: 18,
  marginBottom: 24,
});

export const Name = styled('h1')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 34,
  fontWeight: 800,
  letterSpacing: '-0.01em',
  color: INK,
  margin: 0,
  '@media print': { breakAfter: 'avoid' },
});

export const RoleLine = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15.5,
  fontWeight: 700,
  color: TEAL,
  margin: '6px 0 12px',
  letterSpacing: '0.01em',
});

export const ContactRow = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px 18px',
  fontSize: 13,
  fontWeight: 500,
  color: '#4A453F',
});

export const Block = styled('section')({
  marginBottom: 24,
  '@media print': { breakInside: 'avoid' },
});

export const ExperienceSection = styled('section')({
  marginBottom: 24,
});

export const SectionHeading = styled('h2')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: TEAL,
  margin: '0 0 10px',
  '@media print': { breakAfter: 'avoid' },
});

export const SummaryText = styled('p')({
  fontSize: 14,
  lineHeight: 1.6,
  color: BODY,
  margin: 0,
});

export const JobItem = styled('div', {
  shouldForwardProp: (prop) => prop !== '$last',
})<{ $last: boolean }>(({ $last }) => ({
  marginBottom: $last ? 0 : 16,
  '@media print': { breakInside: 'avoid' },
}));

export const JobHeaderRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: 14,
  flexWrap: 'wrap',
});

export const JobRole = styled('h3')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15.5,
  fontWeight: 700,
  color: INK,
  margin: 0,
  '@media print': { breakAfter: 'avoid' },
});

export const JobPeriod = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  fontWeight: 600,
  color: '#857D75',
  whiteSpace: 'nowrap',
});

export const JobBullets = styled('ul')({
  margin: '7px 0 0',
  paddingLeft: 18,
  fontSize: 13.5,
  lineHeight: 1.55,
  color: '#3D3833',
});

export const SkillsBody = styled('div')({
  fontSize: 13.5,
  lineHeight: 1.7,
  color: BODY,
});

export const SkillLine = styled('p')({
  margin: '0 0 4px',
  '&:last-child': { margin: 0 },
});

export const SkillLabel = styled('strong')({
  color: INK,
});

export const EduLangsGrid = styled('section')({
  display: 'grid',
  gridTemplateColumns: '1.3fr 1fr',
  gap: 36,
  '@media print': { breakInside: 'avoid' },
  '@media (max-width: 640px)': {
    gridTemplateColumns: '1fr !important',
    gap: '22px !important',
  },
});

export const ColBody = styled('div')({
  fontSize: 13.5,
  lineHeight: 1.5,
  color: BODY,
});

export const EduItemP = styled('p')({
  margin: '0 0 8px',
});

export const CertsP = styled('p')({
  margin: 0,
});

export const LangColBody = styled('div')({
  fontSize: 13.5,
  lineHeight: 1.7,
  color: BODY,
});

export const LangLine = styled('div')({});
