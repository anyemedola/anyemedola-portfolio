'use client';

import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import T from '@/components/ui/t/T';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ContactRoot = styled('section')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '60vh',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

const Left = styled('div')({
  background: tokens.ink,
  padding: '80px 72px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media (max-width: 900px)': {
    padding: '56px 24px',
  },
});

const Title = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(56px, 6vw, 96px)',
  lineHeight: 0.88,
  color: tokens.cream,
  marginBottom: 32,
  '& em': {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    color: tokens.mintOnDark,
    fontWeight: 300,
  },
});

const ContactText = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 19,
  fontWeight: 300,
  fontStyle: 'italic',
  color: 'rgba(249,245,238,0.7)',
  lineHeight: 1.65,
  marginBottom: 48,
});

const Links = styled('address')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontStyle: 'normal',
});

const ContactLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  textDecoration: 'none',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  color: tokens.cream,
  opacity: 0.7,
  transition: 'opacity 0.2s, gap 0.2s',
  padding: '12px 0',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  minHeight: 44,
  '&:hover': { opacity: 1, gap: 24 },
});

const LinkIcon = styled('span')({
  color: tokens.mintOnDark,
  fontSize: 16,
  flexShrink: 0,
});

const Right = styled('div')({
  background: tokens.pink,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 900px)': {
    minHeight: 260,
  },
});

const Overlay = styled('div')({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to bottom, ${tokens.pink} 0%, transparent 50%)`,
  zIndex: 1,
  pointerEvents: 'none',
});

const WatermarkText = styled('div')({
  position: 'absolute',
  bottom: 40,
  left: 40,
  zIndex: 2,
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 88,
  lineHeight: 0.85,
  color: 'rgba(255,255,255,0.2)',
  pointerEvents: 'none',
});

export default function ContactSection() {
  const ref = useScrollReveal();
  const { dict } = useLang();

  return (
    <ContactRoot id="contact" aria-labelledby="contact-heading" ref={ref}>
      <Left>
        <Title className="reveal" id="contact-heading">
          <T
            en={<>Let&apos;s<br />build<br /><em>together</em></>}
            pt={<>Vamos<br />construir<br /><em>juntos</em></>}
          />
        </Title>
        <ContactText className="reveal">{dict.contact.text}</ContactText>
        <Links className="reveal" aria-label="Contact information">
          <ContactLink href="mailto:any@aeait.com">
            <LinkIcon aria-hidden="true">✉</LinkIcon>any@aeait.com
          </ContactLink>
          <ContactLink href="https://linkedin.com/in/dev-anyemedola" target="_blank" rel="noopener noreferrer">
            <LinkIcon aria-hidden="true">in</LinkIcon>linkedin.com/in/dev-anyemedola
          </ContactLink>
          <ContactLink href="https://github.com/anyemedola" target="_blank" rel="noopener noreferrer">
            <LinkIcon aria-hidden="true">⌥</LinkIcon>github.com/anyemedola
          </ContactLink>
          <ContactLink href="https://anyemedola.com.br" target="_blank" rel="noopener noreferrer">
            <LinkIcon aria-hidden="true">◎</LinkIcon>anyemedola.com.br
          </ContactLink>
          <ContactLink href="tel:+393515869527">
            <LinkIcon aria-hidden="true">✆</LinkIcon>+39 351 586 9527
          </ContactLink>
        </Links>
      </Left>
      <Right aria-hidden="true">
        <Image
          src="/any_pink_fullbody.jpg"
          alt=""
          role="presentation"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.6, mixBlendMode: 'luminosity' }}
        />
        <Overlay />
        <WatermarkText>ANY</WatermarkText>
      </Right>
    </ContactRoot>
  );
}
