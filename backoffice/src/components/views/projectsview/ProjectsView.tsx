'use client';

import { useState } from 'react';
import { tokens } from '@/theme/tokens';
import { useAdmin } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import Badge from '@/components/ui/badge/Badge';
import EmptyState from '@/components/ui/emptystate/EmptyState';
import { Btn } from '@/components/layout/topbar/TopBar';
import * as S from './styles';

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
      <S.FilterBar>
        <S.SearchWrap>
          <S.SearchIcon aria-hidden="true">⌕</S.SearchIcon>
          <S.SearchInput
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={p.searchPlaceholder}
            aria-label={p.searchPlaceholder}
          />
        </S.SearchWrap>
        <S.Segment role="group" aria-label="Filter by status">
          {(['all', 'published', 'draft'] as StatusFilter[]).map(s => (
            <S.SegBtn key={s} active={status === s} onClick={() => setStatus(s)}>
              {s === 'all' ? p.all : s === 'published' ? p.published : p.drafts}
            </S.SegBtn>
          ))}
        </S.Segment>
      </S.FilterBar>

      {list.length === 0 ? (
        <EmptyState
          icon="◻"
          title={p.emptyTitle}
          sub={p.emptySub}
          action={<Btn variant="primary" onClick={() => openProjectPanel()}>{p.newProject}</Btn>}
        />
      ) : (
        <S.TableWrap>
          <S.Table aria-label="Projects list">
            <thead>
              <tr>
                <S.Th style={{ width: 52 }} />
                <S.Th>{p.colProject}</S.Th>
                <S.Th>{p.colType}</S.Th>
                <S.Th>{p.colStack}</S.Th>
                <S.Th>{p.colStatus}</S.Th>
                <S.Th>{p.colFeatured}</S.Th>
                <S.Th style={{ textAlign: 'right' }}>{p.colActions}</S.Th>
              </tr>
            </thead>
            <tbody>
              {list.map(p => (
                <S.Tr key={p.id}>
                  <S.Td>
                    <S.Thumb>
                      {p.image
                        ? <img src={p.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={p.title} />
                        : '🖼'}
                    </S.Thumb>
                  </S.Td>
                  <S.Td>
                    <S.TdTitle>{p.title}</S.TdTitle>
                    <S.TdSub>{p.descEn || '—'}</S.TdSub>
                  </S.Td>
                  <S.Td><span style={{ fontSize: 11, color: tokens.textMuted }}>{p.type || '—'}</span></S.Td>
                  <S.Td>
                    <S.TagsRow>
                      {p.stack.slice(0, 3).map(t => <S.TagPill key={t}>{t}</S.TagPill>)}
                      {p.stack.length > 3 && <S.TagPill>+{p.stack.length - 3}</S.TagPill>}
                    </S.TagsRow>
                  </S.Td>
                  <S.Td><Badge variant={p.published ? 'published' : 'draft'}>{p.published ? dict.projects.statusPublished : dict.projects.statusDraft}</Badge></S.Td>
                  <S.Td>
                    {p.featured
                      ? <Badge variant="featured">{dict.projects.featuredBadge}</Badge>
                      : <span style={{ color: tokens.textMuted, fontSize: 11 }}>—</span>}
                  </S.Td>
                  <S.Td>
                    <S.TdActions>
                      <S.BtnSm variant="ghost" onClick={() => openProjectPanel(p.id)}>{dict.projects.edit}</S.BtnSm>
                    </S.TdActions>
                  </S.Td>
                </S.Tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableWrap>
      )}
    </>
  );
}
