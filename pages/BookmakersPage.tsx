
import React from 'react';
import { BOOKMAKERS } from '../constants';
import { Bookmaker } from '../types';

// --- DATA SPECIFIQUE AU COMPARATEUR (SELON DEMANDE) ---
const COMPARATOR_DATA = [
    {
        name: '1XBET',
        rating: '9.8/10',
        title: "bienvenue 130% jusqu'à 130€ - Code promo 365LUX",
        pros: [
            "Large gamme de sports (plus de 50), paris en direct et streaming live gratuit.",
            "Support des cryptomonnaies (Bitcoin, Ethereum) pour dépôts/retraits rapides.",
            "Odds compétitifs et marchés diversifiés, y compris esports.",
            "App mobile fluide pour parier n'importe où."
        ],
        ctaLabel: "INSCRIS-TOI",
        targetBookmaker: "1XBET" // Pour récupérer le lien et le logo
    },
    {
        name: 'Betwinner',
        rating: '9.6/10',
        title: "Bonus de bienvenue 100% jusqu'à 130€ - Code promo JACKPOT77",
        pros: [
            "Plus de 50 événements live par jour en football et autres sports.",
            "Interface intuitive et navigation rapide, idéale pour débutants et pros.",
            "Nombreuses options de paiement sécurisées, y compris e-wallets.",
            "Promotions régulières comme cashback hebdomadaire."
        ],
        ctaLabel: "INSCRIS-TOI",
        targetBookmaker: "Betwinner"
    },
    {
        name: 'Melbet',
        rating: '9.5/10',
        title: "Bonus de bienvenue 130% jusqu'à 130€ - Code promo LUX365",
        pros: [
            "Plus de 50 sports couverts, avec odds élevés et streaming live intégré.",
            "Expérience mobile optimisée, app dédiée pour Android/iOS.",
            "Variété de jeux casino et bingo en plus des paris sportifs.",
            "Retraits rapides (dans les 24h) et support client 24/7 multilingue."
        ],
        ctaLabel: "INSCRIS-TOI",
        targetBookmaker: "Melbet"
    },
    {
        name: '1win',
        rating: '9.9/10',
        title: "Bonus de bienvenue 500% jusqu'à 2800$ sur 4 dépôts - Code promo LUX365",
        pros: [
            "Bonus massif sur plusieurs dépôts, parfait pour maximiser les gains.",
            "Diffusion live de matchs et événements esports directement sur la plateforme.",
            "Large sélection de sports (20+ disciplines) et paris virtuels.",
            "Promotions cashback et loyalty program pour les joueurs réguliers."
        ],
        ctaLabel: "INSCRIS-TOI",
        targetBookmaker: "1win"
    }
];

const ComparatorTile: React.FC<{ data: typeof COMPARATOR_DATA[0] }> = ({ data }) => {

    // Récupération dynamique du logo, du lien et du code promo depuis les constantes globales
    // Si le lien n'est pas trouvé, on met un lien par défaut
    const globalData = BOOKMAKERS.find(b => b.name === data.targetBookmaker);
    const logoUrl = globalData ? globalData.logo : '';
    const affiliateLink = globalData ? globalData.signupLink : '#';
    const promoCode = globalData ? globalData.promoCode : '';

    return (
        <div className="group relative bg-slate-900 rounded-xl border border-slate-700 overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/20 min-h-[400px]">
            {/* Effet de glow au survol */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10"></div>

            <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Header: Logo & Rating */}
                <div className="flex justify-between items-start mb-6">
                    <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <img 
                            src={logoUrl} 
                            alt={`Logo ${data.name} - Bonus paris sportifs`} 
                            className="h-10 w-auto object-contain" 
                        />
                    </div>
                    <div className="flex items-center bg-slate-800 px-3 py-1 rounded-full border border-slate-600">
                        <span className="text-amber-400 material-icons text-sm mr-1">star</span>
                        <span className="text-white font-bold text-sm">{data.rating}</span>
                    </div>
                </div>

                                {/* Title + Promo code */}
                                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                                        {data.title}
                                </h3>
                                {promoCode && (
                                    <div className="mb-4">
                                        <span className="inline-block bg-slate-700 text-amber-400 font-mono text-lg rounded px-3 py-1 tracking-widest border border-amber-400 select-all">
                                            {promoCode}
                                        </span>
                                    </div>
                                )}

                {/* Pros List */}
                <ul className="space-y-3 mb-8 flex-grow">
                    {data.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                            <span className="material-icons text-green-500 text-base mr-2 mt-0.5 flex-shrink-0">check_circle</span>
                            <span>{pro}</span>
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <a 
                    href={affiliateLink} 
                    aria-label={`S'inscrire sur ${data.name}`}
                    className="block w-full bg-red-600 hover:bg-red-700 text-white font-black text-center py-4 rounded-lg uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/60 animate-pulse hover:animate-none transform active:scale-95"
                >
                    {data.ctaLabel}
                </a>
            </div>
        </div>
    );
};

const DetailedBookmakerCard: React.FC<{ bookmaker: Bookmaker }> = ({ bookmaker }) => {
    return (
        <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700">
            <div className="p-6 bg-slate-800 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <img src={bookmaker.logo} alt={`${bookmaker.name} logo`} className="h-12 w-12 object-contain"/>
                  <h2 className="text-2xl font-bold ml-4 text-white">{bookmaker.name}</h2>
                </div>
                <div className="flex space-x-3">
                    <a href={bookmaker.appLink} className="bg-slate-600 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-500 transition-colors text-sm flex items-center">
                        <span className="material-icons text-base mr-1">download</span>
                        App
                    </a>
                    <a href={bookmaker.signupLink} className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-sm flex items-center">
                        <span className="material-icons text-base mr-1">person_add</span>
                        S'inscrire
                    </a>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-300 mb-6">{bookmaker.description}</p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <span className="material-icons text-amber-400 mr-3 mt-1">security</span>
                        <div>
                            <h4 className="font-semibold text-white">Sécurité</h4>
                            <p className="text-gray-400 text-sm">{bookmaker.features.security}</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <span className="material-icons text-amber-400 mr-3 mt-1">account_balance_wallet</span>
                        <div>
                            <h4 className="font-semibold text-white">Méthodes de Paiement</h4>
                            <p className="text-gray-400 text-sm">{bookmaker.features.payment}</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <span className="material-icons text-amber-400 mr-3 mt-1">star</span>
                        <div>
                            <h4 className="font-semibold text-white">Bonus & Avantages</h4>
                            <p className="text-gray-400 text-sm">{bookmaker.features.bonusDetails}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const BookmakersPage: React.FC = () => {
    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Analyse des Bookmakers</h1>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Découvrez en détail les avantages de chaque bookmaker pour faire le meilleur choix.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {BOOKMAKERS.map(bookmaker => (
                        <DetailedBookmakerCard key={bookmaker.name} bookmaker={bookmaker} />
                    ))}
                </div>

                {/* COMPARATEUR PREMIUM SECTION */}
                <section className="bg-slate-950 p-6 sm:p-10 rounded-3xl shadow-2xl border border-slate-800">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
                            🏆 Comparateur <span className="text-red-600">TOP Bookmakers</span>
                        </h2>
                        <p className="text-gray-400 text-sm">Sélection vérifiée par nos experts</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {COMPARATOR_DATA.map((data, index) => (
                            <ComparatorTile key={index} data={data} />
                        ))}
                    </div>

                    <div className="mt-12 text-center border-t border-slate-800 pt-6">
                        <p className="text-xs text-gray-500 flex items-center justify-center">
                            <span className="material-icons text-sm mr-1">info</span>
                            Offres valables en novembre 2025, vérifiez les termes sur le site du bookmaker. Jeu responsable recommandé.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BookmakersPage;
