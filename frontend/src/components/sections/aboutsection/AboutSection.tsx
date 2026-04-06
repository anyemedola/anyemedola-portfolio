'use client';

import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import T from '@/components/ui/t/T';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const AboutRoot = styled('section')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '80vh',
  alignItems: 'center',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

const ImageCol = styled('div')({
  position: 'relative',
  height: '100%',
  minHeight: 600,
  overflow: 'hidden',
  '& img': {
    transition: 'transform 0.6s ease',
  },
  '&:hover img': {
    transform: 'scale(1.03)',
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 80,
    height: 80,
    background: tokens.pink,
    pointerEvents: 'none',
  },
  '@media (max-width: 900px)': {
    minHeight: 280,
  },
});

const Content = styled('div')({
  padding: '80px 72px 80px 64px',
  '@media (max-width: 900px)': {
    padding: '48px 24px',
  },
});

const SectionLabel = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: tokens.pink,
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  '&::before': {
    content: "''",
    display: 'block',
    width: 32,
    height: 1.5,
    background: tokens.pink,
    flexShrink: 0,
  },
});

const SectionTitle = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(48px, 5vw, 72px)',
  lineHeight: 0.9,
  letterSpacing: '0.02em',
  color: tokens.ink,
  marginBottom: 32,
  '& em': {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontWeight: 300,
    color: tokens.mint,
  },
});

const AboutText = styled('p')({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 19,
  fontWeight: 300,
  lineHeight: 1.7,
  color: '#3D3830',
  marginBottom: 16,
  '& strong': { fontWeight: 600, color: tokens.ink },
});

const Stats = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 24,
  marginTop: 48,
  paddingTop: 40,
  borderTop: `1px solid ${tokens.border}`,
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const StatNum = styled('div')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 52,
  lineHeight: 1,
  color: tokens.ink,
  '& span': { color: tokens.pink },
});

const StatLabel = styled('div')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: tokens.warmGray,
  marginTop: 4,
});

export default function AboutSection() {
  const ref = useScrollReveal();
  const { dict } = useLang();

  return (
    <AboutRoot id="about" aria-labelledby="about-heading" ref={ref}>
      <ImageCol>
        <Image
          src="/any_pink_smile.jpg"
          alt="Any Medola, smiling with a teal top, arms crossed"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </ImageCol>
      <Content>
        <SectionLabel className="reveal" aria-hidden="true">{dict.about.label}</SectionLabel>
        <SectionTitle className="reveal" id="about-heading">
          <span>{dict.about.titleLine}<br /></span><em>{dict.about.titleEm}</em>
        </SectionTitle>
        <AboutText className="reveal reveal-delay-1">
          <T
            en={<>I started in tech over <strong>9 years ago</strong>, and for the last 5 I&apos;ve focused entirely on front-end — the layer where logic becomes experience. Born in Brazil, currently living in <strong>Milan, Italy</strong>, working with teams across Europe and LATAM.</>}
            pt={<>Comecei na tecnologia há mais de <strong>9 anos</strong>, e nos últimos 5 foquei completamente no front-end — a camada onde a lógica se torna experiência. Nascida no Brasil, atualmente vivendo em <strong>Milão, Itália</strong>.</>}
          />
        </AboutText>
        <AboutText className="reveal reveal-delay-2">
          <T
            en={<>Today I lead front-end at <strong>Capgemini</strong>, building a streaming platform for the Portuguese Ministry of Health. I also act as UI/UX designer, creating Figma prototypes and turning them into pixel-perfect interfaces.</>}
            pt={<>Hoje lidero o front-end na <strong>Capgemini</strong>, desenvolvendo uma plataforma de streaming para o Ministério da Saúde de Portugal. Também atuo como designer UI/UX, criando protótipos no Figma e transformando-os em interfaces pixel-perfect.</>}
          />
        </AboutText>
        <Stats className="reveal reveal-delay-3">
          <div>
            <StatNum>9<span>+</span></StatNum>
            <StatLabel>{dict.about.stat1}</StatLabel>
          </div>
          <div>
            <StatNum>5<span>+</span></StatNum>
            <StatLabel>{dict.about.stat2}</StatLabel>
          </div>
          <div>
            <StatNum>3<span>+</span></StatNum>
            <StatLabel>{dict.about.stat3}</StatLabel>
          </div>
        </Stats>
      </Content>
    </AboutRoot>
  );
}
