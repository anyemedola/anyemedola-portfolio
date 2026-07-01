import { createTheme } from '@mui/material/styles';

export const tokens = {
  // Sunset pinks (from favicon)
  rose: '#FF7C95',
  roseDeep: '#B3294A',
  roseMid: '#FF8CA3',
  // Golds
  gold: '#DDA94A',
  goldLight: '#F6D79A',
  goldDeep: '#C28A2C',
  // Creams
  cream: '#FBF1E6',
  creamLight: '#FFFBF5',
  // Dark
  ink: '#2E211F',
  warmBrown: '#5A463F',
  warmBrownMid: '#6B554F',
  warmBrownLight: '#9C8478',
  // Borders
  border: '#EBDAC9',
  borderLight: '#ECDBCB',
  borderForm: '#F3E3D3',
  focusRing: '#2E211F',
};

declare module '@mui/material/styles' {
  interface Palette {
    rose: { main: string; mid: string };
    gold: { main: string; light: string; deep: string };
    cream: { main: string; light: string };
    inkPalette: { main: string };
    warmBrown: { main: string; mid: string; light: string };
  }
  interface PaletteOptions {
    rose?: { main: string; mid: string };
    gold?: { main: string; light: string; deep: string };
    cream?: { main: string; light: string };
    inkPalette?: { main: string };
    warmBrown?: { main: string; mid: string; light: string };
  }
}

const theme = createTheme({
  palette: {
    primary: { main: tokens.rose },
    secondary: { main: tokens.gold },
    background: { default: tokens.cream },
    text: { primary: tokens.ink, secondary: tokens.warmBrownMid },
    rose: { main: tokens.rose, mid: tokens.roseMid },
    gold: { main: tokens.gold, light: tokens.goldLight, deep: tokens.goldDeep },
    cream: { main: tokens.cream, light: tokens.creamLight },
    inkPalette: { main: tokens.ink },
    warmBrown: { main: tokens.warmBrown, mid: tokens.warmBrownMid, light: tokens.warmBrownLight },
  },
  typography: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    h1: { fontFamily: "'Bodoni Moda', serif" },
    h2: { fontFamily: "'Bodoni Moda', serif" },
    h3: { fontFamily: "'Bodoni Moda', serif" },
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
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 300,
          overflowX: 'hidden',
          cursor: 'none',
          fontSize: '16px',
          lineHeight: 1.6,
        },
        '@media (pointer: coarse)': {
          body: { cursor: 'auto' },
        },
        '::selection': { background: tokens.roseMid, color: tokens.ink },
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
        a: { textDecoration: 'none', color: 'inherit' },
      },
    },
  },
});

export default theme;
