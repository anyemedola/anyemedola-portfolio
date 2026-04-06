'use client';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import { useAdmin } from '@/context/AdminContext';
import { useLang } from '@/context/LangContext';
import { Btn } from '@/components/layout/topbar/TopBar';

const Root = styled('div')({ maxWidth: 600 });

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

const FormGroup = styled('div')({ marginBottom: 22 });

const Label = styled('label')({
  display: 'block',
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 8,
  fontFamily: "'DM Sans', sans-serif",
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
  transition: 'border-color 0.2s',
  outline: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
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
  transition: 'border-color 0.2s',
  outline: 'none',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});

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
    <Root>
      <SectionTitle>{s.siteInfo}</SectionTitle>
      <FormGroup>
        <Label htmlFor="s-name">{s.fullName} *</Label>
        <Input id="s-name" value={form.name} onChange={set('name')} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="s-role">{s.roleTitle}</Label>
        <Input id="s-role" value={form.role} onChange={set('role')} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="s-location">{s.location}</Label>
        <Input id="s-location" value={form.location} onChange={set('location')} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="s-email">{s.email}</Label>
        <Input id="s-email" value={form.email} onChange={set('email')} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="s-linkedin">{s.linkedin}</Label>
        <Input id="s-linkedin" type="url" value={form.linkedin} onChange={set('linkedin')} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="s-github">{s.github}</Label>
        <Input id="s-github" type="url" value={form.github} onChange={set('github')} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="s-site">{s.website}</Label>
        <Input id="s-site" type="url" value={form.site} onChange={set('site')} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="s-bio">{s.bioEn}</Label>
        <Textarea id="s-bio" rows={3} value={form.bio} onChange={set('bio')} />
      </FormGroup>
      <div style={{ marginTop: 8 }}>
        <Btn variant="primary" onClick={() => addToast(s.saved, 'success')}>
          {s.save}
        </Btn>
      </div>
    </Root>
  );
}
