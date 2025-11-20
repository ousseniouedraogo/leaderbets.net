
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <header className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        À propos de Leader<span className="text-amber-400">bets</span>
                    </h1>
                    <div className="h-1 w-24 bg-amber-400 mx-auto rounded"></div>
                </header>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
                    <p>
                        Bienvenue sur <strong>Leaderbets</strong>, votre guide ultime pour les paris sportifs en ligne !
                    </p>
                    <p>
                        Fondé par des passionnés de sport et d'analyse, notre site est dédié à vous aider à naviguer dans l'univers excitant des bookmakers. Que vous soyez un parieur débutant ou expérimenté, nous vous fournissons des revues honnêtes, des comparaisons détaillées et des astuces pour maximiser vos chances de gains.
                    </p>
                    <p>
                        Notre mission ? Vous orienter vers les meilleures plateformes comme <strong>1xBet, Betwinner, Melbet et 1Win</strong>, avec des bonus exclusifs et des codes promo vérifiés pour booster votre expérience.
                    </p>
                    <p>
                        En tant que site d'affiliation, nous collaborons avec des bookmakers fiables et réglementés, ce qui nous permet de vous offrir des liens sécurisés et des offres spéciales. Chaque recommandation est basée sur des tests réels, des analyses d'odds, de fonctionnalités et de service client. Nous mettons l'accent sur la transparence : nos revenus proviennent de commissions affiliées, mais cela n'influence jamais nos avis objectifs.
                    </p>
                    <p>
                        Chez <strong>Leaderbets</strong>, nous promouvons le jeu responsable. Les paris sportifs doivent rester un plaisir – jouez avec modération, fixez-vous des limites et n'hésitez pas à chercher de l'aide si besoin. Rejoignez-nous pour des pronostics pertinents, des actualités en direct et des stratégies gagnantes. Ensemble, transformons votre passion en opportunités !
                    </p>
                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-amber-400 mt-8">
                        <p className="font-medium">
                            Pour toute question, contactez-nous à <a href="mailto:bon.business95@gmail.com" className="text-blue-600 hover:underline">bon.business95@gmail.com</a>. Suivez-nous sur les réseaux pour ne rien manquer !
                        </p>
                        <p className="mt-4 font-bold text-slate-900 text-xl text-center">
                            Votre guide n°1 pour les paris sportifs en Afrique.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
