'use client';

import Image from 'next/image';
import T from '@/components/ui/t/T';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

export default function ContactSection() {
  const ref = useScrollReveal();
  const { dict } = useLang();

  return (
    <S.ContactRoot id="contact" aria-labelledby="contact-heading" ref={ref}>
      <S.Left>
        <S.Title className="reveal" id="contact-heading">
          <T
            en={<>Let&apos;s<br />build<br /><em>together</em></>}
            pt={<>Vamos<br />construir<br /><em>juntos</em></>}
          />
        </S.Title>
        <S.ContactText className="reveal">{dict.contact.text}</S.ContactText>
        <S.Links className="reveal" aria-label="Contact information">
          <S.ContactLink href="mailto:any@aeait.com">
            <S.LinkIcon aria-hidden="true">✉</S.LinkIcon>any@aeait.com
          </S.ContactLink>
          <S.ContactLink href="https://linkedin.com/in/dev-anyemedola" target="_blank" rel="noopener noreferrer">
            <S.LinkIcon aria-hidden="true">in</S.LinkIcon>linkedin.com/in/dev-anyemedola
          </S.ContactLink>
          <S.ContactLink href="https://github.com/anyemedola" target="_blank" rel="noopener noreferrer">
            <S.LinkIcon aria-hidden="true">⌥</S.LinkIcon>github.com/anyemedola
          </S.ContactLink>
          <S.ContactLink href="https://anyemedola.com.br" target="_blank" rel="noopener noreferrer">
            <S.LinkIcon aria-hidden="true">◎</S.LinkIcon>anyemedola.com.br
          </S.ContactLink>
          <S.ContactLink href="tel:+393515869527">
            <S.LinkIcon aria-hidden="true">✆</S.LinkIcon>+39 351 586 9527
          </S.ContactLink>
        </S.Links>
      </S.Left>
      <S.Right aria-hidden="true">
        <Image
          src="/any_pink_fullbody.jpg"
          alt=""
          role="presentation"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.6, mixBlendMode: 'luminosity' }}
        />
        <S.Overlay />
        <S.WatermarkText>ANY</S.WatermarkText>
      </S.Right>
    </S.ContactRoot>
  );
}
