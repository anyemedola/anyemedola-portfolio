import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

const FONT_BODY = "'Hanken Grotesk', var(--font-hanken), sans-serif";

const primaryButtonBase = {
  fontFamily: FONT_BODY,
  fontWeight: 700,
  fontSize: 14.5,
  padding: '14px 26px',
  borderRadius: 999,
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  background: tokens.gold,
  color: '#fff',
  boxShadow: '0 12px 30px rgba(26,97,93,0.32)',
  transition: 'background .25s, box-shadow .25s',
  '&:hover': {
    background: tokens.goldDeep,
    boxShadow: '0 8px 20px rgba(26,97,93,0.4)',
  },
} as const;

/** Filled teal pill CTA — rendered as a `<button>` (clicks/actions). */
export const ButtonPrimary = styled('button')(primaryButtonBase);

/** Filled teal pill CTA — rendered as an `<a>` (navigation). */
export const ButtonPrimaryLink = styled('a')(primaryButtonBase);

/** Semi-transparent bordered pill — secondary action paired with ButtonPrimary. */
export const ButtonGhost = styled('button')({
  fontFamily: FONT_BODY,
  fontWeight: 700,
  fontSize: 14.5,
  padding: '14px 26px',
  borderRadius: 999,
  cursor: 'pointer',
  background: 'rgba(255,255,255,0.6)',
  border: '1px solid rgba(26,97,93,0.3)',
  color: tokens.gold,
  transition: 'background .25s, color .25s',
  '&:hover': {
    background: 'rgba(255,255,255,0.85)',
    color: tokens.goldDeep,
  },
});

/**
 * Small bordered pill link — secondary nav-style link (e.g. "switch version" links).
 * Exported as a plain style recipe (rather than a fixed `styled('a')`) so pages that
 * need Next's `Link` for internal routing can do `styled(Link)(pillSecondaryBase)`.
 */
export const pillSecondaryBase = {
  fontFamily: FONT_BODY,
  fontSize: 13,
  fontWeight: 600,
  color: tokens.gold,
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: 999,
  border: '1px solid rgba(26,97,93,0.25)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  transition: 'background .2s, border-color .2s',
  '&:hover': {
    background: 'rgba(26,97,93,0.07)',
    borderColor: 'rgba(26,97,93,0.5)',
  },
} as const;

export const ButtonPillSecondary = styled('a')(pillSecondaryBase);
