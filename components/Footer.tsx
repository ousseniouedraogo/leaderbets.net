
import React from 'react';
import { BOOKMAKERS } from '../constants';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
    const socialLinks = [
        { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61583565164575', img: '/assets/facebook.webp' },
        { name: 'YouTube', link: '#', img: '/assets/youtube%20.webp' },
        { name: 'Telegram', link: '#', img: '/assets/telegramme.webp' },
    ];
    
    return (
        <footer className="bg-slate-800 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-8">
                <div>
                    <h3 className="text-xl font-bold text-white text-center mb-8">Nos Partenaires</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {BOOKMAKERS.map(bookmaker => (
                            <div key={bookmaker.name} className="text-center">
                                <img src={bookmaker.logo} alt={`${bookmaker.name} logo`} className="h-12 mx-auto mb-6 object-contain" />
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <a href={bookmaker.appLink} className="inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors">
                                            <span className="material-icons text-lg mr-2">download</span>
                                            <span>Télécharger App {bookmaker.name}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={bookmaker.signupLink} className="inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors">
                                            <span className="material-icons text-lg mr-2">person_add</span>
                                            <span>Inscription {bookmaker.name}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={bookmaker.signupLink} className="inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors">
                                            <span className="material-icons text-lg mr-2">public</span>
                                            <span>Se Connexion a {bookmaker.name}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors"
                                            onClick={() => {
                                                setCurrentPage('Codes promos');
                                                setTimeout(() => {
                                                    const el = document.getElementById(`promo-${bookmaker.name.toLowerCase()}`);
                                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                }, 200);
                                            }}
                                        >
                                            <span className="material-icons text-lg mr-2">sell</span>
                                            <span>Code Promo {bookmaker.name}</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-700 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Leader<span className="text-amber-400">bets</span></h2>
                        <p className="text-sm">Votre guide n°1 pour les paris sportifs en Afrique. Comparez les meilleurs bonus et codes promo.</p>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-white mb-4">Support & Légal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button 
                                    onClick={() => setCurrentPage('A propos')} 
                                    className="hover:text-amber-400 text-left focus:outline-none"
                                >
                                    À propos de nous
                                </button>
                            </li>
                            <li><a href="mailto:bon.business95@gmail.com" className="hover:text-amber-400">contactez nous bon.business95@gmail.com</a></li>
                            <li>
                                <button 
                                    onClick={() => setCurrentPage('Mentions légales')} 
                                    className="hover:text-amber-400 text-left focus:outline-none"
                                >
                                    Mentions légales
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="font-semibold text-white mb-4 uppercase">RETROUVEZ NOUS AUSSI SUR :</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map(social => (
                                <a key={social.name} href={social.link} aria-label={social.name} className="inline-block" target={social.name === 'Facebook' ? '_blank' : undefined} rel={social.name === 'Facebook' ? 'noopener noreferrer' : undefined}>
                                    <img src={social.img} alt={social.name + ' logo'} className="h-12 w-12 object-contain rounded-full border bg-white shadow" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-slate-700 pt-8">
                    <div className="bg-slate-900/50 p-4 rounded-lg text-center">
                        <h3 className="font-semibold text-white mb-2 flex items-center justify-center">
                            <span className="material-icons text-amber-400 mr-2">warning_amber</span>
                            Jeu Responsable
                        </h3>
                         <p className="text-sm text-gray-400 max-w-2xl mx-auto">Le jeu d'argent et de hasard est interdit aux mineurs. Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le numéro non surtaxé qui s'affiche sur les sites de nos partenaires.</p>
                    </div>
                </div>

                <div className="mt-8 pt-6 text-center text-sm border-t border-slate-700">
                    <p>&copy; {new Date().getFullYear()} Leaderbets.net. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
