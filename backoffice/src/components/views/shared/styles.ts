import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import { Btn } from '@/components/layout/topbar/styles';

// Shared table view components used by BlogView and ProjectsView

export const FilterBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 20,
  flexWrap: 'wrap',
  '@media (max-width: 768px)': { flexDirection: 'column', alignItems: 'stretch' },
});

export const SearchWrap = styled('div')({
  position: 'relative', flex: 1, minWidth: 200,
  '@media (max-width: 768px)': { minWidth: 'unset' },
});

export const SearchIcon = styled('span')({
  position: 'absolute', left: 12, top: '50%',
  transform: 'translateY(-50%)', fontSize: 13,
  color: tokens.textMuted, pointerEvents: 'none',
});

export const SearchInput = styled('input')({
  width: '100%',
  paddingLeft: '36px !important',
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  fontWeight: 400,
  padding: '10px 14px',
  borderRadius: 10,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  '&:focus': { borderColor: tokens.rose, boxShadow: `0 0 0 3px ${tokens.roseGlow}` },
  '&::placeholder': { color: tokens.textMuted },
});

export const Segment = styled('div')({
  display: 'inline-flex',
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
  borderRadius: 10,
  overflow: 'hidden',
  '@media (max-width: 768px)': { alignSelf: 'flex-start' },
});

export const SegBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
  padding: '8px 18px',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  background: active ? tokens.rose : 'none',
  border: 'none',
  borderRight: `1px solid ${tokens.border}`,
  color: active ? '#fff' : tokens.textMuted,
  cursor: 'pointer',
  transition: 'all 0.15s',
  '&:last-child': { borderRight: 'none' },
  '&:hover': { color: active ? '#fff' : tokens.text, background: active ? tokens.rose : tokens.surface2 },
}));

export const TableWrap = styled('div')({
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
  borderRadius: 16,
  overflow: 'hidden',
  overflowX: 'auto',
});

export const Table = styled('table')({ width: '100%', borderCollapse: 'collapse' });

export const TagsRow = styled('div')({ display: 'flex', gap: 4, flexWrap: 'wrap' });

export const TagPill = styled('span')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  background: tokens.surface2,
  color: tokens.textMuted,
  padding: '2px 8px',
  borderRadius: 6,
  letterSpacing: '0.04em',
});

export const TdActions = styled('div')({ display: 'flex', gap: 6, justifyContent: 'flex-end' });

export const BtnSm = styled(Btn)({ padding: '6px 14px', fontSize: 10, minHeight: 30, borderRadius: 6 });
