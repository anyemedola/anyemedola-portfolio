import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const HeaderRoot = styled('header')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 48px',
    transition: 'background 0.3s ease, box-shadow 0.3s ease',
    '&[data-scrolled="true"]': {
        background: tokens.cream,
        boxShadow: '0 1px 0 rgba(26,20,16,0.08)',
    },
    '@media (max-width: 900px)': { padding: '16px 24px' },
});

export const Logo = styled('a')({
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 22,
    letterSpacing: '0.12em',
    color: tokens.ink,
    textDecoration: 'none',
});

export const DesktopNav = styled('nav')({
    '& ul': { display: 'flex', gap: 36, listStyle: 'none', marginRight: 110 },
    '& a': {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: tokens.ink,
        transition: 'color 0.2s',
        position: 'relative',
        padding: '4px 0',
        '&::after': {
            content: "''",
            position: 'absolute',
            bottom: 0, left: 0,
            width: 0, height: 1.5,
            background: tokens.pink,
            transition: 'width 0.3s ease',
        },
        '&:hover': { color: tokens.pink, '&::after': { width: '100%' } },
    },
    '@media (max-width: 900px)': { display: 'none' },
});