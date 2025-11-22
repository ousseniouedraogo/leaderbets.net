
import React from "react";

const articleParagraphs = [
  "La Vidéo d’Assistance à l’Arbitrage (VAR) était censée apporter la clarté. Au lieu de cela, elle amplifie souvent la confusion, surtout lorsque deux incidents presque identiques, survenus le même soir en Ligue des Champions, aboutissent à des décisions radicalement opposées. L'inconsistance est le nouveau visage de l'arbitrage européen.",
  "La semaine dernière, l'UEFA a vu son protocole VAR sévèrement critiqué après une série de décisions illisibles. La divergence la plus frappante s'est produite lors de la même soirée de compétition.",
  "Lors du match en début de soirée opposant le Slavia Prague à Arsenal, l'arbitre a été appelé à l'écran de contrôle pour revoir une action où Gabriel avait envoyé le ballon de la tête sur le bras de Lukas Provod à bout portant. Bien que les joueurs d'Arsenal se concentraient sur l'obtention d'un corner et non d'un penalty, l'arbitre Aliyar Aghayev a finalement annulé la décision initiale pour accorder un penalty aux Gunners. Cette décision illustre, selon les analystes, le seuil de faute de main \"beaucoup plus bas\" appliqué par l'UEFA comparé, par exemple, à la Premier League.",
  "Quelques heures plus tard, le contraste fut total lors de la rencontre entre Liverpool et le Real Madrid. Un tir puissant de Dominik Szoboszlai a heurté le bras d'Aurélien Tchouameni juste à l'extérieur de la surface. L'arbitre de champ a accordé un coup franc, mais a été sommé de consulter l'écran pour un potentiel penalty. Après vérification, il est revenu sur le terrain, confirmant l'absence de faute de main et maintenant le coup franc.",
  "Le fait que l'incident impliquant Tchouameni, visiblement plus net selon de nombreux observateurs, n'ait pas été sanctionné, alors que le contact à Prague l'a été, met en lumière un problème d'interprétation et non de technologie. Lorsque les règles varient et que l'interprétation subjective de la \"position naturelle\" ou de l'\"intention\" diffère tant d'un arbitre à l'autre — même sous l'égide de l'UEFA — l'outil de relecture ne fait qu'exposer l'échec de l'instance à standardiser le jugement humain. La technologie est là, mais le protocole de formation et d'application semble incapable d'assurer l'uniformité attendue."
];

const VARArticlePage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
        alt="VAR Ligue des Champions"
        className="w-full h-64 object-cover mb-6"
      />
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">
          VAR : La Schizophrénie Européenne Exposée en Ligue des Champions
        </h1>
        <h2 className="text-xl font-semibold text-amber-600 mb-6 text-center">
          Deux Fautes de Main, Deux Verdicts Opposés
        </h2>
        <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-700 mb-8 text-lg">
          "La VAR, censée apporter la clarté, expose aujourd'hui l'inconsistance de l'arbitrage européen."
        </blockquote>
        <div className="prose prose-lg max-w-none text-gray-800">
          {articleParagraphs.map((para, idx) => (
            <p key={idx} className="mb-6 leading-relaxed">{para}</p>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full shadow">
            Ligue des Champions • 2025
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default VARArticlePage;
