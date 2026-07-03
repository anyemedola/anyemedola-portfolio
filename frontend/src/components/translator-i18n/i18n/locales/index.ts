import en from './en/translations.json';
import pt from './pt/translations.json';
import it from './it/translations.json';
import resumeCreativeEn from './resumeCreative.en.json';
import resumeCreativePt from './resumeCreative.pt.json';
import resumeCreativeIt from './resumeCreative.it.json';
import resumeATSEn from './resumeATS.en.json';
import resumeATSPt from './resumeATS.pt.json';
import resumeATSIt from './resumeATS.it.json';

const translations = {
  en: { translations: en, resumeCreative: resumeCreativeEn, resumeATS: resumeATSEn },
  pt: { translations: pt, resumeCreative: resumeCreativePt, resumeATS: resumeATSPt },
  it: { translations: it, resumeCreative: resumeCreativeIt, resumeATS: resumeATSIt },
};

export default translations;
