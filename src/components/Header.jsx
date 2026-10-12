import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search as SearchIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Search from './Search';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLanguage();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          aria-label="StudyHub Homepage"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            {t('siteTitle')}
          </span>
        </Link>

        {/* Center / Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <Search />
        </div>

        {/* Right Actions: Mobile search toggle + Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
            aria-label="Toggle search input"
          >
            <SearchIcon className="w-4 h-4" />
          </button>
          
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile search expanded drawer */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-3 pt-1 border-t border-slate-100 bg-white">
          <Search onClose={() => setMobileSearchOpen(false)} />
        </div>
      )}
    </header>
  );
}
