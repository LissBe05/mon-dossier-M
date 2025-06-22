"use client";

import Image from "next/image";

const steps = [
  {
    title: "1. Inscription rapide",
    description: "Créez un compte en quelques clics avec vos informations de base.",
    image: "/signup.jpg",
  },
  {
    title: "2. Ajout de vos informations médicales",
    description: "Complétez votre profil avec vos antécédents, traitements, et contacts médicaux.",
    image: "/medical-info.jpg",
  },
  {
    title: "3. Consultation et gestion",
    description: "Accédez à vos dossiers, téléchargez des documents, et suivez vos consultations.",
    image: "/consultation.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-700">Comment ça fonctionne ?</h2>
        <p className="text-gray-600 mt-2">
          Quelques étapes simples pour prendre le contrôle de votre santé.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition text-center"
          >
            <div className="mb-4">
              <Image
                src={step.image}
                alt={step.title}
                width={200}
                height={200}
                className="mx-auto rounded-lg shadow-md object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-800">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
