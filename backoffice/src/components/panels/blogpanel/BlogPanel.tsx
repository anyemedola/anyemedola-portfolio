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
  titlePt: string; titleEn: string; titleIt: string;
  subtitlePt: string; subtitleEn: string; subtitleIt: string;
  excerptPt: string; excerptEn: string; excerptIt: string;
  date: string; readTime: string;
  status: 'draft' | 'published';
  primaryTag: string;
  tags: string[];
  accentColor: string;
  icon: string;
  image: string | null;
}

const empty: FormState = {
  titlePt: '', titleEn: '', titleIt: '',
  subtitlePt: '', subtitleEn: '', subtitleIt: '',
  excerptPt: '', excerptEn: '', excerptIt: '',
  date: '', readTime: '', status: 'draft',
  primaryTag: '', tags: [], accentColor: '#EFA8AC', icon: '✦', image: null,
};

function getBody(id: string) {
  return document.getElementById(id)?.innerHTML ?? '';
}

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
          titlePt:    p.titlePt    ?? p.title    ?? '',
          titleEn:    p.title      ?? '',
          titleIt:    p.titleIt    ?? '',
          subtitlePt: p.subtitlePt ?? p.subtitle ?? '',
          subtitleEn: p.subtitle   ?? '',
          subtitleIt: p.subtitleIt ?? '',
          excerptPt:  p.excerptPt  ?? '',
          excerptEn:  p.excerptEn  ?? '',
          excerptIt:  p.excerptIt  ?? '',
          date:       p.date       ?? '',
          readTime:   String(p.readTime ?? ''),
          status:     p.status     ?? 'draft',
          primaryTag: p.primaryTag ?? '',
          tags:       p.tags       ?? [],
          accentColor: p.accentColor ?? '#EFA8AC',
          icon:       p.icon       ?? '✦',
          image:      p.image      ?? null,
        });
        const ptEl = document.getElementById('b-body-pt');
        if (ptEl) ptEl.innerHTML = p.bodyPt ?? '';
        const enEl = document.getElementById('b-body-en');
        if (enEl) enEl.innerHTML = p.bodyEn ?? '';
        const itEl = document.getElementById('b-body-it');
        if (itEl) itEl.innerHTML = p.bodyIt ?? '';
      }
    } else {
      setForm(empty);
      ['b-body-pt', 'b-body-en', 'b-body-it'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
      });
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
    if (!form.titlePt.trim()) { alert('O título em português é obrigatório'); return; }
    await saveBlogPost({
      title:      form.titleEn.trim()    || form.titlePt.trim(),
      titlePt:    form.titlePt.trim(),
      titleIt:    form.titleIt.trim()    || form.titlePt.trim(),
      subtitle:   form.subtitleEn.trim() || form.subtitlePt.trim(),
      subtitlePt: form.subtitlePt.trim(),
      subtitleIt: form.subtitleIt.trim() || form.subtitlePt.trim(),
      excerptEn:  form.excerptEn.trim(),
      excerptPt:  form.excerptPt.trim(),
      excerptIt:  form.excerptIt.trim(),
      bodyPt:     getBody('b-body-pt'),
      bodyEn:     getBody('b-body-en'),
      bodyIt:     getBody('b-body-it'),
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

          {/* ── PORTUGUÊS ── */}
          <S.SectionTitle>Português</S.SectionTitle>

          <S.FormGroup>
            <S.Label htmlFor="b-title-pt">Título PT <span>*</span></S.Label>
            <S.Input id="b-title-pt" value={form.titlePt} onChange={set('titlePt')} placeholder="Título em português" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-subtitle-pt">Subtítulo PT</S.Label>
            <S.Input id="b-subtitle-pt" value={form.subtitlePt} onChange={set('subtitlePt')} placeholder="Subtítulo em português" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-excerpt-pt">Resumo PT <span>*</span></S.Label>
            <S.Textarea id="b-excerpt-pt" rows={2} value={form.excerptPt} onChange={set('excerptPt')} placeholder="Resumo do post em português" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>Corpo PT <span>*</span></S.Label>
            <RichEditor id="b-body-pt" placeholder="Escreva o post em português..." ariaLabel="Corpo do post em português" />
          </S.FormGroup>

          <S.Divider />

          {/* ── ENGLISH ── */}
          <S.SectionTitle>English</S.SectionTitle>

          <S.FormGroup>
            <S.Label htmlFor="b-title-en">Title EN</S.Label>
            <S.Input id="b-title-en" value={form.titleEn} onChange={set('titleEn')} placeholder="Post title in English" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-subtitle-en">Subtitle EN</S.Label>
            <S.Input id="b-subtitle-en" value={form.subtitleEn} onChange={set('subtitleEn')} placeholder="Post subtitle in English" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-excerpt-en">Excerpt EN</S.Label>
            <S.Textarea id="b-excerpt-en" rows={2} value={form.excerptEn} onChange={set('excerptEn')} placeholder="Post excerpt in English" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>Body EN</S.Label>
            <RichEditor id="b-body-en" placeholder="Write the post in English..." ariaLabel="Post body in English" />
          </S.FormGroup>

          <S.Divider />

          {/* ── ITALIANO ── */}
          <S.SectionTitle>Italiano</S.SectionTitle>

          <S.FormGroup>
            <S.Label htmlFor="b-title-it">Titolo IT</S.Label>
            <S.Input id="b-title-it" value={form.titleIt} onChange={set('titleIt')} placeholder="Titolo del post in italiano" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-subtitle-it">Sottotitolo IT</S.Label>
            <S.Input id="b-subtitle-it" value={form.subtitleIt} onChange={set('subtitleIt')} placeholder="Sottotitolo del post in italiano" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="b-excerpt-it">Estratto IT</S.Label>
            <S.Textarea id="b-excerpt-it" rows={2} value={form.excerptIt} onChange={set('excerptIt')} placeholder="Estratto del post in italiano" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>Corpo IT</S.Label>
            <RichEditor id="b-body-it" placeholder="Scrivi il post in italiano..." ariaLabel="Corpo del post in italiano" />
          </S.FormGroup>

          <S.Divider />

          {/* ── META ── */}
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
