'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LemonCursor from '@/components/ui/cursor/lemonCursor';
import LangToggle from '@/components/ui/langtoggle/LangToggle';

interface Job { role: string; period: string; bullets: string[]; }
interface EduItem { degree?: string; school?: string; }
interface D {
  role: string; phone: string; location: string; downloadBtn: string;
  summary: { heading: string; body: string; };
  experience: { heading: string; jobs: Job[]; };
  skills: {
    heading: string;
    frontend: string; ui: string; state: string; design: string; quality: string;
    frontendLabel: string; uiLabel: string; stateLabel: string; designLabel: string; qualityLabel: string;
  };
  education: { heading: string; items: EduItem[]; certsLabel: string; certsList: string; };
  languages: { heading: string; items: string[]; };
}

const TEAL = '#1A615D';
const INK = '#1C1916';
const BODY = '#34302B';

export default function ATSResume() {
  const { i18n } = useTranslation('resumeATS');
  const d: D = (i18n.getResourceBundle(i18n.language, 'resumeATS') ??
                i18n.getResourceBundle('en', 'resumeATS')) as D;

  if (!d) return null;

  return (
    <>
      <style>{`
        @media print {
          @page { margin: 0.5in; size: letter portrait; }
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
            padding: 54px 0 40px !important;
            box-shadow: none !important;
          }
          .exp-item, .blk { break-inside: avoid; }
          h1, h2, h3 { break-after: avoid; }
        }

        @media (max-width: 640px) {
          .resume-bg { padding: 10px 10px 24px !important; }
          .ats-doc { padding: 28px 18px 24px !important; }
          .ats-edu-langs { grid-template-columns: 1fr !important; gap: 22px !important; }
        }
      `}</style>

      <LemonCursor />

      {/* top bar */}
      <div className="resume-print-hide" style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px', background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(40,30,30,0.1)', gap: 12, flexWrap: 'wrap',
      }}>
        <Link href="/" style={{
          fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
          fontSize: 13, fontWeight: 600, color: TEAL, textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          ← Portfolio
        </Link>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <LangToggle />
          <Link href="/resume/creative" style={{
            fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
            fontSize: 12.5, fontWeight: 600, color: '#857D75', textDecoration: 'none',
            padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(40,30,30,0.15)',
          }}>Creative version</Link>
          <button
            onClick={() => window.print()}
            style={{
              fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
              fontSize: 13, fontWeight: 700,
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
      <div className="resume-bg" style={{ background: '#E8EBE0', minHeight: '100vh', padding: '32px 16px 48px' }}>
        <div className="resume-doc ats-doc" style={{
          maxWidth: '8.5in', margin: '0 auto', background: '#fff',
          boxShadow: '0 24px 64px rgba(40,30,30,0.12)',
          padding: '54px 60px 40px',
        }}>

          {/* HEADER */}
          <header style={{ borderBottom: `2px solid ${TEAL}`, paddingBottom: 18, marginBottom: 24 }}>
            <h1 style={{ fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif", fontSize: 34, fontWeight: 800, letterSpacing: '-0.01em', color: INK, margin: 0 }}>
              Any Elis Mendonça Medola
            </h1>
            <p style={{ fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif", fontSize: 15.5, fontWeight: 700, color: TEAL, margin: '6px 0 12px', letterSpacing: '0.01em' }}>
              {d.role}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 18px', fontSize: 13, fontWeight: 500, color: '#4A453F' }}>
              <span>contact@anyemedola.com</span>
              <span>{d.phone}</span>
              <span>{d.location}</span>
              <span>linkedin.com/in/dev-anyemedola</span>
              <span>github.com/anyemedola</span>
              <span>anyemedola.com.br</span>
            </div>
          </header>

          {/* SUMMARY */}
          <section className="blk" style={{ marginBottom: 24 }}>
            <h2 style={atsHeading}>{d.summary.heading}</h2>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: BODY, margin: 0 }}>{d.summary.body}</p>
          </section>

          {/* EXPERIENCE */}
          <section style={{ marginBottom: 24 }}>
            <h2 style={atsHeading}>{d.experience.heading}</h2>
            {d.experience.jobs.map((job, idx) => (
              <div key={idx} className="exp-item" style={{ marginBottom: idx < d.experience.jobs.length - 1 ? 16 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif", fontSize: 15.5, fontWeight: 700, color: INK, margin: 0 }}>
                    {job.role}
                  </h3>
                  <span style={{ fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif", fontSize: 12.5, fontWeight: 600, color: '#857D75', whiteSpace: 'nowrap' }}>
                    {job.period}
                  </span>
                </div>
                <ul style={{ margin: '7px 0 0', paddingLeft: 18, fontSize: 13.5, lineHeight: 1.55, color: '#3D3833' }}>
                  {job.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* SKILLS */}
          <section className="blk" style={{ marginBottom: 24 }}>
            <h2 style={atsHeading}>{d.skills.heading}</h2>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: BODY }}>
              <p style={{ margin: '0 0 4px' }}><strong style={{ color: INK }}>{d.skills.frontendLabel}:</strong> {d.skills.frontend}</p>
              <p style={{ margin: '0 0 4px' }}><strong style={{ color: INK }}>{d.skills.uiLabel}:</strong> {d.skills.ui}</p>
              <p style={{ margin: '0 0 4px' }}><strong style={{ color: INK }}>{d.skills.stateLabel}:</strong> {d.skills.state}</p>
              <p style={{ margin: '0 0 4px' }}><strong style={{ color: INK }}>{d.skills.designLabel}:</strong> {d.skills.design}</p>
              <p style={{ margin: 0 }}><strong style={{ color: INK }}>{d.skills.qualityLabel}:</strong> {d.skills.quality}</p>
            </div>
          </section>

          {/* EDUCATION + LANGUAGES */}
          <section className="blk ats-edu-langs" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 36 }}>
            <div>
              <h2 style={atsHeading}>{d.education.heading}</h2>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: BODY }}>
                {d.education.items.map((edu, idx) => (
                  <p key={idx} style={{ margin: '0 0 8px' }}>
                    <strong style={{ color: INK }}>{edu.degree}</strong><br />
                    {edu.school}
                  </p>
                ))}
                <p style={{ margin: 0 }}>
                  <strong style={{ color: INK }}>{d.education.certsLabel}:</strong> {d.education.certsList}
                </p>
              </div>
            </div>
            <div>
              <h2 style={atsHeading}>{d.languages.heading}</h2>
              <div style={{ fontSize: 13.5, lineHeight: 1.7, color: BODY }}>
                {d.languages.items.map((lang) => (
                  <div key={lang}>{lang}</div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

const atsHeading: React.CSSProperties = {
  fontFamily: "'Hanken Grotesk', var(--font-hanken), sans-serif",
  fontSize: 12, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase',
  color: '#1A615D', margin: '0 0 10px',
};
