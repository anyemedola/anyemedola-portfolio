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

function formatDate(dateStr: string) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function BlogView() {
  const { blogPosts, openBlogPanel } = useAdmin();
  const { dict } = useLang();
  const b = dict.blog;
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<StatusFilter>('all');

  const list = blogPosts.filter(p => {
    const matchStatus = status === 'all' || p.status === status;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  }).sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  return (
    <>
      <S.FilterBar>
        <S.SearchWrap>
          <S.SearchIcon aria-hidden="true">⌕</S.SearchIcon>
          <S.SearchInput value={search} onChange={e => setSearch(e.target.value)} placeholder={b.searchPlaceholder} aria-label={b.searchPlaceholder} />
        </S.SearchWrap>
        <S.Segment role="group" aria-label="Filter by status">
          {(['all', 'published', 'draft'] as StatusFilter[]).map(s => (
            <S.SegBtn key={s} active={status === s} onClick={() => setStatus(s)}>
              {s === 'all' ? b.all : s === 'published' ? b.published : b.drafts}
            </S.SegBtn>
          ))}
        </S.Segment>
      </S.FilterBar>

      {list.length === 0 ? (
        <EmptyState
          icon="✦"
          title={b.emptyTitle}
          sub={b.emptySub}
          action={<Btn variant="primary" onClick={() => openBlogPanel()}>{b.newPost}</Btn>}
        />
      ) : (
        <S.TableWrap>
          <S.Table aria-label="Blog posts list">
            <thead>
              <tr>
                <S.Th>{b.colPost}</S.Th>
                <S.Th>{b.colCategory}</S.Th>
                <S.Th>{b.colReadTime}</S.Th>
                <S.Th>{b.colDate}</S.Th>
                <S.Th>{b.colStatus}</S.Th>
                <S.Th style={{ textAlign: 'right' }}>{b.colActions}</S.Th>
              </tr>
            </thead>
            <tbody>
              {list.map(p => (
                <S.Tr key={p.id}>
                  <S.Td>
                    <S.TdTitle>{p.title}</S.TdTitle>
                    <S.TdSub>{p.subtitle || p.excerptEn || '—'}</S.TdSub>
                  </S.Td>
                  <S.Td>
                    <S.TagsRow>
                      {p.tags.slice(0, 2).map(t => <S.TagPill key={t}>{t}</S.TagPill>)}
                      {p.tags.length > 2 && <S.TagPill>+{p.tags.length - 2}</S.TagPill>}
                    </S.TagsRow>
                  </S.Td>
                  <S.Td><span style={{ fontSize: 12, color: tokens.textMuted }}>{p.readTime ? p.readTime + ' min' : '—'}</span></S.Td>
                  <S.Td><span style={{ fontSize: 12, color: tokens.textMuted }}>{p.date ? formatDate(p.date) : '—'}</span></S.Td>
                  <S.Td><Badge variant={p.status === 'published' ? 'published' : 'draft'}>{p.status === 'published' ? b.statusPublished : b.statusDraft}</Badge></S.Td>
                  <S.Td><S.TdActions><S.BtnSm variant="ghost" onClick={() => openBlogPanel(p.id)}>{b.edit}</S.BtnSm></S.TdActions></S.Td>
                </S.Tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableWrap>
      )}
    </>
  );
}
