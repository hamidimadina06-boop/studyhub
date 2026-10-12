import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, X, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { searchModules } from '../data/modulesData';

export default function Search({ isModal = false, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(isModal);
  const navigate = useNavigate();
  const { t, isRTL, lang } = useLanguage();
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (query.trim()) {
      setResults(searchModules(query));
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle escape key to close dropdown or modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        if (onClose) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (!isModal) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModal]);

  const handleSelectModule = (moduleId) => {
    setIsOpen(false);
    setQuery('');
    if (onClose) onClose();
    navigate(`/module/${moduleId}`);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <div className={`absolute ${isRTL ? 'right-3' : 'left-3'} pointer-events-none text-slate-400`}>
          <SearchIcon className="w-4 h-4" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={t('searchPlaceholder')}
          aria-label={t('searchPlaceholder')}
          className={`w-full py-2 ${isRTL ? 'pr-9 pl-9' : 'pl-9 pr-9'} bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm`}
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className={`absolute ${isRTL ? 'left-2.5' : 'right-2.5'} text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-100 transition`}
            aria-label={t('closeSearch')}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-slate-100 max-h-96 overflow-y-auto z-50 divide-y divide-slate-100">
          <div className="p-2.5 text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50/70">
            {t('searchResults')} ({results.length})
          </div>

          {results.length > 0 ? (
            results.map((mod) => (
              <button
                key={mod.id}
                type="button"
                onClick={() => handleSelectModule(mod.slug || mod.id)}
                className="w-full text-left p-3 hover:bg-blue-50/60 flex items-center justify-between gap-3 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-0.5 group-hover:bg-blue-100 transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {lang === 'ar' ? mod.titleAr : mod.title}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                        {mod.code}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {lang === 'ar' ? mod.descriptionAr : mod.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="text-slate-300 group-hover:text-blue-600 transition-colors shrink-0">
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </div>
              </button>
            ))
          ) : (
            <div className="p-6 text-center text-sm text-slate-500">
              {t('noResultsFound')} <span className="font-semibold text-slate-700">"{query}"</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
