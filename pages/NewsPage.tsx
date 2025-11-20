
import React from 'react';

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

const NewsPage: React.FC = () => {
    const newsItems = [
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
                    <NewsCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default NewsPage;