'use client';

import * as S from './styles';
import { useLang } from '@/context/LangContext';
import type { BlogPost } from '@/data/posts';

export default function PostBody({ post }: { post: BlogPost }) {
  const { locale, dict } = useLang();
  const body = post.body[locale];

  const cover = (
    <S.Cover>
      <figure>
        <S.CoverImg role="img" aria-label="Post cover image placeholder">
          <S.CoverPlaceholderIcon aria-hidden="true">{post.icon}</S.CoverPlaceholderIcon>
          <S.CoverPlaceholderText>Cover image goes here</S.CoverPlaceholderText>
        </S.CoverImg>
        <S.CoverCaption>{dict.post.caption}</S.CoverCaption>
      </figure>
    </S.Cover>
  );

  // API posts have raw HTML from the rich editor
  if (body.html !== undefined) {
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
