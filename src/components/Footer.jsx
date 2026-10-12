import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-slate-100 bg-white/50 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
