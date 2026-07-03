import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Root = styled('div')({
  background: tokens.cream,
  color: tokens.ink,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  minHeight: '100vh',
});

export const PageHeader = styled('header')({
  maxWidth: 920,
  margin: '0 auto',
  padding: '84px 32px 48px',
  '@media (max-width: 600px)': { padding: '56px 22px 40px' },
});

export const Eyebrow = styled('div')({
  fontSize: 13,
  letterSpacing: '.3em',
  textTransform: 'uppercase',
  color: tokens.rose,
  fontWeight: 700,
  marginBottom: 22,
});

export const PageTitle = styled('h1')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 900,
  fontSize: 'clamp(52px, 9vw, 104px)',
  lineHeight: 0.92,
  letterSpacing: '-.02em',
  margin: 0,
  color: tokens.ink,
});

export const PageLead = styled('p')({
  fontSize: 19,
  lineHeight: 1.55,
  color: tokens.warmBrown,
  maxWidth: 540,
  margin: '26px 0 0',
});

export const FeatSection = styled('section')({
  maxWidth: 920,
  margin: '0 auto',
  padding: '0 32px 16px',
  '@media (max-width: 600px)': { padding: '0 22px 16px' },
});

export const FeatCard = styled(Link)({
  display: 'grid',
  gridTemplateColumns: '1.05fr .95fr',
  background: tokens.creamLight,
  border: `1px solid ${tokens.borderLight}`,
  borderRadius: 24,
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'transform .4s, box-shadow .4s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 34px 60px -38px rgba(120,60,50,.5)',
  },
  '&:hover .featimg': { transform: 'scale(1.05)' },
  '@media (max-width: 760px)': { gridTemplateColumns: '1fr' },
});

export const FeatContent = styled('div')({
  padding: '44px 46px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media (max-width: 600px)': { padding: '32px 28px' },
});

export const FeatMeta = styled('div')({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  marginBottom: 18,
});

export const FeatTag = styled('span')({
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: tokens.ink,
  background: tokens.gold,
  padding: '5px 11px',
  borderRadius: 999,
});

export const FeatDate = styled('span')({
  fontSize: 13,
  color: tokens.warmBrownLight,
});

export const FeatTitle = styled('h2')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 900,
  fontSize: 'clamp(40px, 5vw, 60px)',
  lineHeight: 0.96,
  margin: '0 0 16px',
  color: tokens.ink,
});

export const FeatExcerpt = styled('p')({
  fontSize: 16,
  lineHeight: 1.6,
  color: tokens.warmBrown,
  margin: '0 0 22px',
});

export const FeatCta = styled('span')({
  fontSize: 15,
  fontWeight: 600,
  color: tokens.ink,
  borderBottom: `2px solid ${tokens.gold}`,
  paddingBottom: 3,
  alignSelf: 'flex-start',
});

export const FeatImgWrap = styled('div')({
  overflow: 'hidden',
  minHeight: 320,
  position: 'relative',
  '& img': { transition: 'transform .6s' },
  '@media (max-width: 760px)': { minHeight: 220, height: 240 },
});

export const UpcomingSection = styled('section')({
  maxWidth: 920,
  margin: '0 auto',
  padding: '40px 32px 100px',
  '@media (max-width: 600px)': { padding: '32px 22px 80px' },
});

export const SectionDivider = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  marginBottom: 8,
});

export const SectionLabel = styled('span')({
  fontSize: 12,
  letterSpacing: '.24em',
  textTransform: 'uppercase',
  color: tokens.warmBrownLight,
  fontWeight: 700,
  whiteSpace: 'nowrap',
});

export const DividerLine = styled('span')({
  flex: 1,
  height: 1,
  background: '#E2CDB8',
});

export const PostRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '150px 1fr 40px',
  gap: 24,
  alignItems: 'center',
  padding: '26px 14px',
  borderBottom: `1px solid ${tokens.border}`,
  borderRadius: 12,
  transition: 'background .3s',
  cursor: 'default',
  '&:hover': { background: tokens.creamLight },
  '&:hover .post-arrow': { transform: 'translateX(4px)', color: tokens.rose },
  '@media (max-width: 600px)': { gridTemplateColumns: '1fr', gap: 8 },
});

export const PostMeta = styled('div')({
  '@media (max-width: 600px)': { order: -1 },
});

export const PostPeriod = styled('div')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 15,
  color: tokens.goldDeep,
  fontWeight: 700,
});

export const PostCategory = styled('div')({
  fontSize: 13,
  color: tokens.warmBrownLight,
  marginTop: 2,
});

export const PostContent = styled('div')({});

export const PostTitle = styled('h3')({
  fontSize: 22,
  margin: '0 0 6px',
  fontWeight: 700,
  color: tokens.ink,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
});

export const PostDesc = styled('p')({
  fontSize: 15,
  color: '#7A635C',
  lineHeight: 1.5,
  margin: 0,
});

export const PostArrow = styled('span')({
  fontSize: 22,
  color: '#D9C3AE',
  textAlign: 'right',
  transition: 'transform .3s, color .3s',
});

export const ClosingText = styled('p')({
  textAlign: 'center',
  fontSize: 15,
  color: tokens.warmBrownLight,
  margin: '48px 0 0',
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
});
