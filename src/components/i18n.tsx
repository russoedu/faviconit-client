import i18n, { Module } from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '../assets/locales/en.json'
import translationPT from '../assets/locales/pt-br.json'

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
}

i18n
  .use(LanguageDetector as unknown as Module)
  .use(reactI18nextModule as unknown as Module)
  .init({
    resources,
    fallbackLng:   'en',
    ns:            ['translations'],
    defaultNS:     'translations',
    keySeparator:  false,
    interpolation: {
      escapeValue:     false,
      formatSeparator: '.',
    },
    react: {
      useSuspense: true,
    },
  })

export default i18n
