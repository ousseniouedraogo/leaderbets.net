
import React, { useState, useEffect, lazy, Suspense } from 'react';
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
  const [currentPage, setCurrentPage] = useState<Page>('Accueil');
  usePageMetadata(currentPage, `Description for ${currentPage}`); // Placeholder description

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Accueil':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'Codes promos':
        return <PromoCodesPage />;
      case 'Bookmakers':
        return <BookmakersPage />;
      case 'Pronostics':
        return <PredictionsPage />;
      case 'Guide et astuces':
        return <GuidesPage />;
      case 'Actualité':
        return <NewsPage setCurrentPage={setCurrentPage} />;
      case 'JEUX':
        return <GamesPage />;
      case 'Inscription 1xbet':
        return <Inscription1xbetPage />;
      case 'A propos':
        return <AboutPage />;
      case 'Mentions légales':
        return <LegalPage />;
      case 'VAR':
        return <VARArticlePage />;
      case 'FairPlayPremierLeague':
        return <FairPlayPremierLeaguePage />;
      case 'HakimiBallonDor':
        return <HakimiBallonDorPage />;
      case 'MondialU17Afrique':
        return <MondialU17AfriquePage />;
      case 'Ronaldo1000Buts':
        return <Ronaldo1000ButsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
