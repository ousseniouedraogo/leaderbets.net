import React from "react";

const articleParagraphs = [
  "La Confédération Africaine de Football (CAF) a couronné le 19 novembre 2025 le capitaine du Maroc, Achraf Hakimi, Joueur Africain de l’Année 2025, lors d’une cérémonie à Rabat. Cette victoire n’est pas qu’une reconnaissance personnelle ; elle valide la mutation du football moderne et le rôle inédit du latéral offensif.",
  "L’année 2025 restera celle d’Hakimi. Le défenseur du Paris Saint-Germain a été l’architecte du triplé historique du club français, qui a remporté la Ligue 1, la Coupe de France, et surtout la prestigieuse UEFA Champions League. Ses performances ne se limitent pas à la défense : il a accumulé 8 buts et 12 passes décisives durant la campagne 2024/25, et 9 buts et 11 passes décisives entre janvier et octobre 2025, en club et en sélection.",
  "Ces statistiques, d’ordinaire associées aux attaquants, ont permis à Hakimi de s’imposer face à des concurrents de taille comme Mohamed Salah et Victor Osimhen. De plus, il a marqué l’histoire en devenant le premier Marocain, et seulement le septième Africain, à inscrire un but en finale de la Ligue des Champions (2025).",
  "Cette récompense est significative. Traditionnellement, le Joueur Africain de l’Année est attribué à des joueurs évoluant en position offensive. Le sacre d’un défenseur latéral valide le rôle du latéral moderne comme un joueur décisif, capable d’être à la fois un pilier défensif, un meneur de jeu sur les ailes, et un contributeur majeur au score. Hakimi redéfinit ce que l’on attend d’un arrière droit en démontrant que l’impact global et la polyvalence tactique peuvent surpasser le simple rendement d’un buteur."
];

const HakimiBallonDorPage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
        alt="Achraf Hakimi Ballon d'Or CAF 2025"
        className="w-full h-64 object-cover mb-6"
      />
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">
          Achraf Hakimi, le Droitier Redéfini
        </h1>
        <h2 className="text-xl font-semibold text-amber-600 mb-6 text-center">
          Pourquoi son Ballon d’Or CAF 2025 Marque l’Histoire
        </h2>
        <blockquote className="border-l-4 border-amber-400 pl-4 italic text-gray-700 mb-8 text-lg">
          "Hakimi redéfinit le rôle du latéral moderne, prouvant qu’un défenseur peut être aussi décisif qu’un attaquant."
        </blockquote>
        <div className="prose prose-lg max-w-none text-gray-800">
          {articleParagraphs.map((para, idx) => (
            <p key={idx} className="mb-6 leading-relaxed">{para}</p>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <span className="inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-2 rounded-full shadow">
            CAF Awards • 2025
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default HakimiBallonDorPage;
