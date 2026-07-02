import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const StatsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 16,
  marginBottom: 32,
  '@media (max-width: 1024px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@media (max-width: 480px)': { gap: 10 },
});

export const StatCard = styled('div')<{ accent?: string }>(({ accent = tokens.rose }) => ({
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
  borderRadius: 16,
  padding: '24px 28px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  '&:hover': {
    borderColor: accent,
    boxShadow: `0 8px 32px -16px ${accent}44`,
  },
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 3,
    background: accent,
    borderRadius: '16px 16px 0 0',
    opacity: 0,
    transition: 'opacity 0.2s',
  },
  '&:hover::before': { opacity: 1 },
  '@media (max-width: 480px)': { padding: '16px' },
} as React.CSSProperties));

export const StatLabel = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 12,
  '@media (max-width: 480px)': { fontSize: 8 },
});

export const StatValue = styled('div')({
  fontFamily: "'Newsreader', var(--font-newsreader), serif",
  fontSize: 52,
  lineHeight: 1,
  color: tokens.ink,
  letterSpacing: '-0.01em',
  '@media (max-width: 480px)': { fontSize: 34 },
});

export const StatAccentSpan = styled('span')<{ accent?: string }>(({ accent = tokens.rose }) => ({
  color: accent,
}));

export const StatSub = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  color: tokens.textMuted,
  marginTop: 8,
  letterSpacing: '0.04em',
  '@media (max-width: 480px)': { fontSize: 10 },
});

export const StatIcon = styled('span')({
  position: 'absolute',
  top: 20, right: 20,
  fontSize: 24,
  opacity: 0.10,
  '@media (max-width: 480px)': { display: 'none' },
});

export const DashGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 340px',
  gap: 20,
  marginTop: 8,
  '@media (max-width: 1024px)': { gridTemplateColumns: '1fr' },
  '@media (max-width: 768px)': { gap: 16 },
});

export const DashCard = styled('div')({
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
  borderRadius: 16,
  overflow: 'hidden',
});

export const DashCardHeader = styled('div')({
  padding: '16px 20px',
  borderBottom: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const DashCardTitle = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
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
  '&:hover': { background: tokens.surface2 },
});

export const ActivityDot = styled('div')<{ dotType: 'mint' | 'pink' | 'warn' }>(({ dotType }) => ({
  width: 8, height: 8,
  borderRadius: '50%',
  background: dotType === 'mint' ? tokens.success : dotType === 'pink' ? tokens.rose : tokens.warning,
  flexShrink: 0,
  marginTop: 4,
}));

export const ActivityText = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  color: tokens.textDim,
  lineHeight: 1.5,
  '& strong': { color: tokens.text, fontWeight: 600 },
});

export const ActivityTime = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  color: tokens.textMuted,
  marginTop: 2,
  letterSpacing: '0.06em',
});

export const QuickActions = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 1,
});

export const QuickAction = styled('button')({
  background: tokens.surface,
  border: 'none',
  padding: 20,
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'background 0.2s',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  borderTop: `1px solid ${tokens.border}`,
  '&:hover': { background: tokens.surface2 },
});

export const QAIcon = styled('span')({ fontSize: 22, opacity: 0.5, color: tokens.rose });
export const QALabel = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 600,
  color: tokens.text,
});
export const QASub = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  color: tokens.textMuted,
  letterSpacing: '0.04em',
});
export const QAArrow = styled('div')({
  fontSize: 12,
  color: tokens.rose,
  marginTop: 4,
});
