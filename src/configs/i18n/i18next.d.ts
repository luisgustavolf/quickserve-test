import resources from './resources';
import enTranslation from '../i18n/en/translation.json';
import ptTranslation from '../i18n/pt/translation.json';

const resources = {
  translation: {
    ...enTranslation,
    ...ptTranslation
  },
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}