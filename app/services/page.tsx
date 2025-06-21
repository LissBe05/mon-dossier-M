"use client";

import { HeartPulse, CalendarCheck, FileText, ShieldCheck, MessageSquare } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
        Nos Services
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-xl transition hover:scale-[1.02] duration-300"
          >
            <div className="text-blue-600 mb-4">
              <service.icon size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: "Accès à votre dossier médical",
    description: "Consultez vos ordonnances, résultats et antécédents médicaux à tout moment.",
    icon: FileText,
  },
  {
    title: "Rendez-vous en ligne",
    description: "Prenez rendez-vous avec vos médecins en quelques clics.",
    icon: CalendarCheck,
  },
  {
    title: "Suivi de santé personnalisé",
    description: "Gardez un œil sur votre état de santé avec des indicateurs clairs.",
    icon: HeartPulse,
  },
  {
    title: "Messagerie sécurisée",
    description: "Communiquez directement avec votre médecin en toute confidentialité.",
    icon: MessageSquare,
  },
  {
    title: "Partage sécurisé",
    description: "Partagez vos documents avec les professionnels de santé autorisés.",
    icon: ShieldCheck,
  },
];
