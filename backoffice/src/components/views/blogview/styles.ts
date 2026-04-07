import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import { Btn } from '@/components/layout/topbar/styles';

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
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  fontWeight: 300,
  padding: '10px 14px',
  borderRadius: 2,
  outline: 'none',
  transition: 'border-color 0.2s',
  '&:focus': { borderColor: tokens.mint },
  '&::placeholder': { color: tokens.textMuted },
});

export const Segment = styled('div')({
  display: 'inline-flex',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  borderRadius: 2,
  overflow: 'hidden',
  '@media (max-width: 768px)': { alignSelf: 'flex-start' },
});

export const SegBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
  padding: '8px 18px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  background: active ? tokens.surface3 : 'none',
  border: 'none',
  borderRight: `1px solid ${tokens.border}`,
  color: active ? tokens.mint : tokens.textMuted,
  cursor: 'pointer',
  transition: 'all 0.15s',
  '&:last-child': { borderRight: 'none' },
  '&:hover': { color: tokens.text, background: 'rgba(255,255,255,0.03)' },
}));

export const TableWrap = styled('div')({
  background: tokens.surface, border: `1px solid ${tokens.border}`,
  borderRadius: 2, overflow: 'hidden', overflowX: 'auto',
});

export const Table = styled('table')({ width: '100%', borderCollapse: 'collapse' });

export const Th = styled('th')({
  padding: '12px 20px',
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  textAlign: 'left',
  borderBottom: `1px solid ${tokens.border}`,
  background: tokens.surface2,
  fontFamily: "'DM Sans', sans-serif",
  '@media (max-width: 768px)': { '&:nth-of-type(3)': { display: 'none' }, '&:nth-of-type(4)': { display: 'none' } },
});

export const Tr = styled('tr')({
  borderBottom: `1px solid ${tokens.border}`,
  transition: 'background 0.15s',
  '&:last-child': { borderBottom: 'none' },
  '&:hover': { background: 'rgba(255,255,255,0.02)' },
});

export const Td = styled('td')({
  padding: '14px 20px',
  fontSize: 13,
  color: tokens.textDim,
  verticalAlign: 'middle',
  fontFamily: "'DM Sans', sans-serif",
  '@media (max-width: 768px)': { '&:nth-of-type(3)': { display: 'none' }, '&:nth-of-type(4)': { display: 'none' } },
});

export const TdTitle = styled('div')({ fontWeight: 500, color: tokens.text, maxWidth: 300 });
export const TdSub = styled('div')({
  fontSize: 11, color: tokens.textMuted, marginTop: 2,
  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 300,
});
export const TagsRow = styled('div')({ display: 'flex', gap: 4, flexWrap: 'wrap' });
export const TagPill = styled('span')({
  fontSize: 10, background: tokens.surface3, color: tokens.textMuted,
  padding: '2px 8px', borderRadius: 2, letterSpacing: '0.04em',
  fontFamily: "'DM Sans', sans-serif",
});
export const TdActions = styled('div')({ display: 'flex', gap: 6, justifyContent: 'flex-end' });
export const BtnSm = styled(Btn)({ padding: '6px 14px', fontSize: 10, minHeight: 30 });
