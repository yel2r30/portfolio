import { useEffect, useState } from 'react';
import { LanguageSelector } from '../components/LanguageSelector.jsx';
import { homeContent } from '../data/homeContent.js';

export function HomePage() {
  const [language, setLanguage] = useState('ko');
  const content = homeContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main>
      <h1>RIN Portfolio</h1>
      <p>{content.message}</p>
      <LanguageSelector
        currentLanguage={language}
        label={content.languageLabel}
        onLanguageChange={setLanguage}
      />
    </main>
  );
}
