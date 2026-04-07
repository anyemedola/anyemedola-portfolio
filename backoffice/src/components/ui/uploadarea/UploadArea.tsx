'use client';

import { useState } from 'react';
import * as S from './styles';

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
    <S.Area>
      <S.HiddenInput type="file" accept="image/*" onChange={handleChange} aria-label={ariaLabel ?? 'Upload image'} />
      {preview ? (
        <>
          <S.Preview src={preview} alt="Preview" />
          <S.UploadLabel>{fileName}</S.UploadLabel>
          <S.UploadSub>{fileSize}</S.UploadSub>
        </>
      ) : (
        <>
          <S.UploadIcon aria-hidden="true">🖼</S.UploadIcon>
          <S.UploadLabel><strong>Click to upload</strong> or drag &amp; drop</S.UploadLabel>
          <S.UploadSub>PNG, JPG, WEBP — max 2MB</S.UploadSub>
        </>
      )}
    </S.Area>
  );
}
