'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Charger le composant Map uniquement côté client
const MapLibreville = dynamic(() => import('@/components/MapLibreville'), { ssr: false });

export default function ContactPage() {
  const [code, setCode] = useState(generateCode());

  function generateCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Message envoyé !');
    setCode(generateCode());
  }

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Contactez-nous</h1>

      {/* Carte Leaflet */}
      <div className="mb-10">
        <MapLibreville />
      </div>

      {/* Formulaire + Coordonnées */}
     <div className="grid md:grid-cols-2 gap-6 mb-12">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold mb-2">Formulaire de contact</h2>

          <input type="text" placeholder="Nom complet" required className="w-full p-2 border rounded" />
          <input type="email" placeholder="Adresse courriel" required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Objet" required className="w-full p-2 border rounded" />
          <textarea placeholder="Message" rows={5} required className="w-full p-2 border rounded" />

          <div className="flex items-center gap-2">
            <label className="font-medium">Code de validation :</label>
            <span className="bg-gray-200 px-3 py-1 rounded text-gray-700 font-mono">{code}</span>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
     </div>
    </main>
  );
}
