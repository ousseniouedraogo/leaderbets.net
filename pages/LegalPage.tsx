
import React from 'react';

const LegalPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <header className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Mentions Légales
                    </h1>
                    <div className="h-1 w-24 bg-amber-400 mx-auto rounded"></div>
                </header>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <p className="mb-4">
                            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), les mentions suivantes sont obligatoires pour tout site internet édité à titre professionnel ou non.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-amber-200 pb-1 inline-block">1. Identification de l'éditeur</h2>
                        <p className="mb-2">Le site <strong>Leaderbets.bet</strong> est édité par :</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>[Votre nom et prénom si personne physique, ou dénomination sociale si société]</li>
                            <li>[Adresse complète : rue, code postal, ville, pays]</li>
                            <li>bon.business95@gmail.com</li>
                            <li>[Si société : Forme juridique (ex. SARL), capital social, numéro SIRET/SIREN, RCS avec ville d'immatriculation, numéro de TVA intracommunautaire si applicable]</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-amber-200 pb-1 inline-block">2. Directeur de la publication</h2>
                        <p>Le directeur de la publication est [Votre nom et prénom, ou celui du représentant légal si société].</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-amber-200 pb-1 inline-block">3. Hébergement du site</h2>
                        <p>Le site est hébergé par :</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>[Nom de l'hébergeur, ex. OVH SAS]</li>
                            <li>[Adresse complète de l'hébergeur, ex. 2 rue Kellermann, 59100 Roubaix, France]</li>
                            <li>[Numéro de téléphone de l'hébergeur, ex. 1007]</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-amber-200 pb-1 inline-block">4. Données personnelles et RGPD</h2>
                        <p className="mb-4">
                            Conformément au Règlement Général sur la Protection des Données (RGPD) n°2016/679 et à la loi Informatique et Libertés modifiée, nous collectons et traitons vos données personnelles (ex. via formulaires de contact ou cookies) dans le respect de vos droits.
                        </p>
                        <p className="mb-4">
                            Vous disposez de droits d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition. Pour les exercer, contactez-nous.
                        </p>
                        <p className="mb-4">
                            Pour plus d'informations, consultez notre Politique de confidentialité.
                        </p>
                        <p>
                            Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (Commission Nationale de l'Informatique et des Libertés) à l'adresse <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.cnil.fr</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-amber-200 pb-1 inline-block">5. Propriété intellectuelle</h2>
                        <p>
                            Tous les éléments du site (textes, images, logos, etc.) sont protégés par le Code de la Propriété Intellectuelle et appartiennent à Leaderbets ou à des tiers ayant autorisé leur utilisation. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable, sous peine de poursuites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-amber-200 pb-1 inline-block">6. Affiliations et partenariats</h2>
                        <p>
                            Ce site participe à des programmes d'affiliation avec des bookmakers tels que 1xBet, Betwinner, Melbet et 1Win. Les liens affiliés présents sur le site peuvent générer une commission en cas d'inscription ou de paris effectués via ces liens. Cependant, nos recommandations et avis restent objectifs et basés sur des analyses indépendantes. Nous ne sommes pas responsables des contenus ou services des sites tiers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-amber-200 pb-1 inline-block">7. Paris sportifs et jeu responsable</h2>
                        <p className="mb-4">
                            Les informations fournies sur ce site sont à titre informatif et ne constituent pas une incitation à parier. Les paris sportifs sont interdits aux mineurs de moins de 18 ans et réglementés par l'Autorité Nationale des Jeux (ANJ) en France. Nous promouvons le jeu responsable : fixez-vous des limites, ne pariez pas plus que ce que vous pouvez perdre. En cas de dépendance, contactez Joueurs Info Service au 09 74 75 13 13 ou via <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.joueurs-info-service.fr</a>.
                        </p>
                        <p className="text-sm text-gray-500 italic">
                            Note : Certains bookmakers recommandés peuvent ne pas être agréés ANJ ; vérifiez la légalité dans votre juridiction avant de parier.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-amber-200 pb-1 inline-block">8. Limitation de responsabilité</h2>
                        <p>
                            Les informations publiées sur le site sont fournies à titre indicatif et sans garantie d'exactitude ou de complétude. Leaderbets ne saurait être tenu responsable des erreurs, omissions ou des dommages résultant de l'utilisation des informations ou des services des sites affiliés.
                        </p>
                    </section>

                    <div className="border-t border-gray-200 pt-6 mt-8 text-sm text-gray-500 text-center">
                        <p className="mb-2">Date de dernière mise à jour : <strong>19 novembre 2025</strong>.</p>
                        <p>Pour toute question, veuillez nous contacter à <a href="mailto:bon.business95@gmail.com" className="text-blue-600 hover:underline">bon.business95@gmail.com</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
