import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // English translations
    }
  },
  fr: {
    translation: {
      // French translations
    }
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    }
  });

// Expose the changeLanguage function
export const changeLanguage = (lng) => {
  return i18n.changeLanguage(lng);
};

export default i18n;