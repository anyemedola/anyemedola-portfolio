'use client';

import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { useTranslation } from 'react-i18next';

const Footer = styled('footer')({
  borderTop: `1px solid ${tokens.border}`,
  marginTop: 40,
  background: tokens.creamLight,
});

const Inner = styled('div')({
  maxWidth: 680,
  margin: '0 auto',
  padding: '48px 32px',
  textAlign: 'center',
  '@media (max-width: 600px)': { padding: '40px 24px' },
});

const FooterP = styled('p')({
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  color: tokens.warmBrownLight,
  margin: '0 0 22px',
});

const BackBtn = styled(Link)({
  display: 'inline-block',
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 15,
  fontWeight: 600,
  padding: '13px 26px',
  borderRadius: 999,
  border: `1px solid ${tokens.ink}`,
  color: tokens.ink,
  textDecoration: 'none',
  transition: 'background .2s, color .2s',
  '&:hover': { background: tokens.ink, color: tokens.cream },
});

export default function PostPageFooter() {
  const { t } = useTranslation();

  return (
    <Footer>
      <Inner>
        <FooterP>O primeiro de muitos. Mais ensaios sobre código, recomeços e a coragem de ser inteira — em breve.</FooterP>
        <BackBtn href="/#escrita">← {t('post.back')}</BackBtn>
      </Inner>
    </Footer>
  );
}
