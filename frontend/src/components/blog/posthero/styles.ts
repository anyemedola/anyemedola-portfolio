import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const Hero = styled('header')({
    maxWidth: 760,
    margin: '0 auto',
    padding: '72px 40px 56px',
    '@media (max-width: 900px)': {
        padding: '48px 24px 40px',
    },
});

export const Tags = styled('div')({
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: 28,
});

export const Tag = styled('span')<{ primary?: boolean }>(({ primary }) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    padding: '5px 14px',
    borderRadius: 2,
    border: `1px solid ${primary ? tokens.ink : tokens.border}`,
    color: primary ? tokens.cream : tokens.ink,
    background: primary ? tokens.ink : 'transparent',
}));

export const Title = styled('h1')({
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(40px, 6vw, 72px)',
    lineHeight: 0.92,
    letterSpacing: '0.02em',
    color: tokens.ink,
    marginBottom: 28,
});

export const Subtitle = styled('p')({
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 22,
    fontWeight: 300,
    fontStyle: 'italic',
    lineHeight: 1.55,
    color: tokens.warmGray,
    marginBottom: 40,
    maxWidth: 620,
});

export const Meta = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    paddingTop: 32,
    borderTop: `1px solid ${tokens.border}`,
    flexWrap: 'wrap',
});

export const Author = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 12,
});

export const Avatar = styled('div')({
    width: 40,
    height: 40,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    border: `2px solid ${tokens.border}`,
    position: 'relative',
});

export const AuthorName = styled('p')({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    color: tokens.ink,
});

export const AuthorRole = styled('p')({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    color: tokens.warmGray,
});

export const Divider = styled('div')({
    width: 1,
    height: 32,
    background: tokens.border,
    '@media (max-width: 600px)': { display: 'none' },
});

export const MetaItem = styled('p')({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    letterSpacing: '0.1em',
    color: tokens.warmGray,
    textTransform: 'uppercase',
});