
export type Page = 'Accueil' | 'Codes promos' | 'Bookmakers' | 'Pronostics' | 'Guide et astuces' | 'Actualité' | 'JEUX' | 'Inscription 1xbet' | 'A propos' | 'Mentions légales' | 'VAR' | 'FairPlayPremierLeague' | 'HakimiBallonDor' | 'MondialU17Afrique' | 'Ronaldo1000Buts';

export interface Bookmaker {
  name: string;
  logo: string;
  bonus: string;
  promoCode: string;
  signupLink: string;
  appLink: string;
  popular: boolean;
  bestChoice: boolean;
  description: string;
  features: {
    security: string;
    payment: string;
    bonusDetails: string;
  };
}

export interface Offer {
    bookmaker: string;
    title: string;
    description: string;
    endDate: Date;
    logo: string;
    promoCode: string;
    link: string;
}

export interface MatchPrediction {
    id: number;
    league: string;
    teamA: string;
    teamB: string;
    prediction: string;
    startDate: string;
    odds: {
      '1': number;
      'X': number;
      '2': number;
    };
}

export interface Guide {
    title: string;
    content: string;
}

export interface Game {
  name: string;
  image: string;
  description: string;
  playLink: string;
  bookmaker: string;
  logo: string;
}

export interface LiveScoreEvent {
  id: number;
  homeTeam: { name:string };
  awayTeam: { name: string };
  homeScore: { current: number };
  awayScore: { current: number };
  status: { description: string };
  time?: {
    minute?: number;
    injuryTime?: number;
  };
}