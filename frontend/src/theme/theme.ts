import { createTheme } from '@mui/material/styles';

export const tokens = {
  mint: '#4DB89E',
  mintLight: '#a8e8d8',
  mintOnDark: '#6ECFB8',
  pink: '#C43560',
  pinkOnDark: '#E8547A',
  cream: '#F9F5EE',
  ink: '#1A1410',
  warmGray: '#6B6560',
  border: 'rgba(26,20,16,0.15)',
  focusRing: '#1A1410',
};

declare module '@mui/material/styles' {
  interface Palette {
    cream: { main: string };
    ink: { main: string };
    mint: { main: string; light: string; onDark: string };
    warmGray: { main: string };
  }
  interface PaletteOptions {
    cream?: { main: string };
    ink?: { main: string };
    mint?: { main: string; light: string; onDark: string };
    warmGray?: { main: string };
  }
}

const theme = createTheme({
  palette: {
    primary: { main: tokens.pink },
    secondary: { main: tokens.mint },
    background: { default: tokens.cream },
    text: { primary: tokens.ink, secondary: tokens.warmGray },
    cream: { main: tokens.cream },
    ink: { main: tokens.ink },
    mint: { main: tokens.mint, light: tokens.mintLight, onDark: tokens.mintOnDark },
    warmGray: { main: tokens.warmGray },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Bebas Neue', sans-serif" },
    h2: { fontFamily: "'Bebas Neue', sans-serif" },
    h3: { fontFamily: "'Bebas Neue', sans-serif" },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box', margin: 0, padding: 0 },
        html: { scrollBehavior: 'smooth' },
        body: {
          backgroundColor: tokens.cream,
          color: tokens.ink,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          overflowX: 'hidden',
          cursor: 'none',
          fontSize: '16px',
          lineHeight: 1.6,
        },
        '@media (pointer: coarse)': {
          body: { cursor: 'auto' },
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
          html: { scrollBehavior: 'auto' },
        },
        ':focus-visible': {
          outline: `3px solid ${tokens.focusRing}`,
          outlineOffset: '3px',
          borderRadius: '2px',
        },
        ':focus:not(:focus-visible)': { outline: 'none' },
      },
    },
  },
});

export default theme;
