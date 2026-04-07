import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

export const App = styled('div')({
    display: 'flex',
    minHeight: '100vh',
    background: tokens.bg,
    color: tokens.text,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 300,
    overflowX: 'hidden',
});

export const Main = styled('div')({
    marginLeft: tokens.sidebarW,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    '@media (max-width: 1024px)': { marginLeft: 200 },
    '@media (max-width: 768px)': { marginLeft: 0 },
});

export const Content = styled('main')({
    flex: 1,
    padding: 32,
    '@media (max-width: 768px)': { padding: '20px 16px' },
});