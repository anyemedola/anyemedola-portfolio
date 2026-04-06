import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Wrap = styled('div')({
    maxWidth: 680,
    margin: '0 auto',
    padding: '0 40px 100px',
    '@media (max-width: 900px)': {
        padding: '0 24px 80px',
    },
});

export const Cover = styled('div')({
    maxWidth: 960,
    margin: '0 auto 72px',
    padding: '0 40px',
    '@media (max-width: 900px)': {
        padding: '0 24px',
    },
});

export const CoverImg = styled('div')({
    width: '100%',
    aspectRatio: '16/7',
    background: tokens.ink,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 16,
    '&::before': {
        content: "''",
        position: 'absolute',
        inset: 0,
        background: `
      repeating-linear-gradient(45deg, rgba(110,207,184,0.05) 0px, rgba(110,207,184,0.05) 1px, transparent 1px, transparent 48px),
      repeating-linear-gradient(-45deg, rgba(232,84,122,0.05) 0px, rgba(232,84,122,0.05) 1px, transparent 1px, transparent 48px)
    `,
    },
});

export const CoverPlaceholderIcon = styled('span')({
    fontSize: 56,
    opacity: 0.1,
    zIndex: 1,
});

export const CoverPlaceholderText = styled('span')({
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 14,
    letterSpacing: '0.25em',
    color: 'rgba(249,245,238,0.2)',
    zIndex: 1,
});

export const CoverCaption = styled('figcaption')({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    color: tokens.warmGray,
    letterSpacing: '0.08em',
    marginTop: 12,
    fontStyle: 'italic',
});

export const Body = styled('article')({
    '& p': {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1.8,
        color: '#2E2820',
        marginBottom: 28,
    },
    '& h2': {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 36,
        letterSpacing: '0.03em',
        color: tokens.ink,
        margin: '56px 0 20px',
        lineHeight: 1,
    },
    '& h3': {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: tokens.ink,
        margin: '40px 0 16px',
    },
    '& strong': { fontWeight: 600, color: tokens.ink },
    '& em': { fontStyle: 'italic', color: '#4A4540' },
    '& a': {
        color: tokens.pink,
        textDecoration: 'underline',
        textUnderlineOffset: 3,
        transition: 'color 0.2s',
        '&:hover': { color: tokens.ink },
    },
    '& ul, & ol': {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1.7,
        color: '#2E2820',
        paddingLeft: 28,
        marginBottom: 28,
    },
    '& ul li': { listStyle: 'disc', marginBottom: 8 },
    '& ol li': { listStyle: 'decimal', marginBottom: 8 },
    '& blockquote': {
        borderLeft: `3px solid ${tokens.pink}`,
        padding: '4px 0 4px 28px',
        margin: '40px 0',
        '& p': {
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 24,
            fontStyle: 'italic',
            fontWeight: 300,
            color: tokens.ink,
            lineHeight: 1.55,
            marginBottom: 8,
        },
        '& cite': {
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: tokens.warmGray,
            fontStyle: 'normal',
        },
    },
    '& pre': {
        background: tokens.ink,
        color: tokens.mintOnDark,
        fontFamily: "'Courier New', monospace",
        fontSize: 14,
        lineHeight: 1.7,
        padding: '28px 32px',
        margin: '32px 0',
        overflowX: 'auto',
        borderRadius: 2,
    },
    '& code': {
        fontFamily: "'Courier New', monospace",
        fontSize: 14,
        background: 'rgba(26,20,16,0.07)',
        padding: '2px 8px',
        borderRadius: 2,
        color: tokens.ink,
    },
    '& pre code': { background: 'transparent', padding: 0, color: 'inherit', fontSize: 'inherit' },
    '& hr': { border: 'none', borderTop: `1px solid ${tokens.border}`, margin: '56px 0' },
});

export const Pullquote = styled('div')({
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 28,
    fontWeight: 300,
    fontStyle: 'italic',
    lineHeight: 1.45,
    color: tokens.ink,
    textAlign: 'center',
    padding: '48px 0',
    margin: '16px 0 44px',
    borderTop: `1px solid ${tokens.border}`,
    borderBottom: `1px solid ${tokens.border}`,
    position: 'relative',
    '&::before': {
        content: '"""',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 120,
        lineHeight: 0,
        position: 'absolute',
        top: 60,
        left: -20,
        color: tokens.pink,
        opacity: 0.15,
    },
});