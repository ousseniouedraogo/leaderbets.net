import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BOOKMAKERS, GAMES } from '../constants';
import BookmakerCard from '../components/BookmakerCard';
import OfferSlider from '../components/OfferSlider';
import { Game } from '../types';
import { RichPrediction } from '../types.prediction';
import { MOCK_PREDICTIONS } from '../data/predictions';
import { usePageMetadata } from '../hooks/usePageMetadata';

const FeaturedNews: React.FC = () => {
    const navigate = useNavigate();
    const newsItem = { title: "La CAN 2025 reportée ?", category: "Football Africain", imageUrl: "https://picsum.photos/seed/can2025/600/400" };

    return (
        <div className="bg-slate-800 p-4 sm:p-6 rounded-lg flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold flex items-center mb-4 text-white"><span className="material-icons text-amber-400 mr-2">feed</span>À la une</h3>
            <div className="relative rounded-lg overflow-hidden flex-grow min-h-[200px]">
                <img src={newsItem.imageUrl} alt={newsItem.title} className="absolute w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                    <span className="text-xs font-semibold bg-amber-400 text-slate-900 py-1 px-2 rounded-full">{newsItem.category}</span>
                    <h4 className="mt-2 font-bold text-lg sm:text-xl">{newsItem.title}</h4>
                </div>
            </div>
            <button onClick={() => navigate('/actualite')} className="mt-4 w-full bg-amber-400 text-slate-900 font-bold py-3 px-4 rounded-md hover:bg-amber-300 transition-colors flex items-center justify-center">
                Lire plus<span className="material-icons ml-2 text-lg">arrow_forward</span>
            </button>
        </div>
    );
};

const FeaturedPredictions: React.FC = () => {
    const navigate = useNavigate();
    const [predictions, setPredictions] = useState<RichPrediction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            const todays = MOCK_PREDICTIONS.filter(p => p.date === '2025-11-22').slice(0, 2);
            setPredictions(todays);
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const formatPrediction = (p: string) => ({ '1': 'Victoire Domicile', 'X': 'Nul', '2': 'Victoire Extérieur' }[p] || p);

    return (
        <div className="bg-slate-800 p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center"><span className="material-icons text-amber-400 mr-2">insights</span>Nos derniers pronostics</h3>
            {loading ? <p>Chargement...</p> : (
                <div className="space-y-4">
                    {predictions.map(p => (
                        <div key={p.id} className="bg-slate-700 p-4 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div className="mb-2 sm:mb-0">
                                <p className="text-xs text-gray-400">{p.league} • {p.time}</p>
                                <p className="font-bold text-white text-base sm:text-lg">{p.teamA} vs {p.teamB}</p>
                            </div>
                            <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full self-start sm:self-center">{formatPrediction(p.prediction)}</span>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={() => navigate('/pronostics')} className="mt-6 w-full bg-amber-400 text-slate-900 font-bold py-3 px-4 rounded-md hover:bg-amber-300 transition-colors flex items-center justify-center">
                Voir tous les pronostics<span className="material-icons ml-2">arrow_forward</span>
            </button>
        </div>
    );
};

const FeaturedGames: React.FC = () => {
    const navigate = useNavigate();
    const featuredGames = [GAMES.find(g => g.name === 'Aviator'), GAMES.find(g => g.name === 'Chicken Road')].filter(Boolean) as Game[];

    return (
        <div className="space-y-8">
            {featuredGames.map(game => (
                <div key={game.name} className="rounded-lg shadow-2xl overflow-hidden text-white relative bg-cover bg-center min-h-[350px] flex items-center justify-center text-center" style={{ backgroundImage: `url(${game.image})` }}>
                    <div className="absolute inset-0 bg-black/70 z-0"></div>
                    <div className="relative z-10 p-4 sm:p-8 flex flex-col items-center">
                        <img src={game.logo} alt={`${game.bookmaker} logo`} className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full border-2 border-white shadow mb-2 bg-white" />
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-4 mb-3">{game.name}</h3>
                        <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm sm:text-base">{game.description}</p>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <a href={game.playLink} className="bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-colors w-full sm:w-auto">Jouer à {game.name}</a>
                            <button onClick={() => navigate('/jeux')} className="bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-md hover:bg-amber-300 transition-colors w-full sm:w-auto">Voir plus de jeux</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const HomePage: React.FC = () => {
  usePageMetadata('Leaderbets.bet - Meilleurs Codes Promo & Bonus Bookmakers', 'Découvrez les meilleurs codes promo et bonus des bookmakers. Leaderbets.bet vous offre des analyses, pronostics et guides pour optimiser vos paris sportifs.');
  const featuredBookmakers = BOOKMAKERS.slice(0, 4);

  return (
    <div className="space-y-12 my-8">
      <section className="bg-gray-100 pt-8 pb-4"><OfferSlider /></section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedNews />
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Nos Bookmakers Partenaires</h1>
            <p className="mt-2 text-lg text-gray-600">Les meilleures offres, sélectionnées pour vous.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBookmakers.map(bm => <BookmakerCard key={bm.name} bookmaker={bm} />)}
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8"><FeaturedPredictions /></section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8"><FeaturedGames /></section>
    </div>
  );
};

export default HomePage;
