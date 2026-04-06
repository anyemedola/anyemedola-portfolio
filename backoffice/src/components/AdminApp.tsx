'use client';

import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import { useAdmin } from '@/context/AdminContext';
import Sidebar from '@/components/layout/sidebar/Sidebar';
import TopBar from '@/components/layout/topbar/TopBar';
import DashboardView from '@/components/views/dashboardview/DashboardView';
import ProjectsView from '@/components/views/projectsview/ProjectsView';
import BlogView from '@/components/views/blogview/BlogView';
import SettingsView from '@/components/views/settingsview/SettingsView';
import ProjectPanel from '@/components/panels/projectpanel/ProjectPanel';
import BlogPanel from '@/components/panels/blogpanel/BlogPanel';
import Toast from '@/components/ui/toast/Toast';

const App = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  background: tokens.bg,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  overflowX: 'hidden',
});

const Main = styled('div')({
  marginLeft: tokens.sidebarW,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  '@media (max-width: 1024px)': { marginLeft: 200 },
  '@media (max-width: 768px)': { marginLeft: 0 },
});

const Content = styled('main')({
  flex: 1,
  padding: 32,
  '@media (max-width: 768px)': { padding: '20px 16px' },
});

export default function AdminApp() {
  const { activeView } = useAdmin();

  return (
    <App>
      <Sidebar />
      <Main>
        <TopBar />
        <Content id="main-content">
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'projects'  && <ProjectsView />}
          {activeView === 'blog'      && <BlogView />}
          {activeView === 'settings'  && <SettingsView />}
        </Content>
      </Main>
      <ProjectPanel />
      <BlogPanel />
      <Toast />
    </App>
  );
}
