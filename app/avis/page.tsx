"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export default function AvisPage() {
  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-blue-50 to-white">
      {/* Titre principal */}
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
        Ce que pensent nos utilisateurs
      </h1>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {avis.map((a, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={a.avatar}
                alt={a.nom}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{a.nom}</p>
                <p className="text-sm text-gray-500">{a.role}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4 italic leading-relaxed">
              “{a.commentaire}”
            </p>

            <div className="flex gap-1">
              {[...Array(a.stars)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-500" fill="currentColor" />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

// Données fictives
const avis = [
  {
    nom: "IVAZA Frederic",
    role: "Patiente",
    commentaire:
      "Grâce à cette plateforme, je peux suivre mes rendez-vous et mes ordonnances facilement !",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    nom: "Dr. Jean Mba",
    role: "Médecin généraliste",
    commentaire:
      "Un gain de temps énorme pour moi et mes patients. Très fluide et ergonomique.",
    stars: 4,
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    nom: "MBADINGA Georgette",
    role: "Patiente",
    commentaire:
      "Je me sens vraiment accompagnée, mes données sont en sécurité et accessibles.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/women/34.jpg",
  },
];
