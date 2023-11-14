import type { LanguageFlag, VocabType } from '##/types/hell/i18n';
import DEFAULT_LANGUAGE_OBJ from '../../../src/i18n/locales/fr';
import { getEnumKeys } from '../../../src/lib/app-agnostic/typescript/getEnumKeys';

export enum ELanguagesFlag {
  fr,
  en
}

export const i18ns = {
  blogCategories: 'blog-categories',
  infos: '_infos',
  pagesTitles: 'pages-titles',
  themes: 'themes',
  vocab: 'vocab',
  manualSEO: 'manualSEO'
} as const satisfies Record<string, keyof VocabType>;

export const LANGUAGES: LanguageFlag[] = getEnumKeys(ELanguagesFlag) as LanguageFlag[];
export const DEFAULT_LANGUAGE: LanguageFlag = DEFAULT_LANGUAGE_OBJ._infos.lng;
