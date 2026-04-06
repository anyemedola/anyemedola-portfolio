'use client';

import { useState, KeyboardEvent } from 'react';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

const Wrap = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
  background: tokens.surface2,
  border: `1px solid ${tokens.border}`,
  padding: '8px 10px',
  borderRadius: 2,
  minHeight: 44,
  cursor: 'text',
  transition: 'border-color 0.2s',
  '&:focus-within': { borderColor: tokens.mint },
});

const Chip = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  background: tokens.surface3,
  color: tokens.mint,
  fontSize: 11,
  fontWeight: 500,
  padding: '3px 8px',
  borderRadius: 2,
  letterSpacing: '0.06em',
  fontFamily: "'DM Sans', sans-serif",
});

const RemoveBtn = styled('button')({
  background: 'none',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  fontSize: 13,
  lineHeight: 1,
  padding: 0,
  opacity: 0.6,
  transition: 'opacity 0.15s',
  '&:hover': { opacity: 1 },
});

const Field = styled('input')({
  border: 'none',
  background: 'none',
  color: tokens.text,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  flex: 1,
  minWidth: 80,
  padding: '2px 4px',
  outline: 'none',
  '&::placeholder': { color: tokens.textMuted },
});

const Hint = styled('p')({
  fontSize: 10,
  color: tokens.textMuted,
  marginTop: 6,
  letterSpacing: '0.04em',
  lineHeight: 1.5,
  fontFamily: "'DM Sans', sans-serif",
  '& strong': { color: tokens.textDim },
});

interface Props {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

export default function TagsInput({ value, onChange, placeholder = 'Type and press Enter...' }: Props) {
  const [input, setInput] = useState('');

  const addTag = (val: string) => {
    const trimmed = val.trim().replace(/,$/, '');
    if (!trimmed || value.includes(trimmed)) return;
    onChange([...value, trimmed]);
  };

  const removeTag = (tag: string) => {
    onChange(value.filter(t => t !== tag));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(input);
      setInput('');
    } else if (e.key === 'Backspace' && input === '' && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <>
      <Wrap onClick={() => document.getElementById('tag-field')?.focus()}>
        {value.map(tag => (
          <Chip key={tag}>
            {tag}
            <RemoveBtn
              type="button"
              onClick={e => { e.stopPropagation(); removeTag(tag); }}
              aria-label={`Remove ${tag}`}
            >×</RemoveBtn>
          </Chip>
        ))}
        <Field
          id="tag-field"
          value={input}
          placeholder={value.length === 0 ? placeholder : ''}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </Wrap>
      <Hint>Press <strong>Enter</strong> or <strong>,</strong> to add each tag</Hint>
    </>
  );
}
