'use client';

import { useState, useEffect, useCallback } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import { useAdmin } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import TagsInput from '@/components/ui/tagsinput/TagsInput';
import UploadArea from '@/components/ui/uploadarea/UploadArea';
import Toggle from '@/components/ui/toggle/Toggle';
import { Btn } from '@/components/layout/topbar/TopBar';

const slideIn = keyframes`
  from { transform: translateX(40px); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

const Overlay = styled('div')({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.65)',
  zIndex: 200,
  backdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  '@media (max-width: 768px)': { alignItems: 'flex-end' },
});

const Panel = styled('div')({
  width: 640,
  maxWidth: '100vw',
  height: '100vh',
  background: tokens.surface,
  borderLeft: `1px solid ${tokens.border}`,
  display: 'flex',
  flexDirection: 'column',
  animation: `${slideIn} 0.28s ease`,
  overflow: 'hidden',
  '@media (max-width: 768px)': {
    width: '100%',
    maxWidth: '100%',
    height: '92vh',
    borderLeft: 'none',
    borderTop: `1px solid ${tokens.border}`,
    borderRadius: '12px 12px 0 0',
  },
});

const PanelHeader = styled('div')({
  padding: '24px 28px',
  borderBottom: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  '@media (max-width: 768px)': { padding: '18px 20px' },
});

const PanelTitle = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 20,
  letterSpacing: '0.06em',
  color: tokens.cream,
});

const PanelSubtitle = styled('div')({
  fontSize: 11,
  color: tokens.textMuted,
  marginTop: 2,
  fontFamily: "'DM Sans', sans-serif",
});

const CloseBtn = styled('button')({
  width: 32, height: 32,
  borderRadius: 4,
  background: 'transparent',
  border: `1px solid ${tokens.border}`,
  color: tokens.textDim,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  transition: 'all 0.15s',
  flexShrink: 0,
  '&:hover': { background: tokens.surface3, color: tokens.text },
});

const Body = styled('div')({
  flex: 1,
  overflowY: 'auto',
  padding: 28,
  '@media (max-width: 768px)': { padding: 20 },
});

const Footer = styled('div')({
  padding: '20px 28px',
  borderTop: `1px solid ${tokens.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  background: tokens.surface2,
  '@media (max-width: 768px)': { padding: '14px 20px', flexWrap: 'wrap', gap: 8 },
});

const SectionTitle = styled('div')({
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontFamily: "'DM Sans', sans-serif",
  '&::after': { content: "''", flex: 1, height: 1, background: tokens.border },
});

const Divider = styled('hr')({ border: 'none', borderTop: `1px solid ${tokens.border}`, margin: '24px 0' });

const FormGroup = styled('div')({ marginBottom: 22 });
const FormRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
  '@media (max-width: 768px)': { gridTemplateColumns: '1fr' },
});

const Label = styled('label')({
  display: 'block',
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 8,
  fontFamily: "'DM Sans', sans-serif",
  '& span': { color: tokens.pink, marginLeft: 2 },
});

const Input = styled('input')({
  width: '100%',
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
  appearance: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});

const Select = styled('select')({
  width: '100%',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  fontWeight: 300,
  padding: '10px 14px',
  borderRadius: 2,
  outline: 'none',
  cursor: 'pointer',
  transition: 'border-color 0.2s',
  appearance: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '& option': { background: tokens.surface2 },
});

const Textarea = styled('textarea')({
  width: '100%',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  fontWeight: 300,
  padding: '10px 14px',
  borderRadius: 2,
  resize: 'vertical',
  minHeight: 80,
  lineHeight: 1.6,
  outline: 'none',
  transition: 'border-color 0.2s',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});

const BtnDanger = styled('button')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  background: 'transparent',
  color: tokens.danger,
  border: `1px solid rgba(232,84,122,0.25)`,
  padding: '6px 14px',
  cursor: 'pointer',
  borderRadius: 2,
  minHeight: 30,
  transition: 'all 0.2s',
  '&:hover': { background: 'rgba(232,84,122,0.1)' },
});

const FooterRight = styled('div')({ display: 'flex', gap: 10, marginLeft: 'auto', '@media (max-width: 768px)': { flex: 1, justifyContent: 'flex-end' } });

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
    <Overlay onClick={e => { if (e.target === e.currentTarget) closeProjectPanel(); }} role="dialog" aria-modal aria-labelledby="proj-panel-title">
      <Panel>
        <PanelHeader>
          <div>
            <PanelTitle id="proj-panel-title">{isEditing ? pp.titleEdit : pp.titleNew}</PanelTitle>
            <PanelSubtitle>{pp.subtitle}</PanelSubtitle>
          </div>
          <CloseBtn onClick={closeProjectPanel} aria-label="Close panel">✕</CloseBtn>
        </PanelHeader>

        <Body>
          <SectionTitle>{pp.basicInfo}</SectionTitle>
          <FormGroup>
            <Label htmlFor="p-title">{pp.labelTitle} <span>*</span></Label>
            <Input id="p-title" value={form.title} onChange={set('title')} placeholder="e.g. Ministry of Health Streaming Platform" />
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label htmlFor="p-type">{pp.labelType} <span>*</span></Label>
              <Select id="p-type" value={form.type} onChange={set('type')}>
                <option value="">{pp.selectType}</option>
                <option>Freelance · Web App</option>
                <option>Freelance · Mobile App</option>
                <option>Personal · Open Source</option>
                <option>Personal · Experiment</option>
                <option>Professional · Enterprise</option>
                <option>Client Work</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="p-order">{pp.labelOrder}</Label>
              <Input id="p-order" type="number" value={form.order} onChange={set('order')} placeholder="1" min={1} />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label htmlFor="p-desc-en">{pp.labelDescEn} <span>*</span></Label>
            <Textarea id="p-desc-en" rows={3} value={form.descEn} onChange={set('descEn')} placeholder={pp.descEnPh} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="p-desc-pt">{pp.labelDescPt}</Label>
            <Textarea id="p-desc-pt" rows={3} value={form.descPt} onChange={set('descPt')} placeholder={pp.descPtPh} />
          </FormGroup>

          <Divider />
          <SectionTitle>{pp.techStack}</SectionTitle>
          <FormGroup>
            <Label>{pp.labelStack}</Label>
            <TagsInput value={form.stack} onChange={stack => setForm(p => ({ ...p, stack }))} placeholder={pp.stackPh} />
          </FormGroup>

          <Divider />
          <SectionTitle>{pp.links}</SectionTitle>
          <FormRow>
            <FormGroup>
              <Label htmlFor="p-url">{pp.labelUrl}</Label>
              <Input id="p-url" type="url" value={form.url} onChange={set('url')} placeholder="https://..." />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="p-github">{pp.labelGithub}</Label>
              <Input id="p-github" type="url" value={form.github} onChange={set('github')} placeholder="https://github.com/..." />
            </FormGroup>
          </FormRow>

          <Divider />
          <SectionTitle>{pp.coverImage}</SectionTitle>
          <FormGroup>
            <Label>{pp.labelImage}</Label>
            <UploadArea onFile={image => setForm(p => ({ ...p, image }))} ariaLabel="Upload project screenshot" />
          </FormGroup>

          <Divider />
          <SectionTitle>{pp.settingsTitle}</SectionTitle>
          <FormGroup>
            <Label htmlFor="p-color">{pp.labelColor}</Label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Select id="p-color" value={form.accentColor} onChange={set('accentColor')} style={{ flex: 1 }}>
                <option value="#4DB89E">{dict.colors.mint}</option>
                <option value="#C43560">{dict.colors.pink}</option>
                <option value="#8B7355">{dict.colors.warm}</option>
                <option value="#6B7BA4">{dict.colors.blue}</option>
                <option value="#A855F7">{dict.colors.purple}</option>
              </Select>
              <div style={{ width: 36, height: 36, borderRadius: 4, background: form.accentColor, border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }} />
            </div>
          </FormGroup>
          <Toggle label={pp.labelPublished} sub={pp.subPublished} checked={form.published} onChange={v => setForm(p => ({ ...p, published: v }))} />
          <Toggle label={pp.labelFeatured} sub={pp.subFeatured} checked={form.featured} onChange={v => setForm(p => ({ ...p, featured: v }))} />
        </Body>

        <Footer>
          {isEditing && <BtnDanger onClick={handleDelete}>Delete project</BtnDanger>}
          <FooterRight>
            <Btn variant="ghost" onClick={closeProjectPanel}>Cancel</Btn>
            <Btn variant="primary" onClick={handleSave}>Save project</Btn>
          </FooterRight>
        </Footer>
      </Panel>
    </Overlay>
  );
}
