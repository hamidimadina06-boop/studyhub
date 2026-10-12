import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getSemesterById, getModulesBySemester } from '../data/modulesData';
import Breadcrumbs from '../components/Breadcrumbs';
import ModuleCard from '../components/ModuleCard';

export default function SemesterPage({ forcedSemesterSlug }) {
  const { semesterSlug } = useParams();
  const activeSlug = forcedSemesterSlug || semesterSlug;
  const { t } = useLanguage();

  const semester = getSemesterById(activeSlug);

  // If semester slug is not valid, redirect to 404
  if (!semester) {
    return <Navigate to="/404" replace />;
  }

  const semesterModules = getModulesBySemester(semester.id);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        backTo="/"
        backLabel={t('backToHome')}
        badge={t(semester.badgeKey)}
        tag={`${t('heroTag')} • ${t(semester.titleKey).toUpperCase()}`}
      />

      {/* Semester Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t(semester.titleKey)}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-500">
          {t(semester.descriptionKey)}
        </p>
      </div>

      {/* Modules Grid */}
      {/* 
        Semester 1 displays exactly 5 cards:
        Analyse 1, Algèbre 1, Algo 1, Structure Machine, SE.
        Semester 2 displays exactly 7 cards:
        Analyse 2, Algèbre 2, Algo 2, Proba 1, Archi, LM, TCO.
      */}
      <div 
        data-testid="modules-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {semesterModules.map((mod) => (
          <ModuleCard key={mod.id} module={mod} />
        ))}
      </div>
    </main>
  );
}
