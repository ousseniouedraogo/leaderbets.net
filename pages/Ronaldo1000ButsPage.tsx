import React from "react";

const articleParagraphs = [
  "La poursuite de l'excellence par Cristiano Ronaldo ne faiblit pas. Le Portugais a récemment battu un nouveau record historique en atteignant 947 buts en carrière, un total impressionnant qui englobe ses réalisations en club et en sélection. Il lui manque désormais seulement 53 buts pour franchir la barre mythique des 1000.",
  "Ce jalon a été mis en lumière après un doublé spectaculaire inscrit avec le Portugal lors des qualifications pour la Coupe du Monde 2026 contre la Hongrie. Avec 143 buts pour son pays, Ronaldo reste le moteur de sa sélection, même si le Portugal a concédé l'égalisation en fin de match, retardant la validation de sa qualification.",
  "À l'approche des 1000 buts, Ronaldo transcende les discussions tactiques et les résultats quotidiens. Sa quête représente un 'narratif de légende' constant, garantissant une couverture médiatique mondiale et un engagement émotionnel fort de la part des fans, fascinés par la longévité et la soif de records du quintuple Ballon d'Or."
];

const Ronaldo1000ButsPage: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517263904808-5dc0d6ae3b8b?auto=format&fit=crop&w=900&q=80"
        alt="Cristiano Ronaldo 1000 buts"
        className="w-full h-64 object-cover mb-6"
      />
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">
          Cristiano Ronaldo, la Chasse aux 1000 Buts
        </h1>
        <h2 className="text-xl font-semibold text-red-600 mb-6 text-center">
          L'Incroyable Course d'une Légende
        </h2>
        <blockquote className="border-l-4 border-red-400 pl-4 italic text-gray-700 mb-8 text-lg">
          "À 947 buts, Ronaldo vise le sommet absolu du football mondial : les 1000 buts en carrière."
        </blockquote>
        <div className="prose prose-lg max-w-none text-gray-800">
          {articleParagraphs.map((para, idx) => (
            <p key={idx} className="mb-6 leading-relaxed">{para}</p>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-2 rounded-full shadow">
            Record Mondial • 2025
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Ronaldo1000ButsPage;
