import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Home, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { t, isRTL } = useLanguage();

  return (
    <main className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-6">
        <HelpCircle className="w-8 h-8" />
      </div>

      <span className="font-mono text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
        404
      </span>

      <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {t('pageNotFound')}
      </h1>

      <p className="mt-3 text-base text-slate-500 max-w-md mx-auto">
        {t('pageNotFoundDesc')}
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Home className="w-4 h-4" />
          <span>{t('goToHomepage')}</span>
          {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </Link>
      </div>
    </main>
  );
}
