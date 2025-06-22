"use client";

import Image from "next/image";

const features = [
  {
    title: "Interface simple",
    desc: "Naviguez facilement dans vos dossiers médicaux grâce à une interface intuitive et épurée.",
    image: "/interface.jpg",
  },
  {
    title: "Connexion sécurisée",
    desc: "Votre sécurité est notre priorité avec une authentification forte et des données cryptées.",
    image: "/security.jpg",
  },
  {
    title: "Consultation à distance",
    desc: "Accédez à votre dossier médical où que vous soyez, à tout moment, sur tous vos appareils.",
    image: "/remote-access.jpg",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-700">Fonctionnalités clés</h2>
        <p className="text-gray-600 mt-2">
          Tout ce dont vous avez besoin pour gérer votre santé en ligne
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white pt-20 pb-6 px-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <Image
                src={feature.image}
                alt={feature.title}
                width={112}
                height={112}
                className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-md"
              /> 
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
