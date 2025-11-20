
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PromoCodesPage from './pages/PromoCodesPage';
import BookmakersPage from './pages/BookmakersPage';
import PredictionsPage from './pages/PredictionsPage';
import GuidesPage from './pages/GuidesPage';
import NewsPage from './pages/NewsPage';
import GamesPage from './pages/GamesPage';
import Inscription1xbetPage from './pages/Inscription1xbetPage';
import AboutPage from './pages/AboutPage';
import LegalPage from './pages/LegalPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Accueil');

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
        return <NewsPage />;
      case 'JEUX':
        return <GamesPage />;
      case 'Inscription 1xbet':
        return <Inscription1xbetPage />;
      case 'A propos':
        return <AboutPage />;
      case 'Mentions légales':
        return <LegalPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;