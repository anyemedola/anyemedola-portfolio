'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAdmin } from '@/context/AdminContext';
import TagsInput from '@/components/ui/tagsinput/TagsInput';
import UploadArea from '@/components/ui/uploadarea/UploadArea';
import RichEditor from '@/components/ui/richeditor/RichEditor';
import { Btn } from '@/components/layout/topbar/styles';
import * as S from './styles';

const MYMEMORY = 'https://api.mymemory.translated.net/get';
const BODY_LIMIT = 2000;

async function tr(text: string, from: string, to: string): Promise<string> {
  if (!text?.trim()) return text;
  try {
    const url = `${MYMEMORY}?q=${encodeURIComponent(text)}&langpair=${from}|${to}&de=alan%40aeait.com`;
    const res = await fetch(url);
    if (!res.ok) return text;
    const json = await res.json();
    return (json?.responseData?.translatedText as string) || text;
  } catch {
    return text;
  }
}

interface FormState {
  titlePt: string;
  subtitlePt: string;
  excerptPt: string;
  date: string; readTime: string;
  status: 'draft' | 'published';
  primaryTag: string;
  tags: string[];
  accentColor: string;
  icon: string;
  image: string | null;
}

const empty: FormState = {
  titlePt: '', subtitlePt: '', excerptPt: '',
  date: '', readTime: '', status: 'draft',
  primaryTag: '', tags: [], accentColor: '#EFA8AC', icon: '✦', image: null,
};

export default function BlogPanel() {
  const { openPanel, editingBlogId, blogPosts, closeBlogPanel, saveBlogPost, deleteBlogPost } = useAdmin();
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(empty);
  const [translating, setTranslating] = useState(false);

  const isOpen = openPanel === 'blog';
  const isEditing = editingBlogId !== null;

  useEffect(() => {
    if (!isOpen) return;
    if (isEditing) {
      const p = blogPosts.find(x => x.id === editingBlogId);
      if (p) {
        setForm({
          titlePt:    p.titlePt    ?? p.title ?? '',
          subtitlePt: p.subtitlePt ?? p.subtitle ?? '',
          excerptPt:  p.excerptPt  ?? p.excerptEn ?? '',
          date:       p.date        ?? '',
          readTime:   String(p.readTime ?? ''),
          status:     p.status      ?? 'draft',
          primaryTag: p.primaryTag  ?? '',
          tags:       p.tags        ?? [],
          accentColor: p.accentColor ?? '#EFA8AC',
          icon:       p.icon        ?? '✦',
          image:      p.image       ?? null,
        });
        const ptEl = document.getElementById('b-body-pt');
        if (ptEl) ptEl.innerHTML = p.bodyPt || p.bodyEn || '';
      }
    } else {
      setForm(empty);
      const ptEl = document.getElementById('b-body-pt');
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
    if (!form.titlePt.trim()) { alert('O título do post é obrigatório'); return; }
    if (translating) return;

    setTranslating(true);

    const bodyPt = document.getElementById('b-body-pt')?.innerHTML ?? '';
    const canTranslateBody = !!bodyPt && bodyPt.length <= BODY_LIMIT;

    const [
      titleEn, titleIt,
      subtitleEn, subtitleIt,
      excerptEn, excerptIt,
      bodyEn, bodyIt,
    ] = await Promise.all([
      tr(form.titlePt.trim(), 'pt', 'en'),
      tr(form.titlePt.trim(), 'pt', 'it'),
      tr(form.subtitlePt.trim(), 'pt', 'en'),
      tr(form.subtitlePt.trim(), 'pt', 'it'),
      tr(form.excerptPt.trim(), 'pt', 'en'),
      tr(form.excerptPt.trim(), 'pt', 'it'),
      canTranslateBody ? tr(bodyPt, 'pt', 'en') : Promise.resolve(''),
      canTranslateBody ? tr(bodyPt, 'pt', 'it') : Promise.resolve(''),
    ]);

    setTranslating(false);

    await saveBlogPost({
      title:      titleEn   || form.titlePt.trim(),
      titlePt:    form.titlePt.trim(),
      titleIt:    titleIt   || form.titlePt.trim(),
      subtitle:   subtitleEn || form.subtitlePt.trim(),
      subtitlePt: form.subtitlePt.trim(),
      subtitleIt: subtitleIt || form.subtitlePt.trim(),
      excerptEn:  excerptEn  || form.excerptPt.trim(),
      excerptPt:  form.excerptPt.trim(),
      excerptIt:  excerptIt  || form.excerptPt.trim(),
      bodyPt,
      bodyEn:     bodyEn || '',
      bodyIt:     bodyIt || '',
      date:       form.date,
      readTime:   form.readTime,
      status,
      primaryTag: form.primaryTag.trim(),
      tags:       form.tags,
      accentColor: form.accentColor,
      icon:       form.icon.trim() || '✦',
      image:      form.image,
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

          <S.AutoTranslateNote>
            ✦ Escreva apenas em português. As versões em inglês e italiano são geradas automaticamente.
          </S.AutoTranslateNote>

          <S.FormGroup>
            <S.Label htmlFor="b-title-pt">{t('blogPanel.labelTitlePt')} <span>*</span></S.Label>
            <S.Input id="b-title-pt" value={form.titlePt} onChange={set('titlePt')} placeholder={t('blogPanel.titlePtPh')} />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="b-subtitle-pt">{t('blogPanel.labelSubPt')}</S.Label>
            <S.Input id="b-subtitle-pt" value={form.subtitlePt} onChange={set('subtitlePt')} placeholder={t('blogPanel.subPtPh')} />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="b-excerpt-pt">{t('blogPanel.labelExcPt')} <span>*</span></S.Label>
            <S.Textarea id="b-excerpt-pt" rows={2} value={form.excerptPt} onChange={set('excerptPt')} placeholder={t('blogPanel.excPtPh')} />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>{t('blogPanel.labelBodyPt')} <span>*</span></S.Label>
            <RichEditor id="b-body-pt" placeholder={t('blogPanel.bodyPtPh')} ariaLabel="Corpo do post em português" />
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
                <option value="#EFA8AC">{t('colors.rose')}</option>
                <option value="#1A615D">{t('colors.teal')}</option>
                <option value="#B8C897">{t('colors.sage')}</option>
                <option value="#3B82F6">{t('colors.blue')}</option>
                <option value="#7C3AED">{t('colors.purple')}</option>
              </S.Select>
            </div>
            <div>
              <S.Label>{t('blogPanel.labelColorSwatch')}</S.Label>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: form.accentColor, border: '1px solid rgba(239,168,172,0.25)', marginTop: 2 }} />
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
          {isEditing && <S.BtnDanger onClick={handleDelete} disabled={translating}>{t('blogPanel.delete')}</S.BtnDanger>}
          <S.FooterRight>
            <Btn variant="ghost" onClick={closeBlogPanel} disabled={translating}>{t('blogPanel.cancel')}</Btn>
            <Btn variant="ghost" onClick={() => handleSave('draft')} disabled={translating}>
              {translating ? 'Traduzindo...' : t('blogPanel.saveDraft')}
            </Btn>
            <Btn variant="primary" onClick={() => handleSave('published')} disabled={translating}>
              {translating ? 'Traduzindo...' : t('blogPanel.publish')}
            </Btn>
          </S.FooterRight>
        </S.Footer>
      </S.Panel>
    </S.Overlay>
  );
}
