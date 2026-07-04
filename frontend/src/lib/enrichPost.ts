// Auto-translation removed. Posts are entered manually in PT, EN and IT via the backoffice.

export interface RawPost {
  title: string; titlePt: string; titleIt: string;
  subtitle: string; subtitlePt: string; subtitleIt: string;
  excerptEn: string; excerptPt: string; excerptIt: string;
  primaryTag: string;
  primaryTagEn?: string;
  primaryTagIt?: string;
  bodyPt?: string;
  bodyEn?: string;
  bodyIt?: string;
  [key: string]: unknown;
}
