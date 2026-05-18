'use client';

import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import * as S from './styles';

export default function LoginPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push('/');
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error ?? 'Login failed');
      }
    } catch {
      setError('Could not reach the server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Root>
      <S.Card>
        <S.LogoMark>AM<span>·</span></S.LogoMark>
        <S.LogoSub>Portfolio Admin</S.LogoSub>

        <S.Title>{t('login.title')}</S.Title>
        <S.Subtitle>{t('login.subtitle')}</S.Subtitle>

        {error && (
          <S.ErrorMsg>
            <span aria-hidden="true">✕</span>
            {error}
          </S.ErrorMsg>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <S.FormGroup>
            <S.Label htmlFor="username">{t('login.labelUser')}</S.Label>
            <S.Input
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="username"
              required
              autoFocus
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="password">{t('login.labelPass')}</S.Label>
            <S.Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••••"
              required
            />
          </S.FormGroup>
          <S.SubmitBtn type="submit" loading={loading} disabled={loading}>
            {loading ? t('login.submitting') : t('login.submit')}
          </S.SubmitBtn>
        </form>

        <S.Divider />
        <S.FooterNote>AM· Portfolio Admin · Restricted access</S.FooterNote>
      </S.Card>
    </S.Root>
  );
}
