'use client';

import * as S from './styles';

interface Props {
  label: string;
  sub?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  ariaLabel?: string;
}

export default function Toggle({ label, sub, checked, onChange, ariaLabel }: Props) {
  return (
    <S.Row>
      <S.Info>
        <S.LabelText>{label}</S.LabelText>
        {sub && <S.LabelSub>{sub}</S.LabelSub>}
      </S.Info>
      <S.SwitchLabel aria-label={ariaLabel ?? label}>
        <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
        <S.Slider />
      </S.SwitchLabel>
    </S.Row>
  );
}
