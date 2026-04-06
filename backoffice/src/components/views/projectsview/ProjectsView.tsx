'use client';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import { useAdmin } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import Badge from '@/components/ui/badge/Badge';
import EmptyState from '@/components/ui/emptystate/EmptyState';
import { Btn } from '@/components/layout/topbar/TopBar';

const FilterBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 20,
  flexWrap: 'wrap',
  '@media (max-width: 768px)': { flexDirection: 'column', alignItems: 'stretch' },
});

const SearchWrap = styled('div')({ position: 'relative', flex: 1, minWidth: 200, '@media (max-width: 768px)': { minWidth: 'unset' } });

const SearchIcon = styled('span')({
  position: 'absolute',
  left: 12, top: '50%',
  transform: 'translateY(-50%)',
  fontSize: 13,
  color: tokens.textMuted,
  pointerEvents: 'none',
});

const SearchInput = styled('input')({
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

const Segment = styled('div')({
  display: 'inline-flex',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  borderRadius: 2,
  overflow: 'hidden',
  '@media (max-width: 768px)': { alignSelf: 'flex-start' },
});

const SegBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
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

const TableWrap = styled('div')({
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
  borderRadius: 2,
  overflow: 'hidden',
  overflowX: 'auto',
});

const Table = styled('table')({ width: '100%', borderCollapse: 'collapse' });

const Th = styled('th')({
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
  '@media (max-width: 1024px)': { '&:nth-of-type(4)': { display: 'none' } },
  '@media (max-width: 768px)': {
    '&:nth-of-type(3)': { display: 'none' },
    '&:nth-of-type(4)': { display: 'none' },
    '&:nth-of-type(6)': { display: 'none' },
  },
});

const Tr = styled('tr')({
  borderBottom: `1px solid ${tokens.border}`,
  transition: 'background 0.15s',
  '&:last-child': { borderBottom: 'none' },
  '&:hover': { background: 'rgba(255,255,255,0.02)' },
});

const Td = styled('td')({
  padding: '14px 20px',
  fontSize: 13,
  color: tokens.textDim,
  verticalAlign: 'middle',
  fontFamily: "'DM Sans', sans-serif",
  '@media (max-width: 1024px)': { '&:nth-of-type(4)': { display: 'none' } },
  '@media (max-width: 768px)': {
    '&:nth-of-type(3)': { display: 'none' },
    '&:nth-of-type(4)': { display: 'none' },
    '&:nth-of-type(6)': { display: 'none' },
  },
});

const TdTitle = styled('div')({ fontWeight: 500, color: tokens.text, maxWidth: 240 });
const TdSub = styled('div')({
  fontSize: 11, color: tokens.textMuted, marginTop: 2,
  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 240,
});

const Thumb = styled('div')({
  width: 52, height: 36,
  background: tokens.surface3,
  borderRadius: 2,
  overflow: 'hidden',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  opacity: 0.5,
});

const TagsRow = styled('div')({ display: 'flex', gap: 4, flexWrap: 'wrap' });
const TagPill = styled('span')({
  fontSize: 10,
  background: tokens.surface3,
  color: tokens.textMuted,
  padding: '2px 8px',
  borderRadius: 2,
  letterSpacing: '0.04em',
  fontFamily: "'DM Sans', sans-serif",
});

const TdActions = styled('div')({ display: 'flex', gap: 6, justifyContent: 'flex-end' });

const BtnSm = styled(Btn)({ padding: '6px 14px', fontSize: 10, minHeight: 30 });

type StatusFilter = 'all' | 'published' | 'draft';

export default function ProjectsView() {
  const { projects, openProjectPanel } = useAdmin();
  const { dict } = useLang();
  const p = dict.projects;
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<StatusFilter>('all');

  const list = projects.filter(p => {
    const matchStatus = status === 'all' || (status === 'published' ? p.published : !p.published);
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  }).sort((a, b) => a.order - b.order);

  return (
    <>
      <FilterBar>
        <SearchWrap>
          <SearchIcon aria-hidden="true">⌕</SearchIcon>
          <SearchInput
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={p.searchPlaceholder}
            aria-label={p.searchPlaceholder}
          />
        </SearchWrap>
        <Segment role="group" aria-label="Filter by status">
          {(['all', 'published', 'draft'] as StatusFilter[]).map(s => (
            <SegBtn key={s} active={status === s} onClick={() => setStatus(s)}>
              {s === 'all' ? p.all : s === 'published' ? p.published : p.drafts}
            </SegBtn>
          ))}
        </Segment>
      </FilterBar>

      {list.length === 0 ? (
        <EmptyState
          icon="◻"
          title={p.emptyTitle}
          sub={p.emptySub}
          action={<Btn variant="primary" onClick={() => openProjectPanel()}>{p.newProject}</Btn>}
        />
      ) : (
        <TableWrap>
          <Table aria-label="Projects list">
            <thead>
              <tr>
                <Th style={{ width: 52 }} />
                <Th>{p.colProject}</Th>
                <Th>{p.colType}</Th>
                <Th>{p.colStack}</Th>
                <Th>{p.colStatus}</Th>
                <Th>{p.colFeatured}</Th>
                <Th style={{ textAlign: 'right' }}>{p.colActions}</Th>
              </tr>
            </thead>
            <tbody>
              {list.map(p => (
                <Tr key={p.id}>
                  <Td>
                    <Thumb>
                      {p.image
                        ? <img src={p.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={p.title} />
                        : '🖼'}
                    </Thumb>
                  </Td>
                  <Td>
                    <TdTitle>{p.title}</TdTitle>
                    <TdSub>{p.descEn || '—'}</TdSub>
                  </Td>
                  <Td><span style={{ fontSize: 11, color: tokens.textMuted }}>{p.type || '—'}</span></Td>
                  <Td>
                    <TagsRow>
                      {p.stack.slice(0, 3).map(t => <TagPill key={t}>{t}</TagPill>)}
                      {p.stack.length > 3 && <TagPill>+{p.stack.length - 3}</TagPill>}
                    </TagsRow>
                  </Td>
                  <Td><Badge variant={p.published ? 'published' : 'draft'}>{p.published ? dict.projects.statusPublished : dict.projects.statusDraft}</Badge></Td>
                  <Td>
                    {p.featured
                      ? <Badge variant="featured">{dict.projects.featuredBadge}</Badge>
                      : <span style={{ color: tokens.textMuted, fontSize: 11 }}>—</span>}
                  </Td>
                  <Td>
                    <TdActions>
                      <BtnSm variant="ghost" onClick={() => openProjectPanel(p.id)}>{dict.projects.edit}</BtnSm>
                    </TdActions>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrap>
      )}
    </>
  );
}
