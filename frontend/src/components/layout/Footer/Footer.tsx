'use client';

import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import * as S from './styles';

export default function ContactSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <S.ContactRoot id="contato" aria-labelledby="contact-heading" ref={ref}>
      <S.Star top="6%"  left="8%"  size={3} delay="0s"    color="#FBE6C8" aria-hidden="true" />
      <S.Star top="14%" left="55%" size={4} delay="0.6s"  color="#F3A98C" aria-hidden="true" />
      <S.Star top="38%" left="72%" size={3} delay="1.1s"  color="#FBE6C8" aria-hidden="true" />
      <S.Star top="62%" left="18%" size={5} delay="0.3s"  color="#E0568A" aria-hidden="true" />
      <S.Star top="80%" left="42%" size={3} delay="0.9s"  color="#FBE6C8" aria-hidden="true" />
      <S.Star top="22%" left="88%" size={4} delay="1.4s"  color="#F3A98C" aria-hidden="true" />
      <S.SunGlow aria-hidden="true" />
      <S.Inner>
        <S.Eyebrow className="reveal">{t('contact.eyebrow')}</S.Eyebrow>
        <S.Title className="reveal" id="contact-heading">{t('contact.title')}</S.Title>
        <S.ContactP className="reveal">{t('contact.p')}</S.ContactP>

        <S.Links className="reveal" aria-label="Contact links">
          <S.ContactLink href="mailto:anynhamedola@gmail.com">
            anynhamedola@gmail.com
          </S.ContactLink>
          <S.ContactLink href="https://www.linkedin.com/in/dev-anyemedola/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </S.ContactLink>
          <S.ContactLink href="https://github.com/anyemedola" target="_blank" rel="noopener noreferrer">
            GitHub
          </S.ContactLink>
          <S.ContactLink href="https://instagram.com/anyemedola" target="_blank" rel="noopener noreferrer">
            @anyemedola
          </S.ContactLink>
          <S.ContactLink href="https://instagram.com/anyinsicily" target="_blank" rel="noopener noreferrer">
            @anyinsicily
          </S.ContactLink>
        </S.Links>
      </S.Inner>

      <S.FooterBar role="contentinfo">
        <S.FooterInner>
          <S.FooterMade>{t('contact.footerMade')}</S.FooterMade>
          <S.FooterRights>{t('contact.footerRights')}</S.FooterRights>
        </S.FooterInner>
      </S.FooterBar>
    </S.ContactRoot>
  );
}
