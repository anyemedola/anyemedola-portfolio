import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Nav = styled('nav')({
    position: 'sticky',
    top: 0,
    background: tokens.cream,
    borderBottom: `1px solid ${tokens.border}`,
    padding: '16px 48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
    '@media (max-width: 900px)': {
        padding: '12px 24px',
    },
});

export const BackBtn = styled('button')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: tokens.ink,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'gap 0.2s',
    minHeight: 44,
    padding: 0,
    '&:hover': { gap: 16 },
    '&:hover .back-arrow': { transform: 'translateX(-4px)' },
});

export const BackArrow = styled('span')({
    transition: 'transform 0.2s',
    display: 'inline-block',
});

export const Right = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 20,
});

export const NavLogo = styled(Link)({
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 20,
    letterSpacing: '0.12em',
    color: tokens.ink,
    textDecoration: 'none',
});

export const InlineLangToggle = styled('div')({
    display: 'flex',
    border: `1.5px solid ${tokens.ink}`,
    borderRadius: 2,
    overflow: 'hidden',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
});

export const LangBtn = styled('button')<{ active?: boolean }>(({ active }) => ({
    background: active ? tokens.ink : 'transparent',
    border: 'none',
    padding: '6px 14px',
    cursor: 'pointer',
    color: active ? tokens.cream : tokens.ink,
    minHeight: 36,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    textTransform: 'inherit',
}));