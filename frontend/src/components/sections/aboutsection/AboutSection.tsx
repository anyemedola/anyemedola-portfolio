'use client';

import Image from 'next/image';
import T from '@/components/ui/t/T';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

export default function AboutSection() {
  const ref = useScrollReveal();
  const { dict } = useLang();

  return (
    <S.AboutRoot id="about" aria-labelledby="about-heading" ref={ref}>
      <S.ImageCol>
        <Image
          src="/any_pink_smile.jpg"
          alt="Any Medola, smiling with a teal top, arms crossed"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </S.ImageCol>
      <S.Content>
        <S.SectionLabel className="reveal" aria-hidden="true">{dict.about.label}</S.SectionLabel>
        <S.SectionTitle className="reveal" id="about-heading">
          <span>{dict.about.titleLine}<br /></span><em>{dict.about.titleEm}</em>
        </S.SectionTitle>
        <S.AboutText className="reveal reveal-delay-1">
          <T
            en={<>I started in tech over <strong>9 years ago</strong>, and for the last 5 I&apos;ve focused entirely on front-end — the layer where logic becomes experience. Born in Brazil, currently living in <strong>Milan, Italy</strong>, working with teams across Europe and LATAM.</>}
            pt={<>Comecei na tecnologia há mais de <strong>9 anos</strong>, e nos últimos 5 foquei completamente no front-end — a camada onde a lógica se torna experiência. Nascida no Brasil, atualmente vivendo em <strong>Milão, Itália</strong>.</>}
          />
        </S.AboutText>
        <S.AboutText className="reveal reveal-delay-2">
          <T
            en={<>Today I lead front-end at <strong>Capgemini</strong>, building a streaming platform for the Portuguese Ministry of Health. I also act as UI/UX designer, creating Figma prototypes and turning them into pixel-perfect interfaces.</>}
            pt={<>Hoje lidero o front-end na <strong>Capgemini</strong>, desenvolvendo uma plataforma de streaming para o Ministério da Saúde de Portugal. Também atuo como designer UI/UX, criando protótipos no Figma e transformando-os em interfaces pixel-perfect.</>}
          />
        </S.AboutText>
        <S.Stats className="reveal reveal-delay-3">
          <div>
            <S.StatNum>9<span>+</span></S.StatNum>
            <S.StatLabel>{dict.about.stat1}</S.StatLabel>
          </div>
          <div>
            <S.StatNum>5<span>+</span></S.StatNum>
            <S.StatLabel>{dict.about.stat2}</S.StatLabel>
          </div>
          <div>
            <S.StatNum>3<span>+</span></S.StatNum>
            <S.StatLabel>{dict.about.stat3}</S.StatLabel>
          </div>
        </S.Stats>
      </S.Content>
    </S.AboutRoot>
  );
}
