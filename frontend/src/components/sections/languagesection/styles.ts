import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const LangRoot = styled('section')({
  background: `linear-gradient(135deg, ${tokens.mint} 0%, #3dbda3 100%)`,
  padding: '80px 56px',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: 80,
  alignItems: 'center',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    padding: '56px 24px',
    gap: 40,
  },
});

export const LangTitle = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(56px, 6vw, 92px)',
  lineHeight: 0.88,
  color: tokens.ink,
});

export const LangList = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 32,
  listStyle: 'none',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

export const LangItem = styled('li')({
  background: 'rgba(255,255,255,0.3)',
  padding: '28px 24px',
  border: '1px solid rgba(255,255,255,0.4)',
});

export const LangName = styled('span')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 32,
  letterSpacing: '0.06em',
  color: tokens.ink,
  display: 'block',
});

export const LangLevel = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(26,20,16,0.7)',
  marginTop: 6,
});

export const Bar = styled('div')({
  height: 3,
  background: 'rgba(26,20,16,0.15)',
  marginTop: 16,
  borderRadius: 2,
  overflow: 'hidden',
});

export const BarFill = styled('div')<{ width: number }>(({ width }) => ({
  height: '100%',
  width: `${width}%`,
  background: tokens.ink,
  borderRadius: 2,
}));
