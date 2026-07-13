'use client';

import { useTranslation } from 'react-i18next';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import LangToggle from '@/components/ui/langtoggle/LangToggle';
import Footer from '@/components/layout/Footer/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

interface ProcessStep { num: string; title: string; items: string[]; }
interface CarouselPost { title: string; pin: string; desc?: string; }
interface VideoItem { title: string; meta: string; }
interface D {
  nav: { back: string };
  hero: {
    label1: string; label2: string; label3: string; heading: string;
    p1: string; p2: string; stat1: string; stat2: string; stat3: string; cta: string;
  };
  process: {
    eyebrow: string; title: string; lead: string; tags: string[]; steps: ProcessStep[];
  };
  carousel: { eyebrow: string; title: string; posts: CarouselPost[]; };
  videos: { eyebrow: string; title: string; items: VideoItem[]; };
  gallery: { eyebrow: string; title: string; quoteScript: string; quoteMain: string; };
  apps: { eyebrow: string; title: string; };
}

const appTools = [
  { name: 'Rome2Rio', bg: '#3D6FE0', icon: 'pin' },
  { name: 'Wikiloc', bg: '#3E7A3F', icon: 'trail' },
  { name: 'Trenitalia', bg: '#C8102E', icon: 'train' },
  { name: 'Glovo', bg: '#FFC244', icon: 'bag', stroke: S.INK },
  { name: 'Deliveroo', bg: '#00CCBC', icon: 'scooter', stroke: S.INK },
  { name: 'Ragusa Bus', bg: S.TEAL, icon: 'bus' },
  { name: 'Moovit', bg: S.BLOSSOM, icon: 'compass', stroke: S.INK },
  { name: 'Airbnb', bg: S.SAGE, icon: 'home', stroke: S.INK },
] as const;

const carouselRotations = [-7, 4, -3, 6];
const carouselOffsetY = [14, -10, 8, -4];
const carouselDots = ['#E4EAD6', '#F2BEC1', '#B8C897', '#EFA8AC'];
const carouselImages = ['/travel-content-photo-2.jpg', null, null, '/travel-content-photo-1.jpg'];

const galleryCells = [
  { img: '/travel-content-photo-2.jpg', quote: false },
  { img: '/expat.jpeg', quote: false },
  { img: null, quote: true },
  { img: null, quote: false },
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

function AppIcon({ icon, stroke = '#fff' }: { icon: string; stroke?: string }) {
  const props = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (icon) {
    case 'pin': return <svg {...props}><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" /><circle cx="12" cy="9" r="2.4" /></svg>;
    case 'trail': return <svg {...props}><path d="M3 18c3-1 4-3 5-5s1-5 4-6 5 2 4 5-4 3-6 4-4 1-7 2z" /><circle cx="16" cy="6" r="2" /></svg>;
    case 'train': return <svg {...props}><rect x="5" y="4" width="14" height="13" rx="3" /><path d="M8 20h8M9 17v3M15 17v3" /><circle cx="8.5" cy="13.5" r="0.6" fill={stroke} /><circle cx="15.5" cy="13.5" r="0.6" fill={stroke} /></svg>;
    case 'bag': return <svg {...props}><path d="M6 3v4M18 3v4M4 8h16l-1.4 11.2A2 2 0 0 1 16.6 21H7.4a2 2 0 0 1-2-1.8L4 8z" /></svg>;
    case 'scooter': return <svg {...props}><circle cx="6" cy="18" r="2.2" /><circle cx="18" cy="18" r="2.2" /><path d="M6 18h9l3-8h-5L10 5H6" /></svg>;
    case 'bus': return <svg {...props}><rect x="3" y="6" width="18" height="10" rx="2.5" /><path d="M3 11h18M7 20l1-2M17 20l-1-2" /><circle cx="7.5" cy="8.5" r="0.6" fill={stroke} /></svg>;
    case 'compass': return <svg {...props}><path d="M4 12a8 8 0 1 1 3 6.2" /><path d="M4 18v-4h4" /></svg>;
    default: return <svg {...props}><path d="M4 20V10l8-6 8 6v10" /><path d="M9 20v-6h6v6" /></svg>;
  }
}

function PlaceholderSlot({ label }: { label: string }) {
  return (
    <S.Placeholder>
      <S.PlaceholderLabel>{label}</S.PlaceholderLabel>
    </S.Placeholder>
  );
}

export default function TravelContent() {
  const { i18n } = useTranslation();
  const d: D = ((i18n.getResourceBundle(i18n.language, 'translations') ??
                 i18n.getResourceBundle('en', 'translations'))?.travelContent) as D;
  const ref = useScrollReveal();

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
        <S.HeroHeader aria-labelledby="travel-hero-heading">
          <S.HeroInner>
            <S.HeroGrid>
              <div>
                <S.HeroLabelRow>
                  <S.HeroLabel>{d.hero.label1}</S.HeroLabel>
                  <S.HeroLabel>{d.hero.label2}</S.HeroLabel>
                  <S.HeroLabel>{d.hero.label3}</S.HeroLabel>
                </S.HeroLabelRow>

                <S.HeroTitle className="reveal" id="travel-hero-heading">{d.hero.heading}</S.HeroTitle>
                <S.HeroBody className="reveal">{d.hero.p1}</S.HeroBody>
                <S.HeroBody className="reveal">{d.hero.p2}</S.HeroBody>

                <S.HeroStatsRow className="reveal">
                  <S.HeroStatChip>{d.hero.stat1}</S.HeroStatChip>
                  <S.HeroStatChip>{d.hero.stat2}</S.HeroStatChip>
                  <S.HeroStatChip>{d.hero.stat3}</S.HeroStatChip>
                </S.HeroStatsRow>

                <S.HeroCta
                  className="reveal"
                  type="button"
                  onClick={() => document.getElementById('toolbox-process')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {d.hero.cta}
                  <svg width="24" height="13" viewBox="0 0 26 14" fill="none" stroke="#fff" strokeWidth="1.6"><path d="M0 7h24M18 1l6 6-6 6" /></svg>
                </S.HeroCta>
              </div>

              <S.HeroPhotos aria-hidden="true" className="reveal">
                <S.HeroPhotoMain
                  src="/travel-content-photo-1.jpg"
                  alt="Any em Ragusa Ibla ao pôr do sol"
                  rotate={-4}
                />
                <S.HeroPhotoSecondary
                  src="/travel-content-photo-2.jpg"
                  alt="Any assistindo ao pôr do sol no mar"
                  rotate={4}
                />
              </S.HeroPhotos>
            </S.HeroGrid>
          </S.HeroInner>
        </S.HeroHeader>

        {/* CONTENT & PROCESS */}
        <S.ProcessSection id="toolbox-process" aria-labelledby="process-heading">
          <S.ProcessInner>
            <S.ProcessGrid>
              <S.ProcessSticky>
                <S.Eyebrow className="reveal">{d.process.eyebrow}</S.Eyebrow>
                <S.SectionTitle className="reveal" id="process-heading">{d.process.title}</S.SectionTitle>
                <S.Lead className="reveal">{d.process.lead}</S.Lead>
                <S.ProcessTagRow>
                  {d.process.tags.map((tag) => <S.ProcessTag key={tag}>{tag}</S.ProcessTag>)}
                </S.ProcessTagRow>
              </S.ProcessSticky>
              <S.StepList>
                {d.process.steps.map((step) => (
                  <S.StepCard key={step.num} className="reveal">
                    <S.StepNumWrap>
                      <S.StepLabel>Step</S.StepLabel>
                      <S.StepNum>{step.num}</S.StepNum>
                    </S.StepNumWrap>
                    <div>
                      <S.StepTitle>{step.title}</S.StepTitle>
                      <S.StepItems>
                        {step.items.map((item, i) => <li key={i}>{item}</li>)}
                      </S.StepItems>
                    </div>
                  </S.StepCard>
                ))}
              </S.StepList>
            </S.ProcessGrid>
          </S.ProcessInner>
        </S.ProcessSection>

        {/* SOCIAL POST CAROUSEL */}
        <S.CarouselSection aria-labelledby="carousel-heading">
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
                        {img ? (
                          <S.CoverImage src={img} alt={post.title.replace('<br>', ' ')} fill sizes="200px" />
                        ) : (
                          <PlaceholderSlot label="Post photo" />
                        )}
                        <S.PostScrim />
                        <S.PostHandle>anyinsicily</S.PostHandle>
                        <S.PostCaption dangerouslySetInnerHTML={{ __html: post.title }} />
                      </S.PostPhotoWrap>
                      <S.PostFooter>
                        <S.PostPin pinBg={carouselDots[i]}>{post.pin}</S.PostPin>
                        {post.desc && <S.PostDesc>{post.desc}</S.PostDesc>}
                      </S.PostFooter>
                      <S.CardIconsRow><CardIcons /></S.CardIconsRow>
                    </S.PostCard>
                  </S.FanCard>
                );
              })}
            </S.CarouselRow>
          </S.Inner>
        </S.CarouselSection>

        {/* FEATURED VIDEOS */}
        <S.VideosSection aria-labelledby="videos-heading">
          <S.Inner>
            <S.SectionHeaderBlock>
              <S.Eyebrow className="reveal">{d.videos.eyebrow}</S.Eyebrow>
              <S.SectionTitle className="reveal" id="videos-heading">{d.videos.title}</S.SectionTitle>
            </S.SectionHeaderBlock>
            <S.VideosGrid>
              {d.videos.items.map((video) => (
                <S.VideoFigure key={video.title} className="reveal">
                  <S.VideoThumbWrap>
                    <PlaceholderSlot label="Reel cover" />
                    <S.PlayButtonWrap>
                      <S.PlayButton>▶</S.PlayButton>
                    </S.PlayButtonWrap>
                  </S.VideoThumbWrap>
                  <S.VideoCaption>{video.title}</S.VideoCaption>
                  <S.VideoMeta>{video.meta}</S.VideoMeta>
                </S.VideoFigure>
              ))}
            </S.VideosGrid>
          </S.Inner>
        </S.VideosSection>

        {/* PHOTO GALLERY */}
        <S.GallerySection aria-labelledby="gallery-heading">
          <S.Inner>
            <S.SectionHeaderBlock>
              <S.Eyebrow className="reveal">{d.gallery.eyebrow}</S.Eyebrow>
              <S.SectionTitle className="reveal" id="gallery-heading">{d.gallery.title}</S.SectionTitle>
            </S.SectionHeaderBlock>
            <S.GalleryRow className="reveal">
              {galleryCells.map((cell, i) => (
                <S.GalleryCard key={i} $offset={i !== 0}>
                  <S.GalleryHeaderRow>
                    <S.GalleryDot />
                    <S.PostHeaderBar />
                    <S.PostMoreDots>···</S.PostMoreDots>
                  </S.GalleryHeaderRow>
                  <S.GalleryPhotoWrap>
                    {cell.quote ? (
                      <>
                        <S.QuoteTextWrap>
                          <S.QuoteScript>{d.gallery.quoteScript}</S.QuoteScript>
                          <S.QuoteMain dangerouslySetInnerHTML={{ __html: d.gallery.quoteMain }} />
                        </S.QuoteTextWrap>
                        <S.QuotePhotoWrap>
                          <S.CoverImage src="/travel-content-photo-1.jpg" alt="Any nas ruas de Ragusa Ibla" fill sizes="200px" />
                        </S.QuotePhotoWrap>
                      </>
                    ) : cell.img ? (
                      <S.CoverImage src={cell.img} alt="Foto da Sicília" fill sizes="200px" />
                    ) : (
                      <PlaceholderSlot label="Photo" />
                    )}
                  </S.GalleryPhotoWrap>
                  <S.GalleryFooter><CardIcons /></S.GalleryFooter>
                </S.GalleryCard>
              ))}
            </S.GalleryRow>
          </S.Inner>
        </S.GallerySection>

        {/* APP TIPS */}
        <S.AppsSection aria-labelledby="apps-heading">
          <S.Inner>
            <S.SectionHeaderBlock>
              <S.Eyebrow className="reveal">{d.apps.eyebrow}</S.Eyebrow>
              <S.SectionTitle className="reveal" id="apps-heading">{d.apps.title}</S.SectionTitle>
            </S.SectionHeaderBlock>
            <S.PhoneFrameWrap className="reveal">
              <S.PhoneFrame>
                <S.PhoneScreen>
                  <S.PhoneNotch />
                  <S.AppGrid>
                    {appTools.map((tool) => (
                      <S.AppCell key={tool.name}>
                        <S.AppIconWrap iconBg={tool.bg}>
                          <AppIcon icon={tool.icon} stroke={'stroke' in tool ? tool.stroke : '#fff'} />
                        </S.AppIconWrap>
                        <S.AppName>{tool.name}</S.AppName>
                      </S.AppCell>
                    ))}
                  </S.AppGrid>
                </S.PhoneScreen>
              </S.PhoneFrame>
            </S.PhoneFrameWrap>
          </S.Inner>
        </S.AppsSection>

      </S.PageRoot>

      <Footer variant="travel" />
    </>
  );
}
