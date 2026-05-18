'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAdmin } from '@/context/AdminContext';
import { Btn } from '@/components/layout/topbar/styles';
import * as S from './styles';

export default function SettingsView() {
  const { addToast } = useAdmin();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: 'Any Elis Mendonça Medola',
    role: 'Senior Front-End Developer',
    location: 'Milan, Italy',
    email: 'any@aeait.com',
    linkedin: 'https://linkedin.com/in/dev-anyemedola',
    github: 'https://github.com/anyemedola',
    site: 'https://anyemedola.com.br',
    bio: "Senior Front-End Developer with 5+ years of experience building modern, scalable web applications using React, Next.js, and TypeScript.",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  return (
    <S.Root>
      <S.SectionTitle>{t('settings.siteInfo')}</S.SectionTitle>
      <S.FormGroup>
        <S.Label htmlFor="s-name">{t('settings.fullName')} *</S.Label>
        <S.Input id="s-name" value={form.name} onChange={set('name')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-role">{t('settings.roleTitle')}</S.Label>
        <S.Input id="s-role" value={form.role} onChange={set('role')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-location">{t('settings.location')}</S.Label>
        <S.Input id="s-location" value={form.location} onChange={set('location')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-email">{t('settings.email')}</S.Label>
        <S.Input id="s-email" value={form.email} onChange={set('email')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-linkedin">{t('settings.linkedin')}</S.Label>
        <S.Input id="s-linkedin" type="url" value={form.linkedin} onChange={set('linkedin')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-github">{t('settings.github')}</S.Label>
        <S.Input id="s-github" type="url" value={form.github} onChange={set('github')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-site">{t('settings.website')}</S.Label>
        <S.Input id="s-site" type="url" value={form.site} onChange={set('site')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-bio">{t('settings.bioEn')}</S.Label>
        <S.Textarea id="s-bio" rows={3} value={form.bio} onChange={set('bio')} />
      </S.FormGroup>
      <div style={{ marginTop: 8 }}>
        <Btn variant="primary" onClick={() => addToast(t('settings.saved'), 'success')}>
          {t('settings.save')}
        </Btn>
      </div>
    </S.Root>
  );
}
