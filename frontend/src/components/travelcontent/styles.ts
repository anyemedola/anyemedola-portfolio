import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import { tokens } from '@/theme/theme';

export const TEAL = tokens.gold;
export const INK = tokens.goldDeep;
export const SAGE = tokens.goldLight;
export const BLOSSOM = tokens.rose;
export const CARD_ICON_COLOR = '#8A9690';

const SECTION_PAD_X = 'clamp(20px, 6vw, 80px)';

/* ───────────────────────── top bar ───────────────────────── */

export const TopBar = styled('div')({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `10px ${SECTION_PAD_X}`,
  background: 'rgba(251,246,239,0.92)',
  backdropFilter: 'blur(14px)',
  borderBottom: '1px solid rgba(18,59,55,0.08)',
  gap: 12,
  flexWrap: 'wrap',
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

/* ───────────────────────── page root ───────────────────────── */

export const PageRoot = styled('div')({
  background: '#FBF6EF',
  overflow: 'hidden',
});

/* ───────────────────────── hero / notebook ───────────────────────── */

export const HeroHeader = styled('header')({
  position: 'relative',
  padding: `0 ${SECTION_PAD_X} 100px`,
  overflow: 'hidden',
  background: 'linear-gradient(180deg,#FBF1E6 0%,#F3E6D6 52%,#DCE3C4 66%,#A9B87F 100%)',
});

export const HeroLabelRow = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '26px 0 0',
  flexWrap: 'wrap',
  gap: 8,
});

export const HeroLabel = styled('span')({
  fontFamily: "'Space Mono',monospace",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: INK,
});

export const Notebook = styled('div')({
  position: 'relative',
  maxWidth: 600,
  margin: '64px auto 0',
});

export const HeroPin = styled('div', {
  shouldForwardProp: (prop) => prop !== 'side',
})<{ side: 'left' | 'right' }>(({ side }) => ({
  position: 'absolute',
  width: 140,
  zIndex: 3,
  ...(side === 'left'
    ? { top: -46, left: -125, transform: 'rotate(-9deg)' }
    : { bottom: -50, right: -120, transform: 'rotate(7deg)' }),
  '@media (max-width: 900px)': { display: 'none' },
}));

export const HeroPinCard = styled('div')({
  background: '#fff',
  padding: '7px 7px 18px',
  boxShadow: '0 18px 34px rgba(18,59,55,0.28)',
});

export const HeroPinPhoto = styled('div')({
  position: 'relative',
  aspectRatio: '4/5',
  overflow: 'hidden',
});

export const HeroPinDot = styled('span', {
  shouldForwardProp: (prop) => prop !== 'dotColor',
})<{ dotColor: string }>(({ dotColor }) => ({
  position: 'absolute',
  top: -6,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: dotColor,
  boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
}));

export const NotebookPage = styled('div')({
  position: 'relative',
  background: '#FBF6EF',
  borderRadius: 6,
  boxShadow: '0 40px 90px rgba(18,59,55,0.3)',
  padding: '48px 32px 36px',
});

export const SpiralRow = styled('div')({
  position: 'absolute',
  top: -12,
  left: 22,
  right: 22,
  display: 'flex',
  justifyContent: 'space-between',
});

export const SpiralRing = styled('span')({
  width: 16,
  height: 16,
  borderRadius: '50%',
  background: '#D8DACD',
  boxShadow: 'inset 0 0 0 3px #FBF6EF, 0 1px 2px rgba(0,0,0,0.25)',
});

export const NotebookHeading = styled('div')({
  fontFamily: "'Alex Brush',cursive",
  fontSize: 48,
  lineHeight: 1,
  color: INK,
  marginBottom: 16,
});

export const NotebookText = styled('p')({
  fontFamily: "'Space Mono',monospace",
  fontSize: 14,
  lineHeight: 1.8,
  color: '#2E3F3A',
  margin: '0 0 18px',
  '&:last-of-type': { marginBottom: 26 },
});

export const StatRow = styled('div')({
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
  marginBottom: 26,
});

export const StatChip = styled('span', {
  shouldForwardProp: (prop) => prop !== 'chipBg',
})<{ chipBg: string }>(({ chipBg }) => ({
  fontFamily: "'Space Mono',monospace",
  fontSize: 11,
  fontWeight: 700,
  color: INK,
  background: chipBg,
  borderRadius: 5,
  padding: '6px 11px',
}));

export const NotebookCta = styled('button')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: "'Space Mono',monospace",
  fontSize: 13,
  fontWeight: 700,
  color: INK,
  background: 'none',
  border: 'none',
  padding: 0,
  textDecoration: 'none',
  cursor: 'pointer',
});

/* ───────────────────────── shared section header ───────────────────────── */

export const SectionEyebrow = styled('h2')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  fontWeight: 800,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: TEAL,
  margin: '0 0 8px',
});

export const SectionTitle = styled('p')({
  fontFamily: "'Newsreader', serif",
  fontSize: 32,
  color: INK,
  margin: 0,
});

/* ───────────────────────── process ───────────────────────── */

export const ProcessSection = styled('section')({
  padding: `60px ${SECTION_PAD_X}`,
  background: '#FBF6EF',
});

export const ProcessGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '0.85fr 1.15fr',
  gap: 40,
  alignItems: 'start',
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr' },
});

export const ProcessSticky = styled('div')({
  position: 'sticky',
  top: 90,
  '@media (max-width: 900px)': { position: 'static' },
});

export const ProcessEyebrow = styled(SectionEyebrow)({ margin: '0 0 12px' });

export const ProcessTitle = styled('p')({
  fontFamily: "'Newsreader', serif",
  fontSize: 34,
  lineHeight: 1.1,
  color: INK,
  margin: '0 0 14px',
});

export const ProcessLead = styled('p')({
  fontSize: 15,
  lineHeight: 1.7,
  color: '#4C5B56',
  margin: '0 0 20px',
});

export const ProcessTagRow = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

export const ProcessTag = styled('span')({
  fontSize: 12.5,
  fontWeight: 600,
  color: '#17403B',
  background: '#E4EAD6',
  borderRadius: 8,
  padding: '6px 11px',
});

export const StepList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
});

export const StepCard = styled('article')({
  display: 'grid',
  gridTemplateColumns: '60px 1fr',
  gap: 16,
  background: '#fff',
  borderRadius: 18,
  padding: '22px 24px',
  border: '1px solid rgba(26,97,93,0.12)',
});

export const StepNumWrap = styled('div')({
  textAlign: 'center',
});

export const StepLabel = styled('div')({
  fontFamily: "'Newsreader', serif",
  fontSize: 14,
  fontStyle: 'italic',
  color: '#7C8A84',
});

export const StepNum = styled('div')({
  fontFamily: "'Newsreader', serif",
  fontSize: 34,
  color: TEAL,
  lineHeight: 0.9,
});

export const StepTitle = styled('h3')({
  fontFamily: "'Newsreader', serif",
  fontSize: 22,
  color: INK,
  margin: '0 0 6px',
});

export const StepItems = styled('ul')({
  margin: 0,
  paddingLeft: 18,
  fontSize: 13.5,
  lineHeight: 1.65,
  color: '#4C5B56',
});

/* ───────────────────────── carousel ───────────────────────── */

export const CarouselSection = styled('section')({
  padding: `10px ${SECTION_PAD_X} 70px`,
  background: '#FBF6EF',
  overflow: 'hidden',
});

export const SectionHeaderBlock = styled('div')({
  marginBottom: 30,
});

export const CarouselRow = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '24px 0 10px',
  gap: 0,
  '@media (max-width: 900px)': {
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > div': { marginLeft: '0 !important', marginRight: '0 !important', transform: 'none !important' },
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
  background: '#EDE8DE',
});

export const PostMoreDots = styled('div')({
  fontSize: 12,
  color: '#B9C2BC',
  letterSpacing: 1,
});

export const PostPhotoWrap = styled('div')({
  position: 'relative',
  aspectRatio: '4/5',
  background: '#F1ECE1',
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
  background: INK,
  color: '#fff',
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
  fontFamily: "'Anton',sans-serif",
  textTransform: 'uppercase',
  fontSize: 22,
  lineHeight: 0.94,
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
  fontSize: 10.5,
  fontWeight: 700,
  color: INK,
  background: pinBg,
  padding: '4px 9px',
  borderRadius: 999,
  marginBottom: 7,
}));

export const PostDesc = styled('p')({
  fontSize: 11,
  lineHeight: 1.5,
  color: '#6B7973',
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
  padding: `10px ${SECTION_PAD_X} 56px`,
  background: '#FBF6EF',
});

export const VideosGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 18,
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr' },
});

export const VideoFigure = styled('figure')({
  margin: 0,
});

export const VideoThumbWrap = styled('div')({
  position: 'relative',
  aspectRatio: '9/16',
  borderRadius: 18,
  overflow: 'hidden',
});

export const PlayButtonWrap = styled('div')({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const PlayButton = styled('span')({
  width: 52,
  height: 52,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.85)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  color: TEAL,
  boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
});

export const VideoCaption = styled('figcaption')({
  fontSize: 13.5,
  fontWeight: 700,
  color: INK,
  marginTop: 10,
});

export const VideoMeta = styled('div')({
  fontSize: 12,
  color: '#6B7973',
});

/* ───────────────────────── placeholder slot ───────────────────────── */

export const Placeholder = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(150deg,#EEF2E4,#E4EAD6)',
});

export const PlaceholderLabel = styled('span')({
  fontFamily: "'Space Mono',monospace",
  fontSize: 10.5,
  fontWeight: 700,
  color: '#8A9690',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
});

/* ───────────────────────── gallery ───────────────────────── */

export const GallerySection = styled('section')({
  padding: `56px ${SECTION_PAD_X} 70px`,
  background: 'linear-gradient(180deg,#EEF2E4,#E6EDD6)',
  overflow: 'hidden',
});

export const GalleryHeaderBlock = styled('div')({
  marginBottom: 36,
  textAlign: 'center',
});

export const GalleryRow = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 900px)': {
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > div': { marginLeft: '0 !important', marginRight: '0 !important', transform: 'none !important' },
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
  background: '#E9E4DA',
  flexShrink: 0,
});

export const GalleryPhotoWrap = styled('div')({
  position: 'relative',
  aspectRatio: '3/4',
  background: '#F1ECE1',
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
  fontFamily: "'Alex Brush',cursive",
  fontSize: 20,
  color: '#C96A45',
});

export const QuoteMain = styled('div')({
  fontFamily: "'Newsreader', serif",
  fontStyle: 'italic',
  fontSize: 25,
  lineHeight: 1.05,
  color: INK,
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

/* ───────────────────────── channels ───────────────────────── */

export const ChannelsSection = styled('section')({
  padding: `26px ${SECTION_PAD_X} 30px`,
  background: '#EDE4D3',
});

export const ChannelsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'minmax(180px, 340px) auto auto',
  gap: 18,
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr' },
});

export const ChannelsScript = styled('div')({
  fontFamily: "'Alex Brush',cursive",
  fontSize: 30,
  lineHeight: 0.92,
  color: INK,
});

export const ChannelsLead = styled('p')({
  fontFamily: "'Space Mono',monospace",
  fontSize: 9.5,
  lineHeight: 1.6,
  color: '#5A665F',
  margin: '8px 0 0',
  maxWidth: '20ch',
});

export const IgCard = styled('a', {
  shouldForwardProp: (prop) => prop !== '$rotate',
})<{ $rotate: number }>(({ $rotate }) => ({
  display: 'block',
  textDecoration: 'none',
  width: 120,
  transform: `rotate(${$rotate}deg)`,
  transition: 'transform .25s ease',
  '&:hover': { transform: 'translateY(-6px) rotate(0deg)' },
}));

export const IgCardInner = styled('div')({
  background: '#fff',
  padding: '6px 6px 18px',
  boxShadow: '0 10px 20px rgba(18,59,55,0.18)',
});

export const IgPhotoWrap = styled('div')({
  position: 'relative',
  aspectRatio: '4/5',
  overflow: 'hidden',
});

export const IgHandle = styled('div')({
  fontFamily: "'Space Mono',monospace",
  fontSize: 10,
  fontWeight: 700,
  color: INK,
  textAlign: 'center',
  marginTop: 8,
});

export const IgDesc = styled('div')({
  fontFamily: "'Space Mono',monospace",
  fontSize: 8,
  color: '#7A7368',
  textAlign: 'center',
  marginTop: 3,
});

/* ───────────────────────── app toolbox ───────────────────────── */

export const AppsSection = styled('section')({
  padding: `50px ${SECTION_PAD_X} 70px`,
  background: 'linear-gradient(180deg,#E6EDD6,#EEF2E4)',
});

export const AppsHeaderBlock = styled('div')({
  marginBottom: 30,
  textAlign: 'center',
});

export const PhoneFrameWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const PhoneFrame = styled('div')({
  width: 270,
  borderRadius: 40,
  background: INK,
  padding: 12,
  boxShadow: '0 30px 60px rgba(18,59,55,0.35)',
});

export const PhoneScreen = styled('div')({
  position: 'relative',
  background: '#FBF6EF',
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
  background: INK,
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
  fontSize: 10,
  fontWeight: 700,
  color: INK,
});

/* ───────────────────────── CTA ───────────────────────── */

export const CtaSection = styled('section')({
  padding: `64px ${SECTION_PAD_X}`,
  background: 'linear-gradient(165deg,#FBEDEE,#F2BEC1 70%,#EFA8AC)',
  textAlign: 'center',
});

export const CtaTitle = styled('h2')({
  fontFamily: "'Newsreader', serif",
  fontWeight: 400,
  fontSize: 36,
  lineHeight: 1.1,
  color: INK,
  margin: '0 0 12px',
});

export const CtaLead = styled('p')({
  fontFamily: "'Newsreader', serif",
  fontStyle: 'italic',
  fontSize: 17,
  color: '#526059',
  margin: '0 0 26px',
});

export const CtaButtonRow = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: 12,
  flexWrap: 'wrap',
});

export const CtaEmailButton = styled('a')({
  fontSize: 14,
  fontWeight: 700,
  color: '#fff',
  background: TEAL,
  padding: '14px 28px',
  borderRadius: 999,
  textDecoration: 'none',
  boxShadow: '0 12px 30px rgba(26,97,93,0.32)',
});

export const CtaGhostButton = styled('a')({
  fontSize: 14,
  fontWeight: 700,
  color: TEAL,
  background: 'rgba(255,255,255,0.65)',
  border: '1px solid rgba(26,97,93,0.3)',
  padding: '14px 28px',
  borderRadius: 999,
  textDecoration: 'none',
});

/* ───────────────────────── footer ───────────────────────── */

export const PageFooter = styled('footer')({
  padding: `22px ${SECTION_PAD_X}`,
  background: '#0E2A28',
  color: '#93A39C',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 10,
});

export const FooterTagline = styled('span')({
  fontFamily: "'Newsreader', serif",
  fontStyle: 'italic',
  fontSize: 14,
});

export const FooterMeta = styled('span')({
  fontSize: 11,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
});

/* ───────────────────────── images ───────────────────────── */

export const CoverImage = styled(Image)({
  objectFit: 'cover',
});
