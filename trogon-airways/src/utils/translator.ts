import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../../public/locales/en/translation.json';
import translationFR from '../../public/locales/fr/translation.json';
import translationES from '../../public/locales/es/translation.json';
import translationHT from '../../public/locales/ht/translation.json';

i18n
 .use(initReactI18next)
 .init({
  resources: {
   en: { translation: translationEN },
   fr: { translation: translationFR },
   es: { translation: translationES },
   ht: { translation: translationHT },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
 });

export default i18n;