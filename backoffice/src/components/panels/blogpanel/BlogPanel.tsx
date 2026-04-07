'use client';

import { useState, useEffect } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import TagsInput from '@/components/ui/tagsinput/TagsInput';
import UploadArea from '@/components/ui/uploadarea/UploadArea';
import RichEditor from '@/components/ui/richeditor/RichEditor';
import { Btn } from '@/components/layout/topbar/styles';
import * as S from './styles';

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
    <S.Overlay onClick={e => { if (e.target === e.currentTarget) closeBlogPanel(); }} role="dialog" aria-modal aria-labelledby="blog-panel-title">
      <S.Panel>
        <S.PanelHeader>
          <div>
            <S.PanelTitle id="blog-panel-title">{isEditing ? bp.titleEdit : bp.titleNew}</S.PanelTitle>
            <S.PanelSubtitle>{bp.subtitle}</S.PanelSubtitle>
          </div>
          <S.CloseBtn onClick={closeBlogPanel} aria-label="Close panel">✕</S.CloseBtn>
        </S.PanelHeader>

        <S.Body>
          <S.SectionTitle>{bp.content}</S.SectionTitle>
          <S.FormGroup>
            <S.Label htmlFor="b-title">{bp.labelTitleEn} <span>*</span></S.Label>
            <S.Input id="b-title" value={form.title} onChange={set('title')} placeholder={bp.titleEnPh} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-title-pt">{bp.labelTitlePt}</S.Label>
            <S.Input id="b-title-pt" value={form.titlePt} onChange={set('titlePt')} placeholder={bp.titlePtPh} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-subtitle">{bp.labelSubEn}</S.Label>
            <S.Input id="b-subtitle" value={form.subtitle} onChange={set('subtitle')} placeholder={bp.subEnPh} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-subtitle-pt">{bp.labelSubPt}</S.Label>
            <S.Input id="b-subtitle-pt" value={form.subtitlePt} onChange={set('subtitlePt')} placeholder={bp.subPtPh} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-excerpt-en">{bp.labelExcEn} <span>*</span></S.Label>
            <S.Textarea id="b-excerpt-en" rows={2} value={form.excerptEn} onChange={set('excerptEn')} placeholder={bp.excEnPh} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-excerpt-pt">{bp.labelExcPt}</S.Label>
            <S.Textarea id="b-excerpt-pt" rows={2} value={form.excerptPt} onChange={set('excerptPt')} placeholder={bp.excPtPh} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>{bp.labelBodyEn} <span>*</span></S.Label>
            <RichEditor id="b-body-en" placeholder={bp.bodyEnPh} ariaLabel="Post body in English" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>{bp.labelBodyPt}</S.Label>
            <RichEditor id="b-body-pt" placeholder={bp.bodyPtPh} ariaLabel="Post body in Portuguese" />
          </S.FormGroup>

          <S.Divider />
          <S.SectionTitle>{bp.meta}</S.SectionTitle>
          <S.FormRow3>
            <S.FormGroup>
              <S.Label htmlFor="b-date">{bp.labelDate}</S.Label>
              <S.Input id="b-date" type="date" value={form.date} onChange={set('date')} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="b-readtime">{bp.labelReadTime}</S.Label>
              <S.Input id="b-readtime" type="number" value={form.readTime} onChange={set('readTime')} placeholder="5" min={1} max={60} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="b-status">{bp.labelStatus}</S.Label>
              <S.Select id="b-status" value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value as 'draft' | 'published' }))}>
                <option value="draft">{bp.statusDraft}</option>
                <option value="published">{bp.statusPub}</option>
              </S.Select>
            </S.FormGroup>
          </S.FormRow3>

          <S.FormGroup>
            <S.Label htmlFor="b-primary-tag">{bp.labelPrimaryTag} <span>*</span></S.Label>
            <S.Input id="b-primary-tag" value={form.primaryTag} onChange={set('primaryTag')} placeholder="e.g. Tech & Dev" />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>{bp.labelTags}</S.Label>
            <TagsInput value={form.tags} onChange={tags => setForm(p => ({ ...p, tags }))} placeholder={bp.tagsPh} />
          </S.FormGroup>

          <S.FormGroup style={{ display: 'grid', gridTemplateColumns: '1fr 100px 80px', gap: 16 }}>
            <div>
              <S.Label htmlFor="b-color">{bp.labelColor}</S.Label>
              <S.Select id="b-color" value={form.accentColor} onChange={set('accentColor')}>
                <option value="#4DB89E">{dict.colors.mint}</option>
                <option value="#C43560">{dict.colors.pink}</option>
                <option value="#8B7355">{dict.colors.warm}</option>
                <option value="#6B7BA4">{dict.colors.blue}</option>
                <option value="#A855F7">{dict.colors.purple}</option>
              </S.Select>
            </div>
            <div>
              <S.Label>{bp.labelColorSwatch}</S.Label>
              <div style={{ width: 40, height: 40, borderRadius: 4, background: form.accentColor, border: '1px solid rgba(255,255,255,0.1)', marginTop: 2 }} />
            </div>
            <div>
              <S.Label htmlFor="b-icon">{bp.labelIcon}</S.Label>
              <S.Input id="b-icon" value={form.icon} onChange={set('icon')} placeholder="✦" style={{ textAlign: 'center', fontSize: 18 }} />
            </div>
          </S.FormGroup>

          <S.Divider />
          <S.SectionTitle>{bp.coverImage}</S.SectionTitle>
          <S.FormGroup>
            <UploadArea onFile={image => setForm(p => ({ ...p, image }))} ariaLabel="Upload cover image" />
          </S.FormGroup>
        </S.Body>

        <S.Footer>
          {isEditing && <S.BtnDanger onClick={handleDelete}>{bp.delete}</S.BtnDanger>}
          <S.FooterRight>
            <Btn variant="ghost" onClick={closeBlogPanel}>{bp.cancel}</Btn>
            <Btn variant="ghost" onClick={() => handleSave('draft')}>{bp.saveDraft}</Btn>
            <Btn variant="primary" onClick={() => handleSave('published')}>{bp.publish}</Btn>
          </S.FooterRight>
        </S.Footer>
      </S.Panel>
    </S.Overlay>
  );
}
