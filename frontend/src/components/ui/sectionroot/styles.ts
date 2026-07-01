import { styled } from '@mui/material/styles';
import { tokens } from '@/theme/theme';

export const SectionRoot = styled('section')({
  scrollMarginTop: 70,
});

export const SectionRootBordered = styled(SectionRoot)({
  background: tokens.creamLight,
  borderTop: `1px solid ${tokens.border}`,
  borderBottom: `1px solid ${tokens.border}`,
});
