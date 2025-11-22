
import React, { useState } from 'react';
import { BOOKMAKERS, GAMES } from '../constants';

const GuidesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('1XBET');

    const renderContent = () => {
        // Variables for Bookmaker logic
        const bookmaker = BOOKMAKERS.find(b => b.name === activeTab);
        const signupLink = bookmaker ? bookmaker.signupLink : '#';
        const appLink = bookmaker ? bookmaker.appLink : '#';
        const promoCode = bookmaker ? bookmaker.promoCode : 'JACKPOT77';

        // --- GUIDE AVIATOR (1win) ---
        if (activeTab === 'Aviator') {
             const aviatorLink = "https://1wadip.com/?open=register&p=d0wk";

             return (
                <div className="space-y-12 animate-fadeIn text-left font-sans">
                    {/* Header Section */}
                    <header className="text-center border-b border-gray-200 pb-8">
                        <div className="flex justify-center mb-4">
                            <img src="/assets/chicken%20road.jpg" alt="Chicken Road jeu" className="h-24 rounded-xl shadow-md object-contain" />
                        </div>
                        <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">NOUVEAU GUIDE 2025</div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                            🛩️ Tutoriel Aviator 1win : <br/>
                            <span className="text-blue-600">Le Guide Ultime en Francs CFA</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                            Inscrivez-vous avec le code <span className="bg-amber-400 px-2 font-bold text-slate-900">LUX365</span>, déposez en FCFA, et décollez vers le multiplicateur <strong className="text-red-600">x100</strong> !
                        </p>
                        <div className="flex justify-center">
                            <a href={aviatorLink} className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center">
                                <span className="material-icons mr-2">rocket_launch</span>
                                Jouer avec le Bonus 500%
                            </a>
                        </div>
                    </header>

                    {/* 1. Pourquoi jouer sur 1win */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">1</span>
                            Pourquoi jouer à Aviator sur 1win ?
                        </h3>
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="p-4 font-semibold">🎲 Caractéristique</th>
                                        <th className="p-4 font-semibold">📋 Détail</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm md:text-base">
                                    <tr className="bg-gray-50">
                                        <td className="p-4 font-bold text-slate-700">RTP 97 %</td>
                                        <td className="p-4">Parmi les plus élevés du marché (Taux de retour joueur)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-slate-700">Mises dès 100 FCFA</td>
                                        <td className="p-4">Parfait pour tester une stratégie sans risque</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-4 font-bold text-slate-700">Double mise & Cash-out</td>
                                        <td className="p-4">Sécurisez vos gains en vol avec deux boutons indépendants</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-slate-700">Chat & Stats Live</td>
                                        <td className="p-4">Copiez les pilotes qui cartonnent en temps réel</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-4 font-bold text-slate-700">Application 5 Mo</td>
                                        <td className="p-4">Fluide même sur connexion 3G</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-900 italic rounded-r-lg flex items-start">
                            <span className="material-icons mr-2">lightbulb</span>
                            <p><strong>Le secret :</strong> Aviator est LE jeu le plus rapide pour faire x100 en quelques secondes !</p>
                        </div>
                    </section>

                    {/* 2. Inscription Express */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">2</span>
                            Inscription express (≤ 1 min) avec code LUX365
                        </h3>
                        <div className="overflow-x-auto bg-white shadow-sm rounded-lg border border-gray-200">
                            <table className="w-full text-sm md:text-base">
                                <thead>
                                    <tr className="bg-blue-600 text-white">
                                        <th className="p-3 w-16 text-center">#</th>
                                        <th className="p-3 text-left">Action à réaliser</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-4 text-center font-bold text-blue-600">①</td>
                                        <td className="p-4">Cliquez sur le <a href={aviatorLink} className="text-blue-600 underline font-bold">mirror 1win CFA</a> (France, Sénégal, CI, Cameroun...)</td>
                                    </tr>
                                    <tr className="bg-blue-50">
                                        <td className="p-4 text-center font-bold text-blue-600">②</td>
                                        <td className="p-4">Devise : <strong>XOF</strong> → choisissez « Inscription rapide »</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-center font-bold text-blue-600">③</td>
                                        <td className="p-4">
                                            Collez <span className="bg-amber-400 px-2 py-1 rounded font-bold text-slate-900 select-all">LUX365</span> dans la case « Code promo »
                                        </td>
                                    </tr>
                                    <tr className="bg-blue-50">
                                        <td className="p-4 text-center font-bold text-blue-600">④</td>
                                        <td className="p-4">Numéro + SMS → validez → votre compte est ouvert</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-center font-bold text-blue-600">⑤</td>
                                        <td className="p-4">Déposez <strong>1 000 FCFA mini</strong> → bonus 500 % jusqu'à <strong>750 000 FCFA</strong> crédités instantanément</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 3. Principe du jeu */}
                    <section className="bg-slate-900 text-white p-6 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                            <span className="bg-amber-400 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">3</span>
                            Principe du jeu Aviator en 30 secondes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <ol className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="material-icons text-green-400 mr-2">flight_takeoff</span>
                                        <span>Un avion décolle ; le multiplicateur grimpe de <strong>x1,00 → ∞</strong>.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-icons text-green-400 mr-2">touch_app</span>
                                        <span>Pariez <strong>1 ou 2 mises</strong> avant le décollage.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-icons text-green-400 mr-2">paid</span>
                                        <span>Cliquez sur <strong>« Encaisser »</strong> avant que l'avion ne parte.</span>
                                    </li>
                                </ol>
                                <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20 text-center">
                                    <p className="text-2xl font-mono text-amber-400 font-bold">Gain = Mise × Multiplicateur</p>
                                </div>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                <p className="text-red-400 font-bold mb-2 flex items-center"><span className="material-icons mr-1">warning</span> Attention :</p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• S'il s'écrase avant votre cash-out → vous perdez la mise.</li>
                                    <li>• Le prochain round commence dans 5 secondes.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 4. Fonctions indispensables */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">4</span>
                            Fonctions indispensables à maîtriser
                        </h3>
                         <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-100 text-gray-700 uppercase">
                                    <tr>
                                        <th className="px-4 py-3">⚙️ Fonction</th>
                                        <th className="px-4 py-3">📝 Utilité</th>
                                        <th className="px-4 py-3 hidden sm:table-cell">💡 Astuce</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Auto-Cash-out</td>
                                        <td className="px-4 py-3">Encaisse automatiquement à une cote précise (ex: x2.00)</td>
                                        <td className="px-4 py-3 hidden sm:table-cell text-green-600">Combinez avec la mise 2 pour sécuriser</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Double Mise</td>
                                        <td className="px-4 py-3">Pariez 2 montants différents en même temps</td>
                                        <td className="px-4 py-3 hidden sm:table-cell text-green-600">Mise 1 : x1.50 (sécu) – Mise 2 : x5+ (chasse)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Statistiques</td>
                                        <td className="px-4 py-3">Historique des 100 derniers crashs</td>
                                        <td className="px-4 py-3 hidden sm:table-cell text-green-600">Repérez les zones « froides » ({'>'} 20 rounds sans x10)</td>
                                    </tr>
                                     <tr>
                                        <td className="px-4 py-3 font-bold">Chat intégré</td>
                                        <td className="px-4 py-3">Discutez et copiez les paris des autres</td>
                                        <td className="px-4 py-3 hidden sm:table-cell text-green-600">@PiloteGold partage ses cibles tous les jours</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 5. Stratégies */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">5</span>
                            Stratégies gagnantes testées
                        </h3>
                        <p className="mb-4 text-sm text-gray-600">💰 <strong>Bankroll de départ simulée :</strong> 10 000 FCFA</p>
                        
                        <div className="grid grid-cols-1 gap-4">
                            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-800 text-white">
                                        <tr>
                                            <th className="px-4 py-3">🎲 Stratégie</th>
                                            <th className="px-4 py-3">💵 Mise</th>
                                            <th className="px-4 py-3">🎯 Cible</th>
                                            <th className="px-4 py-3">⚠️ Risque</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        <tr>
                                            <td className="px-4 py-3 font-bold">Sécurité</td>
                                            <td className="px-4 py-3">1 000 F</td>
                                            <td className="px-4 py-3 text-blue-600 font-bold">x1.50</td>
                                            <td className="px-4 py-3"><span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Faible</span></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-bold">Martingale lente</td>
                                            <td className="px-4 py-3">500 F (double si perte)</td>
                                            <td className="px-4 py-3 text-blue-600 font-bold">x2.00</td>
                                            <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Moyen</span></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-bold">Chasse Gros</td>
                                            <td className="px-4 py-3">200 F</td>
                                            <td className="px-4 py-3 text-blue-600 font-bold">x10.00</td>
                                            <td className="px-4 py-3"><span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">Élevé</span></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-bold">Double Split</td>
                                            <td className="px-4 py-3">500 F + 500 F</td>
                                            <td className="px-4 py-3 text-blue-600 font-bold">x1.80 / x5.00</td>
                                            <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Moyen</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="mt-4 bg-slate-800 text-white p-4 rounded-lg flex justify-between items-center flex-wrap gap-4">
                             <span className="font-bold text-amber-400">🔥 Règle d'or</span>
                             <div className="flex space-x-4">
                                 <span className="bg-red-600 px-3 py-1 rounded text-sm">Stop-loss: -50%</span>
                                 <span className="bg-green-600 px-3 py-1 rounded text-sm">Take-profit: +100%</span>
                             </div>
                        </div>
                    </section>

                    {/* 6. Exemple Stratégie Optimale */}
                    <section className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 rounded-xl shadow-md">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                            <span className="material-icons mr-2 text-amber-500">diamond</span>
                            6. Exemple de stratégie optimale : « Le Pilote Prudent »
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-gray-700 border-b border-gray-200 pb-2 mb-2">Configuration :</h4>
                                <ul className="list-none space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-24 font-semibold text-sm text-gray-500">Mise 1 :</span>
                                        <span className="font-bold">500 FCFA</span>
                                        <span className="mx-2">→</span>
                                        <span>Auto-cash-out à <strong className="text-green-600">x1.80</strong> (Sécurité)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-24 font-semibold text-sm text-gray-500">Mise 2 :</span>
                                        <span className="font-bold">500 FCFA</span>
                                        <span className="mx-2">→</span>
                                        <span>Auto-cash-out à <strong className="text-amber-600">x5.00</strong> (Jackpot)</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded border border-green-200">
                                <h4 className="font-bold text-green-800 mb-2">Résultats attendus sur 10 rounds :</h4>
                                <ul className="text-sm text-green-900 space-y-1">
                                    <li>✅ Mise 1 réussie : 7/10 fois → +2 800 FCFA</li>
                                    <li>✅ Mise 2 réussie : 2/10 fois → +4 000 FCFA</li>
                                    <li className="pt-2 border-t border-green-200 font-bold mt-2 text-lg">💰 Profit net : +1 800 FCFA (18% de ROI)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 7. Dépôts et Retraits */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">7</span>
                            Dépôts & retraits en Francs CFA (0 % frais)
                        </h3>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="px-4 py-3">💳 Moyen</th>
                                        <th className="px-4 py-3">📥 Dépôt mini</th>
                                        <th className="px-4 py-3">📤 Retrait mini</th>
                                        <th className="px-4 py-3">⏱️ Délai</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-orange-600">Orange Money</td>
                                        <td className="px-4 py-3">1 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">Instant</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-yellow-600">MTN / Moov</td>
                                        <td className="px-4 py-3">1 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">Instant</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-blue-500">Wave</td>
                                        <td className="px-4 py-3">1 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">Instant</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-green-600">USDT (TRC20)</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">5 min</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-gray-600">Visa / Master</td>
                                        <td className="px-4 py-3">1 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">15m - 24h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2 text-xs text-gray-500">*Limites : Max 50 000 000 FCFA par retrait crypto. Retraits illimités par semaine.</p>
                    </section>

                    {/* 8. Tutoriel Visuel (Timeline) */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">8</span>
                            Tutoriel visuel : Votre 1er vol en 4 étapes
                        </h3>
                        <div className="relative border-l-4 border-blue-200 ml-4 md:ml-8 pl-8 space-y-8">
                            {/* Step 1 */}
                            <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <span className="absolute -left-11 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">1</span>
                                <h4 className="font-bold text-lg mb-2 text-slate-800">Ouverture 1win</h4>
                                <p className="text-gray-600">Connectez-vous à l'application et touchez l'icône <strong className="text-red-600">« Aviator »</strong> dans le menu haut.</p>
                            </div>
                             {/* Step 2 */}
                             <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <span className="absolute -left-11 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">2</span>
                                <h4 className="font-bold text-lg mb-2 text-slate-800">Configuration</h4>
                                <p className="text-gray-600">Entrez Mise : <strong>1 000 F</strong>. Activez l'Auto-cash-out à <strong>x2.50</strong>.</p>
                            </div>
                             {/* Step 3 */}
                             <div className="relative bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
                                <span className="absolute -left-11 top-1/2 -translate-y-1/2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">3</span>
                                <h4 className="font-bold text-lg mb-2 text-green-800">Décollage réussi !</h4>
                                <p className="text-green-700">L'avion atteint x2.50. Vous gagnez automatiquement <strong>2 500 F</strong> ✅</p>
                            </div>
                             {/* Step 4 */}
                             <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <span className="absolute -left-11 top-1/2 -translate-y-1/2 bg-amber-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">4</span>
                                <h4 className="font-bold text-lg mb-2 text-slate-800">Retrait Express</h4>
                                <p className="text-gray-600">Direction Caisse → Orange Money. Argent reçu en <strong>30 secondes</strong> 🎉</p>
                            </div>
                        </div>
                    </section>

                    {/* 9. Checklist */}
                    <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
                            <span className="material-icons mr-2 text-indigo-600">fact_check</span>
                            Check-list « Décollage réussi »
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-center bg-white p-3 rounded shadow-sm">
                                <span className="material-icons text-green-500 mr-3">check_circle</span>
                                <span className="text-gray-700 text-sm">Compte créé avec <strong>LUX365</strong> (Bonus 500%)</span>
                            </div>
                            <div className="flex items-center bg-white p-3 rounded shadow-sm">
                                <span className="material-icons text-green-500 mr-3">check_circle</span>
                                <span className="text-gray-700 text-sm">KYC validé (CNI) pour retrait libre</span>
                            </div>
                            <div className="flex items-center bg-white p-3 rounded shadow-sm">
                                <span className="material-icons text-green-500 mr-3">check_circle</span>
                                <span className="text-gray-700 text-sm">Bankroll séparée des dépenses de vie</span>
                            </div>
                            <div className="flex items-center bg-white p-3 rounded shadow-sm">
                                <span className="material-icons text-green-500 mr-3">check_circle</span>
                                <span className="text-gray-700 text-sm">Auto-cash-out fixé (x2 – x3)</span>
                            </div>
                            <div className="flex items-center bg-white p-3 rounded shadow-sm">
                                <span className="material-icons text-green-500 mr-3">check_circle</span>
                                <span className="text-gray-700 text-sm">Stop-loss journalier défini (-50%)</span>
                            </div>
                             <div className="flex items-center bg-white p-3 rounded shadow-sm">
                                <span className="material-icons text-green-500 mr-3">check_circle</span>
                                <span className="text-gray-700 text-sm">Retrait USDT testé (5 min chrono)</span>
                            </div>
                        </div>
                    </section>

                    {/* 10. Conseils de Pro (Dos and Don'ts) */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">10</span>
                            Conseils de pro pour maximiser vos gains
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             {/* Errors */}
                            <div className="border border-red-200 rounded-lg overflow-hidden">
                                <div className="bg-red-50 p-3 border-b border-red-100 font-bold text-red-800 flex items-center">
                                    <span className="material-icons mr-2">cancel</span> Les erreurs à éviter
                                </div>
                                <ul className="p-4 space-y-3">
                                    <li className="flex text-sm text-gray-700"><span className="text-red-500 font-bold mr-2">❌</span> Courir après les pertes</li>
                                    <li className="flex text-sm text-gray-700"><span className="text-red-500 font-bold mr-2">❌</span> Viser systématiquement x10+</li>
                                    <li className="flex text-sm text-gray-700"><span className="text-red-500 font-bold mr-2">❌</span> Parier toute sa bankroll (All-in)</li>
                                    <li className="flex text-sm text-gray-700"><span className="text-red-500 font-bold mr-2">❌</span> Jouer sans auto-cash-out</li>
                                </ul>
                            </div>
                            {/* Good Practices */}
                            <div className="border border-green-200 rounded-lg overflow-hidden">
                                <div className="bg-green-50 p-3 border-b border-green-100 font-bold text-green-800 flex items-center">
                                    <span className="material-icons mr-2">check_circle</span> Les bonnes pratiques
                                </div>
                                <ul className="p-4 space-y-3">
                                    <li className="flex text-sm text-gray-700"><span className="text-green-500 font-bold mr-2">✅</span> Respecter son stop-loss</li>
                                    <li className="flex text-sm text-gray-700"><span className="text-green-500 font-bold mr-2">✅</span> Encaisser régulièrement à x2-x3</li>
                                    <li className="flex text-sm text-gray-700"><span className="text-green-500 font-bold mr-2">✅</span> Ne jamais miser plus de 5%</li>
                                    <li className="flex text-sm text-gray-700"><span className="text-green-500 font-bold mr-2">✅</span> Analyser les 100 derniers rounds</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Advanced Tips */}
                        <div className="mt-6 bg-slate-800 text-white p-6 rounded-lg">
                            <h4 className="font-bold text-amber-400 mb-3 flex items-center"><span className="material-icons mr-2">school</span> Astuces des joueurs expérimentés</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <strong className="block text-lg mb-1">🎯 Technique du "Double Sécurisé"</strong>
                                    <p className="text-sm text-gray-400">70% de la mise sur x1.80 (Taux réussite 75%)<br/>30% de la mise sur x5.00 (Taux réussite 20%)</p>
                                </div>
                                <div>
                                    <strong className="block text-lg mb-1">📊 Analyse des patterns</strong>
                                    <p className="text-sm text-gray-400">Après une série de 5-7 rounds &lt; x2, augmentez légèrement la mise. Ne tombez pas dans le piège du "c'est bientôt mon tour".</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section className="text-center py-8 bg-gradient-to-b from-transparent to-blue-50 rounded-xl">
                        <h3 className="text-3xl font-black text-slate-900 mb-4">Prêt à décoller ?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Aviator est le jeu le plus rapide pour faire fortune, mais aussi le plus volatil. 
                            Avec le code <strong className="text-amber-600">LUX365</strong>, 1win vous offre <span className="underline decoration-amber-400 decoration-4">750 000 FCFA</span> de bonus pour amortir les turbulences !
                        </p>
                        
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-white border-2 border-dashed border-amber-500 p-4 rounded-lg shadow-sm">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Code Promo Activé</p>
                                <div className="text-4xl font-mono font-black text-slate-900 tracking-[0.2em] select-all cursor-pointer">LUX365</div>
                            </div>
                            <a href={aviatorLink} className="w-full max-w-md bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transform hover:-translate-y-1 transition-all flex justify-center items-center text-lg">
                                <span className="material-icons mr-2">flight_takeoff</span>
                                S'inscrire & Jouer Maintenant
                            </a>
                        </div>
                    </section>

                    {/* Support & Legal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-3 flex items-center"><span className="material-icons mr-2 text-blue-600">support_agent</span> Support Aviator 1win</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>💬 Chat en direct 24/7 (français)</li>
                                <li>📧 E-mail : support@1win.com</li>
                                <li>📱 WhatsApp/Telegram : assistance instantanée</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-3 flex items-center"><span className="material-icons mr-2 text-red-600">gavel</span> Avertissements importants</h4>
                            <p className="text-xs text-gray-500 mb-2">18+ uniquement | Jouer comporte des risques.</p>
                            <ul className="text-xs text-gray-500 list-disc list-inside">
                                <li>Ne jouez jamais avec l'argent dont vous avez besoin.</li>
                                <li>Limitez votre temps de jeu (max 1h/jour).</li>
                                <li>En cas de problème : contactez SOS Joueurs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
             );
        }

        // --- GUIDE CHICKEN ROAD (Melbet) ---
        if (activeTab === 'Chicken Road') {
             const chickenLink = "https://refpa3665.com/L?tag=d_4951527m_126157c_&site=4951527&ad=126157";

             return (
                <div className="space-y-12 animate-fadeIn text-left font-sans">
                    {/* Header Section */}
                    <header className="text-center border-b border-gray-200 pb-8">
                        <div className="flex justify-center mb-4">
                            <img src="/assets/chicken-road.jpg" alt="Chicken Road jeu" className="h-24 rounded-xl shadow-md object-contain" />
                        </div>
                        <div className="inline-block bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">NOUVEAU JEU 2025</div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                            🐔 Tutoriel Chicken Road sur Melbet 2025 <br/>
                            <span className="text-amber-600">Version spéciale CFA avec code LUX365</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                            Inscrivez-vous, déposez en Francs CFA, et faites traverser la poule sans qu'elle se fasse écraser !
                        </p>
                        <div className="flex justify-center">
                            <a href={chickenLink} className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center">
                                <span className="material-icons mr-2">play_arrow</span>
                                Jouer avec le Bonus 200%
                            </a>
                        </div>
                    </header>

                    {/* 1. Pourquoi jouer à Chicken Road sur Melbet ? */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">1</span>
                            Pourquoi jouer à Chicken Road sur Melbet ?
                        </h3>
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-amber-400 text-slate-900">
                                    <tr>
                                        <th className="p-4 font-semibold">🎲 Caractéristique</th>
                                        <th className="p-4 font-semibold">📋 Détail</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm md:text-base">
                                    <tr className="bg-gray-50">
                                        <td className="p-4 font-bold text-slate-700">RTP 96 %</td>
                                        <td className="p-4">Crash-game 100 % hasard, sessions ultra-rapides</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-slate-700">Mises dès 100 FCFA</td>
                                        <td className="p-4">Idéal pour tester une stratégie</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-4 font-bold text-slate-700">Double-bet & cash-out partiel</td>
                                        <td className="p-4">Sécurisez un profit même si la 2e mise crash</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-slate-700">Statistiques en direct</td>
                                        <td className="p-4">Anticipez les creux et pics avec la courbe live</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-4 font-bold text-slate-700">Appli Melbet 6 Mo</td>
                                        <td className="p-4">Fluide sur 3G, disponible en français</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-900 italic rounded-r-lg flex items-start">
                            <span className="material-icons mr-2">lightbulb</span>
                            <p><strong>Le concept :</strong> Un jeu simple et addictif où chaque seconde compte !</p>
                        </div>
                    </section>

                    {/* 2. Inscription express (90 secondes) */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">2</span>
                            Inscription express avec code LUX365 (90 secondes)
                        </h3>
                        <div className="overflow-x-auto bg-white shadow-sm rounded-lg border border-gray-200">
                            <table className="w-full text-sm md:text-base">
                                <thead>
                                    <tr className="bg-slate-800 text-white">
                                        <th className="p-3 w-16 text-center">#</th>
                                        <th className="p-3 text-left">Action à réaliser</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-4 text-center font-bold text-amber-600">①</td>
                                        <td className="p-4">Cliquez sur le <a href={chickenLink} className="text-amber-600 underline font-bold">mirror Melbet Afrique</a> (CI, Sénégal, Cameroun, Mali...)</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-4 text-center font-bold text-amber-600">②</td>
                                        <td className="p-4">Inscription 1-clic → pays → devise <strong>XOF</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-center font-bold text-amber-600">③</td>
                                        <td className="p-4">
                                            Tapez <span className="bg-amber-400 px-2 py-1 rounded font-bold text-slate-900 select-all">LUX365</span> dans le champ « Code promo » → validez
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-4 text-center font-bold text-amber-600">④</td>
                                        <td className="p-4">SMS/e-mail → confirmez → compte activé</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-center font-bold text-amber-600">⑤</td>
                                        <td className="p-4">1er dépôt <strong>1 000 FCFA mini</strong> → bonus <strong>200 % jusqu'à 130 000 FCFA</strong> crédités</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 3. Principe du jeu */}
                    <section className="bg-slate-900 text-white p-6 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                            <span className="bg-amber-400 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">3</span>
                            Principe du jeu Chicken Road en 20 secondes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h4 className="font-bold text-amber-400 mb-3">🐔 Comment ça marche ?</h4>
                                <ol className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="font-bold text-amber-400 mr-2">1.</span>
                                        <span>Une poule démarre sur une route ; des multiplicateurs apparaissent (<strong>x1,01 → ∞</strong>)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-amber-400 mr-2">2.</span>
                                        <span>Placez <strong>1 ou 2 mises</strong> avant le début du tour</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-amber-400 mr-2">3.</span>
                                        <span>Cliquez « <strong>Encaisser</strong> » avant que la poule se fasse écraser</span>
                                    </li>
                                </ol>
                                <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20 text-center">
                                    <p className="text-2xl font-mono text-amber-400 font-bold">Gain = mise × multiplicateur affiché</p>
                                </div>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                <ul className="space-y-4 text-sm text-gray-300">
                                    <li className="flex items-start"><span className="material-icons text-red-500 mr-2">close</span> <strong>4.</strong> Pas de cash-out = <strong>perte de la mise</strong></li>
                                    <li className="flex items-start"><span className="material-icons text-blue-400 mr-2">timer</span> <strong>5.</strong> Nouveau tour toutes les <strong>8-12 secondes</strong></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 4. Fonctions indispensables */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">4</span>
                            Fonctions indispensables à maîtriser
                        </h3>
                         <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-100 text-gray-700 uppercase">
                                    <tr>
                                        <th className="px-4 py-3">⚙️ Fonction</th>
                                        <th className="px-4 py-3">📝 Utilité</th>
                                        <th className="px-4 py-3 hidden sm:table-cell">💡 Astuce</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Auto-Cash-out</td>
                                        <td className="px-4 py-3">Encaisse automatiquement à x2,00</td>
                                        <td className="px-4 py-3 hidden sm:table-cell text-amber-600">Combinez avec mise 2 pour viser x5+</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Double Mise</td>
                                        <td className="px-4 py-3">Pariez 2 montants différents</td>
                                        <td className="px-4 py-3 hidden sm:table-cell text-amber-600">Mise 1 : x1,60 (sécu) – Mise 2 : x10 (chasse)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Historique</td>
                                        <td className="px-4 py-3">50 derniers crashs repérés</td>
                                        <td className="px-4 py-3 hidden sm:table-cell text-amber-600">Repérez les « froids » {'>'} 15 tours sans x8</td>
                                    </tr>
                                     <tr>
                                        <td className="px-4 py-3 font-bold">Demo gratuite</td>
                                        <td className="px-4 py-3">Testez sans risque</td>
                                        <td className="px-4 py-3 hidden sm:table-cell text-amber-600">Activez le mode « Fun » dans le lobby Melbet</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 5. Stratégies gagnantes */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">5</span>
                            Stratégies gagnantes testées
                        </h3>
                        <p className="mb-4 text-sm text-gray-600">💰 <strong>Bankroll de départ :</strong> 10 000 FCFA</p>
                        
                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="px-4 py-3">🎲 Stratégie</th>
                                        <th className="px-4 py-3">💵 Mise totale</th>
                                        <th className="px-4 py-3">🎯 Cible</th>
                                        <th className="px-4 py-3">📊 Fréquence</th>
                                        <th className="px-4 py-3">⚠️ Risque</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Sécurité</td>
                                        <td className="px-4 py-3">1 000 F</td>
                                        <td className="px-4 py-3 font-bold">x1,50</td>
                                        <td className="px-4 py-3">10 rounds</td>
                                        <td className="px-4 py-3"><span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Faible</span></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Cashen 2×</td>
                                        <td className="px-4 py-3">500 F → x2,00 auto</td>
                                        <td className="px-4 py-3 font-bold">x2,00</td>
                                        <td className="px-4 py-3">5 rounds</td>
                                        <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Moyen</span></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Chasse x10</td>
                                        <td className="px-4 py-3">200 F</td>
                                        <td className="px-4 py-3 font-bold">x10</td>
                                        <td className="px-4 py-3">50 rounds</td>
                                        <td className="px-4 py-3"><span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">Élevé</span></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold">Split 50/50</td>
                                        <td className="px-4 py-3">500 F (x1,80) + 500 F (x6)</td>
                                        <td className="px-4 py-3 font-bold">simultané</td>
                                        <td className="px-4 py-3">10 rounds</td>
                                        <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Moyen</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 7. Dépôts et Retraits */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">7</span>
                            Dépôts & retraits en Francs CFA (0 % frais)
                        </h3>
                         <h4 className="font-bold text-gray-700 mb-2 flex items-center"><span className="material-icons mr-2">bar_chart</span> Tableau complet des méthodes</h4>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="px-4 py-3">💳 Moyen</th>
                                        <th className="px-4 py-3">📥 Dépôt mini</th>
                                        <th className="px-4 py-3">📤 Retrait mini</th>
                                        <th className="px-4 py-3">⏱️ Délai</th>
                                        <th className="px-4 py-3">💡 Astuce</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-orange-600">Orange Money</td>
                                        <td className="px-4 py-3">1 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">instant</td>
                                        <td className="px-4 py-3 text-xs text-gray-500">Activez l'API marchand</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-yellow-600">MTN / Moov / Wave</td>
                                        <td className="px-4 py-3">1 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">instant</td>
                                        <td className="px-4 py-3 text-xs text-gray-500">Même compte que l'achat de crédit</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-gray-600">Cartes Visa/Master</td>
                                        <td className="px-4 py-3">1 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">15m - 24h</td>
                                        <td className="px-4 py-3 text-xs text-gray-500">3-D Secure requis</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-green-600">Crypto USDT (TRC20)</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">5 min</td>
                                        <td className="px-4 py-3 text-xs text-gray-500">Pas de vérification bancaire</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-blue-600">Jeton, Perfect Money</td>
                                        <td className="px-4 py-3">1 000 F</td>
                                        <td className="px-4 py-3">5 000 F</td>
                                        <td className="px-4 py-3">instant</td>
                                        <td className="px-4 py-3 text-xs text-gray-500">Aucun frais caché</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
                            <h5 className="font-bold text-amber-800 mb-2 flex items-center"><span className="material-icons mr-2">savings</span> Limites importantes</h5>
                            <ul className="list-disc list-inside text-sm text-amber-900">
                                <li><strong>Maximum par retrait crypto :</strong> 50 000 000 FCFA</li>
                                <li><strong>Retraits :</strong> illimités en cumul hebdo</li>
                            </ul>
                        </div>
                    </section>

                    {/* 8. Tutoriel Visuel (Timeline) */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                            <span className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">8</span>
                            Tutoriel visuel : Votre 1er "chicken" en 4 étapes
                        </h3>
                        <h4 className="font-bold text-red-600 mb-4 flex items-center"><span className="material-icons mr-2">target</span> Scénario de réussite</h4>
                        <div className="relative border-l-4 border-gray-200 ml-4 md:ml-8 pl-8 space-y-8">
                            {/* Step 1 */}
                            <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <span className="absolute -left-11 top-1/2 -translate-y-1/2 bg-white text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-slate-900">1</span>
                                <h4 className="font-bold text-lg mb-2 text-slate-800 uppercase tracking-wide">Accès au jeu</h4>
                                <p className="text-gray-600 font-mono text-sm">
                                    → Lobby Melbet<br/>
                                    → Jeux instantanés<br/>
                                    → Chicken Road
                                </p>
                            </div>
                             {/* Step 2 */}
                             <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <span className="absolute -left-11 top-1/2 -translate-y-1/2 bg-white text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-slate-900">2</span>
                                <h4 className="font-bold text-lg mb-2 text-slate-800 uppercase tracking-wide">Configuration</h4>
                                <p className="text-gray-600 font-mono text-sm">
                                    → Mise 1 000 F<br/>
                                    → Auto-cash-out x2,00
                                </p>
                            </div>
                             {/* Step 3 */}
                             <div className="relative bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
                                <span className="absolute -left-11 top-1/2 -translate-y-1/2 bg-white text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-slate-900">3</span>
                                <h4 className="font-bold text-lg mb-2 text-green-800 uppercase tracking-wide">Traversée réussie</h4>
                                <p className="text-green-700 font-mono text-sm">
                                    → Poule atteint x2,00<br/>
                                    → 2 000 F gagnés ✅
                                </p>
                            </div>
                             {/* Step 4 */}
                             <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <span className="absolute -left-11 top-1/2 -translate-y-1/2 bg-white text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-slate-900">4</span>
                                <h4 className="font-bold text-lg mb-2 text-slate-800 uppercase tracking-wide">Retrait express</h4>
                                <p className="text-gray-600 font-mono text-sm">
                                    → Orange Money<br/>
                                    → Argent reçu en 30 secondes 🎉
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 10. Conseils de pro */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">10</span>
                            Conseils de pro pour sécuriser vos gains
                        </h3>
                        <div className="mb-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
                             <div className="grid grid-cols-2 font-bold text-sm text-white">
                                 <div className="bg-red-600 p-3 flex items-center"><span className="material-icons mr-2">close</span> Erreur courante</div>
                                 <div className="bg-green-600 p-3 flex items-center"><span className="material-icons mr-2">check</span> Bonne pratique</div>
                             </div>
                             <div className="divide-y divide-gray-100 text-sm">
                                 <div className="grid grid-cols-2 p-3 hover:bg-gray-50">
                                     <div className="text-red-700">Attendre x10 systématiquement</div>
                                     <div className="text-green-700 font-semibold">Encaisser régulièrement à x1,80-x2,50</div>
                                 </div>
                                 <div className="grid grid-cols-2 p-3 hover:bg-gray-50">
                                     <div className="text-red-700">Augmenter la mise après perte</div>
                                     <div className="text-green-700 font-semibold">Respecter sa stratégie initiale</div>
                                 </div>
                                 <div className="grid grid-cols-2 p-3 hover:bg-gray-50">
                                     <div className="text-red-700">Jouer toute sa bankroll</div>
                                     <div className="text-green-700 font-semibold">Ne jamais miser plus de 10%</div>
                                 </div>
                                 <div className="grid grid-cols-2 p-3 hover:bg-gray-50">
                                     <div className="text-red-700">Ignorer l'historique</div>
                                     <div className="text-green-700 font-semibold">Analyser les 50 derniers rounds</div>
                                 </div>
                                 <div className="grid grid-cols-2 p-3 hover:bg-gray-50">
                                     <div className="text-red-700">Pas de limite de temps</div>
                                     <div className="text-green-700 font-semibold">Limiter les sessions à 30 min max</div>
                                 </div>
                             </div>
                        </div>

                        <h4 className="font-bold text-amber-600 text-xl mb-3 flex items-center"><span className="material-icons mr-2">emoji_events</span> Techniques avancées</h4>
                        <div className="bg-slate-800 text-gray-300 p-6 rounded-lg space-y-4">
                             <div>
                                 <h5 className="font-bold text-white text-lg mb-2 flex items-center"><span className="material-icons text-red-500 mr-2">ads_click</span> La méthode "Pattern Recognition"</h5>
                                 <ul className="list-disc list-inside space-y-1 ml-2">
                                     <li>Observez 20 rounds en mode demo</li>
                                     <li>Repérez les séquences de petits multiplicateurs (&lt;x2)</li>
                                     <li>Après 5-6 rounds &lt;x2, préparez une mise x3-x5</li>
                                     <li>Ne forcez jamais : respectez votre budget</li>
                                 </ul>
                             </div>
                             <div className="border-t border-gray-700 pt-4">
                                 <h5 className="font-bold text-white text-lg mb-2 flex items-center"><span className="material-icons text-blue-400 mr-2">psychology</span> Gestion émotionnelle</h5>
                                 <ul className="list-disc list-inside space-y-1 ml-2">
                                     <li>Fixez un objectif de gain réaliste (+30% max par session)</li>
                                     <li>Arrêtez après 3 pertes consécutives</li>
                                     <li>Célébrez les petites victoires</li>
                                     <li>Ne jouez jamais sous pression</li>
                                 </ul>
                             </div>
                        </div>
                    </section>

                    {/* 11. Bonus et promotions */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">11</span>
                            Bonus et promotions Melbet
                        </h3>
                        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 mb-4">
                            <h4 className="font-bold text-amber-800 mb-2 flex items-center"><span className="material-icons mr-2">savings</span> Avantages exclusifs LUX365</h4>
                             <div className="bg-white rounded border border-amber-200 overflow-hidden">
                                <table className="w-full text-sm text-left">
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="p-3 font-bold text-amber-600 flex items-center"><span className="material-icons text-sm mr-2">card_giftcard</span> Bonus de bienvenue</td>
                                            <td className="p-3">200 % jusqu'à 130 000 FCFA</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-amber-600 flex items-center"><span className="material-icons text-sm mr-2">replay</span> Cashback hebdo</td>
                                            <td className="p-3">Jusqu'à 10 % sur les pertes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-amber-600 flex items-center"><span className="material-icons text-sm mr-2">diamond</span> Programme VIP</td>
                                            <td className="p-3">Montée de niveau automatique</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-amber-600 flex items-center"><span className="material-icons text-sm mr-2">cake</span> Bonus anniversaire</td>
                                            <td className="p-3">Freebet 5 000 - 50 000 F</td>
                                        </tr>
                                    </tbody>
                                </table>
                             </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="border-t border-gray-200 pt-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center"><span className="material-icons mr-2">flag</span> Conclusion</h3>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            <strong>Chicken Road</strong> est le crash-game le plus fun de Melbet : <strong>x1,01 → x100</strong> en quelques pas de poule !
                        </p>
                        
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
                             <h4 className="font-bold text-amber-500 mb-2 flex items-center"><span className="material-icons mr-2">card_giftcard</span> Avec le code LUX365</h4>
                             <p className="text-gray-600 mb-4">Vous doublez votre 1er dépôt jusqu'à <strong>130 000 FCFA</strong> et disposez d'un coussin de sécurité pour tester toutes les stratégies sans stress.</p>
                             
                             <h5 className="font-bold text-slate-900 mb-2">🐔 Les clés du succès</h5>
                             <ul className="space-y-2 text-sm text-gray-700">
                                 <li className="flex items-center"><span className="material-icons text-red-500 mr-2 text-sm">security</span> <strong>Sécurité d'abord</strong> : encaissez régulièrement</li>
                                 <li className="flex items-center"><span className="material-icons text-blue-500 mr-2 text-sm">target</span> <strong>Chassez les gros multiplicateurs</strong> ensuite</li>
                                 <li className="flex items-center"><span className="material-icons text-amber-500 mr-2 text-sm">monetization_on</span> <strong>Ne laissez jamais la poule sans cash-out !</strong></li>
                             </ul>
                        </div>
                    </section>

                    {/* CTA Final */}
                    <section className="text-center">
                         <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center justify-center"><span className="material-icons mr-2 text-blue-600">airplane_ticket</span> Prêt à faire traverser la poule ?</h3>
                         <p className="text-gray-600 mb-4">Inscrivez-vous avec le code</p>
                         <div className="text-5xl font-black text-slate-900 mb-2 tracking-widest">LUX365</div>
                         <div className="inline-block bg-amber-400 text-slate-900 px-4 py-1 rounded font-bold mb-6 text-sm">🎁 Bonus 200% jusqu'à 130 000 FCFA !</div>
                         <br/>
                         <a href={chickenLink} className="inline-flex items-center justify-center bg-slate-900 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-slate-800 transition-transform transform hover:scale-105">
                             <span className="material-icons mr-2">play_arrow</span>
                             JOUER MAINTENANT
                         </a>
                    </section>

                    {/* Support */}
                    <div className="bg-gray-50 p-6 rounded-xl mt-8 border border-gray-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><span className="material-icons mr-2 text-red-600">call</span> Support Chicken Road Melbet</h3>
                        <p className="text-sm text-gray-600 mb-4">Besoin d'aide pour votre première partie ?</p>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-center"><span className="material-icons text-gray-400 mr-3">chat</span> <strong>Chat en direct 24/7</strong> (français)</li>
                            <li className="flex items-center"><span className="material-icons text-gray-400 mr-3">email</span> <strong>E-mail :</strong> support@melbet.com</li>
                            <li className="flex items-center"><span className="material-icons text-gray-400 mr-3">smartphone</span> <strong>WhatsApp/Telegram :</strong> assistance instantanée</li>
                            <li className="flex items-center"><span className="material-icons text-gray-400 mr-3">videogame_asset</span> <strong>Mode démo :</strong> testez gratuitement avant de jouer</li>
                        </ul>
                    </div>

                    {/* Avertissements */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center"><span className="material-icons mr-2 text-amber-500">warning</span> Avertissements importants</h3>
                        <h4 className="font-bold text-gray-700 text-sm mb-2">🎲 Jeu responsable</h4>
                        <p className="text-xs text-gray-500 mb-3"><strong>18+ uniquement</strong> | Jouer comporte des risques</p>
                        <ul className="space-y-2 text-sm text-gray-600 mb-6">
                            <li className="flex items-start"><span className="material-icons text-red-500 text-sm mr-2">block</span> Ne jouez jamais avec de l'argent nécessaire à vos besoins</li>
                            <li className="flex items-start"><span className="material-icons text-red-500 text-sm mr-2">timer</span> Limitez votre temps de jeu (<strong>max 30 min/session</strong>)</li>
                            <li className="flex items-start"><span className="material-icons text-amber-500 text-sm mr-2">savings</span> Fixez un budget quotidien et <strong>respectez-le strictement</strong></li>
                            <li className="flex items-start"><span className="material-icons text-red-500 text-sm mr-2">pan_tool</span> Arrêtez immédiatement si vous ressentez de l'anxiété</li>
                            <li className="flex items-start"><span className="material-icons text-red-500 text-sm mr-2">sos</span> En cas de problème : contactez <strong>SOS Joueurs</strong></li>
                        </ul>

                        <h4 className="font-bold text-gray-700 text-sm mb-2 flex items-center"><span className="material-icons text-sm mr-2">insert_chart</span> Comprendre le RTP</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>RTP de 96 %</strong> signifie que :</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            <li>Sur le long terme, le jeu reverse 96% des mises</li>
                            <li>Les résultats court terme peuvent <strong>varier fortement</strong></li>
                            <li>Aucune stratégie ne garantit des gains</li>
                            <li>Le jeu reste avant tout un <strong>divertissement</strong></li>
                        </ul>
                    </div>
                </div>
             );
        }

        // --- GUIDE ASTUCES ---
        if (activeTab === 'Astuces gagnantes') {
            return (
                <div className="space-y-8 animate-fadeIn text-left">
                     <header className="text-center mb-8 border-b border-gray-200 pb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Les Commandements du Parieur Gagnant</h2>
                        <p className="text-gray-600">Parier n'est pas seulement une question de chance. C'est une question de discipline, d'analyse et de stratégie froide.</p>
                    </header>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex flex-col sm:flex-row bg-gray-50 p-6 rounded-lg shadow-sm hover:bg-gray-100 transition-colors border border-gray-200">
                            <div className="bg-amber-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 text-white font-bold text-2xl shadow-md">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">La Gestion de Bankroll (Capital)</h3>
                                <p className="text-gray-700">
                                    C'est la règle d'or absolue. Ne misez jamais l'argent que vous ne pouvez pas vous permettre de perdre (loyer, factures, etc.). 
                                    Définissez un budget mensuel strict. Une mise unitaire ne devrait jamais dépasser <strong>5%</strong> de votre capital total.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row bg-gray-50 p-6 rounded-lg shadow-sm hover:bg-gray-100 transition-colors border border-gray-200">
                            <div className="bg-amber-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 text-white font-bold text-2xl shadow-md">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Analysez avant de Parier</h3>
                                <p className="text-gray-700">
                                    Ne pariez pas au "feeling" ou pour supporter votre équipe de cœur. Regardez les statistiques, la forme récente des équipes, les joueurs blessés, l'historique des confrontations et l'enjeu du match. 
                                    L'information est le pouvoir du parieur.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row bg-gray-50 p-6 rounded-lg shadow-sm hover:bg-gray-100 transition-colors border border-gray-200">
                            <div className="bg-amber-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 text-white font-bold text-2xl shadow-md">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Maîtrisez vos Émotions (Le "Tilt")</h3>
                                <p className="text-gray-700">
                                    Après une série de pertes, la tentation est grande de miser gros pour "se refaire". C'est la pire erreur possible. 
                                    Acceptez les pertes comme faisant partie du jeu, faites une pause, et revenez avec un esprit clair le lendemain.
                                </p>
                            </div>
                        </div>
                         
                        <div className="flex flex-col sm:flex-row bg-gray-50 p-6 rounded-lg shadow-sm hover:bg-gray-100 transition-colors border border-gray-200">
                            <div className="bg-amber-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 text-white font-bold text-2xl shadow-md">4</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Profitez des Bonus Intelligemment</h3>
                                <p className="text-gray-700">
                                    Utilisez les codes promos (comme <span className="text-amber-600 font-mono font-bold bg-amber-50 px-2 rounded">JACKPOT77</span>) pour augmenter votre capital de départ. 
                                    Cependant, lisez toujours les conditions de mise (wager) avant de vous engager pour savoir quand vous pourrez retirer l'argent bonus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        // --- GUIDE 1XBET ---
        if (activeTab === '1XBET') {
            return (
                <div className="animate-fadeIn space-y-10 text-left">
                    <header className="border-b border-gray-200 pb-6 text-center">
                        <div className="flex justify-center mb-4">
                            <img src={BOOKMAKERS.find(b=>b.name==='1XBET')?.logo} alt="1xBet Logo" className="h-16" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Guide Complet 1xBet : Inscription, Bonus, Dépôts & Retraits</h2>
                        <p className="text-gray-600">Tout savoir pour bien démarrer sur le bookmaker N°1 en Afrique et profiter du code promo exclusif.</p>
                    </header>

                    {/* Presentation */}
                    <section>
                        <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">info</span>
                            Présentation de 1xBet
                        </h3>
                        <p className="text-gray-700 mb-4">
                            1xBet est un bookmaker international très populaire, particulièrement dans les pays d'Europe de l'Est, en Asie et en Afrique. Il propose plus de 1 000 événements sportifs quotidiens, couvrant une large gamme de sports :
                        </p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
                            <li className="flex items-center"><span className="material-icons text-green-500 mr-2 text-sm">sports_soccer</span> Football</li>
                            <li className="flex items-center"><span className="material-icons text-green-500 mr-2 text-sm">sports_tennis</span> Tennis</li>
                            <li className="flex items-center"><span className="material-icons text-green-500 mr-2 text-sm">sports_basketball</span> Basketball</li>
                            <li className="flex items-center"><span className="material-icons text-green-500 mr-2 text-sm">sports_esports</span> E-Sports</li>
                            <li className="flex items-center"><span className="material-icons text-green-500 mr-2 text-sm">computer</span> Sports virtuels</li>
                            <li className="flex items-center"><span className="material-icons text-green-500 mr-2 text-sm">theater_comedy</span> Paris politiques</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            La plateforme est disponible en plusieurs langues, dont le français, et offre une interface intuitive aussi bien sur ordinateur que mobile.
                        </p>
                    </section>

                    {/* Avantages */}
                    <section className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">star</span>
                            Avantages de choisir 1xBet
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <span className="material-icons text-green-500 mr-3 mt-1">trending_up</span>
                                <div>
                                    <strong className="text-gray-900 block">Cotes compétitives</strong>
                                    <span className="text-gray-600 text-sm">Souvent supérieures à celles des bookmakers locaux.</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="material-icons text-green-500 mr-3 mt-1">list_alt</span>
                                <div>
                                    <strong className="text-gray-900 block">Large choix de marchés</strong>
                                    <span className="text-gray-600 text-sm">Jusqu'à 600 options de paris sur un match de football en direct.</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="material-icons text-green-500 mr-3 mt-1">smartphone</span>
                                <div>
                                    <strong className="text-gray-900 block">Application mobile performante</strong>
                                    <span className="text-gray-600 text-sm">Compatible Android et iOS, avec navigation fluide et notifications push.</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="material-icons text-green-500 mr-3 mt-1">support_agent</span>
                                <div>
                                    <strong className="text-gray-900 block">Support client 24/7</strong>
                                    <span className="text-gray-600 text-sm">Accessible via chat, e-mail ou téléphone.</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="material-icons text-green-500 mr-3 mt-1">diamond</span>
                                <div>
                                    <strong className="text-gray-900 block">Programme VIP</strong>
                                    <span className="text-gray-600 text-sm">Avec cashback, gestionnaire personnel, retraits prioritaires et bonus exclusifs.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bonus */}
                    <section>
                        <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">card_giftcard</span>
                            Les différents types de bonus
                        </h3>
                        <p className="text-gray-700 mb-4">1xBet propose une gamme très riche de bonus, à la fois pour les nouveaux joueurs et les utilisateurs réguliers.</p>
                        
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg mb-6 shadow-md text-white">
                            <h4 className="text-xl font-bold text-white mb-2">🎉 Bonus de bienvenue : 300%</h4>
                            <p className="text-blue-100 mb-2">Réparti en deux parties :</p>
                            <ul className="list-disc list-inside text-blue-100 ml-2">
                                <li><strong>Paris sportifs :</strong> 5 mises minimum à cote 1,40</li>
                                <li><strong>Jeux 1xGames :</strong> 30 mises</li>
                            </ul>
                        </div>

                        <h4 className="font-bold text-gray-900 mb-3">💸 Autres promotions régulières</h4>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                            <table className="w-full text-sm text-left text-gray-700">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Promotion</th>
                                        <th scope="col" className="px-6 py-3">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Bonus du vendredi</th>
                                        <td className="px-6 py-4">Recharge hebdomadaire avec bonus</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Cashback VIP</th>
                                        <td className="px-6 py-4">Jusqu'à 25 % selon votre niveau</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Pari gratuit</th>
                                        <td className="px-6 py-4">Pour les anniversaires ou en cas de série de paris perdants</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Code Promo */}
                    <section className="bg-amber-50 p-6 rounded-xl border border-amber-200 relative overflow-hidden shadow-sm">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-amber-700 mb-4 flex items-center">
                                <span className="material-icons mr-2">vpn_key</span>
                                Avantage de s'inscrire avec le code promo
                            </h3>
                            <p className="text-gray-700 mb-4">En utilisant le code promo <span className="text-amber-600 font-bold text-lg">365LUX</span>, vous pouvez :</p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center"><span className="material-icons text-amber-500 mr-2">check_circle</span> Obtenir un bonus boosté (jusqu'à 130 % au lieu de 100 %)</li>
                                <li className="flex items-center"><span className="material-icons text-amber-500 mr-2">check_circle</span> Accéder à des offres exclusives réservées aux nouveaux utilisateurs</li>
                                <li className="flex items-center"><span className="material-icons text-amber-500 mr-2">check_circle</span> Bénéficier de paris gratuits ou de cotes majorées</li>
                            </ul>
                            
                            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg max-w-md mx-auto border border-gray-200 shadow-sm">
                                <span className="text-gray-500 uppercase text-xs font-bold">Code Promo</span>
                                <div className="text-3xl font-mono font-black text-amber-500 tracking-widest select-all">365LUX</div>
                            </div>
                        </div>
                    </section>

                    {/* Registration Steps */}
                    <section>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="material-icons mr-2 text-amber-600">how_to_reg</span>
                            Comment s'inscrire sur 1xBet
                        </h3>
                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-4">
                            <h4 className="text-lg font-bold text-amber-600 mb-3">1️⃣ Par numéro de téléphone (la plus rapide)</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                                <li>Rendez-vous sur le site officiel de 1xBet</li>
                                <li>Choisissez votre bonus de bienvenue (sport, casino ou sans bonus)</li>
                                <li>Entrez votre numéro de téléphone</li>
                                <li>Validez avec le code SMS reçu</li>
                                <li>Renseignez le code promo <strong className="text-amber-600">365LUX</strong></li>
                                <li>Cliquez sur <strong>S'inscrire</strong></li>
                                <li>Effectuez votre premier dépôt et commencez à parier</li>
                            </ol>
                        </div>
                        <p className="text-gray-500 italic text-sm">Note : L'inscription par e-mail ou réseaux sociaux est aussi disponible si vous souhaitez un compte complet dès le départ.</p>
                    </section>

                    {/* Payments & Support */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <span className="material-icons mr-2 text-amber-600">payments</span>
                                Dépôts et Retraits
                            </h3>
                            <p className="text-gray-700 text-sm mb-3">1xBet supporte plus de 100 méthodes de paiement.</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Orange Money</span>
                                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Moov Money</span>
                                <span className="bg-yellow-500 text-slate-900 text-xs font-bold px-2 py-1 rounded">MTN Money</span>
                                <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">Visa/Mastercard</span>
                                <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">Crypto</span>
                            </div>
                            <p className="text-xs text-gray-500">Les retraits se font généralement par les mêmes moyens que les dépôts.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <span className="material-icons mr-2 text-amber-600">headset_mic</span>
                                Support et assistance
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center"><span className="material-icons text-xs mr-2">chat</span> Chat en direct</li>
                                <li className="flex items-center"><span className="material-icons text-xs mr-2">email</span> E-mail</li>
                                <li className="flex items-center"><span className="material-icons text-xs mr-2">call</span> Téléphone</li>
                            </ul>
                        </section>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
                         <h4 className="text-red-600 font-bold mb-1 flex items-center justify-center"><span className="material-icons mr-1">warning</span> Remarques importantes</h4>
                         <ul className="text-xs text-gray-600 list-none space-y-1">
                             <li>Vérifiez toujours que vous êtes sur le site officiel de 1xBet</li>
                             <li>Lisez attentivement les conditions de mise liées aux bonus</li>
                             <li>Jouez de manière responsable et dans les limites de vos moyens</li>
                         </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                        <a 
                            href={signupLink} 
                            className="inline-flex items-center justify-center bg-green-500 text-white font-bold py-4 px-8 rounded-md hover:bg-green-600 transition-colors text-lg shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
                        >
                            <span className="material-icons mr-2">person_add</span>
                            S'inscrire sur 1XBET
                        </a>
                        <a 
                            href={appLink} 
                            className="inline-flex items-center justify-center bg-gray-700 text-white font-bold py-4 px-8 rounded-md hover:bg-gray-600 transition-colors text-lg shadow-lg hover:shadow-gray-500/50 transform hover:-translate-y-1"
                        >
                            <span className="material-icons mr-2">download</span>
                            Télécharger l'App
                        </a>
                    </div>
                </div>
            );
        }
        
        // --- GUIDE MELBET ---
        if (activeTab === 'Melbet') {
             return (
                <div className="animate-fadeIn space-y-10 text-left">
                     {/* Header */}
                    <header className="border-b border-gray-200 pb-6 text-center">
                        <div className="flex justify-center mb-4">
                            <img src={BOOKMAKERS.find(b=>b.name==='Melbet')?.logo} alt="Melbet Logo" className="h-16" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Guide Complet Melbet : Inscription, Bonus, Dépôts & Retraits</h2>
                        <p className="text-gray-600">Découvrez tout sur Melbet : bonus exclusifs, inscription rapide et les meilleures méthodes de paiement.</p>
                    </header>
                    
                    {/* Presentation */}
                    <section>
                        <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">info</span>
                            Présentation de Melbet
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Melbet est un bookmaker international lancé en 2012, reconnu pour sa large gamme de paris sportifs et ses options de casino en ligne. Il est licencié à Curaçao, ce qui lui permet d'opérer dans de nombreux pays.
                        </p>
                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🌍 Disponibilité</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                                <li className="flex items-center"><span className="material-icons text-green-500 text-sm mr-2">language</span> Langues : Français, anglais, et plus de 50 autres</li>
                                <li className="flex items-center"><span className="material-icons text-green-500 text-sm mr-2">currency_exchange</span> Devises : EUR, USD, INR, XOF, et bien plus</li>
                            </ul>
                        </div>
                    </section>

                     {/* Ce que propose Melbet Table */}
                    <section>
                        <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">dashboard</span>
                            Ce que propose Melbet
                        </h3>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                            <table className="w-full text-sm text-left text-gray-700">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 w-1/3">Fonctionnalité</th>
                                        <th scope="col" className="px-6 py-3">Détails</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900">Options de paris</th>
                                        <td className="px-6 py-4">Plus de 1 300 options sur un match de football</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900">Paris en direct</th>
                                        <td className="px-6 py-4">Plus de 200 marchés par événement</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900">Application mobile</th>
                                        <td className="px-6 py-4">Fluide et bien conçue (Android & iOS)</td>
                                    </tr>
                                     <tr className="bg-white">
                                        <th className="px-6 py-4 font-medium text-gray-900">Support client</th>
                                        <td className="px-6 py-4">24/7 via chat, e-mail ou téléphone</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Avantages */}
                    <section className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                         <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">emoji_events</span>
                            Les points forts
                        </h3>
                        <ul className="space-y-3 text-gray-800">
                            <li className="flex items-start"><span className="material-icons text-green-600 mr-2">check_circle</span> Bonus de bienvenue élevé : jusqu'à 130 % du premier dépôt avec un code promo</li>
                            <li className="flex items-start"><span className="material-icons text-green-600 mr-2">check_circle</span> Cotes attractives et large couverture sportive</li>
                            <li className="flex items-start"><span className="material-icons text-green-600 mr-2">check_circle</span> Paris en direct avec streaming et statistiques en temps réel</li>
                            <li className="flex items-start"><span className="material-icons text-green-600 mr-2">check_circle</span> Programme de fidélité avec cashback et promotions régulières</li>
                            <li className="flex items-start"><span className="material-icons text-green-600 mr-2">check_circle</span> Paiements rapides et variés, y compris en cryptomonnaies</li>
                             <li className="flex items-start"><span className="material-icons text-green-600 mr-2">check_circle</span> Interface en français adaptée aux joueurs africains et européens</li>
                        </ul>
                    </section>

                    {/* Bonus & Promo */}
                    <section>
                         <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">card_giftcard</span>
                            Les différents types de bonus
                        </h3>
                        
                        <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-6 rounded-lg mb-8 shadow-md text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold text-white mb-2">🎉 Bonus de bienvenue</h4>
                                <div className="text-4xl font-extrabold mb-2">100% jusqu'à 130 €/$</div>
                                <div className="inline-block bg-white/20 px-3 py-1 rounded text-sm font-semibold mb-4">+ 30% de bonus supplémentaire avec le code</div>
                                
                                <div className="bg-white text-slate-900 p-4 rounded-lg inline-block shadow-lg">
                                    <p className="text-xs uppercase font-bold text-gray-500 mb-1">Code Promo</p>
                                    <div className="text-3xl font-mono font-black text-amber-600 tracking-widest select-all">LUX365</div>
                                </div>
                            </div>
                            <span className="material-icons absolute -bottom-8 -right-8 text-9xl text-white/20">local_activity</span>
                        </div>
                        
                         <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-6">
                            <table className="w-full text-sm text-left text-gray-700">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Promotion</th>
                                        <th scope="col" className="px-6 py-3">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900">Bonus du lundi</th>
                                        <td className="px-6 py-4">100 % de bonus sur dépôt chaque lundi</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900">Cashback</th>
                                        <td className="px-6 py-4">Jusqu'à 10 % sur les pertes hebdomadaires</td>
                                    </tr>
                                     <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900">Accumulator du jour</th>
                                        <td className="px-6 py-4">Cotes boostées de 10 % si votre combiné gagne</td>
                                    </tr>
                                     <tr className="bg-white">
                                        <th className="px-6 py-4 font-medium text-gray-900">Bonus d'anniversaire</th>
                                        <td className="px-6 py-4">Paris gratuits ou tours gratuits sans condition de mise</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                         <div className="bg-gray-50 border-l-4 border-amber-500 p-4 rounded shadow-sm">
                            <h5 className="font-bold text-gray-900 mb-2">🔑 Pourquoi utiliser le code LUX365 ?</h5>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>🎁 Bonus boosté à 130 % au lieu de 100 %</li>
                                <li>💵 30 €/$ supplémentaires sur votre bonus de bienvenue</li>
                                <li>⭐ Accès aux offres exclusives (paris gratuits, free spins, cashback)</li>
                            </ul>
                        </div>
                    </section>
                    
                    {/* Inscription */}
                    <section>
                         <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="material-icons mr-2 text-amber-600">person_add</span>
                            Comment s'inscrire sur Melbet
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                                <h4 className="text-lg font-bold text-amber-600 mb-3 flex items-center">
                                    <span className="material-icons mr-2">touch_app</span>
                                    Méthode rapide : En 1 clic
                                </h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                    <li>Rendez-vous sur le site officiel de Melbet</li>
                                    <li>Cliquez sur <strong>"S'inscrire"</strong></li>
                                    <li>Choisissez <strong>"En 1 clic"</strong></li>
                                    <li>Sélectionnez votre pays et devise</li>
                                    <li>Entrez le code promo : <strong className="text-amber-600">LUX365</strong></li>
                                    <li>Validez et notez vos identifiants</li>
                                    <li>Effectuez votre premier dépôt pour activer le bonus</li>
                                </ol>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                                 <h4 className="text-lg font-bold text-gray-900 mb-3">🔄 Autres méthodes</h4>
                                 <ul className="space-y-4">
                                     <li className="flex">
                                         <span className="material-icons text-gray-500 mr-3">smartphone</span>
                                         <div>
                                             <strong className="block text-gray-900 text-sm">Par téléphone</strong>
                                             <span className="text-xs text-gray-600">Validation rapide par SMS</span>
                                         </div>
                                     </li>
                                     <li className="flex">
                                         <span className="material-icons text-gray-500 mr-3">email</span>
                                         <div>
                                             <strong className="block text-gray-900 text-sm">Par e-mail</strong>
                                             <span className="text-xs text-gray-600">Plus complet, idéal pour la vérification</span>
                                         </div>
                                     </li>
                                     <li className="flex">
                                         <span className="material-icons text-gray-500 mr-3">public</span>
                                         <div>
                                             <strong className="block text-gray-900 text-sm">Réseaux sociaux</strong>
                                             <span className="text-xs text-gray-600">Connexion rapide (Google, Facebook...)</span>
                                         </div>
                                     </li>
                                 </ul>
                            </div>
                        </div>
                    </section>
                    
                    {/* Payments */}
                     <section>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="material-icons mr-2 text-amber-600">payments</span>
                            Moyens de dépôt et retrait
                        </h3>
                        <p className="text-gray-600 mb-4">Melbet propose plus de 100 méthodes de paiement sans frais cachés.</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div className="bg-white border border-gray-200 p-4 rounded text-center hover:shadow-md transition-shadow">
                                <span className="material-icons text-3xl text-blue-600 mb-2">credit_card</span>
                                <h5 className="font-bold text-sm">Cartes Bancaires</h5>
                                <p className="text-xs text-gray-500">Visa, Mastercard</p>
                            </div>
                             <div className="bg-white border border-gray-200 p-4 rounded text-center hover:shadow-md transition-shadow">
                                <span className="material-icons text-3xl text-purple-600 mb-2">account_balance_wallet</span>
                                <h5 className="font-bold text-sm">Portefeuilles</h5>
                                <p className="text-xs text-gray-500">Skrill, Neteller, EcoPayz</p>
                            </div>
                             <div className="bg-white border border-gray-200 p-4 rounded text-center hover:shadow-md transition-shadow">
                                <span className="material-icons text-3xl text-orange-500 mb-2">currency_bitcoin</span>
                                <h5 className="font-bold text-sm">Cryptomonnaies</h5>
                                <p className="text-xs text-gray-500">Bitcoin, USDT, etc.</p>
                            </div>
                             <div className="bg-white border border-gray-200 p-4 rounded text-center hover:shadow-md transition-shadow">
                                <span className="material-icons text-3xl text-green-600 mb-2">local_atm</span>
                                <h5 className="font-bold text-sm">Mobile Money</h5>
                                <p className="text-xs text-gray-500">Orange, MTN, Moov</p>
                            </div>
                        </div>
                         <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded flex items-center">
                            <span className="material-icons text-sm mr-2">info</span>
                            Bon à savoir : Aucun frais de retrait pour la plupart des méthodes ! Les cryptos sont instantanées.
                        </div>
                    </section>

                    {/* Conseils */}
                     <section className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Conseils pour bien débuter</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                            <li>Activez le bonus dès l'inscription en choisissant la bonne option (sport ou casino).</li>
                            <li>Vérifiez les conditions de mise : x5 en express avec 3 sélections minimum à cote 1,40.</li>
                            <li>Complétez votre profil pour éviter les blocages lors des retraits.</li>
                            <li>Utilisez l'application mobile pour ne rien manquer des promotions en direct.</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                        <a 
                            href={signupLink} 
                            className="inline-flex items-center justify-center bg-green-500 text-white font-bold py-4 px-8 rounded-md hover:bg-green-600 transition-colors text-lg shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
                        >
                            <span className="material-icons mr-2">person_add</span>
                            S'inscrire sur Melbet
                        </a>
                        <a 
                            href={appLink} 
                            className="inline-flex items-center justify-center bg-slate-800 text-white font-bold py-4 px-8 rounded-md hover:bg-slate-700 transition-colors text-lg shadow-lg hover:shadow-slate-500/50 transform hover:-translate-y-1"
                        >
                            <span className="material-icons mr-2">download</span>
                            Télécharger l'App
                        </a>
                    </div>
                </div>
            );
        }

        // --- GUIDE BETWINNER ---
        if (activeTab === 'Betwinner') {
             return (
                <div className="animate-fadeIn space-y-10 text-left">
                    <header className="border-b border-gray-200 pb-6 text-center">
                        <div className="flex justify-center mb-4">
                            <img src={BOOKMAKERS.find(b=>b.name==='Betwinner')?.logo} alt="BetWinner Logo" className="h-16" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tutoriel Complet : Tout savoir sur BetWinner en 2025</h2>
                        <p className="text-gray-600">Inscription, Bonus, Paiements et Astuces. Le guide ultime pour le bookmaker 360°.</p>
                    </header>
                     <section>
                        <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">info</span>
                            Présentation : Le bookmaker 360°
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Lancé en 2018, BetWinner est exploité par Techsolution Group N.V. et détient une licence internationale de Curaçao. Il se positionne comme un véritable supermarché des paris.
                        </p>
                         <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">📊 En quelques chiffres</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                                <li className="flex items-center"><span className="material-icons text-green-500 text-sm mr-2">sports_soccer</span> +1 000 événements par jour</li>
                                <li className="flex items-center"><span className="material-icons text-green-500 text-sm mr-2">casino</span> +3 000 jeux de casino</li>
                                <li className="flex items-center"><span className="material-icons text-green-500 text-sm mr-2">people</span> +400 000 utilisateurs actifs</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">how_to_reg</span>
                            Comment s'inscrire rapidement
                        </h3>
                        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                             <ol className="list-decimal list-inside space-y-3 text-gray-800">
                                 <li>Cliquez sur le bouton <strong>"S'inscrire"</strong> ci-dessous.</li>
                                 <li>Choisissez l'inscription <strong>"En un clic"</strong> (la plus rapide).</li>
                                 <li>Sélectionnez votre pays et devise (XOF, EUR, USD...).</li>
                                 <li>Insérez le code promo <strong>JACKPOT77</strong> pour booster votre bonus.</li>
                                 <li>Cliquez sur "S'inscrire". Sauvegardez bien vos identifiants !</li>
                             </ol>
                             <div className="mt-4 text-sm text-gray-500 bg-gray-50 p-3 rounded">
                                 💡 Astuce : Vous pourrez compléter vos informations personnelles (nom, email) plus tard dans "Mon Compte" pour sécuriser votre profil.
                             </div>
                        </div>
                    </section>

                    <section>
                         <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">card_giftcard</span>
                            Bonus de bienvenue et Promotions
                        </h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
                                <h4 className="font-bold text-lg text-gray-900">🎁 Bonus Sport 100%</h4>
                                <p className="text-gray-700 text-sm mt-1">Jusqu'à <strong>65 000 XOF</strong> sur votre premier dépôt. Conditions de mise : 5 fois le montant du bonus sur des paris combinés (3 événements minimum, cote 1.40+).</p>
                            </div>
                             <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded">
                                <h4 className="font-bold text-lg text-gray-900">🎰 Bonus Casino</h4>
                                <p className="text-gray-700 text-sm mt-1">Package de bienvenue jusqu'à <strong>1 000 000 XOF + 150 Tours Gratuits</strong> répartis sur 4 dépôts.</p>
                            </div>
                             <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
                                <h4 className="font-bold text-lg text-gray-900">🔄 Cashback Sports</h4>
                                <p className="text-gray-700 text-sm mt-1">Recevez chaque semaine <strong>3%</strong> de vos pertes sur les paris sportifs, directement crédités sur votre compte.</p>
                            </div>
                        </div>
                    </section>

                     <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                        <a 
                            href={signupLink} 
                            className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-8 rounded-md hover:bg-green-700 transition-colors text-lg shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
                        >
                            <span className="material-icons mr-2">person_add</span>
                            S'inscrire sur BetWinner
                        </a>
                        <a 
                            href={appLink} 
                            className="inline-flex items-center justify-center bg-slate-800 text-white font-bold py-4 px-8 rounded-md hover:bg-slate-700 transition-colors text-lg shadow-lg hover:shadow-slate-500/50 transform hover:-translate-y-1"
                        >
                            <span className="material-icons mr-2">download</span>
                            Télécharger l'App
                        </a>
                    </div>
                </div>
             );
        }

        // --- GUIDE 1WIN ---
        if (activeTab === '1win') {
            return (
                <div className="animate-fadeIn space-y-10 text-left">
                    {/* Header */}
                    <header className="border-b border-gray-200 pb-6 text-center">
                        <div className="flex justify-center mb-4">
                            <img src={BOOKMAKERS.find(b=>b.name==='1win')?.logo} alt="1win Logo" className="h-16" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tutoriel 1win 2025 : Inscription, Bonus & Version Spéciale CFA</h2>
                        <p className="text-gray-600">Version spéciale CFA avec codes promos LUX365 & POWER77. Inscription, Bonus, Dépôts & Retraits.</p>
                    </header>

                    {/* Presentation */}
                    <section>
                        <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">info</span>
                            Qui est 1win ? Le bookmaker « Made in CIS » qui cartonne
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Créé en 2016, 1win est détenu par MFI Investments Limited et possède une licence internationale de Curaçao. Il est parfaitement adapté aux marchés émergents (Afrique francophone, Inde, CEI).
                        </p>
                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                            <h4 className="font-semibold text-gray-900 mb-3">⚡ Les chiffres clés</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                                <li className="flex items-center"><span className="material-icons text-blue-500 text-sm mr-2">sports_soccer</span> 40+ sports : football, kabaddi, e-sport...</li>
                                <li className="flex items-center"><span className="material-icons text-blue-500 text-sm mr-2">trending_up</span> Cotes boostées : marge 5-6 % sur TOP-ligue</li>
                                <li className="flex items-center"><span className="material-icons text-blue-500 text-sm mr-2">casino</span> Casino 7 000+ jeux : Evolution, Aviator, JetX...</li>
                                <li className="flex items-center"><span className="material-icons text-blue-500 text-sm mr-2">smartphone</span> App ultra-légère (5 Mo) avec streaming HD</li>
                                <li className="flex items-center"><span className="material-icons text-blue-500 text-sm mr-2">support_agent</span> Support 24/7 : français, anglais, swahili...</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                            <span className="material-icons mr-2">star</span>
                            Avantages « Franc CFA » de 1win
                        </h3>
                        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                            <table className="w-full text-sm text-left text-gray-700">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Fonctionnalité</th>
                                        <th scope="col" className="px-6 py-3">Détails</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900">Devise XOF (CFA)</th>
                                        <td className="px-6 py-4">Compte natif en FCFA, pas de frais de conversion.</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900">Dépôts locaux</th>
                                        <td className="px-6 py-4">Orange Money, MTN Mobile Money, Moov, Wave, Perfect Money.</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900">Retraits rapides</th>
                                        <td className="px-6 py-4">Validation souvent en moins de 15 minutes vers Mobile Money.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th className="px-6 py-4 font-medium text-gray-900">Support local</th>
                                        <td className="px-6 py-4">Agents francophones disponibles pour résoudre les soucis de paiement.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Conclusion CTA */}
                    <div className="bg-blue-600 text-white rounded-xl p-8 text-center shadow-xl">
                        <h3 className="text-2xl font-bold mb-2">Avec les codes LUX365 et POWER77, 1win est le roi du CFA !</h3>
                        <p className="mb-6 opacity-90">Récupérez jusqu'à 750 000 FCFA de bonus dès maintenant.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                             <a 
                                href={signupLink} 
                                className="bg-amber-400 text-slate-900 font-bold py-4 px-8 rounded-full hover:bg-amber-300 transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center"
                            >
                                <span className="material-icons mr-2">person_add</span>
                                S'inscrire (Code LUX365)
                            </a>
                            <a 
                                href={appLink} 
                                className="bg-slate-900 text-white font-bold py-4 px-8 rounded-full hover:bg-slate-800 transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center"
                            >
                                <span className="material-icons mr-2">download</span>
                                App 1win (5 Mo)
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        // Default Fallback
        return (
            <div className="text-center py-12">
                {bookmaker && (
                    <img src={bookmaker.logo} alt={`${activeTab} logo`} className="h-24 mx-auto mb-8 object-contain" />
                )}
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Guide d'inscription {activeTab}</h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                    Le guide complet pour l'inscription sur {activeTab} est disponible. Créez votre compte dès maintenant et profitez du bonus de bienvenue.
                </p>
                
                <div className="bg-gray-50 p-8 rounded-xl inline-block mb-10 border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Code Promo {activeTab}</p>
                    <div className="text-4xl font-mono font-black text-amber-500 tracking-widest select-all cursor-pointer">{promoCode}</div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href={signupLink} className="inline-flex items-center justify-center bg-green-500 text-white font-bold py-4 px-8 rounded-md hover:bg-green-600 transition-colors text-lg shadow-lg">
                        <span className="material-icons mr-2">person_add</span>
                        S'inscrire sur {activeTab}
                    </a>
                    <a href={appLink} className="inline-flex items-center justify-center bg-gray-700 text-white font-bold py-4 px-8 rounded-md hover:bg-gray-600 transition-colors text-lg shadow-lg">
                        <span className="material-icons mr-2">download</span>
                        Télécharger l'app {activeTab}
                    </a>
                </div>
            </div>
        );
    };

    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Guide & Astuces du Parieur</h1>
                    <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
                        Découvrez comment vous inscrire sur les meilleurs bookmakers, nos stratégies pour les jeux comme Aviator et les secrets pour parier intelligemment.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto mb-8">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {['1XBET', 'Melbet', 'Betwinner', '1win', 'Aviator', 'Chicken Road', 'Astuces gagnantes'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-base font-bold transition-all duration-200 border ${
                                    activeTab === tab
                                    ? 'bg-amber-400 text-slate-900 shadow-md transform scale-105 border-amber-400'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 border-gray-200'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto bg-white text-gray-900 p-6 sm:p-10 rounded-lg shadow-2xl min-h-[500px] border border-gray-100">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default GuidesPage;
