'use client';

import { useRef } from 'react';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

const Wrap = styled('div')({
  border: `1px solid ${tokens.border}`,
  borderRadius: 2,
  overflow: 'hidden',
  transition: 'border-color 0.2s',
  '&:focus-within': { borderColor: tokens.mint },
});

const Toolbar = styled('div')({
  background: tokens.surface2,
  borderBottom: `1px solid ${tokens.border}`,
  padding: '8px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  flexWrap: 'wrap',
});

const Sep = styled('div')({
  width: 1,
  height: 18,
  background: tokens.border,
  margin: '0 6px',
});

const ToolBtn = styled('button')({
  background: 'none',
  border: 'none',
  color: tokens.textDim,
  fontSize: 12,
  fontWeight: 500,
  padding: '4px 8px',
  borderRadius: 2,
  cursor: 'pointer',
  transition: 'all 0.15s',
  minWidth: 28,
  minHeight: 26,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "'DM Sans', sans-serif",
  '&:hover': { background: tokens.surface3, color: tokens.text },
});

const Body = styled('div')({
  background: tokens.surface2,
  minHeight: 240,
  padding: 16,
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 17,
  color: tokens.text,
  lineHeight: 1.7,
  outline: 'none',
  border: 'none',
  width: '100%',
  '& [data-placeholder]:empty::before': {
    content: 'attr(data-placeholder)',
    color: tokens.textMuted,
    pointerEvents: 'none',
  },
});

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
    <Wrap>
      <Toolbar role="toolbar" aria-label={`Text editor toolbar${ariaLabel ? ' — ' + ariaLabel : ''}`}>
        <ToolBtn type="button" onClick={() => fmt('bold')} aria-label="Bold"><strong>B</strong></ToolBtn>
        <ToolBtn type="button" onClick={() => fmt('italic')} aria-label="Italic"><em>I</em></ToolBtn>
        <ToolBtn type="button" onClick={() => fmt('underline')} aria-label="Underline" style={{ textDecoration: 'underline' }}>U</ToolBtn>
        <Sep aria-hidden="true" />
        <ToolBtn type="button" onClick={() => fmt('formatBlock', 'h2')} aria-label="Heading 2">H2</ToolBtn>
        <ToolBtn type="button" onClick={() => fmt('formatBlock', 'h3')} aria-label="Heading 3">H3</ToolBtn>
        <ToolBtn type="button" onClick={() => fmt('formatBlock', 'p')} aria-label="Paragraph">¶</ToolBtn>
        <Sep aria-hidden="true" />
        <ToolBtn type="button" onClick={() => fmt('insertUnorderedList')} aria-label="Bullet list">• —</ToolBtn>
        <ToolBtn type="button" onClick={() => fmt('insertOrderedList')} aria-label="Numbered list">1.</ToolBtn>
        <ToolBtn type="button" onClick={() => fmt('formatBlock', 'blockquote')} aria-label="Blockquote">&ldquo;</ToolBtn>
        <Sep aria-hidden="true" />
        <ToolBtn type="button" onClick={() => fmt('formatBlock', 'pre')} aria-label="Code block">&lt;/&gt;</ToolBtn>
      </Toolbar>
      <Body
        ref={ref}
        id={id}
        contentEditable
        role="textbox"
        aria-multiline
        aria-label={ariaLabel}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />
    </Wrap>
  );
}
