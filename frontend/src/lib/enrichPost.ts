const MYMEMORY = 'https://api.mymemory.translated.net/get';

// MyMemory free tier: ~5000 chars/day per IP.
// For body text we only translate if it fits safely in a GET URL after encoding.
const BODY_CHAR_LIMIT = 3000;

export async function autoTranslate(text: string, from: string, to: string): Promise<string> {
  if (!text?.trim()) return text;
  try {
    const url = `${MYMEMORY}?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return text;
    const json = await res.json();
    return (json?.responseData?.translatedText as string) || text;
  } catch {
    return text;
  }
}

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

export interface EnrichOptions {
  /** When true, also translate bodyPt → bodyEn / bodyIt.
   *  Disabled by default so the listing-page route handler stays fast. */
  translateBody?: boolean;
}

export async function enrichPost<T extends RawPost>(
  p: T,
  options: EnrichOptions = {},
): Promise<T> {
  const { translateBody = false } = options;

  const ptTitle    = p.titlePt    || p.title;
  const ptSubtitle = p.subtitlePt || p.subtitle;
  const ptExcerpt  = p.excerptPt  || p.excerptEn;
  const ptBody     = p.bodyPt     || '';

  const needEnTitle    = !p.title    || p.title    === ptTitle;
  const needItTitle    = !p.titleIt;
  const needEnSubtitle = !p.subtitle || p.subtitle === ptSubtitle;
  const needItSubtitle = !p.subtitleIt;
  const needEnExcerpt  = !p.excerptEn;
  const needItExcerpt  = !p.excerptIt;
  const needEnTag      = !p.primaryTagEn;
  const needItTag      = !p.primaryTagIt;

  // Body is only translated when explicitly requested AND fits within the safe URL length.
  const canTranslateBody = translateBody && !!ptBody && ptBody.length <= BODY_CHAR_LIMIT;
  const needEnBody = canTranslateBody && !p.bodyEn;
  const needItBody = canTranslateBody && !p.bodyIt;

  const [
    enTitle, itTitle,
    enSubtitle, itSubtitle,
    enExcerpt, itExcerpt,
    enTag, itTag,
    enBody, itBody,
  ] = await Promise.all([
    needEnTitle    ? autoTranslate(ptTitle,    'pt', 'en') : Promise.resolve(p.title),
    needItTitle    ? autoTranslate(ptTitle,    'pt', 'it') : Promise.resolve(p.titleIt),
    needEnSubtitle ? autoTranslate(ptSubtitle, 'pt', 'en') : Promise.resolve(p.subtitle),
    needItSubtitle ? autoTranslate(ptSubtitle, 'pt', 'it') : Promise.resolve(p.subtitleIt),
    needEnExcerpt  ? autoTranslate(ptExcerpt,  'pt', 'en') : Promise.resolve(p.excerptEn),
    needItExcerpt  ? autoTranslate(ptExcerpt,  'pt', 'it') : Promise.resolve(p.excerptIt),
    needEnTag      ? autoTranslate(p.primaryTag, 'pt', 'en') : Promise.resolve(p.primaryTagEn!),
    needItTag      ? autoTranslate(p.primaryTag, 'pt', 'it') : Promise.resolve(p.primaryTagIt!),
    needEnBody     ? autoTranslate(ptBody, 'pt', 'en') : Promise.resolve(p.bodyEn ?? ''),
    needItBody     ? autoTranslate(ptBody, 'pt', 'it') : Promise.resolve(p.bodyIt ?? ''),
  ]);

  return {
    ...p,
    title:        enTitle,
    titlePt:      ptTitle,
    titleIt:      itTitle,
    subtitle:     enSubtitle,
    subtitlePt:   ptSubtitle,
    subtitleIt:   itSubtitle,
    excerptEn:    enExcerpt,
    excerptPt:    ptExcerpt,
    excerptIt:    itExcerpt,
    primaryTagEn: enTag,
    primaryTagIt: itTag,
    // Only write back body fields when translateBody was requested.
    // Falls back to ptBody so EN/IT always have displayable content.
    ...(translateBody && {
      bodyEn: enBody || ptBody,
      bodyIt: itBody || ptBody,
    }),
  };
}
