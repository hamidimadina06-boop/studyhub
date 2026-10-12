import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SemesterCard({ semester }) {
  const { t, isRTL } = useLanguage();

  return (
    <Link
      to={`/${semester.slug}`}
      className="group relative flex flex-col justify-between p-6 sm:p-8 bg-white rounded-2xl border border-slate-150/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-blue-200 transition-card focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`${t(semester.titleKey)} - ${t(semester.termKey)}`}
    >
      <div>
        {/* Number badge */}
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-base mb-6 group-hover:scale-105 transition-transform">
          {semester.number}
        </div>

        {/* Title & Term */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {t(semester.titleKey)}
        </h2>
        <p className="text-sm text-slate-400 mt-1 font-medium">
          {t(semester.termKey)}
        </p>
      </div>

      {/* Footer link row */}
      <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-50 text-blue-600 font-medium text-sm">
        <span className="flex items-center gap-1.5 group-hover:underline">
          {t(semester.enterKey)}
          {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </span>
        <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
