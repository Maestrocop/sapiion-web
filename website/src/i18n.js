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

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esWhy from './locales/es/why.json';
import esSolutions from './locales/es/solutions.json';
import esAbout from './locales/es/about.json';
import esContact from './locales/es/contact.json';

import frCommon from './locales/fr/common.json';
import frHome from './locales/fr/home.json';
import frWhy from './locales/fr/why.json';
import frSolutions from './locales/fr/solutions.json';
import frAbout from './locales/fr/about.json';
import frContact from './locales/fr/contact.json';

import deCommon from './locales/de/common.json';
import deHome from './locales/de/home.json';
import deWhy from './locales/de/why.json';
import deSolutions from './locales/de/solutions.json';
import deAbout from './locales/de/about.json';
import deContact from './locales/de/contact.json';

const SUPPORTED = ['en', 'nl', 'es', 'fr', 'de'];

function detectLanguage() {
  const stored = localStorage.getItem('sapiion-lang');
  if (stored && SUPPORTED.includes(stored)) return stored;
  const hostname = window.location.hostname;
  if (hostname.endsWith('.nl') || hostname === 'sapiion.nl') return 'nl';
  if (hostname.endsWith('.es')) return 'es';
  if (hostname.endsWith('.fr')) return 'fr';
  if (hostname.endsWith('.de')) return 'de';
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
      es: { common: esCommon, home: esHome, why: esWhy, solutions: esSolutions, about: esAbout, contact: esContact },
      fr: { common: frCommon, home: frHome, why: frWhy, solutions: frSolutions, about: frAbout, contact: frContact },
      de: { common: deCommon, home: deHome, why: deWhy, solutions: deSolutions, about: deAbout, contact: deContact },
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
