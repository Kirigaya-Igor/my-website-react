import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";
import translationRU from "./locales/ru/translation.json";

const resources = {
    ru: {translation: translationRU},
    en: {translation: translationEN},
    pl: {translation: translationPL},
};

// @ts-ignore
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        debug: false,
        detection: {
            order: ['localStorage', 'cookie'],
            cache: ['localStorage', 'cookie']
        },
        interpolation: {escapeValue: false}
    })

export default i18n;