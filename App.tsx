
import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Page } from './types';
import { usePageMetadata } from './hooks/usePageMetadata';

// Lazy load all the page components
const HomePage = lazy(() => import('./pages/HomePage'));
const PromoCodesPage = lazy(() => import('./pages/PromoCodesPage'));
const BookmakersPage = lazy(() => import('./pages/BookmakersPage'));
const PredictionsPage = lazy(() => import('./pages/PredictionsPage'));
const GuidesPage = lazy(() => import('./pages/GuidesPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const VARArticlePage = lazy(() => import('./pages/VARArticlePage'));
const FairPlayPremierLeaguePage = lazy(() => import('./pages/FairPlayPremierLeaguePage'));
const HakimiBallonDorPage = lazy(() => import('./pages/HakimiBallonDorPage'));
const MondialU17AfriquePage = lazy(() => import('./pages/MondialU17AfriquePage'));
const Ronaldo1000ButsPage = lazy(() => import('./pages/Ronaldo1000ButsPage'));
const GamesPage = lazy(() => import('./pages/GamesPage'));
const Inscription1xbetPage = lazy(() => import('./pages/Inscription1xbetPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));

const App: React.FC = () => {
  const location = useLocation();
  const currentPage = location.pathname.substring(1) as Page;
  usePageMetadata(currentPage, `Description for ${currentPage}`); // Placeholder description

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/codes-promos" element={<PromoCodesPage />} />
            <Route path="/bookmakers" element={<BookmakersPage />} />
            <Route path="/pronostics" element={<PredictionsPage />} />
            <Route path="/guide-et-astuces" element={<GuidesPage />} />
            <Route path="/actualite" element={<NewsPage />} />
            <Route path="/jeux" element={<GamesPage />} />
            <Route path="/inscription-1xbet" element={<Inscription1xbetPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="/var" element={<VARArticlePage />} />
            <Route path="/fair-play-premier-league" element={<FairPlayPremierLeaguePage />} />
            <Route path="/hakimi-ballon-dor" element={<HakimiBallonDorPage />} />
            <Route path="/mondial-u17-afrique" element={<MondialU17AfriquePage />} />
            <Route path="/ronaldo-1000-buts" element={<Ronaldo1000ButsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
