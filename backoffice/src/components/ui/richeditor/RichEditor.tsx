'use client';

import { useRef } from 'react';
import * as S from './styles';

interface Props {
  id: string;
  placeholder?: string;
  ariaLabel?: string;
}

export default function RichEditor({ id, placeholder = 'Start writing...', ariaLabel }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const fmt = (cmd: string, val?: string) => {
    ref.current?.focus();
    document.execCommand(cmd, false, val ?? undefined);
  };

  return (
    <S.Wrap>
      <S.Toolbar role="toolbar" aria-label={`Text editor toolbar${ariaLabel ? ' — ' + ariaLabel : ''}`}>
        <S.ToolBtn type="button" onClick={() => fmt('bold')} aria-label="Bold"><strong>B</strong></S.ToolBtn>
        <S.ToolBtn type="button" onClick={() => fmt('italic')} aria-label="Italic"><em>I</em></S.ToolBtn>
        <S.ToolBtn type="button" onClick={() => fmt('underline')} aria-label="Underline" style={{ textDecoration: 'underline' }}>U</S.ToolBtn>
        <S.Sep aria-hidden="true" />
        <S.ToolBtn type="button" onClick={() => fmt('formatBlock', 'h2')} aria-label="Heading 2">H2</S.ToolBtn>
        <S.ToolBtn type="button" onClick={() => fmt('formatBlock', 'h3')} aria-label="Heading 3">H3</S.ToolBtn>
        <S.ToolBtn type="button" onClick={() => fmt('formatBlock', 'p')} aria-label="Paragraph">¶</S.ToolBtn>
        <S.Sep aria-hidden="true" />
        <S.ToolBtn type="button" onClick={() => fmt('insertUnorderedList')} aria-label="Bullet list">• —</S.ToolBtn>
        <S.ToolBtn type="button" onClick={() => fmt('insertOrderedList')} aria-label="Numbered list">1.</S.ToolBtn>
        <S.ToolBtn type="button" onClick={() => fmt('formatBlock', 'blockquote')} aria-label="Blockquote">&ldquo;</S.ToolBtn>
        <S.Sep aria-hidden="true" />
        <S.ToolBtn type="button" onClick={() => fmt('formatBlock', 'pre')} aria-label="Code block">&lt;/&gt;</S.ToolBtn>
      </S.Toolbar>
      <S.Body
        ref={ref}
        id={id}
        contentEditable
        role="textbox"
        aria-multiline
        aria-label={ariaLabel}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />
    </S.Wrap>
  );
}
