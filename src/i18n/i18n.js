import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './en.json';
import translationRU from './ru.json';



// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: '.', // keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;