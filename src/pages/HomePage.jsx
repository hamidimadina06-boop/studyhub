import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { semesters } from '../data/modulesData';
import SemesterCard from '../components/SemesterCard';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 border border-blue-100/70 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span>{t('heroTag')}</span>
        </div>

        {/* Big Portal Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t('portalTitle')}
        </h1>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
          {t('portalDescription')}
        </p>

        {/* Callout Prompt with Graduation Cap */}
        <div className="mt-8 inline-flex items-center gap-2 text-sm text-blue-600 font-medium">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          <span>{t('selectSemesterPrompt')}</span>
        </div>
      </div>

      {/* 2 Semesters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
        {semesters.map((sem) => (
          <SemesterCard key={sem.id} semester={sem} />
        ))}
      </div>
    </main>
  );
}
