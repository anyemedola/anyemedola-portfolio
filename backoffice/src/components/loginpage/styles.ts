import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Root = styled('div')({
  minHeight: '100vh',
  background: 'linear-gradient(165deg,#FBEDEE 0%,#F5C0C3 55%,#EFA8AC 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
});

export const Card = styled('div')({
  width: '100%',
  maxWidth: 400,
  background: tokens.cream,
  border: '1px solid rgba(239,168,172,0.20)',
  borderRadius: 20,
  padding: '52px 44px',
  boxShadow: '0 24px 60px -24px rgba(18,59,55,0.18)',
  animation: `${fadeUp} 0.5s ease forwards`,
  '@media (max-width: 480px)': { padding: '36px 24px', borderRadius: 14 },
});

export const LogoMark = styled('div')({
  fontFamily: "'Newsreader', var(--font-newsreader), serif",
  fontStyle: 'italic',
  fontSize: 42,
  fontWeight: 400,
  color: tokens.ink,
  lineHeight: 1,
  marginBottom: 2,
  '& span': { color: tokens.rose },
});

export const LogoSub = styled('div')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.24em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 44,
});

export const Title = styled('h1')({
  fontFamily: "'Newsreader', var(--font-newsreader), serif",
  fontStyle: 'italic',
  fontSize: 30,
  fontWeight: 400,
  color: tokens.ink,
  marginBottom: 6,
  lineHeight: 1.1,
});

export const Subtitle = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  color: tokens.textMuted,
  marginBottom: 32,
  lineHeight: 1.5,
});

export const FormGroup = styled('div')({ marginBottom: 20 });

export const Label = styled('label')({
  display: 'block',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: tokens.textMuted,
  marginBottom: 8,
});

export const Input = styled('input')({
  width: '100%',
  background: '#F6F2EA',
  border: '1px solid rgba(239,168,172,0.20)',
  color: tokens.ink,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 14,
  fontWeight: 400,
  padding: '12px 16px',
  borderRadius: 12,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  '&:focus': {
    borderColor: tokens.gold,
    boxShadow: `0 0 0 3px ${tokens.goldGlow}`,
  },
  '&::placeholder': { color: tokens.textMuted },
});

export const SubmitBtn = styled('button', {
  shouldForwardProp: (prop) => prop !== 'loading',
})<{ loading?: boolean }>(({ loading }) => ({
  width: '100%',
  background: loading ? '#0E4E4A' : tokens.gold,
  color: '#fff',
  border: 'none',
  padding: '14px 24px',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  cursor: loading ? 'not-allowed' : 'pointer',
  borderRadius: 12,
  marginTop: 8,
  transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
  '&:hover:not(:disabled)': {
    background: '#0E4E4A',
    transform: 'translateY(-1px)',
    boxShadow: '0 8px 24px -8px rgba(18,59,55,0.40)',
  },
  '&:active': { transform: 'translateY(0)' },
}));

export const ErrorMsg = styled('div')({
  background: 'rgba(194,58,58,0.08)',
  border: '1px solid rgba(194,58,58,0.22)',
  color: tokens.danger,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12.5,
  padding: '10px 14px',
  borderRadius: 10,
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const Divider = styled('div')({
  height: 1,
  background: tokens.border,
  margin: '32px 0 20px',
});

export const FooterNote = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 10,
  color: tokens.textMuted,
  textAlign: 'center',
  letterSpacing: '0.06em',
  lineHeight: 1.6,
});
