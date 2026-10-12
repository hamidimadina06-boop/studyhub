import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SemesterPage from './pages/SemesterPage';
import ModulePage from './pages/ModulePage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <ScrollToTop />
      <Header />
      
      <div className="flex-1">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Explicit Semester routes */}
          <Route path="/semester-1" element={<SemesterPage forcedSemesterSlug="semester-1" />} />
          <Route path="/semester-2" element={<SemesterPage forcedSemesterSlug="semester-2" />} />
          
          {/* Generic Semester route */}
          <Route path="/semester/:semesterSlug" element={<SemesterPage />} />

          {/* Module details routes */}
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/semester-1/:moduleId" element={<ModulePage />} />
          <Route path="/semester-2/:moduleId" element={<ModulePage />} />

          {/* 404 Catch-All */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
