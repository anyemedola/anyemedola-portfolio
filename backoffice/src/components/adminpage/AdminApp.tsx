'use client';

import { useAdmin } from '@/context/AdminContext';
import * as S from './styles';
import Sidebar from '@/components/layout/sidebar/Sidebar';
import TopBar from '@/components/layout/topbar/TopBar';
import DashboardView from '@/components/views/dashboardview/DashboardView';
import ProjectsView from '@/components/views/projectsview/ProjectsView';
import BlogView from '@/components/views/blogview/BlogView';
import SettingsView from '@/components/views/settingsview/SettingsView';
import ProjectPanel from '@/components/panels/projectpanel/ProjectPanel';
import BlogPanel from '@/components/panels/blogpanel/BlogPanel';
import Toast from '@/components/ui/toast/Toast';

export default function AdminApp() {
  const { activeView } = useAdmin();

  return (
    <S.App>
      <Sidebar />
      <S.Main>
        <TopBar />
        <S.Content id="main-content">
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'projects'  && <ProjectsView />}
          {activeView === 'blog'      && <BlogView />}
          {activeView === 'settings'  && <SettingsView />}
        </S.Content>
      </S.Main>
      <ProjectPanel />
      <BlogPanel />
      <Toast />
    </S.App>
  );
}
