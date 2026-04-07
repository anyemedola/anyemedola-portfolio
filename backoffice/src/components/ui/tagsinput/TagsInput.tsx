'use client';

import { useState, KeyboardEvent } from 'react';
import * as S from './styles';

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
      <S.Wrap onClick={() => document.getElementById('tag-field')?.focus()}>
        {value.map(tag => (
          <S.Chip key={tag}>
            {tag}
            <S.RemoveBtn
              type="button"
              onClick={e => { e.stopPropagation(); removeTag(tag); }}
              aria-label={`Remove ${tag}`}
            >×</S.RemoveBtn>
          </S.Chip>
        ))}
        <S.Field
          id="tag-field"
          value={input}
          placeholder={value.length === 0 ? placeholder : ''}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </S.Wrap>
      <S.Hint>Press <strong>Enter</strong> or <strong>,</strong> to add each tag</S.Hint>
    </>
  );
}
