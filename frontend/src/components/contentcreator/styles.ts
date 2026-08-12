import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import { tokens } from '@/theme/theme';
import { SectionInner } from '@/components/ui/sectioninner/styles';
import { Eyebrow as BaseEyebrow, SectionTitle as BaseSectionTitle } from '@/components/ui/sectionheader/styles';
import { ButtonPrimary, ButtonGhost } from '@/components/ui/button/styles';

export const TEAL = tokens.gold;
export const INK = tokens.goldDeep;
export const SAGE = tokens.goldLight;
export const BLOSSOM = tokens.rose;
export const CARD_ICON_COLOR = tokens.warmBrownLight;

const FONT_HEADING = "'Bodoni Moda', var(--font-bodoni), serif";
const FONT_BODY = "'Hanken Grotesk', var(--font-hanken), sans-serif";

/* ───────────────────────── top bar ───────────────────────── */

export const TopBar = styled('div')({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 40px',
  background: 'rgba(251,237,238,.82)',
  backdropFilter: 'blur(14px)',
  borderBottom: `1px solid ${tokens.border}`,
  gap: 12,
  flexWrap: 'wrap',
  '@media (max-width: 900px)': { padding: '14px 22px' },
});

export const BackLink = styled(Link)({
  fontFamily: FONT_BODY,
  fontSize: 14,
  fontWeight: 600,
  color: tokens.gold,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  transition: 'color .2s',
  '&:hover': { color: tokens.roseDeep },
});

/* ───────────────────────── page root ───────────────────────── */

export const PageRoot = styled('div')({
  background: tokens.cream,
  overflow: 'hidden',
});

/* ───────────────────────── shared section header ───────────────────────── */

export const Inner = styled(SectionInner)({});

export const Eyebrow = styled(BaseEyebrow)({
  color: tokens.gold,
});

export const SectionTitle = BaseSectionTitle;

export const SectionHeaderBlock = styled('div')({
  marginBottom: 40,
});

/* ───────────────────────── hero ───────────────────────── */

export const HeroHeader = styled('header')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100dvh - 70px)',
  background: tokens.gradientCream,
  scrollMarginTop: 70,
});

export const HeroInner = styled(SectionInner)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '104px 40px 40px',
  '@media (max-width: 900px)': { padding: '96px 22px 32px' },
});

export const HeroGrid = styled('div')({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1.1fr .9fr',
  gap: 48,
  alignItems: 'center',
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr', gap: 32 },
});

export const HeroEyebrow = styled('div')({
  fontFamily: FONT_BODY,
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '.3em',
  textTransform: 'uppercase',
  color: tokens.rose,
  marginBottom: 16,
});

export const HeroHandle = styled('h1')({
  fontFamily: FONT_HEADING,
  fontWeight: 900,
  fontSize: 'clamp(52px, 6vw, 84px)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  color: tokens.ink,
  margin: '0 0 16px',
});

export const HeroHandle2 = styled('div')({
  fontFamily: FONT_BODY,
  fontWeight: 700,
  fontSize: 17,
  color: tokens.goldLight,
  background: tokens.gold,
  display: 'inline-block',
  padding: '5px 14px',
  borderRadius: 20,
  marginBottom: 20,
});

export const HeroBody = styled('p')({
  fontFamily: FONT_BODY,
  fontSize: 16,
  lineHeight: 1.6,
  color: tokens.warmBrown,
  margin: '0 0 28px',
  maxWidth: 420,
});

export const HeroCta = styled('div')({
  display: 'flex',
  gap: 12,
  flexWrap: 'wrap',
});

export const HeroCtaPrimary = ButtonPrimary;
export const HeroCtaGhost = ButtonGhost;

export const HeroPortraitWrap = styled('div')({
  position: 'relative',
  height: 400,
  borderRadius: 20,
  overflow: 'hidden',
  boxShadow: '0 30px 60px rgba(18,59,55,0.22)',
  '@media (max-width: 900px)': { height: 320 },
});

/* ───────────────────────── stats bar ───────────────────────── */

export const StatsBar = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  background: tokens.creamLight,
  borderTop: `1px solid ${tokens.borderLight}`,
  marginTop: 'auto',
  flexShrink: 0,
  '@media (max-width: 600px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
});

export const StatItem = styled('div')({
  textAlign: 'center',
  padding: '28px 16px',
});

export const StatNum = styled('div')({
  fontFamily: FONT_HEADING,
  fontWeight: 900,
  fontSize: 30,
  color: tokens.gold,
  lineHeight: 1,
});

export const StatLabel = styled('div')({
  fontFamily: FONT_BODY,
  fontSize: 11.5,
  fontWeight: 600,
  color: tokens.warmBrownMid,
  marginTop: 6,
});

/* ───────────────────────── about ───────────────────────── */

export const AboutSection = styled('section')({
  background: tokens.cream,
  scrollMarginTop: 70,
});

export const AboutGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '0.8fr 1.2fr',
  gap: 48,
  alignItems: 'center',
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr', gap: 28 },
});

export const AboutPhotoWrap = styled('div')({
  position: 'relative',
  height: 320,
  borderRadius: 18,
  overflow: 'hidden',
  boxShadow: '0 20px 44px rgba(18,59,55,0.16)',
});

export const AboutBody = styled('div')({
  fontFamily: FONT_BODY,
  fontSize: 15.5,
  lineHeight: 1.75,
  color: tokens.warmBrown,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
});

/* ───────────────────────── carousel ───────────────────────── */

export const CarouselSection = styled('section')({
  background: tokens.creamLight,
  overflow: 'hidden',
  scrollMarginTop: 70,
});

export const CarouselRow = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '24px 0 10px',
  gap: 0,
  '@media (max-width: 900px)': {
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    gap: 16,
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
    '& > div': {
      marginLeft: '0 !important',
      transform: 'none !important',
      width: 'min(78vw, 320px) !important',
      scrollSnapAlign: 'start',
    },
  },
});

export const FanCard = styled('div', {
  shouldForwardProp: (prop) => prop !== '$offset' && prop !== '$rotate' && prop !== '$translateY' && prop !== '$z',
})<{ $offset: boolean; $rotate: number; $translateY: number; $z: number }>(({ $offset, $rotate, $translateY, $z }) => ({
  position: 'relative',
  width: 200,
  flexShrink: 0,
  marginLeft: $offset ? -28 : 0,
  transform: `rotate(${$rotate}deg) translateY(${$translateY}px)`,
  zIndex: $z,
  transition: 'transform .3s ease, z-index 0s',
  '&:hover': { transform: 'translateY(-14px) rotate(0deg)', zIndex: 50 },
}));

export const PostCard = styled('div')({
  background: '#fff',
  borderRadius: 18,
  overflow: 'hidden',
  boxShadow: '0 22px 44px rgba(18,59,55,0.2)',
  border: '1px solid rgba(18,59,55,0.06)',
});

export const PostHeaderRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '9px 11px',
});

export const PostDot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'dotColor',
})<{ dotColor: string }>(({ dotColor }) => ({
  width: 20,
  height: 20,
  borderRadius: '50%',
  background: dotColor,
  flexShrink: 0,
}));

export const PostHeaderBar = styled('div')({
  flex: 1,
  height: 6,
  borderRadius: 3,
  background: tokens.borderLight,
});

export const PostMoreDots = styled('div')({
  fontSize: 12,
  color: tokens.warmBrownLight,
  letterSpacing: 1,
});

export const PostPhotoWrap = styled('div')({
  position: 'relative',
  aspectRatio: '4/5',
  background: tokens.creamLight,
});

export const PostScrim = styled('div')({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(0,0,0,0.4) 100%)',
  pointerEvents: 'none',
});

export const PostHandle = styled('div')({
  position: 'absolute',
  top: 9,
  left: 9,
  background: tokens.goldDeep,
  color: '#fff',
  fontFamily: FONT_BODY,
  fontSize: 9.5,
  fontWeight: 700,
  letterSpacing: '0.03em',
  padding: '4px 9px',
  borderRadius: 999,
});

export const PostCaption = styled('div')({
  position: 'absolute',
  left: 9,
  bottom: 12,
  right: 9,
  fontFamily: FONT_HEADING,
  fontWeight: 900,
  textTransform: 'uppercase',
  fontSize: 20,
  lineHeight: 0.98,
  color: '#fff',
  textShadow: '0 2px 12px rgba(0,0,0,0.35)',
});

export const PostFooter = styled('div')({
  padding: '11px 11px 8px',
});

export const PostPin = styled('div', {
  shouldForwardProp: (prop) => prop !== 'pinBg',
})<{ pinBg: string }>(({ pinBg }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  fontFamily: FONT_BODY,
  fontSize: 10.5,
  fontWeight: 700,
  color: tokens.goldDeep,
  background: pinBg,
  padding: '4px 9px',
  borderRadius: 999,
  marginBottom: 7,
}));

export const PostDesc = styled('p')({
  fontFamily: FONT_BODY,
  fontSize: 11,
  lineHeight: 1.5,
  color: tokens.warmBrownMid,
  margin: 0,
});

export const CardIconsRow = styled('div')({
  padding: '2px 11px 11px',
});

export const IconRow = styled('div')({
  display: 'flex',
  gap: 11,
  color: CARD_ICON_COLOR,
});

/* ───────────────────────── videos (reels) ───────────────────────── */

export const VideosSection = styled('section')({
  background: tokens.cream,
});

export const VideosGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 18,
  '@media (max-width: 900px)': {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    gap: 16,
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
    '& > figure': {
      flexShrink: 0,
      width: 'min(58vw, 220px)',
      scrollSnapAlign: 'start',
    },
  },
});

export const VideoFigure = styled('figure')({
  margin: 0,
});

export const VideoThumbWrap = styled('div')({
  position: 'relative',
  aspectRatio: '9/16',
  borderRadius: 18,
  overflow: 'hidden',
  background: tokens.creamLight,
  cursor: 'pointer',
  transition: 'transform .3s ease, box-shadow .3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px -20px rgba(18,59,55,.35)',
  },
});

export const VideoEl = styled('video')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const PlayButtonWrap = styled('div')({
  position: 'absolute',
  right: 10,
  bottom: 10,
  display: 'flex',
});

export const PlayButton = styled('span')({
  width: 32,
  height: 32,
  borderRadius: '50%',
  background: 'rgba(0,0,0,0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  color: '#fff',
  backdropFilter: 'blur(2px)',
});

export const VideoCaption = styled('figcaption')({
  fontFamily: FONT_BODY,
  fontSize: 14,
  fontWeight: 700,
  color: tokens.ink,
  marginTop: 10,
});

export const VideoMeta = styled('div')({
  fontFamily: FONT_BODY,
  fontSize: 12,
  color: tokens.warmBrownLight,
});

/* ───────────────────────── video lightbox ───────────────────────── */

const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1 },
};

export const LightboxOverlay = styled('div')({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
  background: 'rgba(18,59,55,0.92)',
  backdropFilter: 'blur(6px)',
  animation: 'cc-lightbox-fade .25s ease',
  '@keyframes cc-lightbox-fade': fadeIn,
});

export const LightboxContent = styled('div')({
  position: 'relative',
  width: 'min(92vw, 420px)',
});

export const LightboxVideo = styled('video')({
  display: 'block',
  width: '100%',
  maxHeight: '86vh',
  borderRadius: 18,
  boxShadow: '0 30px 70px rgba(0,0,0,0.5)',
  background: '#000',
});

export const LightboxCaption = styled('figcaption')({
  fontFamily: FONT_BODY,
  fontSize: 14,
  fontWeight: 700,
  color: '#fff',
  marginTop: 14,
  textAlign: 'center',
});

export const LightboxMeta = styled('div')({
  fontFamily: FONT_BODY,
  fontSize: 12,
  color: 'rgba(255,255,255,0.7)',
  textAlign: 'center',
  marginTop: 4,
});

export const LightboxClose = styled('button')({
  position: 'absolute',
  top: -18,
  right: -18,
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  background: '#fff',
  color: tokens.ink,
  fontSize: 18,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
  transition: 'transform .2s ease',
  '&:hover': { transform: 'scale(1.08)' },
  '@media (max-width: 480px)': { top: -14, right: 0 },
});

/* ───────────────────────── placeholder slot ───────────────────────── */

export const Placeholder = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: tokens.gradientCream,
});

export const PlaceholderLabel = styled('span')({
  fontFamily: FONT_BODY,
  fontSize: 10.5,
  fontWeight: 700,
  color: tokens.warmBrownLight,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  textAlign: 'center',
  padding: '0 10px',
});

/* ───────────────────────── brand collaborations ───────────────────────── */

export const BrandsSection = styled('section')({
  background: tokens.gradientDark,
  padding: '52px 0',
  scrollMarginTop: 70,
});

export const BrandsTitle = styled('h2')({
  fontFamily: FONT_HEADING,
  fontWeight: 700,
  fontSize: 'clamp(30px, 3.5vw, 44px)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  color: '#fff',
  margin: '0 0 24px',
});

export const BrandLogos = styled('div')({
  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',
});

export const BrandLogoSlot = styled('div')({
  width: 148,
  height: 64,
  borderRadius: 10,
  background: 'rgba(18,59,55,0.35)',
  padding: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const BrandLogoImg = styled(Image)({
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
});

/* ───────────────────────── work-together form ───────────────────────── */

export const FormSection = styled('section')({
  background: tokens.cream,
  padding: '64px 40px',
  textAlign: 'center',
  '@media (max-width: 900px)': { padding: '48px 22px' },
});

export const FormTitle = styled('h2')({
  fontFamily: FONT_HEADING,
  fontWeight: 700,
  fontSize: 'clamp(28px, 3.2vw, 38px)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  color: tokens.ink,
  margin: '0 0 24px',
});

export const FormFields = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  maxWidth: 420,
  margin: '0 auto',
  textAlign: 'left',
});

const fieldBase = {
  fontFamily: FONT_BODY,
  fontSize: 14,
  color: tokens.ink,
  background: '#fff',
  border: `1px solid ${tokens.borderForm}`,
  borderRadius: 8,
  padding: '13px 15px',
  outline: 'none',
  transition: 'border-color .2s',
  '&::placeholder': { color: tokens.warmBrownLight },
  '&:focus': { borderColor: tokens.gold },
} as const;

export const FormInput = styled('input')(fieldBase);

export const FormTextarea = styled('textarea')({
  ...fieldBase,
  height: 90,
  resize: 'vertical',
  fontFamily: FONT_BODY,
});

export const FormSubmit = ButtonPrimary;

/* ───────────────────────── images ───────────────────────── */

export const CoverImage = styled(Image)({
  objectFit: 'cover',
});
