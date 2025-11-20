
import React, { useState, useEffect } from 'react';
import { BOOKMAKERS, GAMES } from '../constants';
import BookmakerCard from '../components/BookmakerCard';
import OfferSlider from '../components/OfferSlider';
import { Page, MatchPrediction, LiveScoreEvent, Game } from '../types';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const Livescore: React.FC = () => {
    const [scores, setScores] = useState<LiveScoreEvent[]>([]);
    const [loading, setLoading] = useState(true);

    // Données statiques simulées (Mock data)
    const MOCK_SCORES: LiveScoreEvent[] = [
        {
            id: 1,
            homeTeam: { name: 'Manchester City' },
            awayTeam: { name: 'Arsenal' },
            homeScore: { current: 2 },
            awayScore: { current: 1 },
            status: { description: "75'" },
            time: { minute: 75 }
        },
        {
            id: 2,
            homeTeam: { name: 'Real Madrid' },
            awayTeam: { name: 'FC Barcelone' },
            homeScore: { current: 1 },
            awayScore: { current: 1 },
            status: { description: "MT" }
        },
        {
            id: 3,
            homeTeam: { name: 'PSG' },
            awayTeam: { name: 'Marseille' },
            homeScore: { current: 3 },
            awayScore: { current: 0 },
            status: { description: "88'" },
            time: { minute: 88 }
        }
    ];

    useEffect(() => {
        // Simulation d'un chargement
        const timer = setTimeout(() => {
            setScores(MOCK_SCORES);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const renderContent = () => {
        if (loading) {
            return (
                <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-slate-700 p-3 rounded-md animate-pulse flex justify-between items-center">
                            <div className="h-4 bg-slate-600 rounded w-3/4"></div>
                            <div className="h-4 bg-slate-600 rounded w-8"></div>
                        </div>
                    ))}
                </div>
            );
        }

        if (scores.length === 0) {
            return <p className="text-center text-gray-400">Aucun match en direct pour le moment.</p>;
        }

        return (
            <div className="space-y-3">
                {scores.slice(0, 3).map(score => {
                    let timeDisplay = score.status.description;
                    if (timeDisplay.toLowerCase() === 'halftime') {
                        timeDisplay = 'MT';
                    }

                    return (
                        <div key={score.id} className="text-sm bg-slate-700 p-3 rounded-md flex justify-between items-center">
                            <div className="text-white truncate" title={`${score.homeTeam.name} vs ${score.awayTeam.name}`}>
                                <span className="font-medium">{score.homeTeam.name}</span>
                                <span className="font-bold text-amber-400 mx-2">{score.homeScore.current} - {score.awayScore.current}</span>
                                <span className="font-medium">{score.awayTeam.name}</span>
                            </div>
                            <div className="text-red-400 font-bold flex-shrink-0 ml-2">{timeDisplay}</div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="bg-slate-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                 <h3 className="text-xl font-bold flex items-center text-white">
                    <span className="material-icons text-red-500 mr-2 animate-pulse">online_prediction</span>
                    Livescores
                 </h3>
            </div>
            {renderContent()}
        </div>
    );
};

const FeaturedNews: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
    const newsItem = {
        title: "La CAN 2025 reportée ? Les dernières rumeurs",
        category: "Football Africain",
        excerpt: "Des sources proches de la CAF indiquent un possible report...",
        imageUrl: "https://picsum.photos/seed/can2025/600/400"
    };

    return (
        <div className="bg-slate-800 p-4 rounded-lg flex flex-col">
            <h3 className="text-xl font-bold flex items-center mb-4 text-white">
                <span className="material-icons text-amber-400 mr-2">feed</span>
                À la une
            </h3>
            <div className="relative rounded-lg overflow-hidden flex-grow min-h-[150px]">
                <img src={newsItem.imageUrl} alt={newsItem.title} className="absolute w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                    <span className="text-xs font-semibold bg-amber-400 text-slate-900 py-1 px-2 rounded-full">{newsItem.category}</span>
                    <h4 className="mt-2 font-bold text-base">{newsItem.title}</h4>
                </div>
            </div>
            <button
                onClick={() => setCurrentPage('Actualité')}
                className="mt-4 w-full bg-amber-400 text-slate-900 font-bold py-2.5 px-4 rounded-md hover:bg-amber-300 transition-colors flex items-center justify-center"
            >
                Lire plus
                <span className="material-icons ml-2 text-lg">arrow_forward</span>
            </button>
        </div>
    );
};

const FeaturedPredictions: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
    const [predictions, setPredictions] = useState<MatchPrediction[]>([]);
    const [loading, setLoading] = useState(true);

    // Données statiques simulées (Mock data)
    const MOCK_PREDICTIONS: MatchPrediction[] = [
        {
            id: 101,
            league: 'Premier League',
            teamA: 'Liverpool',
            teamB: 'Chelsea',
            prediction: '1',
            startDate: new Date().toISOString(),
            odds: { '1': 1.85, 'X': 3.60, '2': 4.20 }
        },
        {
            id: 102,
            league: 'La Liga',
            teamA: 'FC Barcelone',
            teamB: 'Atlético Madrid',
            prediction: 'X',
            startDate: new Date().toISOString(),
            odds: { '1': 2.10, 'X': 3.25, '2': 3.50 }
        },
        {
            id: 103,
            league: 'Serie A',
            teamA: 'Juventus',
            teamB: 'AC Milan',
            prediction: '2',
            startDate: new Date().toISOString(),
            odds: { '1': 2.40, 'X': 3.10, '2': 2.95 }
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setPredictions(MOCK_PREDICTIONS);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const formatPrediction = (prediction: string) => {
        const map: { [key: string]: string } = {
            '1': 'Victoire Domicile',
            'X': 'Match Nul',
            '2': 'Victoire Extérieur',
            '1X': 'Domicile ou Nul',
            'X2': 'Extérieur ou Nul',
            '12': 'Domicile ou Extérieur',
        };
        return map[prediction] || prediction;
    };
    
    const getPredictionOdd = (p: MatchPrediction) => {
        const key = p.prediction.toUpperCase();
        if (key === '1' || key === 'X' || key === '2') {
            return p.odds[key as keyof typeof p.odds];
        }
        return null;
    }

    const renderContent = () => {
        if (loading) {
            return (
                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-slate-700 p-4 rounded-md animate-pulse flex justify-between items-center">
                            <div className="h-4 bg-slate-600 rounded w-3/4"></div>
                            <div className="h-6 bg-slate-600 rounded w-12"></div>
                        </div>
                    ))}
                </div>
            );
        }

        if (predictions.length === 0) {
            return <p className="text-center text-gray-400">Aucun pronostic disponible pour le moment.</p>;
        }

        return (
            <div className="space-y-4">
                {predictions.map(p => {
                    const predictionOdd = getPredictionOdd(p);
                    return (
                        <div key={p.id} className="bg-slate-700 p-4 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div className="flex-grow">
                                <p className="text-xs text-gray-400">{p.league}</p>
                                <p className="font-bold text-white">{p.teamA} vs {p.teamB}</p>
                            </div>
                            <div className="flex items-center mt-2 sm:mt-0 sm:ml-4 text-center sm:text-right">
                                <span className="bg-blue-600 text-white text-xs font-semibold mr-4 px-2.5 py-1 rounded-full">{formatPrediction(p.prediction)}</span>
                                {predictionOdd && (
                                    <div className="flex flex-col items-center">
                                        <span className="font-bold text-amber-400 text-xl">{predictionOdd.toFixed(2)}</span>
                                        <span className="text-xs text-gray-400">Cote</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    };

    return (
        <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="material-icons text-amber-400 mr-2">insights</span>
                Nos derniers pronostics
            </h3>
            {renderContent()}
            <button
                onClick={() => setCurrentPage('Pronostics')}
                className="mt-6 w-full bg-amber-400 text-slate-900 font-bold py-3 px-4 rounded-md hover:bg-amber-300 transition-colors flex items-center justify-center"
            >
                Voir tous les pronostics
                <span className="material-icons ml-2">arrow_forward</span>
            </button>
        </div>
    );
};

const FeaturedGames: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
    // Order matters: Aviator first, then Chicken Road
    const featuredGamesNames = ['Aviator', 'Chicken Road'];
    const featuredGames = featuredGamesNames.map(name => GAMES.find(g => g.name === name)).filter((g): g is Game => !!g);

    if (featuredGames.length === 0) return null;

    return (
        <div className="space-y-8">
            {featuredGames.map(game => (
                <div 
                    key={game.name}
                    className="rounded-lg shadow-2xl overflow-hidden text-white relative bg-cover bg-center min-h-[350px] flex items-center justify-center text-center"
                    style={{ backgroundImage: `url(${game.image})` }}
                >
                    <div className="absolute inset-0 bg-black/70 z-0"></div>
                    <div className="relative z-10 p-8 flex flex-col items-center">
                        <img src={game.logo} alt={game.bookmaker + ' logo'} className="h-14 w-14 object-contain rounded-full border-2 border-white shadow mb-2 bg-white" />
                        <span className="material-icons text-amber-400 text-6xl animate-pulse">
                            {game.name === 'Aviator' ? 'rocket_launch' : 'restaurant'}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">
                            {game.name === 'Aviator' ? 'Prêt pour le Décollage ?' : 'Chicken Road'}
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                            {game.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a href={game.playLink} className="w-full sm:w-auto bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center transform hover:scale-105">
                                Jouer à {game.name}
                                <span className="material-icons ml-2">play_arrow</span>
                            </a>
                            <button
                                onClick={() => setCurrentPage('JEUX')}
                                className="w-full sm:w-auto bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-md hover:bg-amber-300 transition-colors flex items-center justify-center transform hover:scale-105"
                            >
                                Voir plus de jeux
                                <span className="material-icons ml-2">casino</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const featuredBookmakers = BOOKMAKERS.slice(0, 4);

  return (
    <div className="space-y-12">
      <section className="bg-gray-100 pt-8 pb-4">
        <OfferSlider />
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Livescore />
            <FeaturedNews setCurrentPage={setCurrentPage} />
        </div>
      </section>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Nos Bookmakers Partenaires</h2>
            <p className="mt-2 text-lg text-gray-600">Les meilleures offres et bonus, sélectionnés pour vous.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBookmakers.map(bm => (
                <BookmakerCard key={bm.name} bookmaker={bm} />
            ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedPredictions setCurrentPage={setCurrentPage} />
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedGames setCurrentPage={setCurrentPage} />
      </section>
    </div>
  );
};

export default HomePage;
