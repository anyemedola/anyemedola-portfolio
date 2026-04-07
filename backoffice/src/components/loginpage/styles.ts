import { styled, keyframes } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';


export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Root = styled('div')({
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

export const Card = styled('div')({
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

export const LogoMark = styled('div')({
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 36,
    letterSpacing: '0.1em',
    color: tokens.cream,
    marginBottom: 4,
    '& span': { color: tokens.mint },
});

export const LogoSub = styled('div')({
    fontSize: 9,
    fontWeight: 500,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: tokens.textMuted,
    marginBottom: 40,
});

export const Title = styled('h1')({
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 28,
    letterSpacing: '0.06em',
    color: tokens.cream,
    marginBottom: 8,
});

export const Subtitle = styled('p')({
    fontSize: 12,
    color: tokens.textMuted,
    marginBottom: 32,
    lineHeight: 1.5,
});

export const FormGroup = styled('div')({ marginBottom: 20 });

export const Label = styled('label')({
    display: 'block',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: tokens.textMuted,
    marginBottom: 8,
});

export const Input = styled('input')({
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

export const SubmitBtn = styled('button', {
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

export const ErrorMsg = styled('div')({
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

export const Divider = styled('div')({
    height: 1,
    background: tokens.border,
    margin: '32px 0 20px',
});

export const FooterNote = styled('p')({
    fontSize: 10,
    color: tokens.textMuted,
    textAlign: 'center',
    letterSpacing: '0.06em',
    lineHeight: 1.6,
});