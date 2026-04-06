'use client';

import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/tokens';

const Area = styled('div')({
  border: `1.5px dashed ${tokens.border}`,
  borderRadius: 2,
  padding: '28px 20px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.2s, background 0.2s',
  position: 'relative',
  background: tokens.surface2,
  '&:hover': { borderColor: tokens.mint, background: tokens.mintGlow },
});

const HiddenInput = styled('input')({
  position: 'absolute',
  inset: 0,
  opacity: 0,
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  border: 'none',
  padding: 0,
  background: 'none',
});

const Icon = styled('span')({
  fontSize: 28,
  opacity: 0.3,
  marginBottom: 10,
  display: 'block',
});

const Label = styled('div')({
  fontSize: 12,
  color: tokens.textDim,
  fontWeight: 400,
  fontFamily: "'DM Sans', sans-serif",
  '& strong': { color: tokens.mint, fontWeight: 500 },
});

const Sub = styled('div')({
  fontSize: 10,
  color: tokens.textMuted,
  marginTop: 4,
  letterSpacing: '0.06em',
  fontFamily: "'DM Sans', sans-serif",
});

const Preview = styled('img')({
  width: '100%',
  height: 140,
  objectFit: 'cover',
  borderRadius: 2,
  marginBottom: 8,
  display: 'block',
});

interface Props {
  onFile: (dataUrl: string) => void;
  ariaLabel?: string;
}

export default function UploadArea({ onFile, ariaLabel }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert('Image must be under 2MB'); return; }
    const reader = new FileReader();
    reader.onload = ev => {
      const result = ev.target?.result as string;
      setPreview(result);
      setFileName(file.name);
      setFileSize((file.size / 1024).toFixed(0) + ' KB');
      onFile(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Area>
      <HiddenInput type="file" accept="image/*" onChange={handleChange} aria-label={ariaLabel ?? 'Upload image'} />
      {preview ? (
        <>
          <Preview src={preview} alt="Preview" />
          <Label>{fileName}</Label>
          <Sub>{fileSize}</Sub>
        </>
      ) : (
        <>
          <Icon aria-hidden="true">🖼</Icon>
          <Label><strong>Click to upload</strong> or drag &amp; drop</Label>
          <Sub>PNG, JPG, WEBP — max 2MB</Sub>
        </>
      )}
    </Area>
  );
}
