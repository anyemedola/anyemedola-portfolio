'use client';

import { useState, useEffect } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import TagsInput from '@/components/ui/tagsinput/TagsInput';
import UploadArea from '@/components/ui/uploadarea/UploadArea';
import Toggle from '@/components/ui/toggle/Toggle';
import { Btn } from '@/components/layout/topbar/TopBar';
import * as S from './styles';

interface FormState {
  title: string; type: string; order: string;
  descEn: string; descPt: string;
  url: string; github: string;
  published: boolean; featured: boolean;
  stack: string[]; image: string | null;
  accentColor: string;
}

const empty: FormState = {
  title: '', type: '', order: '', descEn: '', descPt: '',
  url: '', github: '', published: false, featured: false,
  stack: [], image: null, accentColor: '#4DB89E',
};

export default function ProjectPanel() {
  const { openPanel, editingProjectId, projects, closeProjectPanel, saveProject, deleteProject } = useAdmin();
  const { dict } = useLang();
  const pp = dict.projectPanel;
  const [form, setForm] = useState<FormState>(empty);

  const isOpen = openPanel === 'project';
  const isEditing = editingProjectId !== null;

  useEffect(() => {
    if (!isOpen) return;
    if (isEditing) {
      const p = projects.find(x => x.id === editingProjectId);
      if (p) setForm({
        title:       p.title       ?? '',
        type:        p.type        ?? '',
        order:       String(p.order ?? ''),
        descEn:      p.descEn      ?? '',
        descPt:      p.descPt      ?? '',
        url:         p.url         ?? '',
        github:      p.github      ?? '',
        published:   p.published   ?? false,
        featured:    p.featured    ?? false,
        stack:       p.stack       ?? [],
        image:       p.image       ?? null,
        accentColor: p.accentColor ?? '#4DB89E',
      });
    } else {
      setForm(empty);
    }
  }, [isOpen, isEditing, editingProjectId, projects]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeProjectPanel(); };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeProjectPanel]);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const handleSave = async () => {
    if (!form.title.trim()) { alert('Project title is required'); return; }
    await saveProject({
      title: form.title.trim(),
      type: form.type,
      order: parseInt(form.order) || 99,
      descEn: form.descEn.trim(),
      descPt: form.descPt.trim(),
      url: form.url.trim(),
      github: form.github.trim(),
      published: form.published,
      featured: form.featured,
      stack: form.stack,
      image: form.image,
      accentColor: form.accentColor,
    }, isEditing ? editingProjectId : null);
    closeProjectPanel();
  };

  const handleDelete = async () => {
    if (!confirm(pp.confirmDelete)) return;
    const ok = await deleteProject(editingProjectId!);
    if (ok) closeProjectPanel();
  };

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={e => { if (e.target === e.currentTarget) closeProjectPanel(); }} role="dialog" aria-modal aria-labelledby="proj-panel-title">
      <S.Panel>
        <S.PanelHeader>
          <div>
            <S.PanelTitle id="proj-panel-title">{isEditing ? pp.titleEdit : pp.titleNew}</S.PanelTitle>
            <S.PanelSubtitle>{pp.subtitle}</S.PanelSubtitle>
          </div>
          <S.CloseBtn onClick={closeProjectPanel} aria-label="Close panel">✕</S.CloseBtn>
        </S.PanelHeader>

        <S.Body>
          <S.SectionTitle>{pp.basicInfo}</S.SectionTitle>
          <S.FormGroup>
            <S.Label htmlFor="p-title">{pp.labelTitle} <span>*</span></S.Label>
            <S.Input id="p-title" value={form.title} onChange={set('title')} placeholder="e.g. Ministry of Health Streaming Platform" />
          </S.FormGroup>
          <S.FormRow>
            <S.FormGroup>
              <S.Label htmlFor="p-type">{pp.labelType} <span>*</span></S.Label>
              <S.Select id="p-type" value={form.type} onChange={set('type')}>
                <option value="">{pp.selectType}</option>
                <option>Freelance · Web App</option>
                <option>Freelance · Mobile App</option>
                <option>Personal · Open Source</option>
                <option>Personal · Experiment</option>
                <option>Professional · Enterprise</option>
                <option>Client Work</option>
              </S.Select>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="p-order">{pp.labelOrder}</S.Label>
              <S.Input id="p-order" type="number" value={form.order} onChange={set('order')} placeholder="1" min={1} />
            </S.FormGroup>
          </S.FormRow>
          <S.FormGroup>
            <S.Label htmlFor="p-desc-en">{pp.labelDescEn} <span>*</span></S.Label>
            <S.Textarea id="p-desc-en" rows={3} value={form.descEn} onChange={set('descEn')} placeholder={pp.descEnPh} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="p-desc-pt">{pp.labelDescPt}</S.Label>
            <S.Textarea id="p-desc-pt" rows={3} value={form.descPt} onChange={set('descPt')} placeholder={pp.descPtPh} />
          </S.FormGroup>

          <S.Divider />
          <S.SectionTitle>{pp.techStack}</S.SectionTitle>
          <S.FormGroup>
            <S.Label>{pp.labelStack}</S.Label>
            <TagsInput value={form.stack} onChange={stack => setForm(p => ({ ...p, stack }))} placeholder={pp.stackPh} />
          </S.FormGroup>

          <S.Divider />
          <S.SectionTitle>{pp.links}</S.SectionTitle>
          <S.FormRow>
            <S.FormGroup>
              <S.Label htmlFor="p-url">{pp.labelUrl}</S.Label>
              <S.Input id="p-url" type="url" value={form.url} onChange={set('url')} placeholder="https://..." />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="p-github">{pp.labelGithub}</S.Label>
              <S.Input id="p-github" type="url" value={form.github} onChange={set('github')} placeholder="https://github.com/..." />
            </S.FormGroup>
          </S.FormRow>

          <S.Divider />
          <S.SectionTitle>{pp.coverImage}</S.SectionTitle>
          <S.FormGroup>
            <S.Label>{pp.labelImage}</S.Label>
            <UploadArea onFile={image => setForm(p => ({ ...p, image }))} ariaLabel="Upload project screenshot" />
          </S.FormGroup>

          <S.Divider />
          <S.SectionTitle>{pp.settingsTitle}</S.SectionTitle>
          <S.FormGroup>
            <S.Label htmlFor="p-color">{pp.labelColor}</S.Label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <S.Select id="p-color" value={form.accentColor} onChange={set('accentColor')} style={{ flex: 1 }}>
                <option value="#4DB89E">{dict.colors.mint}</option>
                <option value="#C43560">{dict.colors.pink}</option>
                <option value="#8B7355">{dict.colors.warm}</option>
                <option value="#6B7BA4">{dict.colors.blue}</option>
                <option value="#A855F7">{dict.colors.purple}</option>
              </S.Select>
              <div style={{ width: 36, height: 36, borderRadius: 4, background: form.accentColor, border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }} />
            </div>
          </S.FormGroup>
          <Toggle label={pp.labelPublished} sub={pp.subPublished} checked={form.published} onChange={v => setForm(p => ({ ...p, published: v }))} />
          <Toggle label={pp.labelFeatured} sub={pp.subFeatured} checked={form.featured} onChange={v => setForm(p => ({ ...p, featured: v }))} />
        </S.Body>

        <S.Footer>
          {isEditing && <S.BtnDanger onClick={handleDelete}>Delete project</S.BtnDanger>}
          <S.FooterRight>
            <Btn variant="ghost" onClick={closeProjectPanel}>Cancel</Btn>
            <Btn variant="primary" onClick={handleSave}>Save project</Btn>
          </S.FooterRight>
        </S.Footer>
      </S.Panel>
    </S.Overlay>
  );
}
