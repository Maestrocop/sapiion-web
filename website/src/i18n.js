import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enWhy from './locales/en/why.json';
import enSolutions from './locales/en/solutions.json';
import enAbout from './locales/en/about.json';
import enContact from './locales/en/contact.json';

import nlCommon from './locales/nl/common.json';
import nlHome from './locales/nl/home.json';
import nlWhy from './locales/nl/why.json';
import nlSolutions from './locales/nl/solutions.json';
import nlAbout from './locales/nl/about.json';
import nlContact from './locales/nl/contact.json';

function detectLanguage() {
  const stored = localStorage.getItem('sapiion-lang');
  if (stored === 'nl' || stored === 'en') return stored;
  const hostname = window.location.hostname;
  if (hostname.endsWith('.nl') || hostname === 'sapiion.nl') return 'nl';
  return 'en';
}

i18n
  .use(initReactI18next)
  .init({
    lng: detectLanguage(),
    fallbackLng: 'en',
    resources: {
      en: { common: enCommon, home: enHome, why: enWhy, solutions: enSolutions, about: enAbout, contact: enContact },
      nl: { common: nlCommon, home: nlHome, why: nlWhy, solutions: nlSolutions, about: nlAbout, contact: nlContact },
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
