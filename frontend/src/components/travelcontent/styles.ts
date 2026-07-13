import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import { tokens } from '@/theme/theme';
import { SectionInner } from '@/components/ui/sectioninner/styles';
import { Eyebrow as BaseEyebrow, SectionTitle as BaseSectionTitle, Lead as BaseLead } from '@/components/ui/sectionheader/styles';
import Polaroid from '@/components/ui/polaroid/Polaroid';
import { ButtonPrimary } from '@/components/ui/button/styles';

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

export const SectionTitle = styled(BaseSectionTitle)({
  fontSize: 'clamp(28px, 3.5vw, 44px)',
});

export const Lead = styled(BaseLead)({});

export const SectionHeaderBlock = styled('div')({
  marginBottom: 40,
});

/* ───────────────────────── hero ───────────────────────── */

export const HeroHeader = styled('header')({
  position: 'relative',
  background: tokens.gradientCream,
  scrollMarginTop: 70,
});

export const HeroInner = styled(SectionInner)({
  padding: '64px 40px 96px',
  '@media (max-width: 900px)': { padding: '48px 22px 64px' },
});

export const HeroGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1.1fr .9fr',
  gap: 40,
  alignItems: 'center',
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr', gap: 32 },
});

export const HeroLabelRow = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,
  marginBottom: 20,
});

export const HeroLabel = styled('span')({
  fontFamily: FONT_BODY,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: tokens.gold,
});

export const HeroTitle = styled('h1')({
  fontFamily: FONT_HEADING,
  fontWeight: 900,
  fontSize: 'clamp(40px, 5vw, 68px)',
  lineHeight: 0.98,
  letterSpacing: '-0.01em',
  color: tokens.ink,
  margin: '0 0 24px',
});

export const HeroBody = styled('p')({
  fontFamily: FONT_BODY,
  fontSize: 17,
  lineHeight: 1.6,
  color: tokens.warmBrown,
  margin: '0 0 18px',
  maxWidth: 480,
  '&:last-of-type': { marginBottom: 28 },
});

export const HeroStatsRow = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  marginBottom: 32,
});

export const HeroStatChip = styled('span')({
  fontFamily: FONT_BODY,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.04em',
  color: tokens.ink,
  background: tokens.creamLight,
  border: `1px solid ${tokens.borderLight}`,
  borderRadius: 999,
  padding: '8px 16px',
});

export const HeroCta = ButtonPrimary;

export const HeroPhotos = styled('div')({
  position: 'relative',
  height: 420,
  '@media (max-width: 900px)': { height: 320 },
  '@media (max-width: 600px)': { display: 'none' },
});

export const HeroPhotoMain = styled(Polaroid)({
  position: 'absolute',
  top: 0,
  left: 40,
  width: 240,
  height: 300,
  zIndex: 1,
});

export const HeroPhotoSecondary = styled(Polaroid)({
  position: 'absolute',
  bottom: 0,
  right: 10,
  width: 200,
  height: 250,
});

/* ───────────────────────── process ───────────────────────── */

export const ProcessSection = styled('section')({
  background: tokens.cream,
  scrollMarginTop: 70,
});

export const ProcessInner = styled(SectionInner)({});

export const ProcessGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '0.85fr 1.15fr',
  gap: 48,
  alignItems: 'start',
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr', gap: 32 },
});

export const ProcessSticky = styled('div')({
  position: 'sticky',
  top: 90,
  '@media (max-width: 900px)': { position: 'static' },
});

export const ProcessTagRow = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

export const ProcessTag = styled('span')({
  fontFamily: FONT_BODY,
  fontSize: 12.5,
  fontWeight: 600,
  color: tokens.ink,
  background: '#E4EAD6',
  borderRadius: 8,
  padding: '6px 11px',
});

export const StepList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const StepCard = styled('article')({
  display: 'grid',
  gridTemplateColumns: '60px 1fr',
  gap: 20,
  background: '#fff',
  borderRadius: 18,
  padding: '26px 28px',
  border: `1px solid ${tokens.borderLight}`,
  transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px -24px rgba(18,59,55,.35)',
  },
});

export const StepNumWrap = styled('div')({
  textAlign: 'center',
});

export const StepLabel = styled('div')({
  fontFamily: FONT_HEADING,
  fontStyle: 'italic',
  fontSize: 14,
  color: tokens.warmBrownLight,
});

export const StepNum = styled('div')({
  fontFamily: FONT_HEADING,
  fontWeight: 700,
  fontSize: 32,
  color: tokens.goldDeep,
  lineHeight: 0.9,
});

export const StepTitle = styled('h3')({
  fontFamily: FONT_BODY,
  fontWeight: 700,
  fontSize: 20,
  color: tokens.ink,
  margin: '0 0 8px',
});

export const StepItems = styled('ul')({
  margin: 0,
  paddingLeft: 18,
  fontFamily: FONT_BODY,
  fontSize: 14.5,
  lineHeight: 1.65,
  color: tokens.warmBrown,
});

/* ───────────────────────── carousel ───────────────────────── */

export const CarouselSection = styled('section')({
  background: tokens.cream,
  overflow: 'hidden',
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

/* ───────────────────────── videos ───────────────────────── */

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
  animation: 'travel-lightbox-fade .25s ease',
  '@keyframes travel-lightbox-fade': fadeIn,
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
});

/* ───────────────────────── gallery ───────────────────────── */

export const GallerySection = styled('section')({
  background: tokens.gradientCream,
  overflow: 'hidden',
});

export const GalleryRow = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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

export const GalleryCard = styled('div', {
  shouldForwardProp: (prop) => prop !== '$offset',
})<{ $offset: boolean }>(({ $offset }) => ({
  width: 200,
  flexShrink: 0,
  background: '#fff',
  boxShadow: '0 14px 32px rgba(18,59,55,0.14)',
  position: 'relative',
  zIndex: 1,
  marginLeft: $offset ? -1 : 0,
  transition: 'transform .3s ease, z-index 0s',
  '&:hover': { transform: 'translateY(-14px)', zIndex: 50 },
}));

export const GalleryHeaderRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '11px 12px',
});

export const GalleryDot = styled('div')({
  width: 22,
  height: 22,
  borderRadius: '50%',
  background: tokens.borderLight,
  flexShrink: 0,
});

export const GalleryPhotoWrap = styled('div')({
  position: 'relative',
  aspectRatio: '3/4',
  background: tokens.creamLight,
  overflow: 'hidden',
});

export const QuoteTextWrap = styled('div')({
  position: 'absolute',
  top: 18,
  left: 16,
  right: 16,
  zIndex: 2,
});

export const QuoteScript = styled('div')({
  fontFamily: FONT_HEADING,
  fontStyle: 'italic',
  fontSize: 18,
  color: tokens.roseDeep,
});

export const QuoteMain = styled('div')({
  fontFamily: FONT_HEADING,
  fontWeight: 700,
  fontStyle: 'italic',
  fontSize: 23,
  lineHeight: 1.08,
  color: tokens.ink,
  marginTop: 6,
});

export const QuotePhotoWrap = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '52%',
});

export const GalleryFooter = styled('div')({
  padding: '10px 12px',
});

/* ───────────────────────── app toolbox ───────────────────────── */

export const AppsSection = styled('section')({
  background: tokens.gradientCream,
});

export const PhoneFrameWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const PhoneFrame = styled('div')({
  width: 270,
  borderRadius: 40,
  background: tokens.goldDeep,
  padding: 12,
  boxShadow: '0 30px 60px rgba(18,59,55,0.35)',
});

export const PhoneScreen = styled('div')({
  position: 'relative',
  background: tokens.cream,
  borderRadius: 28,
  padding: '40px 18px 20px',
  minHeight: 480,
});

export const PhoneNotch = styled('div')({
  position: 'absolute',
  top: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 90,
  height: 18,
  borderRadius: 999,
  background: tokens.goldDeep,
});

export const AppGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gap: '18px 12px',
});

export const AppCell = styled('div')({
  textAlign: 'center',
});

export const AppIconWrap = styled('div', {
  shouldForwardProp: (prop) => prop !== 'iconBg',
})<{ iconBg: string }>(({ iconBg }) => ({
  width: 48,
  height: 48,
  margin: '0 auto 7px',
  borderRadius: 13,
  background: iconBg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
}));

export const AppName = styled('div')({
  fontFamily: FONT_BODY,
  fontSize: 11,
  fontWeight: 700,
  color: tokens.ink,
});

/* ───────────────────────── images ───────────────────────── */

export const CoverImage = styled(Image)({
  objectFit: 'cover',
});
