import React from "react";

const articleParagraphs = [
  "La relève africaine s'affirme sur la scène mondiale. Alors que les projecteurs se braquent sur les compétitions interclubs, les jeunes du Maroc et du Burkina Faso ont brillé à la Coupe du Monde U17 2025, témoignant de la santé des programmes de formation continentaux.",
  "Le Maroc et le Burkina Faso ont tous deux validé leur ticket pour les quarts de finale du Mondial U17 2025. Ces qualifications ne sont pas le fruit du hasard, mais l'aboutissement d'investissements ciblés dans la jeunesse et d'une exposition précoce à la compétition de haut niveau.",
  "Parallèlement à ces succès en sélection, le football de clubs africain entre dans une phase excitante. La phase de groupes de la Ligue des Champions de la CAF TotalEnergies et de la Coupe de la Confédération reprend ce week-end. Les géants du continent sont au rendez-vous, incluant le recordman Al Ahly (12 titres), Mamelodi Sundowns, Zamalek, et l'Espérance de Tunis.",
  "Les clubs marocains sont particulièrement en vue, avec la Renaissance de Berkane (RSB) qui découvre la Ligue des Champions face aux Égyptiens de Pyramids, aux Nigérians de Rivers United et aux Zambiens de Power Dynamos. L'AS FAR, le Wydad Casablanca, et l'Olympic de Safi sont également engagés. Le succès simultané des équipes nationales juvéniles et la robustesse des clubs en phase de groupes indiquent une maturité croissante de l'écosystème footballistique africain, capable de former des talents et de les faire évoluer dans des structures de clubs compétitives. Ce double front prépare idéalement le continent à exploiter pleinement son quota accru de 16 places pour la Coupe du Monde de la FIFA 2026."
];

const MondialU17AfriquePage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80"
        alt="Maroc et Burkina Faso U17"
        className="w-full h-64 object-cover mb-6"
      />
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">
          La Fierté du Continent : Maroc et Burkina Faso en Quarts du Mondial U17
        </h1>
        <h2 className="text-xl font-semibold text-green-600 mb-6 text-center">
          Avec Autorité
        </h2>
        <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-700 mb-8 text-lg">
          "La jeunesse africaine s'impose et prépare le continent à un avenir radieux sur la scène mondiale."
        </blockquote>
        <div className="prose prose-lg max-w-none text-gray-800">
          {articleParagraphs.map((para, idx) => (
            <p key={idx} className="mb-6 leading-relaxed">{para}</p>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full shadow">
            Coupe du Monde U17 • 2025
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default MondialU17AfriquePage;
