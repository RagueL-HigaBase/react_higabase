import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import nl from "./locales/nl/translation.json";
import pl from "./locales/pl/translation.json";
import lv from "./locales/lv/translation.json";
import lt from "./locales/lt/translation.json";


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
        en: { translation: en },
        nl: { translation: nl }, 
        pl: { translation: pl },
        lv: { translation: lv },
        lt: { translation: lt },

        },
        supportedLngs: ['en', 'nl', 'lv', 'lt'], 
        nonExplicitSupportedLngs: true,
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
        detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
        },
        react: { useSuspense: false },
    })

export default i18n;
