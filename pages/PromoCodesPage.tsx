
import React, { useState, useCallback } from 'react';
import { BOOKMAKERS } from '../constants';
import { Bookmaker } from '../types';

const PromoCodeCard: React.FC<{ bookmaker: Bookmaker; id?: string }> = ({ bookmaker, id }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(bookmaker.promoCode).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    }, [bookmaker.promoCode]);

    return (
        <div
            className="bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-700 transition-all duration-300 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/10"
            id={id}
        >
            {/* Top section with logo and bonus amount */}
            <div className="p-6 border-b-2 border-dashed border-slate-700 flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-4">
                <div className="flex items-center">
                    <img src={bookmaker.logo} alt={`${bookmaker.name} logo`} className="h-12 w-12 mr-4 flex-shrink-0"/>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{bookmaker.name}</h3>
                        <p className="text-gray-400 text-sm">Bonus de bienvenue</p>
                    </div>
                </div>
                <div className="bg-slate-700 p-3 rounded-lg text-center flex-shrink-0">
                    <p className="text-amber-400 font-extrabold text-2xl whitespace-nowrap">{bookmaker.bonus}</p>
                </div>
            </div>
            
            {/* Bottom section with promo code and signup button */}
            <div className="p-6 bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex-grow w-full">
                    <label htmlFor={`promo-code-${bookmaker.name}`} className="text-xs text-gray-300 uppercase tracking-wider mb-1 text-center sm:text-left block">Code Promo</label>
                    <div className="relative flex items-center">
                        <input 
                            id={`promo-code-${bookmaker.name}`}
                            type="text"
                            readOnly 
                            value={bookmaker.promoCode}
                            className="w-full bg-slate-900 border-2 border-slate-600 rounded-md py-3 pl-4 pr-14 text-amber-400 font-mono text-2xl text-center sm:text-left tracking-widest focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                            onClick={(e) => (e.target as HTMLInputElement).select()}
                            title="Cliquez pour sélectionner"
                        />
                        <button 
                            onClick={copyToClipboard}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-700 text-gray-300 p-2 rounded-md hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
                            aria-label="Copier le code promo"
                            title="Copier le code promo"
                        >
                            <span className="material-icons">{copied ? 'check' : 'content_copy'}</span>
                        </button>
                    </div>
                    {copied && <p className="text-green-400 text-xs text-center sm:text-left mt-2">Code copié !</p>}
                </div>
                
                <a 
                    href={bookmaker.signupLink}
                    className="w-full sm:w-auto flex-shrink-0 bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center text-lg shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-0.5"
                >
                    <span className="material-icons mr-2">login</span>
                    S'inscrire
                </a>
            </div>
        </div>
    );
};


const PromoCodesPage: React.FC = () => {
    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Codes Promo Exclusifs</h1>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Activez les meilleurs bonus de bienvenue avec nos codes. Un simple clic pour copier et maximiser vos gains !</p>
                </div>

                <div className="space-y-10 max-w-4xl mx-auto">
                    {BOOKMAKERS.map(bookmaker => (
                        <PromoCodeCard
                            key={bookmaker.name}
                            bookmaker={bookmaker}
                            id={`promo-${bookmaker.name.toLowerCase()}`}
                        />
                    ))}
                </div>

                 <div className="mt-20 bg-slate-800 p-8 rounded-lg text-white">
                    <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                        <span className="material-icons text-amber-400 mr-3 text-3xl">help_outline</span>
                        Comment utiliser un code promo ?
                    </h2>
                    <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto text-gray-300 text-left">
                        <li>
                            <strong className="font-semibold text-white">Copiez le code :</strong> Cliquez sur l'icône de copie <span className="material-icons inline-block align-middle text-sm p-1 bg-slate-700 rounded-full">content_copy</span> à côté du code promo de votre choix.
                        </li>
                        <li>
                            <strong className="font-semibold text-white">Inscrivez-vous :</strong> Cliquez sur le bouton "S'inscrire" pour vous rendre sur le site du bookmaker.
                        </li>
                        <li>
                            <strong className="font-semibold text-white">Collez le code :</strong> Pendant votre inscription, trouvez le champ intitulé "Code Promo" ou "Code Bonus" et collez-y le code.
                        </li>
                        <li>
                            <strong className="font-semibold text-white">Profitez du bonus :</strong> Terminez votre inscription, effectuez votre premier dépôt, et le bonus sera automatiquement crédité sur votre compte !
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default PromoCodesPage;
