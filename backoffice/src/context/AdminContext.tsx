'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  type: string;
  order: number;
  descEn: string;
  descPt: string;
  url: string;
  github: string;
  published: boolean;
  featured: boolean;
  stack: string[];
  image: string | null;
  accentColor: string;
  updatedAt: string;
}

export interface BlogPost {
  id: number;
  slug?: string;
  title: string;
  titlePt: string;
  subtitle: string;
  subtitlePt: string;
  excerptEn: string;
  excerptPt: string;
  bodyEn: string;
  bodyPt: string;
  date: string;
  readTime: string;
  status: 'draft' | 'published';
  primaryTag: string;
  tags: string[];
  accentColor: string;
  icon: string;
  image: string | null;
  updatedAt: string;
}

export interface ActivityItem {
  id: number;
  msg: string;
  type: 'mint' | 'pink' | 'warn';
  time: string;
}

export interface ToastItem {
  id: number;
  msg: string;
  type: 'success' | 'error' | 'warning';
}

export type View = 'dashboard' | 'projects' | 'blog' | 'settings';

const API = '/api/data';

interface AdminContextType {
  projects: Project[];
  blogPosts: BlogPost[];
  activities: ActivityItem[];
  toasts: ToastItem[];
  activeView: View;
  openPanel: 'project' | 'blog' | null;
  editingProjectId: number | null;
  editingBlogId: number | null;
  sidebarOpen: boolean;
  loading: boolean;
  setActiveView: (v: View) => void;
  setSidebarOpen: (v: boolean) => void;
  openProjectPanel: (id?: number | null) => void;
  closeProjectPanel: () => void;
  openBlogPanel: (id?: number | null) => void;
  closeBlogPanel: () => void;
  saveProject: (data: Omit<Project, 'id' | 'updatedAt'>, id?: number | null) => Promise<void>;
  deleteProject: (id: number) => Promise<boolean>;
  saveBlogPost: (data: Omit<BlogPost, 'id' | 'updatedAt' | 'slug'>, id?: number | null) => Promise<void>;
  deleteBlogPost: (id: number) => Promise<boolean>;
  addToast: (msg: string, type?: ToastItem['type']) => void;
  removeToast: (id: number) => void;
  addActivity: (msg: string, type?: ActivityItem['type']) => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects]       = useState<Project[]>([]);
  const [blogPosts, setBlogPosts]     = useState<BlogPost[]>([]);
  const [activities, setActivities]   = useState<ActivityItem[]>([{
    id: 0,
    msg: 'Welcome! <strong>Add your first project</strong> or blog post to get started.',
    type: 'mint',
    time: 'Just now',
  }]);
  const [toasts, setToasts]           = useState<ToastItem[]>([]);
  const [activeView, setActiveView]   = useState<View>('dashboard');
  const [openPanel, setOpenPanel]     = useState<'project' | 'blog' | null>(null);
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
  const [editingBlogId, setEditingBlogId]       = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading]         = useState(false);

  const addToast = useCallback((msg: string, type: ToastItem['type'] = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const addActivity = useCallback((msg: string, type: ActivityItem['type'] = 'mint') => {
    const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const id = Date.now();
    setActivities(prev => {
      const filtered = prev.filter(a => !a.msg.includes('Welcome'));
      return [{ id, msg, type, time }, ...filtered].slice(0, 8);
    });
  }, []);

  // ── Load data ──────────────────────────────────────────────────────────────

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [projRes, postsRes] = await Promise.all([
        fetch(`${API}/projects/all`),
        fetch(`${API}/posts/all`),
      ]);
      if (projRes.ok) setProjects(await projRes.json());
      if (postsRes.ok) setBlogPosts(await postsRes.json());
    } catch {
      // backend not running — start with empty state
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  // ── Panel helpers ──────────────────────────────────────────────────────────

  const openProjectPanel = useCallback((id: number | null = null) => {
    setEditingProjectId(id);
    setOpenPanel('project');
  }, []);

  const closeProjectPanel = useCallback(() => {
    setOpenPanel(null);
    setEditingProjectId(null);
  }, []);

  const openBlogPanel = useCallback((id: number | null = null) => {
    setEditingBlogId(id);
    setOpenPanel('blog');
  }, []);

  const closeBlogPanel = useCallback(() => {
    setOpenPanel(null);
    setEditingBlogId(null);
  }, []);

  // ── CRUD ───────────────────────────────────────────────────────────────────

  const saveProject = useCallback(async (
    data: Omit<Project, 'id' | 'updatedAt'>,
    id: number | null = null,
  ): Promise<void> => {
    const method = id !== null ? 'PUT' : 'POST';
    const url    = id !== null ? `${API}/projects/${id}` : `${API}/projects`;
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) { addToast('Failed to save project', 'error'); return; }
      const saved: Project = await res.json();
      if (id !== null) {
        setProjects(prev => prev.map(p => p.id === id ? saved : p));
        addActivity(`Updated project <strong>${data.title}</strong>`, 'mint');
        addToast('Project updated!');
      } else {
        setProjects(prev => [...prev, saved]);
        addActivity(`Added project <strong>${data.title}</strong>`, 'mint');
        addToast('Project saved!');
      }
    } catch {
      addToast('Backend unavailable', 'error');
    }
  }, [addActivity, addToast]);

  const deleteProject = useCallback(async (id: number): Promise<boolean> => {
    const proj = projects.find(p => p.id === id);
    try {
      const res = await fetch(`${API}/projects/${id}`, { method: 'DELETE' });
      if (!res.ok) { addToast('Failed to delete project', 'error'); return false; }
      setProjects(prev => prev.filter(p => p.id !== id));
      addActivity(`Deleted project <strong>${proj?.title ?? ''}</strong>`, 'pink');
      addToast('Project deleted', 'warning');
      return true;
    } catch {
      addToast('Backend unavailable', 'error');
      return false;
    }
  }, [projects, addActivity, addToast]);

  const saveBlogPost = useCallback(async (
    data: Omit<BlogPost, 'id' | 'updatedAt' | 'slug'>,
    id: number | null = null,
  ): Promise<void> => {
    const method = id !== null ? 'PUT' : 'POST';
    const url    = id !== null ? `${API}/posts/${id}` : `${API}/posts`;
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) { addToast('Failed to save post', 'error'); return; }
      const saved: BlogPost = await res.json();
      if (id !== null) {
        setBlogPosts(prev => prev.map(b => b.id === id ? saved : b));
        addActivity(`Updated post <strong>${data.title}</strong>`, data.status === 'published' ? 'pink' : 'warn');
        addToast('Post updated!');
      } else {
        setBlogPosts(prev => [...prev, saved]);
        addActivity(`${data.status === 'published' ? 'Published' : 'Drafted'} post <strong>${data.title}</strong>`, data.status === 'published' ? 'pink' : 'warn');
        addToast(data.status === 'published' ? 'Post published!' : 'Draft saved!');
      }
    } catch {
      addToast('Backend unavailable', 'error');
    }
  }, [addActivity, addToast]);

  const deleteBlogPost = useCallback(async (id: number): Promise<boolean> => {
    const post = blogPosts.find(b => b.id === id);
    try {
      const res = await fetch(`${API}/posts/${id}`, { method: 'DELETE' });
      if (!res.ok) { addToast('Failed to delete post', 'error'); return false; }
      setBlogPosts(prev => prev.filter(b => b.id !== id));
      addActivity(`Deleted post <strong>${post?.title ?? ''}</strong>`, 'pink');
      addToast('Post deleted', 'warning');
      return true;
    } catch {
      addToast('Backend unavailable', 'error');
      return false;
    }
  }, [blogPosts, addActivity, addToast]);

  return (
    <AdminContext.Provider value={{
      projects, blogPosts, activities, toasts,
      activeView, openPanel, editingProjectId, editingBlogId, sidebarOpen, loading,
      setActiveView, setSidebarOpen,
      openProjectPanel, closeProjectPanel,
      openBlogPanel, closeBlogPanel,
      saveProject, deleteProject,
      saveBlogPost, deleteBlogPost,
      addToast, removeToast, addActivity,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used inside AdminProvider');
  return ctx;
}
