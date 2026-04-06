
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Section = styled('section')({
    background: tokens.ink,
    padding: '80px 0',
});

export const Inner = styled('div')({
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 56px',
    '@media (max-width: 900px)': {
        padding: '0 24px',
    },
});

export const Title = styled('h2')({
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 48,
    color: tokens.cream,
    marginBottom: 40,
    '& em': {
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        color: tokens.mintOnDark,
    },
});

export const Grid = styled('ul')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 2,
    listStyle: 'none',
    '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr',
    },
});

export const Card = styled('li')<{ cardColor: string }>(({ cardColor }) => ({
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.06)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, background 0.3s ease',
    '--card-color': cardColor,
    '&:hover': {
        background: 'rgba(255,255,255,0.07)',
        transform: 'translateY(-4px)',
        '& .card-bar': { transform: 'scaleX(1)' },
        '& .card-title': { color: 'var(--card-color)' },
        '& .card-arrow': {
            background: 'var(--card-color)',
            borderColor: 'var(--card-color)',
            color: tokens.ink,
            transform: 'rotate(45deg)',
        },
    },
} as React.CSSProperties));

export const CardBar = styled('div')({
    height: 3,
    width: '100%',
    background: 'var(--card-color)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.4s ease',
});

export const CardBody = styled('div')({
    padding: '28px 28px 32px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
});

export const Meta = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
});

export const Tag = styled('span')({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--card-color)',
    background: 'rgba(255,255,255,0.05)',
    padding: '4px 10px',
    borderRadius: 2,
});

export const DateEl = styled('time')({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    letterSpacing: '0.1em',
    color: 'rgba(249,245,238,0.4)',
});

export const CardTitle = styled('h3')({
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 24,
    letterSpacing: '0.03em',
    lineHeight: 1.05,
    color: tokens.cream,
    marginBottom: 14,
    transition: 'color 0.2s',
    flex: 1,
});

export const Footer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTop: '1px solid rgba(255,255,255,0.07)',
});

export const ReadTime = styled('span')({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(249,245,238,0.4)',
});

export const Arrow = styled('div')({
    width: 32,
    height: 32,
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    color: 'rgba(249,245,238,0.5)',
    transition: 'all 0.25s',
    flexShrink: 0,
});

export const CardLink = styled(Link)({
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    color: 'inherit',
    '&:focus-visible': {
        outline: `3px solid ${tokens.mintOnDark}`,
        outlineOffset: 2,
    },
});