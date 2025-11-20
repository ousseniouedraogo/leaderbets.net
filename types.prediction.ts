// Ajout d'un type enrichi pour les pronostics avec sport, statut, etc.
export type PredictionStatus = 'pending' | 'won' | 'lost';

export interface RichPrediction {
  id: number;
  date: string; // format YYYY-MM-DD
  time: string; // format HH:mm
  sport: string; // e.g. 'Football', 'Basketball'
  league: string;
  teamA: string;
  teamB: string;
  prediction: string; // e.g. '1', '2', 'X', 'Les deux marquent', etc.
  odds: number;
  status: PredictionStatus;
}
