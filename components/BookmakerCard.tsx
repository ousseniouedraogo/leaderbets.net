
import React, { useState, useCallback } from 'react';
import { Bookmaker } from '../types';

interface BookmakerCardProps {
  bookmaker: Bookmaker;
}

const BookmakerCard: React.FC<BookmakerCardProps> = ({ bookmaker }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(bookmaker.promoCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [bookmaker.promoCode]);

  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-slate-700">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={bookmaker.logo} alt={`${bookmaker.name} logo`} className="h-12 w-12 object-contain" />
            <h3 className="text-2xl font-bold ml-4 text-white">{bookmaker.name}</h3>
          </div>
          <div className="flex space-x-2">
            {bookmaker.popular && <div className="text-xs bg-red-600 text-white font-bold py-1 px-2 rounded-full">Populaire</div>}
            {bookmaker.bestChoice && <div className="text-xs bg-amber-400 text-slate-900 font-bold py-1 px-2 rounded-full">Meilleur Choix</div>}
          </div>
        </div>
        
        <div className="mt-4 bg-slate-700 p-4 rounded-lg text-center">
          <p className="text-gray-300 text-sm">BONUS DE BIENVENUE</p>
          <p className="text-amber-400 font-extrabold text-2xl">{bookmaker.bonus}</p>
        </div>

        <div className="mt-4">
          <p className="text-gray-300 text-sm text-center mb-2">Utilisez le code promo</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="border-2 border-dashed border-amber-400 text-amber-400 font-mono text-lg py-2 px-4 rounded-md">
              {bookmaker.promoCode}
            </div>
            <button onClick={copyToClipboard} className="bg-amber-400 text-slate-900 p-2 rounded-md hover:bg-amber-300 transition-colors">
              <span className="material-icons text-base">{copied ? 'check' : 'content_copy'}</span>
            </button>
          </div>
          {copied && <p className="text-green-400 text-xs text-center mt-1">Copié !</p>}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href={bookmaker.signupLink} className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center hover:bg-green-600 transition-colors">
            <span className="material-icons mr-2">person_add</span>
            S'inscrire
          </a>
          <a href={bookmaker.appLink} className="w-full bg-slate-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center hover:bg-slate-500 transition-colors">
             <span className="material-icons mr-2">download</span>
            Télécharger
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookmakerCard;
