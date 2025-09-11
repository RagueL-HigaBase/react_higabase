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
        resources: { en:{translation:en}, nl:{translation:nl}, pl:{translation:pl}, lv:{translation:lv}, lt:{translation:lt} },
        supportedLngs: ['en','nl','pl','lv','lt'],
        fallbackLng: 'en',
        load: 'currentOnly',
        cleanCode: true,
        lowerCaseLng: true,
        interpolation: { escapeValue: false },
        detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'], // ключ i18nextLng
        },
        react: { useSuspense: false },
        returnNull: false,
        debug: import.meta.env?.DEV ?? false,
});


export default i18n;

export const lngProps = [
    { value: "en", label: "English" },
    { value: "nl", label: "Dutch" },
    { value: "pl", label: "Polish" },
    { value: "lv", label: "Latvian" },
    { value: "lt", label: "Lithuanian" }
]
