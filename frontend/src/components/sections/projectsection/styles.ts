import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const ProjectsRoot = styled('section')({
  padding: '120px 0',
  background: tokens.cream,
  overflow: 'hidden',
});

export const Inner = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 56px',
  '@media (max-width: 900px)': {
    padding: '0 24px',
  },
});

export const ProjectsHeader = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: 72,
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export const Counter = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 100,
  lineHeight: 1,
  color: 'rgba(26,20,16,0.06)',
  pointerEvents: 'none',
  alignSelf: 'flex-start',
});

export const SectionLabel = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: tokens.pink,
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  '&::before': {
    content: "''",
    display: 'block',
    width: 32,
    height: 1.5,
    background: tokens.pink,
    flexShrink: 0,
  },
});

export const SectionTitle = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(48px, 5vw, 72px)',
  lineHeight: 0.9,
  letterSpacing: '0.02em',
  color: tokens.ink,
  '& em': {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontWeight: 300,
    color: tokens.mint,
  },
});

export const Showcase = styled('article')<{ flip?: boolean; accent?: string }>(({ flip, accent }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 2,
  background: tokens.border,
  border: `1px solid ${tokens.border}`,
  marginBottom: 2,
  direction: flip ? 'rtl' : 'ltr',
  '--project-accent': accent ?? tokens.mint,
  '& > *': { direction: 'ltr' },
  '&:hover .showcase-visual::after': { transform: 'scaleX(1)' },
  '&:hover .project-stack-tag': {
    borderColor: 'var(--project-accent)',
    color: 'var(--project-accent)',
  },
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    direction: 'ltr',
  },
} as React.CSSProperties));

export const Visual = styled('div')({
  position: 'relative',
  aspectRatio: '4/3',
  overflow: 'hidden',
  background: tokens.ink,
  '&::after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: 'var(--project-accent)',
    zIndex: 2,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s ease',
    pointerEvents: 'none',
  },
  '@media (max-width: 900px)': {
    aspectRatio: '16/9',
  },
});

export const Placeholder = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: tokens.ink,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: "''",
    position: 'absolute',
    inset: 0,
    background: `
      repeating-linear-gradient(45deg, rgba(110,207,184,0.04) 0px, rgba(110,207,184,0.04) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(-45deg, rgba(232,84,122,0.04) 0px, rgba(232,84,122,0.04) 1px, transparent 1px, transparent 40px)
    `,
    pointerEvents: 'none',
  },
});

export const PlaceholderText = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 13,
  letterSpacing: '0.25em',
  color: 'rgba(249,245,238,0.25)',
  textTransform: 'uppercase',
  textAlign: 'center',
  zIndex: 1,
  lineHeight: 2,
});

export const ShowcaseNum = styled('span')({
  position: 'absolute',
  top: 24,
  left: 24,
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 13,
  letterSpacing: '0.2em',
  color: 'rgba(249,245,238,0.4)',
  zIndex: 2,
});

export const Info = styled('div')({
  background: tokens.cream,
  padding: '52px 48px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media (max-width: 900px)': {
    padding: '32px 24px',
  },
});

export const ProjectType = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--project-accent)',
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  '&::before': {
    content: "''",
    display: 'block',
    width: 24,
    height: 1.5,
    background: 'var(--project-accent)',
    flexShrink: 0,
  },
});

export const ProjectName = styled('h3')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(36px, 4vw, 58px)',
  lineHeight: 0.9,
  color: tokens.ink,
  letterSpacing: '0.02em',
  marginBottom: 24,
});

export const ProjectDesc = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 18,
  fontWeight: 300,
  lineHeight: 1.7,
  color: '#4A4540',
  flex: 1,
  marginBottom: 32,
});

export const Stack = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  marginBottom: 36,
  listStyle: 'none',
});

export const StackTag = styled('li')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  color: tokens.ink,
  background: 'transparent',
  border: `1px solid ${tokens.border}`,
  padding: '5px 14px',
  borderRadius: 2,
  transition: 'all 0.2s',
});

export const Links = styled('div')({
  display: 'flex',
  gap: 14,
  flexWrap: 'wrap',
});

export const ProjectLink = styled('a')<{ disabled?: boolean }>(({ disabled }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '12px 24px',
  border: `1.5px solid ${tokens.ink}`,
  color: tokens.ink,
  cursor: disabled ? 'default' : 'none',
  transition: 'all 0.25s ease',
  minHeight: 44,
  opacity: disabled ? 0.35 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
  '&:hover': disabled ? {} : {
    background: tokens.ink,
    color: tokens.cream,
    transform: 'translateY(-2px)',
  },
}));
