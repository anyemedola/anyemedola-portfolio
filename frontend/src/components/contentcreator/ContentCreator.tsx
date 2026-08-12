'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import LangToggle from '@/components/ui/langtoggle/LangToggle';
import Footer from '@/components/layout/Footer/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useAutoplayVideo } from '@/hooks/useAutoplayVideo';
import * as S from './styles';

interface CarouselPost { pin: string; desc: string; overlay?: string; }
interface VideoItem { title: string; meta: string; }
interface D {
  nav: { back: string };
  hero: { eyebrow: string; handle: string; handle2: string; desc: string; ctaWork: string; ctaContact: string };
  stats: { stat1Num: string; stat1Label: string; stat2Num: string; stat2Label: string; stat3Num: string; stat3Label: string; stat4Num: string; stat4Label: string };
  about: { title: string; p1: string; p2: string; p3: string; p4: string };
  carousel: { eyebrow: string; title: string; posts: CarouselPost[] };
  videos: { eyebrow: string; title: string; items: VideoItem[] };
  brands: { title: string };
  form: { title: string; namePlaceholder: string; emailPlaceholder: string; messagePlaceholder: string; submitLabel: string };
}

const brandLogos = [
  { src: '/airlearn-logo.png', alt: 'Airlearn', width: 1326, height: 321 },
  { src: '/wise-logo.png', alt: 'Wise', width: 500, height: 500 },
  { src: '/a-sciarria-logo.png', alt: 'A Sciarria', width: 69, height: 60 },
];

const carouselRotations = [-7, 4, -3, 6];
const carouselOffsetY = [14, -10, 8, -4];
const carouselDots = ['#E4EAD6', '#F2BEC1', '#B8C897', '#EFA8AC'];
const carouselImages = ['/9.png', '/1.png', '/brasileira.jpg', '/6.png'];

const videoSources = [
  '/ibla_passeio.mp4', '/kiko.mp4', '/receita.mp4', '/portuguese.mp4',
  '/airlearn.mp4', '/a_sciarria.mp4', '/birthday_unboxing.mp4', '/hair_routine.mp4',
];

function CardIcons() {
  return (
    <S.IconRow>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.65-9.5 9-9.5 9z" /></svg>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12c0 4.5-4 8-9 8-1.4 0-2.7-.25-3.9-.7L3 21l1.4-4.2A8.3 8.3 0 0 1 3 12c0-4.5 4-8 9-8s9 3.5 9 8z" /></svg>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h11a3 3 0 0 1 3 3v2" /><path d="M7 4 4 7l3 3" /><path d="M20 17H9a3 3 0 0 1-3-3v-2" /><path d="M17 20l3-3-3-3" /></svg>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M3 11l18-8-8 18-3-7-7-3z" /></svg>
    </S.IconRow>
  );
}

function VideoCard({ src, title, meta, onOpen }: { src: string; title: string; meta: string; onOpen: () => void }) {
  const ref = useAutoplayVideo<HTMLDivElement>();

  if (!src) {
    return (
      <S.VideoFigure className="reveal">
        <S.VideoThumbWrap>
          <S.Placeholder>
            <S.PlaceholderLabel>{title}</S.PlaceholderLabel>
          </S.Placeholder>
        </S.VideoThumbWrap>
        <S.VideoCaption>{title}</S.VideoCaption>
        <S.VideoMeta>{meta}</S.VideoMeta>
      </S.VideoFigure>
    );
  }

  return (
    <S.VideoFigure className="reveal">
      <S.VideoThumbWrap
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label={`Play ${title} with sound`}
        onClick={onOpen}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(); } }}
      >
        <S.VideoEl src={src} muted loop playsInline preload="metadata" aria-hidden="true" />
        <S.PlayButtonWrap aria-hidden="true">
          <S.PlayButton>🔇</S.PlayButton>
        </S.PlayButtonWrap>
      </S.VideoThumbWrap>
      <S.VideoCaption>{title}</S.VideoCaption>
      <S.VideoMeta>{meta}</S.VideoMeta>
    </S.VideoFigure>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function ContentCreator() {
  const { i18n } = useTranslation();
  const d: D = ((i18n.getResourceBundle(i18n.language, 'translations') ??
                 i18n.getResourceBundle('en', 'translations'))?.contentCreator) as D;
  const ref = useScrollReveal();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:contact@anyemedola.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    if (activeVideo === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveVideo(null); };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  if (!d) return null;

  return (
    <>
      <LemonCursor />

      <S.TopBar>
        <S.BackLink href="/">← {d.nav.back}</S.BackLink>
        <LangToggle />
      </S.TopBar>

      <S.PageRoot ref={ref}>

        {/* HERO */}
        <S.HeroHeader aria-labelledby="cc-hero-heading">
          <S.HeroInner>
            <S.HeroGrid>
              <div>
                <S.HeroEyebrow className="reveal">{d.hero.eyebrow}</S.HeroEyebrow>
                <S.HeroHandle className="reveal" id="cc-hero-heading">{d.hero.handle}</S.HeroHandle>
                <S.HeroHandle2 className="reveal">{d.hero.handle2}</S.HeroHandle2>
                <S.HeroBody className="reveal">{d.hero.desc}</S.HeroBody>
                <S.HeroCta className="reveal">
                  <S.HeroCtaPrimary type="button" onClick={() => scrollToId('cc-work')}>{d.hero.ctaWork}</S.HeroCtaPrimary>
                  <S.HeroCtaGhost type="button" onClick={() => scrollToId('creator-form')}>{d.hero.ctaContact}</S.HeroCtaGhost>
                </S.HeroCta>
              </div>

              <S.HeroPortraitWrap aria-hidden="true" className="reveal">
                <S.CoverImage src="/any-selfie.jpg" alt="" fill sizes="(max-width: 900px) 90vw, 40vw" style={{ objectPosition: '48% 25%' }} />
              </S.HeroPortraitWrap>
            </S.HeroGrid>
          </S.HeroInner>

          <S.StatsBar>
            <S.StatItem><S.StatNum>{d.stats.stat1Num}</S.StatNum><S.StatLabel>{d.stats.stat1Label}</S.StatLabel></S.StatItem>
            <S.StatItem><S.StatNum>{d.stats.stat2Num}</S.StatNum><S.StatLabel>{d.stats.stat2Label}</S.StatLabel></S.StatItem>
            <S.StatItem><S.StatNum>{d.stats.stat3Num}</S.StatNum><S.StatLabel>{d.stats.stat3Label}</S.StatLabel></S.StatItem>
            <S.StatItem><S.StatNum>{d.stats.stat4Num}</S.StatNum><S.StatLabel>{d.stats.stat4Label}</S.StatLabel></S.StatItem>
          </S.StatsBar>
        </S.HeroHeader>

        {/* ABOUT */}
        <S.AboutSection id="cc-about" aria-labelledby="cc-about-heading">
          <S.Inner style={{ padding: '64px 40px' }}>
            <S.AboutGrid>
              <S.AboutPhotoWrap className="reveal">
                <S.CoverImage src="/ragusa-night.jpg" alt="Any Medola em Ragusa Ibla, à noite" fill sizes="(max-width: 900px) 90vw, 35vw" />
              </S.AboutPhotoWrap>
              <div>
                <S.SectionTitle className="reveal" id="cc-about-heading" style={{ marginBottom: 18 }}>{d.about.title}</S.SectionTitle>
                <S.AboutBody className="reveal">
                  <p>{d.about.p1}</p>
                  <p>{d.about.p2}</p>
                  <p>{d.about.p3}</p>
                  <p>{d.about.p4}</p>
                </S.AboutBody>
              </div>
            </S.AboutGrid>
          </S.Inner>
        </S.AboutSection>

        {/* SOCIAL POST CAROUSEL */}
        <S.CarouselSection id="cc-work" aria-labelledby="carousel-heading">
          <S.Inner>
            <S.SectionHeaderBlock>
              <S.Eyebrow className="reveal">{d.carousel.eyebrow}</S.Eyebrow>
              <S.SectionTitle className="reveal" id="carousel-heading">{d.carousel.title}</S.SectionTitle>
            </S.SectionHeaderBlock>
            <S.CarouselRow className="reveal">
              {d.carousel.posts.map((post, i) => {
                const img = carouselImages[i];
                return (
                  <S.FanCard
                    key={post.pin}
                    $offset={i !== 0}
                    $rotate={carouselRotations[i]}
                    $translateY={carouselOffsetY[i]}
                    $z={10 + i * 10}
                  >
                    <S.PostCard>
                      <S.PostHeaderRow>
                        <S.PostDot dotColor={carouselDots[i]} />
                        <S.PostHeaderBar />
                        <S.PostMoreDots>···</S.PostMoreDots>
                      </S.PostHeaderRow>
                      <S.PostPhotoWrap>
                        <S.CoverImage src={img} alt={post.desc} fill sizes="200px" />
                        <S.PostScrim />
                        <S.PostHandle>anyinsicily</S.PostHandle>
                      </S.PostPhotoWrap>
                      <S.PostFooter>
                        <S.PostPin pinBg={carouselDots[i]}>{post.pin}</S.PostPin>
                        <S.PostDesc>{post.desc}</S.PostDesc>
                      </S.PostFooter>
                      <S.CardIconsRow><CardIcons /></S.CardIconsRow>
                    </S.PostCard>
                  </S.FanCard>
                );
              })}
            </S.CarouselRow>
          </S.Inner>
        </S.CarouselSection>

        {/* REELS */}
        <S.VideosSection aria-labelledby="videos-heading">
          <S.Inner>
            <S.SectionHeaderBlock>
              <S.Eyebrow className="reveal">{d.videos.eyebrow}</S.Eyebrow>
              <S.SectionTitle className="reveal" id="videos-heading">{d.videos.title}</S.SectionTitle>
            </S.SectionHeaderBlock>
            <S.VideosGrid>
              {d.videos.items.map((video, i) => (
                <VideoCard
                  key={`${video.title}-${i}`}
                  src={videoSources[i]}
                  title={video.title}
                  meta={video.meta}
                  onOpen={() => setActiveVideo(i)}
                />
              ))}
            </S.VideosGrid>
          </S.Inner>
        </S.VideosSection>

        {/* BRAND COLLABORATIONS */}
        <S.BrandsSection id="cc-brands" aria-labelledby="brands-heading">
          <S.Inner>
            <S.BrandsTitle className="reveal" id="brands-heading">{d.brands.title}</S.BrandsTitle>
            <S.BrandLogos className="reveal">
              {brandLogos.map((logo) => (
                <S.BrandLogoSlot key={logo.src}>
                  <S.BrandLogoImg src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                </S.BrandLogoSlot>
              ))}
            </S.BrandLogos>
          </S.Inner>
        </S.BrandsSection>

        {/* LET'S WORK TOGETHER */}
        <S.FormSection id="creator-form" aria-labelledby="cc-form-heading">
          <S.FormTitle className="reveal" id="cc-form-heading">{d.form.title}</S.FormTitle>
          <S.FormFields className="reveal" onSubmit={handleFormSubmit}>
            <S.FormInput
              type="text"
              placeholder={d.form.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <S.FormInput
              type="email"
              placeholder={d.form.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <S.FormTextarea
              placeholder={d.form.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <S.FormSubmit type="submit">{d.form.submitLabel}</S.FormSubmit>
          </S.FormFields>
        </S.FormSection>

      </S.PageRoot>

      <Footer variant="creator" />

      {activeVideo !== null && (
        <S.LightboxOverlay onClick={() => setActiveVideo(null)}>
          <S.LightboxContent onClick={(e) => e.stopPropagation()}>
            <S.LightboxClose type="button" aria-label="Close video" onClick={() => setActiveVideo(null)}>✕</S.LightboxClose>
            <S.LightboxVideo
              key={videoSources[activeVideo]}
              src={videoSources[activeVideo]}
              controls
              autoPlay
              playsInline
            />
            <S.LightboxCaption>{d.videos.items[activeVideo].title}</S.LightboxCaption>
            <S.LightboxMeta>{d.videos.items[activeVideo].meta}</S.LightboxMeta>
          </S.LightboxContent>
        </S.LightboxOverlay>
      )}
    </>
  );
}
