
import React, { useState } from 'react';
import logo from '../assets/logo bets.webp';
import { NavLink as RouterNavLink } from 'react-router-dom';

const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Actualité', path: '/actualite' },
    { name: 'Codes promos', path: '/codes-promos' },
    { name: 'Bookmakers', path: '/bookmakers' },
    { name: 'Pronostics', path: '/pronostics' },
    { name: 'Guide et astuces', path: '/guide-et-astuces' },
    { name: 'JEUX', path: '/jeux' },
];


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lang, setLang] = useState < 'fr' | 'en' > ('fr');


    return (
        <header className="bg-slate-800 shadow-lg sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <RouterNavLink to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <img src={logo} alt="Logo Leaderbets" className="h-10 w-auto mr-2 rounded" style={{ objectFit: 'contain' }} />
                        <h1 className="text-2xl font-black text-white hover:opacity-90 transition-opacity">
                            Leader<span className="text-amber-400">bets</span>
                        </h1>
                    </RouterNavLink>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <RouterNavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                            isActive
                                                ? 'bg-amber-400 text-slate-900'
                                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                                        }`
                                    }
                                >
                                    {link.name}
                                </RouterNavLink>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <select
                                value={lang}
                                onChange={e => setLang(e.target.value as 'fr' | 'en')}
                                className="bg-slate-700 text-white rounded px-3 py-1 text-sm border border-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                style={{ minWidth: 80 }}
                                aria-label="Sélecteur de langue"
                            >
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white">
                                <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <RouterNavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${
                                        isActive
                                            ? 'bg-amber-400 text-slate-900'
                                            : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                                    }`
                                }
                            >
                                {link.name}
                            </RouterNavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
