'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import LangToggle from '@/components/ui/langtoggle/LangToggle';

interface Job {
  period: string; periodEnd: string; role: string; company: string; desc: string;
}
interface LangItem { name: string; level: string; pct: number; }
interface EduItem { degree?: string; school?: string; }
interface BeyondItem { icon: string; title: string; body: string; }
interface ProjectItem { title: string; desc: string; link: string; }
interface D {
  tagline: string; role: string; quote: string; phone: string; location: string; downloadBtn: string;
  about: { heading: string; body_before: string; body_em: string; body_after: string; };
  experience: { heading: string; jobs: Job[]; };
  projects: { heading: string; items: ProjectItem[]; };
  toolkit: { heading: string; items: string[]; };
  languages: { heading: string; items: LangItem[]; };
  education: { heading: string; items: EduItem[]; };
  certifications: { heading: string; items: string[]; };
  beyond: { heading: string; subtitle: string; items: BeyondItem[]; };
  footer: { tagline: string; meta: string; };
}

const TEAL = '#1A615D';
const INK = '#123B37';
const MUTED = '#7C8A84';
const BODY_TEXT = '#4C5B56';

export default function CreativeResume() {
  const { i18n } = useTranslation('resumeCreative');
  const d: D = (i18n.getResourceBundle(i18n.language, 'resumeCreative') ??
                i18n.getResourceBundle('en', 'resumeCreative')) as D;

  if (!d) return null;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400;1,6..72,500&display=swap" rel="stylesheet" />

      <style>{`
        @media print {
          @page { margin: 0.35in; size: letter portrait; }
          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .resume-print-hide { display: none !important; }
          body {
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
            min-height: unset !important;
          }
          .resume-bg {
            background: transparent !important;
            padding: 0 !important;
            min-height: unset !important;
          }
          .resume-doc {
            max-width: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          .exp-item, .beyond-facet, .resume-langs-row { break-inside: avoid; }
          h1, h2, h3 { break-after: avoid; }
        }

        @media (max-width: 640px) {
          .resume-bg { padding: 10px 10px 32px !important; }

          .cr-header { padding: 22px 18px 20px !important; }
          .cr-hero-inner { gap: 14px !important; }

          .cr-photo-wrap {
            width: 96px !important;
            height: 126px !important;
            border-radius: 48px 48px 10px 10px !important;
            padding: 5px !important;
          }
          .cr-photo-img { border-radius: 43px 43px 6px 6px !important; }

          .cr-h1 { font-size: 50px !important; margin-top: 10px !important; }
          .cr-role { font-size: 12px !important; margin-top: 10px !important; }
          .cr-quote { font-size: 16px !important; margin-top: 8px !important; }

          .cr-contacts { padding: 10px 18px !important; gap: 6px 8px !important; }
          .cr-contact-chip { font-size: 11.5px !important; padding: 5px 10px !important; gap: 5px !important; }

          .cr-body { padding: 18px 18px 10px !important; }
          .cr-about-text { font-size: 16px !important; line-height: 1.55 !important; }

          .cr-exp-item { grid-template-columns: 80px 1fr !important; gap: 10px !important; }

          .resume-langs-row { grid-template-columns: 1fr !important; gap: 22px !important; }

          .cr-beyond-grid { gap: 8px !important; }
          .cr-beyond-card { padding: 12px 13px !important; }

          .cr-footer { padding: 14px 18px 18px !important; flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }
        }
      `}</style>

      <LemonCursor />

      {/* top bar */}
      <div className="resume-print-hide" style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px', background: 'rgba(251,246,239,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(18,59,55,0.1)', gap: 12, flexWrap: 'wrap',
      }}>
        <Link href="/" style={{
          fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 600,
          color: TEAL, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6,
        }}>
          ← Portfolio
        </Link>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <LangToggle />
          <Link href="/resume/ats" style={{
            fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12.5, fontWeight: 600,
            color: MUTED, textDecoration: 'none', padding: '6px 14px', borderRadius: 999,
            border: '1px solid rgba(18,59,55,0.15)',
          }}>ATS</Link>
          <button
            onClick={() => window.print()}
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 700,
              background: TEAL, color: '#fff', border: 'none', borderRadius: 999,
              padding: '8px 20px', cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(26,97,93,0.3)',
            }}
          >
            {d.downloadBtn}
          </button>
        </div>
      </div>

      {/* page background */}
      <div className="resume-bg" style={{ background: '#EFEADF', minHeight: '100vh', padding: '32px 16px 48px' }}>
        <div className="resume-doc" style={{
          maxWidth: '8.5in', margin: '0 auto', background: '#FBF6EF',
          boxShadow: '0 30px 80px rgba(14,42,40,0.13)',
        }}>

          {/* HERO */}
          <header className="cr-header" style={{
            position: 'relative', padding: '46px 52px 38px',
            background: 'linear-gradient(168deg,#FBEDEE 0%,#F7D3D5 42%,#F2BEC1 78%,#EFA8AC 100%)',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(120% 90% at 88% 8%, rgba(184,200,151,0.7), transparent 55%)',
              pointerEvents: 'none',
            }} />
            <div className="cr-hero-inner" style={{ position: 'relative', display: 'flex', gap: 40, alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: TEAL,
                }}>
                  <span style={{ width: 22, height: 1.5, background: TEAL, display: 'inline-block' }} />
                  {d.tagline}
                </div>
                <h1 className="cr-h1" style={{
                  fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 78,
                  lineHeight: 0.92, letterSpacing: '-0.015em', color: INK, margin: '14px 0 0',
                }}>
                  Any<br />Medola
                </h1>
                <p className="cr-role" style={{
                  fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 700, fontSize: 14.5,
                  letterSpacing: '0.05em', textTransform: 'uppercase', color: MUTED, margin: '18px 0 0',
                }}>
                  {d.role}
                </p>
                <p className="cr-quote" style={{
                  fontFamily: "'Newsreader', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 21,
                  lineHeight: 1.4, color: '#526059', margin: '14px 0 0', maxWidth: '30ch',
                }}>
                  {d.quote}
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <div className="cr-photo-wrap" style={{
                  position: 'relative', width: 212, height: 280,
                  borderRadius: '106px 106px 16px 16px', padding: 7,
                  background: 'linear-gradient(160deg,#F2C6C9,#EFA8AC 55%,#1A615D)',
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="cr-photo-img"
                    src="/resume-photo.png"
                    alt="Any Medola in Ragusa Ibla, Sicily"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      objectPosition: '50% 22%', borderRadius: '100px 100px 10px 10px', display: 'block',
                    }}
                  />
                </div>
              </div>
            </div>
          </header>

          {/* CONTACT BAR */}
          <div className="cr-contacts" style={{
            display: 'flex', flexWrap: 'wrap', gap: '8px 10px',
            padding: '18px 52px', background: '#EEF2E4',
            borderBottom: '1px solid rgba(18,59,55,0.08)',
          }}>
            {[
              { icon: '✉', text: 'contact@anyemedola.com' },
              { icon: '☎', text: d.phone },
              { icon: '⌖', text: d.location },
              { icon: '', text: 'in/dev-anyemedola' },
              { icon: '', text: 'github.com/anyemedola' },
              { icon: '', text: 'anyemedola.com.br' },
            ].map((item) => (
              <span key={item.text} className="cr-contact-chip" style={{
                display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600,
                color: '#2E4A45', background: '#FBF6EF', border: '1px solid rgba(18,59,55,0.1)',
                borderRadius: 999, padding: '7px 13px',
              }}>
                {item.icon && <span style={{ color: TEAL }}>{item.icon}</span>}
                {item.text}
              </span>
            ))}
          </div>

          {/* BODY */}
          <div className="cr-body" style={{ padding: '34px 52px 14px' }}>

            {/* ABOUT */}
            <section style={{ marginBottom: 30 }}>
              <h2 style={sectionHeading}>{d.about.heading}</h2>
              <p className="cr-about-text" style={{
                fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 19,
                lineHeight: 1.58, color: '#17403B', margin: 0,
              }}>
                {d.about.body_before}
                <em style={{ fontStyle: 'italic', color: TEAL }}>{d.about.body_em}</em>
                {d.about.body_after}
              </p>
            </section>

            {/* EXPERIENCE */}
            <section style={{ marginBottom: 30 }}>
              <h2 style={sectionHeading}>{d.experience.heading}</h2>
              {d.experience.jobs.map((job, idx) => (
                <div key={idx} className={`exp-item cr-exp-item`} style={{
                  display: 'grid', gridTemplateColumns: '118px 1fr', gap: 20,
                  paddingBottom: idx < d.experience.jobs.length - 1 ? 18 : 0,
                  marginBottom: idx < d.experience.jobs.length - 1 ? 18 : 0,
                  borderBottom: idx < d.experience.jobs.length - 1 ? '1px solid rgba(18,59,55,0.1)' : 'none',
                }}>
                  <div style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: MUTED, paddingTop: 3 }}>
                    {job.period}<br />
                    <span style={{ color: '#86908A', fontWeight: 600 }}>— {job.periodEnd}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, fontSize: 21, color: INK, margin: '0 0 2px' }}>
                      {job.role}
                    </h3>
                    <div style={{ fontSize: 13, fontWeight: 700, color: TEAL, marginBottom: 7 }}>{job.company}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: BODY_TEXT, margin: 0 }}>{job.desc}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* PROJECTS */}
            <section style={{ marginBottom: 30 }}>
              <h2 style={sectionHeading}>{d.projects.heading}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {d.projects.items.map((item) => (
                  <div key={item.title} style={{
                    background: 'linear-gradient(150deg,#F2F5E9,#E6EDD6)',
                    border: '1px solid rgba(26,97,93,0.14)', borderRadius: 14, padding: '15px 16px',
                  }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.45, color: '#5E6C66' }}>{item.desc}</div>
                    <div style={{ fontSize: 11.5, color: TEAL, marginTop: 7 }}>{item.link}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* TOOLKIT */}
            <section style={{ marginBottom: 30 }}>
              <h2 style={sectionHeading}>{d.toolkit.heading}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {d.toolkit.items.map((item) => (
                  <span key={item} style={{
                    fontSize: 13, fontWeight: 600, color: '#17403B',
                    background: '#E4EAD6', borderRadius: 8, padding: '6px 11px',
                  }}>{item}</span>
                ))}
              </div>
            </section>

            {/* LANGUAGES + EDUCATION */}
            <section className="resume-langs-row" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 34, marginBottom: 30 }}>
              <div>
                <h2 style={sectionHeading}>{d.languages.heading}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {d.languages.items.map((lang) => (
                    <div key={lang.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ width: 74, fontSize: 14, fontWeight: 700, color: '#17403B' }}>{lang.name}</span>
                      <span style={{ flex: 1, height: 6, borderRadius: 999, background: '#E7E0D4', overflow: 'hidden' }}>
                        <span style={{ display: 'block', width: `${lang.pct}%`, height: '100%', background: 'linear-gradient(90deg,#EFA8AC,#1A615D)' }} />
                      </span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: MUTED }}>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="edu-row">
                <h2 style={sectionHeading}>{d.education.heading}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                  {d.education.items.map((edu, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: INK }}>{edu.degree}</div>
                      <div style={{ fontSize: 13, color: '#6B7973' }}>{edu.school}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CERTIFICATIONS */}
            <section style={{ marginBottom: 30 }}>
              <h2 style={sectionHeading}>{d.certifications.heading}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {d.certifications.items.map((item) => (
                  <span key={item} style={{
                    fontSize: 13, fontWeight: 600, color: '#17403B',
                    background: '#F2E4E5', border: '1px solid rgba(26,97,93,0.12)',
                    borderRadius: 8, padding: '6px 11px',
                  }}>{item}</span>
                ))}
              </div>
            </section>

            {/* BEYOND */}
            <section style={{ marginBottom: 18 }}>
              <h2 style={sectionHeading}>{d.beyond.heading}</h2>
              <p style={{ fontFamily: "'Newsreader', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 17, color: '#6B7973', margin: '0 0 16px' }}>
                {d.beyond.subtitle}
              </p>
              <div className="cr-beyond-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {d.beyond.items.map((item) => (
                  <div key={item.title} className={`beyond-facet cr-beyond-card`} style={{
                    display: 'flex', gap: 13, alignItems: 'flex-start',
                    background: 'linear-gradient(150deg,#F2F5E9,#E6EDD6)',
                    border: '1px solid rgba(26,97,93,0.14)', borderRadius: 14, padding: '15px 16px',
                  }}>
                    <span style={{ fontSize: 22, lineHeight: 1, color: TEAL }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>{item.title}</div>
                      <div style={{ fontSize: 12.5, lineHeight: 1.45, color: '#5E6C66' }}>{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* FOOTER */}
          <footer className="cr-footer" style={{
            padding: '18px 52px 26px', borderTop: '1px solid rgba(18,59,55,0.08)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 8,
          }}>
            <span style={{ fontFamily: "'Newsreader', serif", fontStyle: 'italic', fontSize: 14, color: '#8A9791' }}>
              {d.footer.tagline}
            </span>
            <span style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A6B4AC' }}>
              {d.footer.meta}
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}

const sectionHeading: React.CSSProperties = {
  fontFamily: "'Hanken Grotesk', sans-serif",
  fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase',
  color: '#1A615D', margin: '0 0 12px',
};
