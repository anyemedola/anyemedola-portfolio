'use client';

import * as S from './styles';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import type { BlogPost } from '@/data/posts';

type Locale = 'en' | 'pt' | 'it';

export default function PostBody({ post }: { post: BlogPost }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const locale: Locale = lang === 'pt' ? 'pt' : lang === 'it' ? 'it' : 'en';
  const body = post.body[locale] ?? post.body.en;

  const cover = post.coverImage ? (
    <S.CoverWide>
      <S.CoverReal>
        <Image
          src={post.coverImage}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 920px"
          priority
        />
      </S.CoverReal>
    </S.CoverWide>
  ) : null;

  if (body.html) {
    return (
      <>
        {cover}
        <S.Wrap id="post-content">
          <S.Body
            aria-labelledby="post-main-title"
            dangerouslySetInnerHTML={{ __html: body.html }}
          />
        </S.Wrap>
      </>
    );
  }

  return (
    <>
      {cover}
      <S.Wrap id="post-content">
        <S.Body aria-labelledby="post-main-title">
          <p>{body.intro}</p>

          {body.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
              {section.code && (
                <pre><code>{section.code}</code></pre>
              )}
              {section.blockquote && (
                <blockquote>
                  <p>{section.blockquote.text}</p>
                  {section.blockquote.cite && <cite>{section.blockquote.cite}</cite>}
                </blockquote>
              )}
              {section.pullquote && (
                <S.Pullquote role="note">{section.pullquote}</S.Pullquote>
              )}
              {section.subheading && <h3>{section.subheading}</h3>}
              {section.list && (
                <ul>
                  {section.list.map((item, k) => <li key={k}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}

          {body.sections.length > 0 && <hr />}
          {body.closing && <p>{body.closing}</p>}
        </S.Body>
      </S.Wrap>
    </>
  );
}
