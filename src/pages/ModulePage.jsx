import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getModuleById, getSemesterById } from '../data/modulesData';
import Breadcrumbs from '../components/Breadcrumbs';
import ModuleDetail from '../components/ModuleDetail';

export default function ModulePage() {
  const { moduleId } = useParams();
  const { t, lang } = useLanguage();

  const module = getModuleById(moduleId);

  if (!module) {
    return <Navigate to="/404" replace />;
  }

  const semester = getSemesterById(module.semesterId);
  const backLabel = semester.number === 1 ? t('backToSemester1') : t('backToSemester2');
  const badgeText = `L1 / SEMESTER 0${semester.number} / ${module.title.toUpperCase()}`;
  const tagText = `${t('heroTag')} • ${t(semester.titleKey).toUpperCase()}`;

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        backTo={`/${semester.slug}`}
        backLabel={backLabel}
        badge={badgeText}
        tag={tagText}
      />

      {/* Module Detail Content */}
      <ModuleDetail module={module} />
    </main>
  );
}
