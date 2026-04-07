'use client';

import { useAdmin, View } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import * as S from './styles';

export { Btn } from './styles';

export default function TopBar() {
  const { activeView, setSidebarOpen, sidebarOpen, openProjectPanel, openBlogPanel, addToast } = useAdmin();
  const { dict } = useLang();
  const titles: Record<View, string> = {
    dashboard: dict.topbar.dashboard,
    projects:  dict.topbar.projects,
    blog:      dict.topbar.blog,
    settings:  dict.topbar.settings,
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
            <span aria-hidden="true">+</span> <span>{dict.topbar.newProject}</span>
          </S.Btn>
        )}
        {activeView === 'blog' && (
          <>
            <S.Btn variant="ghost" onClick={() => openBlogPanel()}>
              <span>{dict.topbar.saveDraft}</span>
            </S.Btn>
            <S.Btn variant="primary" onClick={() => openBlogPanel()}>
              <span aria-hidden="true">+</span> <span>{dict.topbar.newPost}</span>
            </S.Btn>
          </>
        )}
        {activeView === 'settings' && (
          <S.Btn variant="primary" onClick={() => addToast(dict.settings.saved, 'success')}>
            <span>{dict.topbar.saveChanges}</span>
          </S.Btn>
        )}
      </S.Actions>
    </S.Root>
  );
}
