// src/components/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('en')} className="mx-2 p-2 bg-blue-500 text-white rounded">
        English
      </button>
      <button onClick={() => changeLanguage('fr')} className="mx-2 p-2 bg-blue-500 text-white rounded">
        French
      </button>
      {/* Add more buttons for other languages */}
    </div>
  );
};

export default LanguageSelector;