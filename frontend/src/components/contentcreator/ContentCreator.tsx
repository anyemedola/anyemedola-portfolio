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
interface PackageItem { name: string; tagline: string; price: string; features: string[]; featured: boolean; }
interface ProcessStep { number: string; title: string; desc: string; }
interface ScriptItem { tag: string; title: string; quote: string; list: string[]; conclusion: string; format: string; tags: string; }
interface ScriptsChip { title: string; desc: string; }
interface D {
  nav: { back: string };
  hero: { eyebrow: string; handle: string; handle2: string; desc: string; desc2: string; ctaWork: string; ctaContact: string };
  mediaKitLabel: string;
  stats: { stat1Num: string; stat1Label: string; stat2Num: string; stat2Label: string; stat3Num: string; stat3Label: string; stat4Num: string; stat4Label: string };
  about: { title: string; p1: string; p2: string; p3: string; p4: string };
  process: { eyebrow: string; titleStart: string; titleItalic: string; titleEnd: string; lead: string; steps: ProcessStep[] };
  scripts: { eyebrow: string; titleStart: string; titleItalic: string; lead: string; items: ScriptItem[]; blog: { tag: string; title: string; desc: string; cta: string; chips: ScriptsChip[] } };
  carousel: { eyebrow: string; title: string; posts: CarouselPost[] };
  videos: { eyebrow: string; title: string; items: VideoItem[] };
  brands: { title: string };
  packages: { eyebrow: string; titleStart: string; titleItalic: string; lead: string; packageLabel: string; mostLoved: string; cta: string; items: PackageItem[] };
  form: { title: string; namePlaceholder: string; emailPlaceholder: string; messagePlaceholder: string; submitLabel: string };
}

const brandLogos = [
  { src: '/airlearn-logo.png', alt: 'Airlearn', width: 1326, height: 321 },
  { src: '/wise-logo.png', alt: 'Wise', width: 500, height: 500 },
  { src: '/a-sciarria-logo.png', alt: 'A Sciarria', width: 69, height: 60 },
];

const MEDIA_KIT_URL = 'https://1drv.ms/f/c/154c7857f0d1eeff/IgDJTT3LbGTeQbkx1PyUOyS1AWG9s3u-7MQZmEig2hf4UBE?e=Dp1mxQ';

const BLOG_URLS: Record<string, string> = {
  pt: 'https://solesaudade.substack.com/',
  en: 'https://borrowedlightnotes.substack.com/',
};

const carouselRotations = [-7, 4, -3, 6];
const carouselOffsetY = [14, -10, 8, -4];
const carouselDots = ['#E4EAD6', '#F2BEC1', '#B8C897', '#EFA8AC'];
const carouselImages = [
  ['/italia-1.png', '/italia-2.png'],
  ['/sicilia-1.png', '/sicilia-2.png', '/sicilia-3.png', '/sicilia-4.png', '/sicilia-5.png', '/sicilia-6.png'],
  ['/brasil-1.png', '/brasil-2.png', '/brasil-3.png', '/brasil-4.png', '/brasil-5.png'],
  ['/ragusa-1.png', '/ragusa-2.png', '/ragusa-3.png', '/ragusa-4.png', '/ragusa-5.png', '/ragusa-6.png', '/ragusa-7.png', '/ragusa-8.png', '/ragusa-9.png'],
];

const videoSources = [
  '/ibla_passeio.mp4', '/kiko.mp4', '/receita.mp4', '/portuguese.mp4',
  '/airlearn.mp4', '/a_sciarria.mp4', '/birthday_unboxing.mp4', '/hair_routine.mp4',
];

const processIcons = [
  <svg key="chat" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12c0 4.5-4 8-9 8-1.4 0-2.7-.25-3.9-.7L3 21l1.4-4.2A8.3 8.3 0 0 1 3 12c0-4.5 4-8 9-8s9 3.5 9 8z" /></svg>,
  <svg key="clipboard" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4h6a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a1 1 0 0 1 1-1z" /><path d="M9 12h6M9 16h6" /></svg>,
  <svg key="video" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="12" height="12" rx="2" /><path d="M15 10l6-3v10l-6-3" /></svg>,
  <svg key="send" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M3 11l18-8-8 18-3-7-7-3z" /></svg>,
];

const scriptIcons = [
  <svg key="globe" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z" /></svg>,
  <svg key="music" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>,
  <svg key="coffee" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h13a3 3 0 0 1 0 6h-1" /><path d="M4 8v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8" /><path d="M8 3c0 1-1 1-1 2M12 3c0 1-1 1-1 2" /></svg>,
];

const bookIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 0-2 2z" /><path d="M20 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2z" /></svg>
);

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

function CarouselPostCard({ post, images, dotColor }: { post: CarouselPost; images: string[]; dotColor: string }) {
  const [active, setActive] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (images.length < 2) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const segment = Math.min(images.length - 1, Math.max(0, Math.floor(ratio * images.length)));
    setActive(segment);
  };

  return (
    <S.PostCard>
      <S.PostHeaderRow>
        <S.PostDot dotColor={dotColor} />
        <S.PostHeaderBar />
        <S.PostMoreDots>···</S.PostMoreDots>
      </S.PostHeaderRow>
      <S.PostPhotoWrap onMouseMove={handleMouseMove} onMouseLeave={() => setActive(0)}>
        {images.map((img, i) => (
          <S.PostPhotoLayer key={img} $active={i === active}>
            <S.CoverImage src={img} alt={post.desc} fill sizes="200px" />
          </S.PostPhotoLayer>
        ))}
        {images.length > 1 && (
          <S.PostPageDots aria-hidden="true">
            {images.map((img, i) => (
              <S.PostPageDot key={img} $active={i === active} />
            ))}
          </S.PostPageDots>
        )}
        <S.PostScrim />
        <S.PostHandle>anyinsicily</S.PostHandle>
      </S.PostPhotoWrap>
      <S.PostFooter>
        <S.PostDesc>{post.desc}</S.PostDesc>
      </S.PostFooter>
      <S.CardIconsRow><CardIcons /></S.CardIconsRow>
    </S.PostCard>
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
  const blogUrl = BLOG_URLS[i18n.language];
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
                <S.HeroBody className="reveal">
                  <p>{d.hero.desc}</p>
                  <p>{d.hero.desc2}</p>
                </S.HeroBody>
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
            <S.SectionHeaderRow>
              <div>
                <S.Eyebrow className="reveal">{d.carousel.eyebrow}</S.Eyebrow>
                <S.SectionTitle className="reveal" id="carousel-heading">{d.carousel.title}</S.SectionTitle>
              </div>
              <S.MediaKitLink className="reveal" href={MEDIA_KIT_URL} target="_blank" rel="noopener noreferrer">{d.mediaKitLabel}</S.MediaKitLink>
            </S.SectionHeaderRow>
            <S.CarouselRow className="reveal">
              {d.carousel.posts.map((post, i) => (
                <S.FanCard
                  key={i}
                  $offset={i !== 0}
                  $rotate={carouselRotations[i]}
                  $translateY={carouselOffsetY[i]}
                  $z={10 + i * 10}
                >
                  <CarouselPostCard post={post} images={carouselImages[i]} dotColor={carouselDots[i]} />
                </S.FanCard>
              ))}
            </S.CarouselRow>
          </S.Inner>
        </S.CarouselSection>

        {/* REELS */}
        <S.VideosSection aria-labelledby="videos-heading">
          <S.Inner>
            <S.SectionHeaderRow>
              <div>
                <S.Eyebrow className="reveal">{d.videos.eyebrow}</S.Eyebrow>
                <S.SectionTitle className="reveal" id="videos-heading">{d.videos.title}</S.SectionTitle>
              </div>
              <S.MediaKitLink className="reveal" href={MEDIA_KIT_URL} target="_blank" rel="noopener noreferrer">{d.mediaKitLabel}</S.MediaKitLink>
            </S.SectionHeaderRow>
            <S.VideosGrid>
              {d.videos.items.map((video, i) => (
                <VideoCard
                  key={i}
                  src={videoSources[i]}
                  title={video.title}
                  meta={video.meta}
                  onOpen={() => setActiveVideo(i)}
                />
              ))}
            </S.VideosGrid>
          </S.Inner>
        </S.VideosSection>

        {/* PROCESS */}
        <S.ProcessSection id="cc-process" aria-labelledby="process-heading">
          <S.Inner>
            <S.Eyebrow className="reveal">{d.process.eyebrow}</S.Eyebrow>
            <S.ProcessTitle className="reveal" id="process-heading">
              {d.process.titleStart} <S.ProcessTitleItalic>{d.process.titleItalic}</S.ProcessTitleItalic> {d.process.titleEnd}
            </S.ProcessTitle>
            <S.ProcessLead className="reveal">{d.process.lead}</S.ProcessLead>

            <S.ProcessGrid>
              {d.process.steps.map((step, i) => (
                <S.ProcessCard key={i} className="reveal">
                  <S.ProcessNumber>{step.number}</S.ProcessNumber>
                  <S.ProcessIconWrap aria-hidden="true">{processIcons[i]}</S.ProcessIconWrap>
                  <S.ProcessCardTitle>{step.title}</S.ProcessCardTitle>
                  <S.ProcessCardDesc>{step.desc}</S.ProcessCardDesc>
                </S.ProcessCard>
              ))}
            </S.ProcessGrid>
          </S.Inner>
        </S.ProcessSection>

        {/* SCRIPTS */}
        <S.ScriptsSection id="cc-scripts" aria-labelledby="scripts-heading">
          <S.Inner>
            <S.ScriptsHeader>
              <div>
                <S.Eyebrow className="reveal">{d.scripts.eyebrow}</S.Eyebrow>
                <S.ScriptsTitle className="reveal" id="scripts-heading">
                  {d.scripts.titleStart} <S.ScriptsTitleItalic>{d.scripts.titleItalic}</S.ScriptsTitleItalic>
                </S.ScriptsTitle>
              </div>
              <S.ScriptsLead className="reveal">{d.scripts.lead}</S.ScriptsLead>
            </S.ScriptsHeader>

            <S.ScriptsGrid>
              {d.scripts.items.map((item, i) => (
                <S.ScriptCard key={i} className="reveal">
                  <S.ScriptCardHeader>
                    <S.ScriptTag>{item.tag}</S.ScriptTag>
                    <S.ScriptIcon aria-hidden="true">{scriptIcons[i]}</S.ScriptIcon>
                  </S.ScriptCardHeader>
                  <S.ScriptCardTitle>{item.title}</S.ScriptCardTitle>
                  <S.ScriptQuote>{item.quote}</S.ScriptQuote>
                  <S.ScriptDivider />
                  <S.ScriptList>
                    {item.list.map((line, li) => (
                      <S.ScriptListItem key={li}>
                        <S.ScriptDot />
                        {line}
                      </S.ScriptListItem>
                    ))}
                  </S.ScriptList>
                  <S.ScriptConclusion>{item.conclusion}</S.ScriptConclusion>
                  <S.ScriptMetaRow>
                    <S.ScriptMetaText>{item.format}</S.ScriptMetaText>
                    <S.ScriptMetaText>{item.tags}</S.ScriptMetaText>
                  </S.ScriptMetaRow>
                </S.ScriptCard>
              ))}
            </S.ScriptsGrid>

            {blogUrl && (
              <S.ScriptsBlogBanner className="reveal">
                <div>
                  <S.ScriptsBlogTag>{bookIcon} {d.scripts.blog.tag}</S.ScriptsBlogTag>
                  <S.ScriptsBlogTitle>{d.scripts.blog.title}</S.ScriptsBlogTitle>
                  <S.ScriptsBlogDesc>{d.scripts.blog.desc}</S.ScriptsBlogDesc>
                  <S.ScriptsBlogCta href={blogUrl} target="_blank" rel="noopener noreferrer">{d.scripts.blog.cta} ↗</S.ScriptsBlogCta>
                </div>
                <S.ScriptsChipsGrid>
                  {d.scripts.blog.chips.map((chip, i) => (
                    <S.ScriptsChip key={i}>
                      <S.ScriptsChipTitle>{chip.title}</S.ScriptsChipTitle>
                      <S.ScriptsChipDesc>{chip.desc}</S.ScriptsChipDesc>
                    </S.ScriptsChip>
                  ))}
                </S.ScriptsChipsGrid>
              </S.ScriptsBlogBanner>
            )}
          </S.Inner>
        </S.ScriptsSection>

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

        {/* SERVICES & PACKAGES */}
        <S.PackagesSection id="cc-packages" aria-labelledby="packages-heading">
          <S.Inner>
            <S.PackagesHeader>
              <div>
                <S.Eyebrow className="reveal">{d.packages.eyebrow}</S.Eyebrow>
                <S.PackagesTitle className="reveal" id="packages-heading">
                  {d.packages.titleStart} <S.PackagesTitleItalic>{d.packages.titleItalic}</S.PackagesTitleItalic>
                </S.PackagesTitle>
              </div>
              <S.PackagesLead className="reveal">{d.packages.lead}</S.PackagesLead>
            </S.PackagesHeader>

            <S.PackagesGrid>
              {d.packages.items.map((pkg, i) => (
                <S.PackageCard key={i} className="reveal" $featured={pkg.featured}>
                  {pkg.featured && <S.PackageBadge>{d.packages.mostLoved}</S.PackageBadge>}
                  <S.PackageLabel>{d.packages.packageLabel}</S.PackageLabel>
                  <S.PackageName>{pkg.name}</S.PackageName>
                  <S.PackageTagline>{pkg.tagline}</S.PackageTagline>
                  <S.PackagePrice>{pkg.price}</S.PackagePrice>
                  <S.PackageDivider $featured={pkg.featured} />
                  <S.PackageFeatures>
                    {pkg.features.map((feature, fi) => (
                      <S.PackageFeatureItem key={fi}>
                        <S.PackageDot />
                        {feature}
                      </S.PackageFeatureItem>
                    ))}
                  </S.PackageFeatures>
                  <S.PackageCta type="button" $featured={pkg.featured} onClick={() => scrollToId('creator-form')}>
                    {d.packages.cta}
                    <S.PackageCtaIcon $featured={pkg.featured} aria-hidden="true">→</S.PackageCtaIcon>
                  </S.PackageCta>
                </S.PackageCard>
              ))}
            </S.PackagesGrid>
          </S.Inner>
        </S.PackagesSection>

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
