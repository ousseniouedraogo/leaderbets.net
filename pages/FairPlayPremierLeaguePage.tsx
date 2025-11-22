import React from "react";

const articleParagraphs = [
  "La Premier League vient de franchir une étape cruciale dans l'évolution de son Fair-Play Financier (FFP). En rejetant le controversé 'plan d'ancrage,' les clubs ont protégé la liberté de dépenser des géants, tout en introduisant un outil de contrôle plus sophistiqué, le 'ratio de coût d'effectif.' Qu'est-ce que cela signifie pour l'avenir du marché des transferts?",
  "Lors d'une réunion décisive, les actionnaires de la Premier League ont voté 'à une écrasante majorité' contre le plan d'ancrage proposé. Ce plan visait à plafonner les dépenses des clubs en les basant sur un multiple des revenus du club le moins fortuné, garantissant ainsi une certaine compétitivité en limitant la puissance de feu des clubs les plus riches. Son rejet est un signal clair : les poids lourds du championnat ne veulent pas brider leur capacité à générer et à dépenser des revenus mondiaux massifs.",
  "Cependant, pour maintenir une discipline financière, les clubs ont accepté d'introduire un 'système de ratio de coût d'effectif.' Ce système est aligné sur les exigences de licence de l'UEFA et se concentre sur le contrôle des charges récurrentes, principalement les salaires, en les mesurant par rapport aux revenus globaux du club.",
  "L'évolution de la réglementation FFP en Angleterre indique une prime croissante à l'efficacité économique et au marketing. En contrôlant les dépenses salariales plutôt que l'investissement ponctuel en transferts, la ligue encourage les clubs à générer des revenus commerciaux et de sponsoring plus importants pour justifier leur masse salariale élevée. Un club ne peut plus simplement s'endetter pour payer des stars ; il doit prouver que sa performance économique globale (marketing, billetterie, droits TV) peut soutenir durablement ces coûts. Ce changement favorise les clubs dotés d'une marque mondiale puissante, capables de maximiser leurs recettes pour optimiser leur ratio, tout en maintenant une discipline stricte dans la gestion de leur effectif."
];

const FairPlayPremierLeaguePage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1505843277357-5b0ae1c6d98a?auto=format&fit=crop&w=900&q=80"
        alt="Premier League Fair Play Financier"
        className="w-full h-64 object-cover mb-6"
      />
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">
          Le Nouveau Fair-Play Financier en Premier League
        </h1>
        <h2 className="text-xl font-semibold text-amber-600 mb-6 text-center">
          Vers un "Ratio de Coût d'Effectif" Révolutionnaire ?
        </h2>
        <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-700 mb-8 text-lg">
          "La Premier League privilégie désormais l'efficacité économique et la discipline salariale pour façonner l'avenir du football anglais."
        </blockquote>
        <div className="prose prose-lg max-w-none text-gray-800">
          {articleParagraphs.map((para, idx) => (
            <p key={idx} className="mb-6 leading-relaxed">{para}</p>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-2 rounded-full shadow">
            Premier League • 2025
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default FairPlayPremierLeaguePage;
