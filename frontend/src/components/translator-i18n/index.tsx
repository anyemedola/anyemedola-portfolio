'use client';

import './i18n';
import { useTranslation } from 'react-i18next';

interface TranslatorProps {
  path: string;
  options?: Record<string, unknown>;
  html?: boolean;
}

const Translator = ({ path, options, html }: TranslatorProps) => {
  const { t } = useTranslation();
  if (html) {
    return <span dangerouslySetInnerHTML={{ __html: t(path, options as never) }} />;
  }
  return <>{t(path, options)}</>;
};

export { Translator };
export default Translator;
