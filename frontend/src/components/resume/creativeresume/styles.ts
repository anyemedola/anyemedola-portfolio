import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { tokens } from '@/theme/theme';
import { ButtonPrimary, pillSecondaryBase } from '@/components/ui/button/styles';

export const TEAL = tokens.gold;
export const INK = tokens.goldDeep;
export const MUTED = '#7C8A84';
export const BODY_TEXT = '#4C5B56';

export const printPageStyles = {
  '@media print': {
    '@page': { margin: '0.35in', size: 'letter portrait' },
  },
};

/* ───────────────────────── top bar ───────────────────────── */

export const TopBar = styled('div')({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 24px',
  background: 'rgba(251,246,239,0.95)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid rgba(18,59,55,0.1)',
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

export const AtsLink = styled(Link)({
  ...pillSecondaryBase,
  fontSize: 12.5,
  color: MUTED,
  padding: '6px 14px',
});

export const DownloadButton = styled(ButtonPrimary)({
  fontSize: 13,
  padding: '8px 20px',
  boxShadow: '0 4px 14px rgba(26,97,93,0.3)',
  '&:hover': { boxShadow: '0 4px 14px rgba(26,97,93,0.3)' },
});

/* ───────────────────────── page / doc ───────────────────────── */

export const PageBg = styled('div')({
  background: '#EFEADF',
  minHeight: '100vh',
  padding: '32px 16px 48px',
  '@media print': {
    background: 'transparent !important',
    padding: '0 !important',
    minHeight: 'unset !important',
  },
  '@media (max-width: 640px)': {
    padding: '10px 10px 32px !important',
  },
});

export const DocWrap = styled('div')({
  maxWidth: '8.5in',
  margin: '0 auto',
  background: '#FBF6EF',
  boxShadow: '0 30px 80px rgba(14,42,40,0.13)',
  '@media print': {
    maxWidth: 'none !important',
    width: '100% !important',
    margin: '0 !important',
    padding: '0 !important',
    boxShadow: 'none !important',
    '& *, & *::before, & *::after': {
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
    },
    '& h1, & h2, & h3': { breakAfter: 'avoid' },
  },
});

/* ───────────────────────── hero ───────────────────────── */

export const Header = styled('header')({
  position: 'relative',
  padding: '46px 52px 38px',
  background: 'linear-gradient(168deg,#FBEDEE 0%,#F7D3D5 42%,#F2BEC1 78%,#EFA8AC 100%)',
  overflow: 'hidden',
  '@media (max-width: 640px)': { padding: '22px 18px 20px !important' },
});

export const HeroGlow = styled('div')({
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(120% 90% at 88% 8%, rgba(184,200,151,0.7), transparent 55%)',
  pointerEvents: 'none',
});

export const HeroTextCol = styled('div')({
  flex: 1,
  minWidth: 0,
});

export const HeroPhotoCol = styled('div')({
  flexShrink: 0,
});

export const HeroInner = styled('div')({
  position: 'relative',
  display: 'flex',
  gap: 40,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  '@media (max-width: 640px)': { gap: '14px !important' },
});

export const Tagline = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.24em',
  textTransform: 'uppercase',
  color: TEAL,
});

export const TaglineDash = styled('span')({
  width: 22,
  height: 1.5,
  background: TEAL,
  display: 'inline-block',
});

export const Name = styled('h1')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 400,
  fontSize: 78,
  lineHeight: 0.92,
  letterSpacing: '-0.015em',
  color: INK,
  margin: '14px 0 0',
  '@media (max-width: 640px)': { fontSize: '50px !important', marginTop: '10px !important' },
});

export const RoleLine = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontWeight: 700,
  fontSize: 14.5,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: MUTED,
  margin: '18px 0 0',
  '@media (max-width: 640px)': { fontSize: '12px !important', marginTop: '10px !important' },
});

export const QuoteLine = styled('p')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 21,
  lineHeight: 1.4,
  color: '#526059',
  margin: '14px 0 0',
  maxWidth: '30ch',
  '@media (max-width: 640px)': { fontSize: '16px !important', marginTop: '8px !important' },
});

export const PhotoWrap = styled('div')({
  position: 'relative',
  width: 212,
  height: 280,
  borderRadius: '106px 106px 16px 16px',
  padding: 7,
  background: 'linear-gradient(160deg,#F2C6C9,#EFA8AC 55%,#1A615D)',
  '@media (max-width: 640px)': {
    width: '96px !important',
    height: '126px !important',
    borderRadius: '48px 48px 10px 10px !important',
    padding: '5px !important',
  },
});

export const PhotoImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '50% 22%',
  borderRadius: '100px 100px 10px 10px',
  display: 'block',
  '@media (max-width: 640px)': { borderRadius: '43px 43px 6px 6px !important' },
});

/* ───────────────────────── contact bar ───────────────────────── */

export const ContactBar = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px 10px',
  padding: '18px 52px',
  background: '#EEF2E4',
  borderBottom: '1px solid rgba(18,59,55,0.08)',
  '@media (max-width: 640px)': { padding: '10px 18px !important', gap: '6px 8px !important' },
});

export const ContactChip = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  fontSize: 13,
  fontWeight: 600,
  color: '#2E4A45',
  background: '#FBF6EF',
  border: '1px solid rgba(18,59,55,0.1)',
  borderRadius: 999,
  padding: '7px 13px',
  '@media (max-width: 640px)': { fontSize: '11.5px !important', padding: '5px 10px !important', gap: '5px !important' },
});

export const ContactIcon = styled('span')({
  color: TEAL,
});

/* ───────────────────────── body / section shared ───────────────────────── */

export const Body = styled('div')({
  padding: '34px 52px 14px',
  '@media (max-width: 640px)': { padding: '18px 18px 10px !important' },
});

export const Section = styled('section')({
  marginBottom: 30,
});

export const SectionSmallGap = styled('section')({
  marginBottom: 18,
});

export const SectionHeading = styled('h2')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: TEAL,
  margin: '0 0 12px',
});

/* ───────────────────────── about ───────────────────────── */

export const AboutText = styled('p')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 400,
  fontSize: 19,
  lineHeight: 1.58,
  color: '#17403B',
  margin: 0,
  '@media (max-width: 640px)': { fontSize: '16px !important', lineHeight: '1.55 !important' },
});

export const AboutEm = styled('em')({
  fontStyle: 'italic',
  color: TEAL,
});

/* ───────────────────────── experience ───────────────────────── */

export const JobItem = styled('div', {
  shouldForwardProp: (prop) => prop !== '$last',
})<{ $last: boolean }>(({ $last }) => ({
  display: 'grid',
  gridTemplateColumns: '118px 1fr',
  gap: 20,
  paddingBottom: $last ? 0 : 18,
  marginBottom: $last ? 0 : 18,
  borderBottom: $last ? 'none' : '1px solid rgba(18,59,55,0.1)',
  '@media print': { breakInside: 'avoid' },
  '@media (max-width: 640px)': { gridTemplateColumns: '80px 1fr !important', gap: '10px !important' },
}));

export const JobPeriod = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  fontWeight: 700,
  color: MUTED,
  paddingTop: 3,
});

export const JobPeriodEnd = styled('span')({
  color: '#86908A',
  fontWeight: 600,
});

export const JobRole = styled('h3')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 500,
  fontSize: 21,
  color: INK,
  margin: '0 0 2px',
});

export const JobCompany = styled('div')({
  fontSize: 13,
  fontWeight: 700,
  color: TEAL,
  marginBottom: 7,
});

export const JobDesc = styled('p')({
  fontSize: 14,
  lineHeight: 1.55,
  color: BODY_TEXT,
  margin: 0,
});

/* ───────────────────────── projects ───────────────────────── */

export const ProjectsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 12,
});

export const ProjectCard = styled('div')({
  background: 'linear-gradient(150deg,#F2F5E9,#E6EDD6)',
  border: '1px solid rgba(26,97,93,0.14)',
  borderRadius: 14,
  padding: '15px 16px',
});

export const ProjectTitle = styled('div')({
  fontSize: 14,
  fontWeight: 800,
  color: INK,
  marginBottom: 3,
});

export const ProjectDesc = styled('div')({
  fontSize: 12.5,
  lineHeight: 1.45,
  color: '#5E6C66',
});

export const ProjectLink = styled('div')({
  fontSize: 11.5,
  color: TEAL,
  marginTop: 7,
});

/* ───────────────────────── toolkit / certifications (tag rows) ───────────────────────── */

export const TagRow = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 7,
});

export const ToolkitTag = styled('span')({
  fontSize: 13,
  fontWeight: 600,
  color: '#17403B',
  background: '#E4EAD6',
  borderRadius: 8,
  padding: '6px 11px',
});

export const CertTag = styled('span')({
  fontSize: 13,
  fontWeight: 600,
  color: '#17403B',
  background: '#F2E4E5',
  border: '1px solid rgba(26,97,93,0.12)',
  borderRadius: 8,
  padding: '6px 11px',
});

/* ───────────────────────── languages + education ───────────────────────── */

export const LangsEduRow = styled('section')({
  display: 'grid',
  gridTemplateColumns: '1.15fr 1fr',
  gap: 34,
  marginBottom: 30,
  '@media print': { breakInside: 'avoid' },
  '@media (max-width: 640px)': { gridTemplateColumns: '1fr !important', gap: '22px !important' },
});

export const LangList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 11,
});

export const LangRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const LangName = styled('span')({
  width: 74,
  fontSize: 14,
  fontWeight: 700,
  color: '#17403B',
});

export const LangBarTrack = styled('span')({
  flex: 1,
  height: 6,
  borderRadius: 999,
  background: '#E7E0D4',
  overflow: 'hidden',
});

export const LangBarFill = styled('span', {
  shouldForwardProp: (prop) => prop !== '$pct',
})<{ $pct: number }>(({ $pct }) => ({
  display: 'block',
  width: `${$pct}%`,
  height: '100%',
  background: 'linear-gradient(90deg,#EFA8AC,#1A615D)',
}));

export const LangLevel = styled('span')({
  fontSize: 12,
  fontWeight: 700,
  color: MUTED,
});

export const EduList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 13,
});

export const EduDegree = styled('div')({
  fontSize: 14.5,
  fontWeight: 700,
  color: INK,
});

export const EduSchool = styled('div')({
  fontSize: 13,
  color: '#6B7973',
});

/* ───────────────────────── beyond the code ───────────────────────── */

export const BeyondSubtitle = styled('p')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 17,
  color: '#6B7973',
  margin: '0 0 16px',
});

export const BeyondGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 12,
  '@media (max-width: 640px)': { gap: '8px !important' },
});

export const BeyondCard = styled('div')({
  display: 'flex',
  gap: 13,
  alignItems: 'flex-start',
  background: 'linear-gradient(150deg,#F2F5E9,#E6EDD6)',
  border: '1px solid rgba(26,97,93,0.14)',
  borderRadius: 14,
  padding: '15px 16px',
  '@media print': { breakInside: 'avoid' },
  '@media (max-width: 640px)': { padding: '12px 13px !important' },
});

export const BeyondIcon = styled('span')({
  fontSize: 22,
  lineHeight: 1,
  color: TEAL,
});

export const BeyondTitle = styled('div')({
  fontSize: 14,
  fontWeight: 800,
  color: INK,
  marginBottom: 2,
});

export const BeyondBody = styled('div')({
  fontSize: 12.5,
  lineHeight: 1.45,
  color: '#5E6C66',
});

/* ───────────────────────── footer ───────────────────────── */

export const Footer = styled('footer')({
  padding: '18px 52px 26px',
  borderTop: '1px solid rgba(18,59,55,0.08)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 8,
  '@media (max-width: 640px)': {
    padding: '14px 18px 18px !important',
    flexDirection: 'column !important',
    alignItems: 'flex-start !important',
    gap: '6px !important',
  },
});

export const FooterTagline = styled('span')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
  fontSize: 14,
  color: '#8A9791',
});

export const FooterMeta = styled('span')({
  fontSize: 11,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: '#A6B4AC',
});
