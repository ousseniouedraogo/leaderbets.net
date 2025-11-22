
import React from 'react';
import { GAMES } from '../constants';
import { Game } from '../types';

const GameCard: React.FC<{ game: Game }> = ({ game }) => {
    return (
        <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative">
                <img className="h-48 w-full object-cover" src={game.image} alt={game.name} />
                <div className="absolute top-2 right-2 bg-slate-900/70 p-2 rounded-md">
                    <img src={game.logo} alt={`${game.bookmaker} logo`} className="h-6 object-contain" />
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{game.name}</h3>
                <p className="mt-2 text-gray-400 text-sm flex-grow">{game.description}</p>
                <a href={game.playLink} target="_blank" rel="noopener noreferrer" className="mt-4 w-full bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center">
                    Jouer maintenant
                    <span className="material-icons ml-2">play_arrow</span>
                </a>
            </div>
        </div>
    );
}


const GamesPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Jeux de Casino</h1>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Découvrez notre sélection des meilleurs jeux de casino en ligne pour une expérience de jeu palpitante.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {GAMES.map((game, index) => (
                    <GameCard key={index} game={game} />
                ))}
            </div>
        </div>
    );
};

export default GamesPage;
