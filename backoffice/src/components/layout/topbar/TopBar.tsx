'use client';

import { useTranslation } from 'react-i18next';
import { useAdmin, View } from '@/context/AdminContext';
import * as S from './styles';

export default function TopBar() {
  const { activeView, setSidebarOpen, sidebarOpen, openProjectPanel, openBlogPanel, addToast } = useAdmin();
  const { t } = useTranslation();
  const titles: Record<View, string> = {
    dashboard: t('topbar.dashboard'),
    projects:  t('topbar.projects'),
    blog:      t('topbar.blog'),
    settings:  t('topbar.settings'),
  };
  const title = titles[activeView];

  return (
    <S.Root role="banner">
      <S.Left>
        <S.MenuBtn
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? '✕' : '☰'}
        </S.MenuBtn>
        <S.Title>{title}</S.Title>
        <S.Breadcrumb aria-label="Breadcrumb">
          <span>AM·</span><span>›</span><span>{title}</span>
        </S.Breadcrumb>
      </S.Left>

      <S.Actions>
        {activeView === 'projects' && (
          <S.Btn variant="primary" onClick={() => openProjectPanel()}>
            <span aria-hidden="true">+</span> <span>{t('topbar.newProject')}</span>
          </S.Btn>
        )}
        {activeView === 'blog' && (
          <>
            <S.Btn variant="ghost" onClick={() => openBlogPanel()}>
              <span>{t('topbar.saveDraft')}</span>
            </S.Btn>
            <S.Btn variant="primary" onClick={() => openBlogPanel()}>
              <span aria-hidden="true">+</span> <span>{t('topbar.newPost')}</span>
            </S.Btn>
          </>
        )}
        {activeView === 'settings' && (
          <S.Btn variant="primary" onClick={() => addToast(t('settings.saved'), 'success')}>
            <span>{t('topbar.saveChanges')}</span>
          </S.Btn>
        )}
      </S.Actions>
    </S.Root>
  );
}
