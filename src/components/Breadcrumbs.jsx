import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Breadcrumbs({ backTo, backLabel, badge, tag }) {
  const { isRTL, t } = useLanguage();

  return (
    <div className="mb-8">
      {/* Top navigation row */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-500 mb-4">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{backLabel}</span>
        </Link>

        {badge && (
          <span className="text-slate-400 font-mono tracking-wider text-xs">
            {badge}
          </span>
        )}
      </div>

      {/* Tag pill */}
      {tag && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/70 border border-blue-100/60 text-blue-700 text-xs font-semibold tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span>{tag}</span>
        </div>
      )}
    </div>
  );
}
