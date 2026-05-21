'use client';

import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '@/lib/firebase';
import * as S from './styles';

export default function LoginPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const credential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const idToken    = await credential.user.getIdToken();

      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      if (res.ok) {
        router.push('/');
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error ?? 'Login failed');
      }
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === 'auth/invalid-credential' || code === 'auth/user-not-found' || code === 'auth/wrong-password') {
        setError('Invalid email or password');
      } else if (code === 'auth/too-many-requests') {
        setError('Too many attempts. Try again later.');
      } else {
        setError('Could not reach the server. Make sure the backend is running.');
      }
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
            <S.Label htmlFor="email">{t('login.labelUser')}</S.Label>
            <S.Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@example.com"
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
