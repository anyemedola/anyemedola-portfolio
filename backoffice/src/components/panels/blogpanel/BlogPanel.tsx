'use client';

import { useState, useEffect } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import { useAdmin } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import TagsInput from '@/components/ui/tagsinput/TagsInput';
import UploadArea from '@/components/ui/uploadarea/UploadArea';
import RichEditor from '@/components/ui/richeditor/RichEditor';
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
  width: 780,
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

const PanelTitle = styled('div')({ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: '0.06em', color: tokens.cream });
const PanelSubtitle = styled('div')({ fontSize: 11, color: tokens.textMuted, marginTop: 2, fontFamily: "'DM Sans', sans-serif" });

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
  fontSize: 9, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase',
  color: tokens.textMuted, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10,
  fontFamily: "'DM Sans', sans-serif",
  '&::after': { content: "''", flex: 1, height: 1, background: tokens.border },
});

const Divider = styled('hr')({ border: 'none', borderTop: `1px solid ${tokens.border}`, margin: '24px 0' });
const FormGroup = styled('div')({ marginBottom: 22 });
const FormRow3 = styled('div')({ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, '@media (max-width: 768px)': { gridTemplateColumns: '1fr' } });

const Label = styled('label')({
  display: 'block', fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase',
  color: tokens.textMuted, marginBottom: 8, fontFamily: "'DM Sans', sans-serif",
  '& span': { color: tokens.pink, marginLeft: 2 },
});

const Input = styled('input')({
  width: '100%', background: tokens.surface2, border: `1px solid ${tokens.border}`,
  color: tokens.text, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 300,
  padding: '10px 14px', borderRadius: 2, outline: 'none', transition: 'border-color 0.2s',
  appearance: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});

const Select = styled('select')({
  width: '100%', background: tokens.surface2, border: `1px solid ${tokens.border}`,
  color: tokens.text, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 300,
  padding: '10px 14px', borderRadius: 2, outline: 'none', cursor: 'pointer',
  transition: 'border-color 0.2s', appearance: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '& option': { background: tokens.surface2 },
});

const Textarea = styled('textarea')({
  width: '100%', background: tokens.surface2, border: `1px solid ${tokens.border}`,
  color: tokens.text, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 300,
  padding: '10px 14px', borderRadius: 2, resize: 'vertical', minHeight: 80, lineHeight: 1.6,
  outline: 'none', transition: 'border-color 0.2s',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});

const BtnDanger = styled('button')({
  display: 'inline-flex', alignItems: 'center', gap: 7,
  fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.1em',
  textTransform: 'uppercase', background: 'transparent', color: tokens.danger,
  border: `1px solid rgba(232,84,122,0.25)`, padding: '6px 14px', cursor: 'pointer',
  borderRadius: 2, minHeight: 30, transition: 'all 0.2s',
  '&:hover': { background: 'rgba(232,84,122,0.1)' },
});

const FooterRight = styled('div')({ display: 'flex', gap: 10, marginLeft: 'auto', '@media (max-width: 768px)': { flex: 1, justifyContent: 'flex-end' } });

interface FormState {
  title: string; titlePt: string;
  subtitle: string; subtitlePt: string;
  excerptEn: string; excerptPt: string;
  date: string; readTime: string;
  status: 'draft' | 'published';
  primaryTag: string;
  tags: string[];
  accentColor: string;
  icon: string;
  image: string | null;
}

const empty: FormState = {
  title: '', titlePt: '', subtitle: '', subtitlePt: '',
  excerptEn: '', excerptPt: '',
  date: '', readTime: '', status: 'draft',
  primaryTag: '', tags: [], accentColor: '#4DB89E', icon: '✦', image: null,
};

export default function BlogPanel() {
  const { openPanel, editingBlogId, blogPosts, closeBlogPanel, saveBlogPost, deleteBlogPost } = useAdmin();
  const { dict } = useLang();
  const bp = dict.blogPanel;
  const [form, setForm] = useState<FormState>(empty);

  const isOpen = openPanel === 'blog';
  const isEditing = editingBlogId !== null;

  useEffect(() => {
    if (!isOpen) return;
    if (isEditing) {
      const p = blogPosts.find(x => x.id === editingBlogId);
      if (p) {
        setForm({
          title:      p.title       ?? '',
          titlePt:    p.titlePt     ?? '',
          subtitle:   p.subtitle    ?? '',
          subtitlePt: p.subtitlePt  ?? '',
          excerptEn:  p.excerptEn   ?? '',
          excerptPt:  p.excerptPt   ?? '',
          date:       p.date        ?? '',
          readTime:   String(p.readTime ?? ''),
          status:     p.status      ?? 'draft',
          primaryTag: p.primaryTag  ?? '',
          tags:       p.tags        ?? [],
          accentColor: p.accentColor ?? '#4DB89E',
          icon:       p.icon        ?? '✦',
          image:      p.image       ?? null,
        });
        const enEl = document.getElementById('b-body-en');
        const ptEl = document.getElementById('b-body-pt');
        if (enEl) enEl.innerHTML = p.bodyEn || '';
        if (ptEl) ptEl.innerHTML = p.bodyPt || '';
      }
    } else {
      setForm(empty);
      const enEl = document.getElementById('b-body-en');
      const ptEl = document.getElementById('b-body-pt');
      if (enEl) enEl.innerHTML = '';
      if (ptEl) ptEl.innerHTML = '';
    }
  }, [isOpen, isEditing, editingBlogId, blogPosts]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeBlogPanel(); };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeBlogPanel]);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const handleSave = async (status: 'draft' | 'published') => {
    if (!form.title.trim()) { alert('Post title is required'); return; }
    await saveBlogPost({
      title: form.title.trim(),
      titlePt: form.titlePt.trim(),
      subtitle: form.subtitle.trim(),
      subtitlePt: form.subtitlePt.trim(),
      excerptEn: form.excerptEn.trim(),
      excerptPt: form.excerptPt.trim(),
      bodyEn: document.getElementById('b-body-en')?.innerHTML ?? '',
      bodyPt: document.getElementById('b-body-pt')?.innerHTML ?? '',
      date: form.date,
      readTime: form.readTime,
      status,
      primaryTag: form.primaryTag.trim(),
      tags: form.tags,
      accentColor: form.accentColor,
      icon: form.icon.trim() || '✦',
      image: form.image,
    }, isEditing ? editingBlogId : null);
    closeBlogPanel();
  };

  const handleDelete = async () => {
    if (!confirm(bp.confirmDelete)) return;
    const ok = await deleteBlogPost(editingBlogId!);
    if (ok) closeBlogPanel();
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={e => { if (e.target === e.currentTarget) closeBlogPanel(); }} role="dialog" aria-modal aria-labelledby="blog-panel-title">
      <Panel>
        <PanelHeader>
          <div>
            <PanelTitle id="blog-panel-title">{isEditing ? bp.titleEdit : bp.titleNew}</PanelTitle>
            <PanelSubtitle>{bp.subtitle}</PanelSubtitle>
          </div>
          <CloseBtn onClick={closeBlogPanel} aria-label="Close panel">✕</CloseBtn>
        </PanelHeader>

        <Body>
          <SectionTitle>{bp.content}</SectionTitle>
          <FormGroup>
            <Label htmlFor="b-title">{bp.labelTitleEn} <span>*</span></Label>
            <Input id="b-title" value={form.title} onChange={set('title')} placeholder={bp.titleEnPh} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="b-title-pt">{bp.labelTitlePt}</Label>
            <Input id="b-title-pt" value={form.titlePt} onChange={set('titlePt')} placeholder={bp.titlePtPh} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="b-subtitle">{bp.labelSubEn}</Label>
            <Input id="b-subtitle" value={form.subtitle} onChange={set('subtitle')} placeholder={bp.subEnPh} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="b-subtitle-pt">{bp.labelSubPt}</Label>
            <Input id="b-subtitle-pt" value={form.subtitlePt} onChange={set('subtitlePt')} placeholder={bp.subPtPh} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="b-excerpt-en">{bp.labelExcEn} <span>*</span></Label>
            <Textarea id="b-excerpt-en" rows={2} value={form.excerptEn} onChange={set('excerptEn')} placeholder={bp.excEnPh} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="b-excerpt-pt">{bp.labelExcPt}</Label>
            <Textarea id="b-excerpt-pt" rows={2} value={form.excerptPt} onChange={set('excerptPt')} placeholder={bp.excPtPh} />
          </FormGroup>
          <FormGroup>
            <Label>{bp.labelBodyEn} <span>*</span></Label>
            <RichEditor id="b-body-en" placeholder={bp.bodyEnPh} ariaLabel="Post body in English" />
          </FormGroup>
          <FormGroup>
            <Label>{bp.labelBodyPt}</Label>
            <RichEditor id="b-body-pt" placeholder={bp.bodyPtPh} ariaLabel="Post body in Portuguese" />
          </FormGroup>

          <Divider />
          <SectionTitle>{bp.meta}</SectionTitle>
          <FormRow3>
            <FormGroup>
              <Label htmlFor="b-date">{bp.labelDate}</Label>
              <Input id="b-date" type="date" value={form.date} onChange={set('date')} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="b-readtime">{bp.labelReadTime}</Label>
              <Input id="b-readtime" type="number" value={form.readTime} onChange={set('readTime')} placeholder="5" min={1} max={60} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="b-status">{bp.labelStatus}</Label>
              <Select id="b-status" value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value as 'draft' | 'published' }))}>
                <option value="draft">{bp.statusDraft}</option>
                <option value="published">{bp.statusPub}</option>
              </Select>
            </FormGroup>
          </FormRow3>

          <FormGroup>
            <Label htmlFor="b-primary-tag">{bp.labelPrimaryTag} <span>*</span></Label>
            <Input id="b-primary-tag" value={form.primaryTag} onChange={set('primaryTag')} placeholder="e.g. Tech & Dev" />
          </FormGroup>

          <FormGroup>
            <Label>{bp.labelTags}</Label>
            <TagsInput value={form.tags} onChange={tags => setForm(p => ({ ...p, tags }))} placeholder={bp.tagsPh} />
          </FormGroup>

          <FormGroup style={{ display: 'grid', gridTemplateColumns: '1fr 100px 80px', gap: 16 }}>
            <div>
              <Label htmlFor="b-color">{bp.labelColor}</Label>
              <Select id="b-color" value={form.accentColor} onChange={set('accentColor')}>
                <option value="#4DB89E">{dict.colors.mint}</option>
                <option value="#C43560">{dict.colors.pink}</option>
                <option value="#8B7355">{dict.colors.warm}</option>
                <option value="#6B7BA4">{dict.colors.blue}</option>
                <option value="#A855F7">{dict.colors.purple}</option>
              </Select>
            </div>
            <div>
              <Label>{bp.labelColorSwatch}</Label>
              <div style={{ width: 40, height: 40, borderRadius: 4, background: form.accentColor, border: '1px solid rgba(255,255,255,0.1)', marginTop: 2 }} />
            </div>
            <div>
              <Label htmlFor="b-icon">{bp.labelIcon}</Label>
              <Input id="b-icon" value={form.icon} onChange={set('icon')} placeholder="✦" style={{ textAlign: 'center', fontSize: 18 }} />
            </div>
          </FormGroup>

          <Divider />
          <SectionTitle>{bp.coverImage}</SectionTitle>
          <FormGroup>
            <UploadArea onFile={image => setForm(p => ({ ...p, image }))} ariaLabel="Upload cover image" />
          </FormGroup>
        </Body>

        <Footer>
          {isEditing && <BtnDanger onClick={handleDelete}>{bp.delete}</BtnDanger>}
          <FooterRight>
            <Btn variant="ghost" onClick={closeBlogPanel}>{bp.cancel}</Btn>
            <Btn variant="ghost" onClick={() => handleSave('draft')}>{bp.saveDraft}</Btn>
            <Btn variant="primary" onClick={() => handleSave('published')}>{bp.publish}</Btn>
          </FooterRight>
        </Footer>
      </Panel>
    </Overlay>
  );
}
