import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Wrap = styled('div')({
    maxWidth: 680,
    margin: '0 auto',
    padding: '0 40px 80px',
    borderTop: `1px solid ${tokens.border}`,
    '@media (max-width: 900px)': {
        padding: '0 24px 64px',
    },
});

export const FooterTitle = styled('p')({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: tokens.warmGray,
    margin: '40px 0 24px',
});

export const ShareLinks = styled('div')({
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
});

export const ShareBtn = styled('a')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '10px 20px',
    border: `1.5px solid ${tokens.border}`,
    color: tokens.ink,
    cursor: 'pointer',
    transition: 'all 0.2s',
    minHeight: 44,
    background: 'none',
    '&:hover': {
        background: tokens.ink,
        color: tokens.cream,
        borderColor: tokens.ink,
    },
});

export const CopyBtn = styled('button')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '10px 20px',
    border: `1.5px solid ${tokens.border}`,
    color: tokens.ink,
    cursor: 'pointer',
    transition: 'all 0.2s',
    minHeight: 44,
    background: 'none',
    '&:hover': {
        background: tokens.ink,
        color: tokens.cream,
        borderColor: tokens.ink,
    },
});