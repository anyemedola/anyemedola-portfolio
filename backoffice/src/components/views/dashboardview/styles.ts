import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const StatsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 2,
  marginBottom: 32,
  '@media (max-width: 1024px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@media (max-width: 480px)': { gap: 4 },
});

export const StatCard = styled('div')<{ accent?: string }>(({ accent = tokens.mint }) => ({
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
  padding: '24px 28px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'border-color 0.2s',
  '--accent': accent,
  '&:hover': { borderColor: tokens.borderHover },
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 2,
    background: accent,
    opacity: 0,
    transition: 'opacity 0.2s',
  },
  '&:hover::before': { opacity: 1 },
  '@media (max-width: 480px)': { padding: '14px' },
} as React.CSSProperties));

export const StatLabel = styled('div')({
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 12,
  fontFamily: "'DM Sans', sans-serif",
  '@media (max-width: 480px)': { fontSize: 8 },
});

export const StatValue = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 48,
  lineHeight: 1,
  color: tokens.cream,
  letterSpacing: '0.02em',
  '@media (max-width: 480px)': { fontSize: 30 },
});

export const StatAccentSpan = styled('span')<{ accent?: string }>(({ accent = tokens.mint }) => ({
  color: accent,
}));

export const StatSub = styled('div')({
  fontSize: 11,
  color: tokens.textMuted,
  marginTop: 8,
  letterSpacing: '0.04em',
  fontFamily: "'DM Sans', sans-serif",
  '@media (max-width: 480px)': { fontSize: 10 },
});

export const StatIcon = styled('span')({
  position: 'absolute',
  top: 20, right: 20,
  fontSize: 22,
  opacity: 0.15,
  '@media (max-width: 480px)': { display: 'none' },
});

export const DashGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 340px',
  gap: 20,
  marginTop: 24,
  '@media (max-width: 1024px)': { gridTemplateColumns: '1fr' },
  '@media (max-width: 768px)': { gap: 16 },
});

export const DashCard = styled('div')({
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
});

export const DashCardHeader = styled('div')({
  padding: '16px 20px',
  borderBottom: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const DashCardTitle = styled('span')({
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  fontFamily: "'DM Sans', sans-serif",
});

export const ActivityList = styled('div')({ display: 'flex', flexDirection: 'column' });

export const ActivityItem = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 14,
  padding: '14px 20px',
  borderBottom: `1px solid ${tokens.border}`,
  transition: 'background 0.15s',
  '&:last-child': { borderBottom: 'none' },
  '&:hover': { background: 'rgba(255,255,255,0.02)' },
});

export const ActivityDot = styled('div')<{ dotType: 'mint' | 'pink' | 'warn' }>(({ dotType }) => ({
  width: 8, height: 8,
  borderRadius: '50%',
  background: dotType === 'mint' ? tokens.mint : dotType === 'pink' ? tokens.pink : tokens.warning,
  flexShrink: 0,
  marginTop: 4,
}));

export const ActivityText = styled('div')({
  fontSize: 12,
  color: tokens.textDim,
  lineHeight: 1.5,
  fontFamily: "'DM Sans', sans-serif",
  '& strong': { color: tokens.text, fontWeight: 500 },
});

export const ActivityTime = styled('div')({
  fontSize: 10,
  color: tokens.textMuted,
  marginTop: 2,
  letterSpacing: '0.06em',
  fontFamily: "'DM Sans', sans-serif",
});

export const QuickActions = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 2,
});

export const QuickAction = styled('button')({
  background: tokens.surface2,
  border: 'none',
  padding: 20,
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'background 0.2s',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  '&:hover': { background: tokens.surface3 },
});

export const QAIcon = styled('span')({ fontSize: 22, opacity: 0.6 });
export const QALabel = styled('div')({ fontSize: 12, fontWeight: 500, color: tokens.text, fontFamily: "'DM Sans', sans-serif" });
export const QASub = styled('div')({ fontSize: 10, color: tokens.textMuted, letterSpacing: '0.04em', fontFamily: "'DM Sans', sans-serif" });
export const QAArrow = styled('div')({ fontSize: 12, color: tokens.mint, marginTop: 4 });
