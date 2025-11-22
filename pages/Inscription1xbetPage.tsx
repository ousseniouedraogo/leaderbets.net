
import React from 'react';
import { BOOKMAKERS } from '../constants';

const Inscription1xbetPage: React.FC = () => {
    const bookmaker1xbet = BOOKMAKERS.find(b => b.name === '1XBET');
    const appLink = bookmaker1xbet ? bookmaker1xbet.appLink : '#';

    const inscriptionMethods = [
        {
            title: 'En un clic',
            details: [
                'Localisation : Burkina Faso',
                'Une devise : XOF',
                'Un code promo 1xbet Burkina : 365LUX.'
            ]
        },
        {
            title: 'Par téléphone',
            details: [
                'Numéro de téléphone : à valider grâce au code que le système enverra',
                'Monnaie des transactions : XOF',
                'Code promotionnel 1xbet : 365LUX.'
            ]
        },
        {
            title: 'Inscription par email',
            details: [
                'Localisation',
                'Courriel, téléphone, mot de passe',
                'Nom',
                'Code promotionnel au Burkina : 365LUX.'
            ]
        },
        {
            title: 'Réseaux sociaux',
            details: [
                'Messagerie : Google, VK, Mail.ru, OK, Yandex, Telegram',
                'Localisation',
                'Code 1xbet promo : 365LUX.'
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Inscription sur 1XBET</h1>
                    <p className="mt-2 text-lg text-gray-600">Votre guide complet pour créer un compte 1XBET au Burkina Faso.</p>
                </header>

                <section className="space-y-6">
                    <article className="p-6 bg-slate-50 rounded-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Quel terminal permet une 1xbet inscription ?</h2>
                        <p className="text-gray-700 mb-4">
                            Pour créer ton compte sur 1xbet, tu as le choix entre le site web du bookmaker <a href="https://bf.1xbet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">https://bf.1xbet.com</a> ou alors télécharger l’application qui correspond à ton smartphone, à savoir :
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>L’application mobile <strong>Android</strong> : rapidement disponible avec notre lien stable (Clique ici).</li>
                            <li>L’appli pour <strong>iOS</strong> que tu trouveras sur App Store.</li>
                        </ul>
                        <p className="mt-4 text-gray-700">
                            Tu peux également te servir de ton téléphone pour faire ton 1xbet mobile inscription avec la version mobile du site du bookmaker et mener des actions comme un grand sans perdre aucune fonctionnalité du site car les différentes voies d’accès au bookmaker mènent aux mêmes options.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Les 4 options d’inscription 1xbet au Burkina Faso</h2>
                        <p className="text-gray-700 mb-6 text-center">
                            Pour créer un compte 1xbet depuis le Faso, tu pourras utiliser l’une des méthodes que propose le 1xbet. Chaque méthode présente un compte différent qui se remarque à travers les informations à fournir sur le formulaire présenté.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {inscriptionMethods.map((method, index) => (
                                <div key={index} className="bg-slate-800 text-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-amber-400 mb-3">{method.title}</h3>
                                    <p className="font-semibold mb-2 text-gray-300">Informations nécessaires :</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                                        {method.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </article>
                </section>
                
                <div className="mt-10 text-center">
                    <a 
                        href={appLink} 
                        className="inline-flex items-center justify-center bg-green-500 text-white font-bold py-3 px-8 rounded-md hover:bg-green-600 transition-colors text-lg shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-0.5"
                    >
                        <span className="material-icons mr-2">download</span>
                        Télécharger l'application
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Inscription1xbetPage;
