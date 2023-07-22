import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, vi } from './locales';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: 'en', // Get the first device language
  fallbackLng: 'en',
  compatibilityJSON: 'v3', // By default React Native projects does not support Intl
});

export default i18n;
