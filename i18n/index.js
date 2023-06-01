import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from '../locale/en.json'
import ptTranslations from '../locale/pt.json'
import esTranslations from '../locale/es.json'

i18n.use(initReactI18next).init({

    fallbackLng: 'pt',
    resources: {
        en: {
            ...enTranslations
        },
        pt: {
            ...ptTranslations
        },
        es: {
            ...esTranslations
        }
    },
    lang: 'pt'
})