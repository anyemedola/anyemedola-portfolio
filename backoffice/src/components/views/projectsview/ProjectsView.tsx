'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tokens } from '@/theme/tokens';
import { useAdmin } from '@/context/AdminContext';
import T from '@/components/ui/t/T';
import Badge from '@/components/ui/badge/Badge';
import EmptyState from '@/components/ui/emptystate/EmptyState';
import { Btn } from '@/components/layout/topbar/styles';
import * as S from './styles';

type StatusFilter = 'all' | 'published' | 'draft';

export default function ProjectsView() {
  const { projects, openProjectPanel } = useAdmin();
  const { t } = useTranslation();
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
            placeholder={t('projects.searchPlaceholder')}
            aria-label={t('projects.searchPlaceholder')}
          />
        </S.SearchWrap>
        <S.Segment role="group" aria-label="Filter by status">
          {(['all', 'published', 'draft'] as StatusFilter[]).map(s => (
            <S.SegBtn key={s} active={status === s} onClick={() => setStatus(s)}>
              {s === 'all' ? t('projects.all') : s === 'published' ? t('projects.published') : t('projects.drafts')}
            </S.SegBtn>
          ))}
        </S.Segment>
      </S.FilterBar>

      {list.length === 0 ? (
        <EmptyState
          icon="◻"
          title={t('projects.emptyTitle')}
          sub={t('projects.emptySub')}
          action={<Btn variant="primary" onClick={() => openProjectPanel()}>{t('projects.newProject')}</Btn>}
        />
      ) : (
        <S.TableWrap>
          <S.Table aria-label="Projects list">
            <thead>
              <tr>
                <S.Th style={{ width: 52 }} />
                <S.Th>{t('projects.colProject')}</S.Th>
                <S.Th>{t('projects.colType')}</S.Th>
                <S.Th>{t('projects.colStack')}</S.Th>
                <S.Th>{t('projects.colStatus')}</S.Th>
                <S.Th>{t('projects.colFeatured')}</S.Th>
                <S.Th style={{ textAlign: 'right' }}>{t('projects.colActions')}</S.Th>
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
                    <S.TdSub><T en={p.descEn || '—'} pt={p.descPt} it={p.descIt} /></S.TdSub>
                  </S.Td>
                  <S.Td><span style={{ fontSize: 11, color: tokens.textMuted }}>{p.type || '—'}</span></S.Td>
                  <S.Td>
                    <S.TagsRow>
                      {p.stack.slice(0, 3).map(tag => <S.TagPill key={tag}>{tag}</S.TagPill>)}
                      {p.stack.length > 3 && <S.TagPill>+{p.stack.length - 3}</S.TagPill>}
                    </S.TagsRow>
                  </S.Td>
                  <S.Td><Badge variant={p.published ? 'published' : 'draft'}>{p.published ? t('projects.statusPublished') : t('projects.statusDraft')}</Badge></S.Td>
                  <S.Td>
                    {p.featured
                      ? <Badge variant="featured">{t('projects.featuredBadge')}</Badge>
                      : <span style={{ color: tokens.textMuted, fontSize: 11 }}>—</span>}
                  </S.Td>
                  <S.Td>
                    <S.TdActions>
                      <S.BtnSm variant="ghost" onClick={() => openProjectPanel(p.id)}>{t('projects.edit')}</S.BtnSm>
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
