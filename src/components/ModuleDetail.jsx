import React, { useState } from 'react';
import { 
  Youtube, 
  FileText, 
  ArrowUpRight, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Download, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ModuleIcon } from './ModuleIcons';

export default function ModuleDetail({ module }) {
  const { t, isRTL, lang } = useLanguage();
  const [downloadNotice, setDownloadNotice] = useState(null);

  const handleResourceClick = (title, url) => {
    // Show temporary feedback toast and open link if available
    setDownloadNotice(title);
    setTimeout(() => setDownloadNotice(null), 3000);
    if (url && url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-12">
      {/* Toast Notification when clicking resource */}
      {downloadNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm animate-fade-in border border-slate-700">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Opening <strong>{downloadNotice}</strong>...</span>
        </div>
      )}

      {/* Module Hero Banner */}
      <div className="bg-white rounded-2xl border border-slate-150 p-6 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <ModuleIcon type={module.iconType} className="w-7 h-7" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {lang === 'ar' ? module.titleAr : module.title}
                </h1>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-mono text-xs font-semibold">
                  {module.code} • {module.credits}
                </span>
              </div>
              <p className="mt-2.5 text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
                {lang === 'ar' ? module.descriptionAr : module.descriptionEn}
              </p>
            </div>
          </div>

          {/* Stat boxes on the right */}
          <div className="flex items-center gap-3 self-start lg:self-center bg-slate-50 p-2 rounded-xl border border-slate-100">
            <div className="px-4 py-2 text-center rounded-lg bg-white border border-slate-150/70 shadow-xs">
              <div className="text-lg font-bold text-slate-900">{module.channels?.length || 0}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{t('channelsCount')}</div>
            </div>
            <div className="px-4 py-2 text-center rounded-lg bg-white border border-slate-150/70 shadow-xs">
              <div className="text-lg font-bold text-slate-900">{module.chapters?.length || 0}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{t('chaptersCount')}</div>
            </div>
            <div className="px-4 py-2 text-center rounded-lg bg-white border border-slate-150/70 shadow-xs">
              <div className="text-lg font-bold text-slate-900">{module.exams?.length || 0}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{t('examsCount')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: Recommended YouTube Channels */}
      <section aria-labelledby="channels-heading">
        <div className="flex items-center gap-3 mb-6">
          <h2 id="channels-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
            {t('recommendedChannels')}
          </h2>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            {module.channels?.length} {t('channelsCount')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {module.channels?.map((channel) => (
            <div
              key={channel.id}
              className="flex flex-col justify-between p-5 bg-white rounded-2xl border border-slate-150/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-blue-200 transition-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                    {channel.category}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 line-clamp-1">
                  {channel.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {channel.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label={`${t('watchChannel')} - ${channel.title}`}
                >
                  <span>{t('watchChannel')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Courses & Lecture Notes */}
      <section aria-labelledby="courses-heading">
        <div className="flex items-center gap-3 mb-6">
          <h2 id="courses-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
            {t('coursesAndNotes')}
          </h2>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            {module.chapters?.length} {t('chaptersCount')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {module.chapters?.map((chapter) => (
            <div
              key={chapter.id}
              className="flex flex-col justify-between p-5 sm:p-6 bg-white rounded-2xl border border-slate-150/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-blue-200 transition-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50/70 border border-blue-100/60 px-2 py-0.5 rounded-full">
                    {chapter.tag}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {chapter.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {chapter.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">{chapter.meta}</span>
                <button
                  type="button"
                  onClick={() => handleResourceClick(chapter.title, chapter.downloadUrl)}
                  className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                  aria-label={`${t('openResource')} ${chapter.title}`}
                >
                  <span>{t('openResource')}</span>
                  {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Previous Exams & Tests */}
      <section aria-labelledby="exams-heading">
        <div className="flex items-center gap-3 mb-6">
          <h2 id="exams-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
            {t('previousExams')}
          </h2>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            {module.exams?.length} {t('examsCount')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {module.exams?.map((exam) => (
            <div
              key={exam.id}
              className="flex flex-col justify-between p-5 bg-white rounded-2xl border border-slate-150/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-blue-200 transition-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {exam.year}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-bold text-base text-slate-900 line-clamp-1">
                  {exam.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {exam.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-500">{exam.session}</span>
                <button
                  type="button"
                  onClick={() => handleResourceClick(exam.title, exam.downloadUrl)}
                  className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                  aria-label={`${t('openResource')} ${exam.title}`}
                >
                  <span>{t('openResource')}</span>
                  {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
