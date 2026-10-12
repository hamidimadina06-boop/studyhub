import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      aria-label={`Switch to ${lang === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe className="w-4 h-4 text-blue-600" />
      <span>{t('switchLang')}</span>
    </button>
  );
}
