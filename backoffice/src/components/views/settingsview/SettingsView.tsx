'use client';

import { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import { Btn } from '@/components/layout/topbar/styles';
import * as S from './styles';

export default function SettingsView() {
  const { addToast } = useAdmin();
  const { dict } = useLang();
  const s = dict.settings;
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
      <S.SectionTitle>{s.siteInfo}</S.SectionTitle>
      <S.FormGroup>
        <S.Label htmlFor="s-name">{s.fullName} *</S.Label>
        <S.Input id="s-name" value={form.name} onChange={set('name')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-role">{s.roleTitle}</S.Label>
        <S.Input id="s-role" value={form.role} onChange={set('role')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-location">{s.location}</S.Label>
        <S.Input id="s-location" value={form.location} onChange={set('location')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-email">{s.email}</S.Label>
        <S.Input id="s-email" value={form.email} onChange={set('email')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-linkedin">{s.linkedin}</S.Label>
        <S.Input id="s-linkedin" type="url" value={form.linkedin} onChange={set('linkedin')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-github">{s.github}</S.Label>
        <S.Input id="s-github" type="url" value={form.github} onChange={set('github')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-site">{s.website}</S.Label>
        <S.Input id="s-site" type="url" value={form.site} onChange={set('site')} />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="s-bio">{s.bioEn}</S.Label>
        <S.Textarea id="s-bio" rows={3} value={form.bio} onChange={set('bio')} />
      </S.FormGroup>
      <div style={{ marginTop: 8 }}>
        <Btn variant="primary" onClick={() => addToast(s.saved, 'success')}>
          {s.save}
        </Btn>
      </div>
    </S.Root>
  );
}
