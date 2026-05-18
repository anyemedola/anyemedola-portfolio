'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAdmin } from '@/context/AdminContext';
import TagsInput from '@/components/ui/tagsinput/TagsInput';
import UploadArea from '@/components/ui/uploadarea/UploadArea';
import RichEditor from '@/components/ui/richeditor/RichEditor';
import { Btn } from '@/components/layout/topbar/styles';
import * as S from './styles';

interface FormState {
  title: string; titlePt: string; titleIt: string;
  subtitle: string; subtitlePt: string; subtitleIt: string;
  excerptEn: string; excerptPt: string; excerptIt: string;
  date: string; readTime: string;
  status: 'draft' | 'published';
  primaryTag: string;
  tags: string[];
  accentColor: string;
  icon: string;
  image: string | null;
}

const empty: FormState = {
  title: '', titlePt: '', titleIt: '',
  subtitle: '', subtitlePt: '', subtitleIt: '',
  excerptEn: '', excerptPt: '', excerptIt: '',
  date: '', readTime: '', status: 'draft',
  primaryTag: '', tags: [], accentColor: '#4DB89E', icon: '✦', image: null,
};

export default function BlogPanel() {
  const { openPanel, editingBlogId, blogPosts, closeBlogPanel, saveBlogPost, deleteBlogPost } = useAdmin();
  const { t } = useTranslation();
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
          titleIt:    p.titleIt     ?? '',
          subtitle:   p.subtitle    ?? '',
          subtitlePt: p.subtitlePt  ?? '',
          subtitleIt: p.subtitleIt  ?? '',
          excerptEn:  p.excerptEn   ?? '',
          excerptPt:  p.excerptPt   ?? '',
          excerptIt:  p.excerptIt   ?? '',
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
        const itEl = document.getElementById('b-body-it');
        if (enEl) enEl.innerHTML = p.bodyEn || '';
        if (ptEl) ptEl.innerHTML = p.bodyPt || '';
        if (itEl) itEl.innerHTML = p.bodyIt || '';
      }
    } else {
      setForm(empty);
      const enEl = document.getElementById('b-body-en');
      const ptEl = document.getElementById('b-body-pt');
      const itEl = document.getElementById('b-body-it');
      if (enEl) enEl.innerHTML = '';
      if (ptEl) ptEl.innerHTML = '';
      if (itEl) itEl.innerHTML = '';
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
      titleIt: form.titleIt.trim(),
      subtitle: form.subtitle.trim(),
      subtitlePt: form.subtitlePt.trim(),
      subtitleIt: form.subtitleIt.trim(),
      excerptEn: form.excerptEn.trim(),
      excerptPt: form.excerptPt.trim(),
      excerptIt: form.excerptIt.trim(),
      bodyEn: document.getElementById('b-body-en')?.innerHTML ?? '',
      bodyPt: document.getElementById('b-body-pt')?.innerHTML ?? '',
      bodyIt: document.getElementById('b-body-it')?.innerHTML ?? '',
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
    if (!confirm(t('blogPanel.confirmDelete'))) return;
    const ok = await deleteBlogPost(editingBlogId!);
    if (ok) closeBlogPanel();
  };

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={e => { if (e.target === e.currentTarget) closeBlogPanel(); }} role="dialog" aria-modal aria-labelledby="blog-panel-title">
      <S.Panel>
        <S.PanelHeader>
          <div>
            <S.PanelTitle id="blog-panel-title">{isEditing ? t('blogPanel.titleEdit') : t('blogPanel.titleNew')}</S.PanelTitle>
            <S.PanelSubtitle>{t('blogPanel.subtitle')}</S.PanelSubtitle>
          </div>
          <S.CloseBtn onClick={closeBlogPanel} aria-label="Close panel">✕</S.CloseBtn>
        </S.PanelHeader>

        <S.Body>
          <S.SectionTitle>{t('blogPanel.content')}</S.SectionTitle>
          <S.FormGroup>
            <S.Label htmlFor="b-title">{t('blogPanel.labelTitleEn')} <span>*</span></S.Label>
            <S.Input id="b-title" value={form.title} onChange={set('title')} placeholder={t('blogPanel.titleEnPh')} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-title-pt">{t('blogPanel.labelTitlePt')}</S.Label>
            <S.Input id="b-title-pt" value={form.titlePt} onChange={set('titlePt')} placeholder={t('blogPanel.titlePtPh')} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-title-it">{t('blogPanel.labelTitleIt')}</S.Label>
            <S.Input id="b-title-it" value={form.titleIt} onChange={set('titleIt')} placeholder={t('blogPanel.titleItPh')} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-subtitle">{t('blogPanel.labelSubEn')}</S.Label>
            <S.Input id="b-subtitle" value={form.subtitle} onChange={set('subtitle')} placeholder={t('blogPanel.subEnPh')} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-subtitle-pt">{t('blogPanel.labelSubPt')}</S.Label>
            <S.Input id="b-subtitle-pt" value={form.subtitlePt} onChange={set('subtitlePt')} placeholder={t('blogPanel.subPtPh')} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-subtitle-it">{t('blogPanel.labelSubIt')}</S.Label>
            <S.Input id="b-subtitle-it" value={form.subtitleIt} onChange={set('subtitleIt')} placeholder={t('blogPanel.subItPh')} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-excerpt-en">{t('blogPanel.labelExcEn')} <span>*</span></S.Label>
            <S.Textarea id="b-excerpt-en" rows={2} value={form.excerptEn} onChange={set('excerptEn')} placeholder={t('blogPanel.excEnPh')} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-excerpt-pt">{t('blogPanel.labelExcPt')}</S.Label>
            <S.Textarea id="b-excerpt-pt" rows={2} value={form.excerptPt} onChange={set('excerptPt')} placeholder={t('blogPanel.excPtPh')} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-excerpt-it">{t('blogPanel.labelExcIt')}</S.Label>
            <S.Textarea id="b-excerpt-it" rows={2} value={form.excerptIt} onChange={set('excerptIt')} placeholder={t('blogPanel.excItPh')} />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>{t('blogPanel.labelBodyEn')} <span>*</span></S.Label>
            <RichEditor id="b-body-en" placeholder={t('blogPanel.bodyEnPh')} ariaLabel="Post body in English" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>{t('blogPanel.labelBodyPt')}</S.Label>
            <RichEditor id="b-body-pt" placeholder={t('blogPanel.bodyPtPh')} ariaLabel="Post body in Portuguese" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>{t('blogPanel.labelBodyIt')}</S.Label>
            <RichEditor id="b-body-it" placeholder={t('blogPanel.bodyItPh')} ariaLabel="Post body in Italian" />
          </S.FormGroup>

          <S.Divider />
          <S.SectionTitle>{t('blogPanel.meta')}</S.SectionTitle>
          <S.FormRow3>
            <S.FormGroup>
              <S.Label htmlFor="b-date">{t('blogPanel.labelDate')}</S.Label>
              <S.Input id="b-date" type="date" value={form.date} onChange={set('date')} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="b-readtime">{t('blogPanel.labelReadTime')}</S.Label>
              <S.Input id="b-readtime" type="number" value={form.readTime} onChange={set('readTime')} placeholder="5" min={1} max={60} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="b-status">{t('blogPanel.labelStatus')}</S.Label>
              <S.Select id="b-status" value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value as 'draft' | 'published' }))}>
                <option value="draft">{t('blogPanel.statusDraft')}</option>
                <option value="published">{t('blogPanel.statusPub')}</option>
              </S.Select>
            </S.FormGroup>
          </S.FormRow3>

          <S.FormGroup>
            <S.Label htmlFor="b-primary-tag">{t('blogPanel.labelPrimaryTag')} <span>*</span></S.Label>
            <S.Input id="b-primary-tag" value={form.primaryTag} onChange={set('primaryTag')} placeholder="e.g. Tech & Dev" />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>{t('blogPanel.labelTags')}</S.Label>
            <TagsInput value={form.tags} onChange={tags => setForm(p => ({ ...p, tags }))} placeholder={t('blogPanel.tagsPh')} />
          </S.FormGroup>

          <S.FormGroup style={{ display: 'grid', gridTemplateColumns: '1fr 100px 80px', gap: 16 }}>
            <div>
              <S.Label htmlFor="b-color">{t('blogPanel.labelColor')}</S.Label>
              <S.Select id="b-color" value={form.accentColor} onChange={set('accentColor')}>
                <option value="#4DB89E">{t('colors.mint')}</option>
                <option value="#C43560">{t('colors.pink')}</option>
                <option value="#8B7355">{t('colors.warm')}</option>
                <option value="#6B7BA4">{t('colors.blue')}</option>
                <option value="#A855F7">{t('colors.purple')}</option>
              </S.Select>
            </div>
            <div>
              <S.Label>{t('blogPanel.labelColorSwatch')}</S.Label>
              <div style={{ width: 40, height: 40, borderRadius: 4, background: form.accentColor, border: '1px solid rgba(255,255,255,0.1)', marginTop: 2 }} />
            </div>
            <div>
              <S.Label htmlFor="b-icon">{t('blogPanel.labelIcon')}</S.Label>
              <S.Input id="b-icon" value={form.icon} onChange={set('icon')} placeholder="✦" style={{ textAlign: 'center', fontSize: 18 }} />
            </div>
          </S.FormGroup>

          <S.Divider />
          <S.SectionTitle>{t('blogPanel.coverImage')}</S.SectionTitle>
          <S.FormGroup>
            <UploadArea onFile={image => setForm(p => ({ ...p, image }))} ariaLabel="Upload cover image" />
          </S.FormGroup>
        </S.Body>

        <S.Footer>
          {isEditing && <S.BtnDanger onClick={handleDelete}>{t('blogPanel.delete')}</S.BtnDanger>}
          <S.FooterRight>
            <Btn variant="ghost" onClick={closeBlogPanel}>{t('blogPanel.cancel')}</Btn>
            <Btn variant="ghost" onClick={() => handleSave('draft')}>{t('blogPanel.saveDraft')}</Btn>
            <Btn variant="primary" onClick={() => handleSave('published')}>{t('blogPanel.publish')}</Btn>
          </S.FooterRight>
        </S.Footer>
      </S.Panel>
    </S.Overlay>
  );
}
