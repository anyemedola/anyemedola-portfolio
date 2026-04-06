'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';
import { useLang } from '@/context/LangContext';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Root = styled('div')({
  minHeight: '100vh',
  background: tokens.bg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
  fontFamily: "'DM Sans', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: -200,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 600,
    height: 600,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${tokens.mintGlow} 0%, transparent 70%)`,
    pointerEvents: 'none',
  },
});

const Card = styled('div')({
  width: '100%',
  maxWidth: 400,
  background: tokens.surface,
  border: `1px solid ${tokens.border}`,
  padding: '48px 40px',
  animation: `${fadeUp} 0.5s ease forwards`,
  position: 'relative',
  zIndex: 1,
  '@media (max-width: 480px)': { padding: '36px 24px' },
});

const LogoMark = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 36,
  letterSpacing: '0.1em',
  color: tokens.cream,
  marginBottom: 4,
  '& span': { color: tokens.mint },
});

const LogoSub = styled('div')({
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 40,
});

const Title = styled('h1')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 28,
  letterSpacing: '0.06em',
  color: tokens.cream,
  marginBottom: 8,
});

const Subtitle = styled('p')({
  fontSize: 12,
  color: tokens.textMuted,
  marginBottom: 32,
  lineHeight: 1.5,
});

const FormGroup = styled('div')({ marginBottom: 20 });

const Label = styled('label')({
  display: 'block',
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 8,
});

const Input = styled('input')({
  width: '100%',
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  padding: '12px 16px',
  borderRadius: 2,
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
  '&:focus': { borderColor: tokens.mint, background: tokens.surface3 },
  '&::placeholder': { color: tokens.textMuted },
});

const SubmitBtn = styled('button', {
  shouldForwardProp: (prop) => prop !== 'loading',
})<{ loading?: boolean }>(({ loading }) => ({
  width: '100%',
  background: loading ? tokens.mintDim : tokens.mint,
  color: tokens.ink,
  border: 'none',
  padding: '14px 24px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  cursor: loading ? 'not-allowed' : 'pointer',
  borderRadius: 2,
  marginTop: 8,
  transition: 'background 0.2s, transform 0.15s',
  '&:hover:not(:disabled)': { background: '#88d9c7', transform: 'translateY(-1px)' },
  '&:active': { transform: 'translateY(0)' },
}));

const ErrorMsg = styled('div')({
  background: 'rgba(232,84,122,0.1)',
  border: `1px solid rgba(232,84,122,0.25)`,
  color: tokens.pink,
  fontSize: 12,
  padding: '10px 14px',
  borderRadius: 2,
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const Divider = styled('div')({
  height: 1,
  background: tokens.border,
  margin: '32px 0 20px',
});

const FooterNote = styled('p')({
  fontSize: 10,
  color: tokens.textMuted,
  textAlign: 'center',
  letterSpacing: '0.06em',
  lineHeight: 1.6,
});

export default function LoginPage() {
  const router = useRouter();
  const { dict } = useLang();
  const l = dict.login;
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
    <Root>
      <Card>
        <LogoMark>AM<span>·</span></LogoMark>
        <LogoSub>Portfolio Admin</LogoSub>

        <Title>{l.title}</Title>
        <Subtitle>{l.subtitle}</Subtitle>

        {error && (
          <ErrorMsg>
            <span aria-hidden="true">✕</span>
            {error}
          </ErrorMsg>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <FormGroup>
            <Label htmlFor="username">{l.labelUser}</Label>
            <Input
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="username"
              required
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">{l.labelPass}</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••••"
              required
            />
          </FormGroup>
          <SubmitBtn type="submit" loading={loading} disabled={loading}>
            {loading ? l.submitting : l.submit}
          </SubmitBtn>
        </form>

        <Divider />
        <FooterNote>AM· Portfolio Admin · Restricted access</FooterNote>
      </Card>
    </Root>
  );
}
