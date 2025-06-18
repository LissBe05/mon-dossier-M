"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center group"
      style={{
        backgroundImage: "url('/herobackground.jpg')"
      }}
    >
      {/* Overlay sombre avec hover */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

      {/* Contenu */}
      <div
        className={`relative max-w-4xl px-6 text-center text-white transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Gérez facilement votre dossier médical en ligne
        </h1>
        <p className="text-lg mb-10 drop-shadow-md">
          Accédez à vos informations de santé, communiquez avec vos médecins et
          suivez votre parcours médical en toute sécurité.
        </p>
        <Link
          href="/app/signup"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg shadow-lg transition"
        >
          Commencer maintenant
        </Link>
      </div>
    </section>
  );
}
