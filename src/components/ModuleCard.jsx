import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ModuleIcon } from './ModuleIcons';

export default function ModuleCard({ module }) {
  const { t, isRTL, lang } = useLanguage();

  return (
    <Link
      to={`/module/${module.slug || module.id}`}
      className="group flex flex-col justify-between p-5 sm:p-6 bg-white rounded-2xl border border-slate-150/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-blue-200 transition-card focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`${lang === 'ar' ? module.titleAr : module.title} - ${module.code}`}
    >
      <div>
        {/* Module Icon in rounded square */}
        <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100/60 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-100/80 transition-colors">
          <ModuleIcon type={module.iconType} className="w-5 h-5" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {lang === 'ar' ? module.titleAr : module.title}
        </h3>
        
        {/* Short info pill */}
        <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400 font-mono">
          <span>{module.code}</span>
          <span>•</span>
          <span>{module.credits}</span>
        </div>
      </div>

      {/* Action link */}
      <div className="mt-8 pt-3 flex items-center justify-between border-t border-slate-50 text-slate-400 group-hover:text-blue-600 font-medium text-xs sm:text-sm transition-colors">
        <span>{t('openModule')}</span>
        <span className="transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
          {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </span>
      </div>
    </Link>
  );
}
