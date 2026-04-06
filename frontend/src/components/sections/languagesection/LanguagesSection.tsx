'use client';

import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const LangRoot = styled('section')({
  background: `linear-gradient(135deg, ${tokens.mint} 0%, #3dbda3 100%)`,
  padding: '80px 56px',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: 80,
  alignItems: 'center',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    padding: '56px 24px',
    gap: 40,
  },
});

const LangTitle = styled('h2')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(56px, 6vw, 92px)',
  lineHeight: 0.88,
  color: tokens.ink,
});

const LangList = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 32,
  listStyle: 'none',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
});

const LangItem = styled('li')({
  background: 'rgba(255,255,255,0.3)',
  padding: '28px 24px',
  border: '1px solid rgba(255,255,255,0.4)',
});

const LangName = styled('span')({
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 32,
  letterSpacing: '0.06em',
  color: tokens.ink,
  display: 'block',
});

const LangLevel = styled('p')({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(26,20,16,0.7)',
  marginTop: 6,
});

const Bar = styled('div')({
  height: 3,
  background: 'rgba(26,20,16,0.15)',
  marginTop: 16,
  borderRadius: 2,
  overflow: 'hidden',
});

const BarFill = styled('div')<{ width: number }>(({ width }) => ({
  height: '100%',
  width: `${width}%`,
  background: tokens.ink,
  borderRadius: 2,
}));

const languages = [
  { flag: '🇧🇷', code: 'PT', name: 'Portuguese', level: 'C2', percent: 100 },
  { flag: '🇬🇧', code: 'EN', name: 'English', level: 'C1', percent: 85 },
  { flag: '🇮🇹', code: 'IT', name: 'Italian', level: 'C1', percent: 85 },
];

export default function LanguagesSection() {
  const ref = useScrollReveal();
  const { dict } = useLang();

  return (
    <LangRoot id="languages" aria-labelledby="lang-heading" ref={ref}>
      <div className="reveal">
        <LangTitle id="lang-heading">
          <span style={{ display: 'block' }}>{dict.languages.titleLine1}</span>
          <span style={{ display: 'block' }}>{dict.languages.titleLine2}</span>
        </LangTitle>
      </div>
      <LangList role="list">
        {languages.map((lang, i) => (
          <LangItem key={lang.code} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <LangName aria-hidden="true">{lang.flag} {lang.code}</LangName>
            <LangLevel>
              {lang.name} <span aria-label={`${lang.level} level`}>· {lang.level}</span>
            </LangLevel>
            <Bar
              role="meter"
              aria-valuenow={lang.percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${lang.name} proficiency: ${lang.level}`}
            >
              <BarFill width={lang.percent} />
            </Bar>
          </LangItem>
        ))}
      </LangList>
    </LangRoot>
  );
}
