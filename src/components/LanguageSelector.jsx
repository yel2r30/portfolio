import { languages } from '../data/homeContent.js';

export function LanguageSelector({ currentLanguage, label, onLanguageChange }) {
  return (
    <div role="group" aria-label={label} className="languages">
      {languages.map(({ code, label: languageName }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={currentLanguage === code}
          onClick={() => onLanguageChange(code)}
        >
          {languageName}
        </button>
      ))}
    </div>
  );
}
