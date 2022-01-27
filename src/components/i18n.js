import LocalizedStrings from "react-native-localization";
import en from '../language/en.json'
import ar from '../language/ar.json'
import hi from '../language/hi.json'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// let strings = new LocalizedStrings({
//     en: en,
//     ar: ar,
//     hi: hi
// });

// export default strings;

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: en,
        ar: ar,
    },
    interpolation: {
        escapeValue: false
    }
});

export default i18n;

