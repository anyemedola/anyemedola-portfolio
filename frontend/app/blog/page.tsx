'use client';

import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { posts } from '@/data/posts';
import { useTranslation } from 'react-i18next';
import T from '@/components/ui/t/T';
import LemonCursor from '@/components/ui/cursor/lemonCursor';

const Root = styled('div')({
  background: tokens.cream,
  color: tokens.ink,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  minHeight: '100vh',
});

const Nav = styled('nav')({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backdropFilter: 'blur(14px)',
  background: 'rgba(251,241,230,.82)',
  borderBottom: `1px solid ${tokens.border}`,
});

const NavInner = styled('div')({
  maxWidth: 920,
  margin: '0 auto',
  padding: '0 32px',
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 600px)': { padding: '0 22px' },
});

const BackLink = styled(Link)({
  fontSize: 14,
  fontWeight: 500,
  color: tokens.warmBrown,
  textDecoration: 'none',
  transition: 'color .2s',
  '&:hover': { color: tokens.rose },
});

const NavLogo = styled(Link)({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 700,
  fontSize: 19,
  textDecoration: 'none',
  color: tokens.ink,
  '& em': { fontStyle: 'italic', color: tokens.rose },
});

const PageHeader = styled('header')({
  maxWidth: 920,
  margin: '0 auto',
  padding: '84px 32px 48px',
  '@media (max-width: 600px)': { padding: '56px 22px 40px' },
});

const Eyebrow = styled('div')({
  fontSize: 13,
  letterSpacing: '.3em',
  textTransform: 'uppercase',
  color: tokens.rose,
  fontWeight: 700,
  marginBottom: 22,
});

const PageTitle = styled('h1')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 900,
  fontSize: 'clamp(52px, 9vw, 104px)',
  lineHeight: 0.92,
  letterSpacing: '-.02em',
  margin: 0,
  color: tokens.ink,
});

const PageLead = styled('p')({
  fontSize: 19,
  lineHeight: 1.55,
  color: tokens.warmBrown,
  maxWidth: 540,
  margin: '26px 0 0',
});

const FeatSection = styled('section')({
  maxWidth: 920,
  margin: '0 auto',
  padding: '0 32px 16px',
  '@media (max-width: 600px)': { padding: '0 22px 16px' },
});

const FeatCard = styled(Link)({
  display: 'grid',
  gridTemplateColumns: '1.05fr .95fr',
  background: tokens.creamLight,
  border: `1px solid ${tokens.borderLight}`,
  borderRadius: 24,
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'transform .4s, box-shadow .4s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 34px 60px -38px rgba(120,60,50,.5)',
  },
  '&:hover .featimg': { transform: 'scale(1.05)' },
  '@media (max-width: 760px)': { gridTemplateColumns: '1fr' },
});

const FeatContent = styled('div')({
  padding: '44px 46px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media (max-width: 600px)': { padding: '32px 28px' },
});

const FeatMeta = styled('div')({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  marginBottom: 18,
});

const FeatTag = styled('span')({
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: tokens.ink,
  background: tokens.gold,
  padding: '5px 11px',
  borderRadius: 999,
});

const FeatDate = styled('span')({
  fontSize: 13,
  color: tokens.warmBrownLight,
});

const FeatTitle = styled('h2')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontWeight: 900,
  fontSize: 'clamp(40px, 5vw, 60px)',
  lineHeight: 0.96,
  margin: '0 0 16px',
  color: tokens.ink,
});

const FeatExcerpt = styled('p')({
  fontSize: 16,
  lineHeight: 1.6,
  color: tokens.warmBrown,
  margin: '0 0 22px',
});

const FeatCta = styled('span')({
  fontSize: 15,
  fontWeight: 600,
  color: tokens.ink,
  borderBottom: `2px solid ${tokens.gold}`,
  paddingBottom: 3,
  alignSelf: 'flex-start',
});

const FeatImgWrap = styled('div')({
  overflow: 'hidden',
  minHeight: 320,
  position: 'relative',
  '& img': { transition: 'transform .6s' },
  '@media (max-width: 760px)': { minHeight: 220, height: 240 },
});

const UpcomingSection = styled('section')({
  maxWidth: 920,
  margin: '0 auto',
  padding: '40px 32px 100px',
  '@media (max-width: 600px)': { padding: '32px 22px 80px' },
});

const SectionDivider = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  marginBottom: 8,
});

const SectionLabel = styled('span')({
  fontSize: 12,
  letterSpacing: '.24em',
  textTransform: 'uppercase',
  color: tokens.warmBrownLight,
  fontWeight: 700,
  whiteSpace: 'nowrap',
});

const DividerLine = styled('span')({
  flex: 1,
  height: 1,
  background: '#E2CDB8',
});

const PostRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '150px 1fr 40px',
  gap: 24,
  alignItems: 'center',
  padding: '26px 14px',
  borderBottom: `1px solid ${tokens.border}`,
  borderRadius: 12,
  transition: 'background .3s',
  cursor: 'default',
  '&:hover': { background: tokens.creamLight },
  '&:hover .post-arrow': { transform: 'translateX(4px)', color: tokens.rose },
  '@media (max-width: 600px)': { gridTemplateColumns: '1fr', gap: 8 },
});

const PostMeta = styled('div')({
  '@media (max-width: 600px)': { order: -1 },
});

const PostPeriod = styled('div')({
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontSize: 15,
  color: tokens.goldDeep,
  fontWeight: 700,
});

const PostCategory = styled('div')({
  fontSize: 13,
  color: tokens.warmBrownLight,
  marginTop: 2,
});

const PostContent = styled('div')({});

const PostTitle = styled('h3')({
  fontSize: 22,
  margin: '0 0 6px',
  fontWeight: 700,
  color: tokens.ink,
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
});

const PostDesc = styled('p')({
  fontSize: 15,
  color: '#7A635C',
  lineHeight: 1.5,
  margin: 0,
});

const PostArrow = styled('span')({
  fontSize: 22,
  color: '#D9C3AE',
  textAlign: 'right',
  transition: 'transform .3s, color .3s',
});

const ClosingText = styled('p')({
  textAlign: 'center',
  fontSize: 15,
  color: tokens.warmBrownLight,
  margin: '48px 0 0',
  fontFamily: "'Bodoni Moda', var(--font-bodoni), serif",
  fontStyle: 'italic',
});

const upcomingPosts = [
  { period: 'Próximo', category: 'Crônica · expat', title: 'Dois idiomas, uma casa', desc: 'Sobre criar conteúdo em inglês e italiano, e o que é construir pertencimento numa ilha que não te viu nascer.' },
  { period: 'Próximo', category: 'Ensaio · design', title: 'O que o frontend me ensinou sobre pessoas', desc: 'Como anos olhando interfaces viraram uma sensibilidade para o que as pessoas realmente querem ver — e sentir.' },
  { period: 'Próximo', category: 'Guia · viagem', title: 'Mala de mão', desc: 'As dicas que eu compartilho com quem viaja comigo: o que levar, o que deixar, e como colecionar pôr do sol sem pressa.' },
];

export default function BlogListingPage() {
  const { t } = useTranslation();

  const featured = posts.find((p) => p.slug === 'inteira');

  return (
    <Root>
      <LemonCursor />

      <Nav aria-label="Blog navigation">
        <NavInner>
          <BackLink href="/#escrita">← {t('post.back')}</BackLink>
          <NavLogo href="/">Any <em>Medola</em></NavLogo>
        </NavInner>
      </Nav>

      <PageHeader>
        <Eyebrow>O Blog</Eyebrow>
        <PageTitle>Escritos</PageTitle>
        <PageLead>Ensaios sobre código, recomeços, viagens e a coragem de ser inteira. Palavras que não cabem num README.</PageLead>
      </PageHeader>

      {featured && (
        <FeatSection aria-label="Destaque">
          <FeatCard href={`/blog/${featured.slug}`}>
            <FeatContent>
              <FeatMeta>
                <FeatTag>{featured.primaryTag}</FeatTag>
                <FeatDate>{featured.date} · {featured.readTime} min</FeatDate>
              </FeatMeta>
              <FeatTitle>
                <T en={featured.title.en} pt={featured.title.pt} it={featured.title.it ?? featured.title.en} />
              </FeatTitle>
              <FeatExcerpt>
                <T en={featured.excerpt.en} pt={featured.excerpt.pt} it={featured.excerpt.it ?? featured.excerpt.en} />
              </FeatExcerpt>
              <FeatCta>{t('writing.featCta')}</FeatCta>
            </FeatContent>
            <FeatImgWrap>
              <Image
                className="featimg"
                src="/sunset-sea.jpg"
                alt="Inteira"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 760px) 100vw, 45vw"
              />
            </FeatImgWrap>
          </FeatCard>
        </FeatSection>
      )}

      <UpcomingSection aria-label="Em breve">
        <SectionDivider>
          <SectionLabel>Em breve</SectionLabel>
          <DividerLine aria-hidden="true" />
        </SectionDivider>

        {upcomingPosts.map((post, i) => (
          <PostRow key={i}>
            <PostMeta className="post-meta">
              <PostPeriod>{post.period}</PostPeriod>
              <PostCategory>{post.category}</PostCategory>
            </PostMeta>
            <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostDesc>{post.desc}</PostDesc>
            </PostContent>
            <PostArrow className="post-arrow" aria-hidden="true">→</PostArrow>
          </PostRow>
        ))}

        <ClosingText>A escrita é uma viagem que nunca termina. Volte sempre. ✦</ClosingText>
      </UpcomingSection>
    </Root>
  );
}
