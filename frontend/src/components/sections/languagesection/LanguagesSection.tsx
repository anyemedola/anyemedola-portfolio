'use client';

import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

const languages = [
  { flag: '🇧🇷', code: 'PT', name: 'Portuguese', level: 'C2', percent: 100 },
  { flag: '🇬🇧', code: 'EN', name: 'English', level: 'C1', percent: 85 },
  { flag: '🇮🇹', code: 'IT', name: 'Italian', level: 'C1', percent: 85 },
];

export default function LanguagesSection() {
  const ref = useScrollReveal();
  const { dict } = useLang();

  return (
    <S.LangRoot id="languages" aria-labelledby="lang-heading" ref={ref}>
      <div className="reveal">
        <S.LangTitle id="lang-heading">
          <span style={{ display: 'block' }}>{dict.languages.titleLine1}</span>
          <span style={{ display: 'block' }}>{dict.languages.titleLine2}</span>
        </S.LangTitle>
      </div>
      <S.LangList role="list">
        {languages.map((lang, i) => (
          <S.LangItem key={lang.code} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <S.LangName aria-hidden="true">{lang.flag} {lang.code}</S.LangName>
            <S.LangLevel>
              {lang.name} <span aria-label={`${lang.level} level`}>· {lang.level}</span>
            </S.LangLevel>
            <S.Bar
              role="meter"
              aria-valuenow={lang.percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${lang.name} proficiency: ${lang.level}`}
            >
              <S.BarFill width={lang.percent} />
            </S.Bar>
          </S.LangItem>
        ))}
      </S.LangList>
    </S.LangRoot>
  );
}
