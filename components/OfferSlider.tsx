
import React, { useState, useEffect, useCallback } from 'react';
import { OFFERS } from '../constants';
import { Offer } from '../types';

const useCountdown = (targetDate: Date) => {
    const countDownDate = new Date(targetDate).getTime();
    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);
        return () => clearInterval(interval);
    }, [countDownDate]);

    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <div className="text-red-500 font-bold">Offre expirée !</div>;
    }

    return (
        <div className="flex space-x-2 sm:space-x-4 items-center justify-center text-center">
            <div className="p-2 bg-slate-900/50 rounded-md">
                <span className="font-bold text-xl sm:text-2xl">{String(days).padStart(2, '0')}</span>
                <span className="block text-xs">Jours</span>
            </div>
            <div className="p-2 bg-slate-900/50 rounded-md">
                <span className="font-bold text-xl sm:text-2xl">{String(hours).padStart(2, '0')}</span>
                <span className="block text-xs">Heures</span>
            </div>
            <div className="p-2 bg-slate-900/50 rounded-md">
                <span className="font-bold text-xl sm:text-2xl">{String(minutes).padStart(2, '0')}</span>
                <span className="block text-xs">Min</span>
            </div>
            <div className="p-2 bg-slate-900/50 rounded-md">
                <span className="font-bold text-xl sm:text-2xl">{String(seconds).padStart(2, '0')}</span>
                <span className="block text-xs">Sec</span>
            </div>
        </div>
    );
};

const OfferSlide: React.FC<{ offer: Offer, isActive: boolean }> = ({ offer, isActive }) => {
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(offer.promoCode).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className={`w-full flex-shrink-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto p-8 rounded-lg bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                    <img src={offer.logo} alt={`${offer.bookmaker} logo`} className="h-16 w-16 mx-auto md:mx-0 mb-4 object-contain" />
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-400 mb-2">{offer.title}</h2>
                    <p className="text-lg text-gray-300 mb-6">{offer.description}</p>
                    
                    {/* Promo Code Section */}
                    <div className="mb-6 bg-white/10 p-4 rounded-lg border border-white/20 inline-block w-full sm:w-auto">
                        <p className="text-xs text-gray-300 uppercase tracking-wider mb-2 font-semibold">Code Promo Exclusif</p>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="font-mono text-2xl font-black text-white tracking-wider border-dashed border-2 border-amber-400 px-4 py-2 rounded select-all">
                                {offer.promoCode}
                            </div>
                            <button 
                                onClick={copyCode} 
                                className="bg-slate-700 hover:bg-slate-600 p-2 rounded-md transition-colors flex items-center justify-center"
                                title="Copier le code"
                            >
                                <span className="material-icons text-amber-400">{copied ? 'check' : 'content_copy'}</span>
                            </button>
                        </div>
                        {copied && <p className="text-green-400 text-xs mt-2 font-bold">Copié dans le presse-papier !</p>}
                    </div>

                    <br/>
                    <a 
                        href={offer.link} 
                        className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
                    >
                        Profiter de l'offre
                        <span className="material-icons ml-2">arrow_forward</span>
                    </a>
                </div>
                <div className="md:w-1/2 flex flex-col items-center">
                    <p className="text-sm font-semibold mb-2 text-gray-300">L'offre expire dans :</p>
                    <CountdownTimer targetDate={offer.endDate} />
                </div>
            </div>
        </div>
    );
};

const OfferSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % OFFERS.length);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 6000); // Slightly longer duration to read promo code
        return () => clearInterval(slideInterval);
    }, [nextSlide]);
    
    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {OFFERS.map((offer) => (
                    <div key={offer.bookmaker} className="w-full flex-shrink-0">
                         <OfferSlide offer={offer} isActive={true} />
                    </div>
                ))}
            </div>
             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {OFFERS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-amber-400' : 'bg-slate-600'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OfferSlider;
