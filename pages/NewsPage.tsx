
import React from 'react';

interface NewsPageProps {
    setCurrentPage?: (page: string) => void;
}

const NewsCard: React.FC<{ title: string; category: string; excerpt: string; imageUrl: string }> = ({ title, category, excerpt, imageUrl }) => {
    return (
        <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
            <div className="p-6">
                <span className="text-xs font-semibold text-amber-400 uppercase">{category}</span>
                <h3 className="mt-1 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-gray-400">{excerpt}</p>
                <a href="#" className="mt-4 inline-block text-green-400 hover:text-green-300 font-semibold">Lire la suite &rarr;</a>
            </div>
        </div>
    );
}

const NewsPage: React.FC<NewsPageProps> = ({ setCurrentPage }) => {
    const newsItems = [
        {
            title: "VAR : La Schizophrénie Européenne Exposée en Ligue des Champions : Deux Fautes de Main, Deux Verdicts Opposés",
            category: "Annonce",
            excerpt: "",
            imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
            isVAR: true
        },
        {
            title: "Le Nouveau Fair-Play Financier en Premier League : Vers un 'Ratio de Coût d'Effectif' Révolutionnaire ?",
            category: "Premier League",
            excerpt: "La Premier League introduit un nouveau système de contrôle financier basé sur le ratio de coût d'effectif. Découvrez ce que cela change pour les clubs et le marché des transferts.",
            imageUrl: "https://images.unsplash.com/photo-1505843277357-5b0ae1c6d98a?auto=format&fit=crop&w=600&q=80",
            isFairPlay: true
        },
        {
            title: "Achraf Hakimi, le Droitier Redéfini : Pourquoi son Ballon d’Or CAF 2025 Marque l’Histoire",
            category: "CAF Awards",
            excerpt: "Hakimi, latéral du PSG, remporte le Ballon d'Or africain 2025 et redéfinit le rôle du défenseur moderne. Découvrez pourquoi cette récompense marque l'histoire du football africain.",
            imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
            isHakimi: true
        },
        {
            title: "La Fierté du Continent : Maroc et Burkina Faso en Quarts du Mondial U17 avec Autorité",
            category: "Coupe du Monde U17",
            excerpt: "Le Maroc et le Burkina Faso brillent en se qualifiant pour les quarts du Mondial U17 2025. Découvrez comment la jeunesse africaine s'impose sur la scène mondiale.",
            imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
            isMondialU17: true
        },
        {
            title: "Cristiano Ronaldo, la Chasse aux 1000 Buts : L'Incroyable Course d'une Légende",
            category: "Record Mondial",
            excerpt: "À 947 buts, Ronaldo vise le sommet absolu du football mondial : les 1000 buts en carrière. Découvrez la course d'une légende.",
            imageUrl: "https://images.unsplash.com/photo-1517263904808-5dc0d6ae3b8b?auto=format&fit=crop&w=600&q=80",
            isRonaldo: true
        },
        {
            title: "La CAN 2025 reportée ? Les dernières rumeurs",
            category: "Football Africain",
            excerpt: "Des sources proches de la CAF indiquent un possible report de la Coupe d'Afrique des Nations. Voici ce que nous savons...",
            imageUrl: "https://picsum.photos/seed/can2025/600/400"
        },
        {
            title: "1XBET lance une promotion spéciale Ligue des Champions",
            category: "Promotions",
            excerpt: "Profitez de paris gratuits et de cotes boostées pour tous les matchs de la phase de groupes. Ne manquez pas cette occasion !",
            imageUrl: "https://picsum.photos/seed/promo1xbet/600/400"
        },
        {
            title: "Analyse du choc Liverpool vs Manchester City",
            category: "Premier League",
            excerpt: "Nos experts décortiquent le match le plus attendu du weekend en Premier League. Qui sortira vainqueur de ce duel au sommet ?",
            imageUrl: "https://picsum.photos/seed/lvrmci/600/400"
        }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Actualités Sportives</h1>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Restez informé des dernières nouvelles, promotions et événements du monde sportif.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item, index) => (
                    item.isVAR ? (
                        <div key={index} className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img className="h-48 w-full object-cover" src={item.imageUrl} alt={item.title} />
                            <div className="p-6">
                                <span className="text-xs font-semibold text-amber-400 uppercase">{item.category}</span>
                                <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                                <button
                                    className="mt-4 inline-block text-green-400 hover:text-green-300 font-semibold"
                                    onClick={() => setCurrentPage && setCurrentPage('VAR')}
                                >
                                    Lire la suite &rarr;
                                </button>
                            </div>
                        </div>
                    ) : item.isFairPlay ? (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img className="h-48 w-full object-cover" src={item.imageUrl} alt={item.title} />
                            <div className="p-6">
                                <span className="text-xs font-semibold text-purple-600 uppercase">{item.category}</span>
                                <h3 className="mt-1 text-xl font-bold text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.excerpt}</p>
                                <button
                                    className="mt-4 inline-block text-purple-600 hover:text-purple-500 font-semibold"
                                    onClick={() => setCurrentPage && setCurrentPage('FairPlayPremierLeague')}
                                >
                                    Lire la suite &rarr;
                                </button>
                            </div>
                        </div>
                    ) : item.isHakimi ? (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img className="h-48 w-full object-cover" src={item.imageUrl} alt={item.title} />
                            <div className="p-6">
                                <span className="text-xs font-semibold text-amber-600 uppercase">{item.category}</span>
                                <h3 className="mt-1 text-xl font-bold text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.excerpt}</p>
                                <button
                                    className="mt-4 inline-block text-amber-600 hover:text-amber-500 font-semibold"
                                    onClick={() => setCurrentPage && setCurrentPage('HakimiBallonDor')}
                                >
                                    Lire la suite &rarr;
                                </button>
                            </div>
                        </div>
                    ) : item.isMondialU17 ? (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img className="h-48 w-full object-cover" src={item.imageUrl} alt={item.title} />
                            <div className="p-6">
                                <span className="text-xs font-semibold text-green-600 uppercase">{item.category}</span>
                                <h3 className="mt-1 text-xl font-bold text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.excerpt}</p>
                                <button
                                    className="mt-4 inline-block text-green-600 hover:text-green-500 font-semibold"
                                    onClick={() => setCurrentPage && setCurrentPage('MondialU17Afrique')}
                                >
                                    Lire la suite &rarr;
                                </button>
                            </div>
                        </div>
                    ) : item.isRonaldo ? (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img className="h-48 w-full object-cover" src={item.imageUrl} alt={item.title} />
                            <div className="p-6">
                                <span className="text-xs font-semibold text-red-600 uppercase">{item.category}</span>
                                <h3 className="mt-1 text-xl font-bold text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.excerpt}</p>
                                <button
                                    className="mt-4 inline-block text-red-600 hover:text-red-500 font-semibold"
                                    onClick={() => setCurrentPage && setCurrentPage('Ronaldo1000Buts')}
                                >
                                    Lire la suite &rarr;
                                </button>
                            </div>
                        </div>
                    ) : (
                        <NewsCard key={index} {...item} />
                    )
                ))}
            </div>
        </div>
    );
};

export default NewsPage;