
import React, { useState } from 'react';
import { RichPrediction, PredictionStatus } from '../types.prediction';

const MOCK_PREDICTIONS: RichPrediction[] = [
    {
        id: 1,
        date: '2025-11-20',
        time: '18:00',
        sport: 'Football',
        league: 'Premier League',
        teamA: 'Liverpool',
        teamB: 'Chelsea',
        prediction: '1',
        odds: 1.85,
        status: 'won',
    },
    {
        id: 2,
        date: '2025-11-20',
        time: '20:45',
        sport: 'Football',
        league: 'Ligue 1',
        teamA: 'PSG',
        teamB: 'Lyon',
        prediction: '2',
        odds: 4.50,
        status: 'lost',
    },
    {
        id: 3,
        date: '2025-11-21',
        time: '19:30',
        sport: 'Basketball',
        league: 'NBA',
        teamA: 'Lakers',
        teamB: 'Warriors',
        prediction: 'V1',
        odds: 1.60,
        status: 'pending',
    },
    {
        id: 4,
        date: '2025-11-21',
        time: '21:00',
        sport: 'Football',
        league: 'La Liga',
        teamA: 'Real Madrid',
        teamB: 'Barcelone',
        prediction: 'Les deux marquent',
        odds: 1.90,
        status: 'pending',
    },
];

const getUniqueDates = (preds: RichPrediction[]) =>
    Array.from(new Set(preds.map(p => p.date))).sort();

const statusBadge = (status: PredictionStatus) => {
    if (status === 'won') return <span className="ml-2 px-2 py-0.5 rounded bg-green-500 text-white text-xs font-bold">Validé</span>;
    if (status === 'lost') return <span className="ml-2 px-2 py-0.5 rounded bg-red-500 text-white text-xs font-bold">Non validé</span>;
    return <span className="ml-2 px-2 py-0.5 rounded bg-gray-400 text-white text-xs font-bold">En attente</span>;
};

const PredictionsPage: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(getUniqueDates(MOCK_PREDICTIONS)[0]);
    const dates = getUniqueDates(MOCK_PREDICTIONS);
    const predictions = MOCK_PREDICTIONS.filter(p => p.date === selectedDate);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Pronostics par jour</h1>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Sélectionnez une date pour voir les pronostics du jour.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {dates.map(date => (
                    <button
                        key={date}
                        className={`px-4 py-2 rounded font-bold border ${date === selectedDate ? 'bg-amber-400 text-slate-900 border-amber-400' : 'bg-slate-700 text-white border-slate-700 hover:bg-amber-300 hover:text-slate-900'}`}
                        onClick={() => setSelectedDate(date)}
                    >
                        {new Date(date).toLocaleDateString('fr-FR', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' })}
                    </button>
                ))}
            </div>
            <div className="space-y-6">
                {predictions.length === 0 ? (
                    <div className="text-center text-gray-400">Aucun pronostic pour cette date.</div>
                ) : (
                    predictions.map(pred => (
                        <div key={pred.id} className="bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-block px-2 py-0.5 rounded bg-blue-600 text-white text-xs font-bold">{pred.sport}</span>
                                    <span className="inline-block px-2 py-0.5 rounded bg-slate-700 text-white text-xs">{pred.league}</span>
                                    {statusBadge(pred.status)}
                                </div>
                                <div className="font-bold text-lg text-white">{pred.teamA} <span className="text-amber-400">vs</span> {pred.teamB}</div>
                                <div className="text-sm text-gray-400 mt-1">{pred.time} | {pred.league}</div>
                            </div>
                            <div className="flex flex-col items-end mt-4 md:mt-0">
                                <div className="text-sm text-gray-300 mb-1">Pronostic :</div>
                                <div className="text-xl font-bold text-amber-400 mb-1">{pred.prediction}</div>
                                <div className="text-sm text-gray-300">Cote : <span className="font-bold text-white">{pred.odds}</span></div>
                                <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors shadow">
                                    Placer un pari maintenant
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default PredictionsPage;
