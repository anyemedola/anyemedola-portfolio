import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export {
  FilterBar, SearchWrap, SearchIcon, SearchInput,
  Segment, SegBtn,
  TableWrap, Table,
  TagsRow, TagPill,
  TdActions, BtnSm,
} from '../shared/styles';

export const Th = styled('th')({
  padding: '12px 20px',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  textAlign: 'left',
  borderBottom: `1px solid ${tokens.border}`,
  background: tokens.surface2,
  '@media (max-width: 768px)': { '&:nth-of-type(3)': { display: 'none' }, '&:nth-of-type(4)': { display: 'none' } },
});

export const Tr = styled('tr')<{ accent?: string }>(({ accent }) => ({
  borderBottom: `1px solid ${tokens.border}`,
  transition: 'background 0.15s',
  '&:last-child': { borderBottom: 'none' },
  '&:hover': { background: tokens.surface2 },
  ...(accent && { borderLeft: `3px solid ${accent}` }),
}));

export const Td = styled('td')({
  padding: '14px 20px',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 13,
  color: tokens.textDim,
  verticalAlign: 'middle',
  '@media (max-width: 768px)': { '&:nth-of-type(3)': { display: 'none' }, '&:nth-of-type(4)': { display: 'none' } },
});

export const TdTitle = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontWeight: 600,
  color: tokens.text,
  maxWidth: 300,
});

export const TdSub = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 11,
  color: tokens.textMuted,
  marginTop: 2,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: 300,
});
