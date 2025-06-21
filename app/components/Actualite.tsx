"use client";

import Image from "next/image";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "Nouvelles avancées dans le traitement du diabète",
    summary:
      "Des chercheurs ont mis au point une thérapie prometteuse pour améliorer la gestion du diabète de type 2.",
    image: "/diabete.jpg",
    date: "20 juin 2025",
  },
  {
    id: 2,
    title: "L'importance du sommeil sur la santé mentale",
    summary:
      "Une étude récente démontre que le manque de sommeil chronique augmente significativement les risques de dépression.",
    image: "/sommeil.jpg",
    date: "18 juin 2025",
  },
  {
    id: 3,
    title: "Vaccination : les nouvelles recommandations 2025",
    summary:
      "Le ministère de la Santé a publié les nouvelles directives concernant les vaccins obligatoires et recommandés.",
    image: "/vaccin.jpg",
    date: "15 juin 2025",
  },
];

export default function ActualiteSante() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Actualité Santé
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((article) => (
          <div
            key={article.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date}</p>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {article.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{article.summary}</p>
              <Link
                href="#"
                className="text-indigo-600 dark:text-indigo-400 hover:underline mt-3 inline-block"
              >
                Lire plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
