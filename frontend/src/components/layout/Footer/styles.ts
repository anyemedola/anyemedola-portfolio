import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const FooterRoot = styled('footer')({
    background: tokens.ink,
    padding: '28px 56px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    '@media (max-width: 900px)': {
        flexDirection: 'column',
        gap: 12,
        textAlign: 'center',
        padding: 24,
    },
});

export const FooterText = styled('span')({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    letterSpacing: '0.12em',
    color: 'rgba(249,245,238,0.45)',
    textTransform: 'uppercase',
});

export const FooterLink = styled('a')({
    color: tokens.mintOnDark,
    textDecoration: 'none',
    fontSize: 11,
    letterSpacing: '0.12em',
    fontFamily: "'DM Sans', sans-serif",
});