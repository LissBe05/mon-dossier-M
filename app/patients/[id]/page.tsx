"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PatientCard from "@/components/PatientCard";

interface Patient {
  id: string;
  name: string;
  age: number;
  email: string;
  phone?: string;
  address?: string;
  medicalHistory: string;
  lastVisit: string;
}

interface Props {
  params: { id: string };
}

export default function PatientDetails({ params }: Props) {
  const { id } = params;
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulation d'une fetch API
  useEffect(() => {
    async function fetchPatient() {
      // Simule un appel API ici
      // Remplace par ta méthode fetch ou Prisma réelle
      await new Promise((r) => setTimeout(r, 1000));
      setPatient({
        id,
        name: "Aminata Koné",
        age: 32,
        email: "aminata.kone@example.com",
        phone: "+225 01 23 45 67 89",
        address: "Abidjan, Côte d'Ivoire",
        medicalHistory:
          "Hypertension, allergie aux pénicillines, chirurgie appendicite en 2019.",
        lastVisit: "2025-06-01",
      });
      setLoading(false);
    }
    fetchPatient();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 dark:text-gray-300">Chargement...</p>
      </div>
    );

  if (!patient)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 dark:text-red-400">Patient non trouvé.</p>
      </div>
    );

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md mt-8">
      <h1 className="text-3xl font-bold mb-4">{patient.name}</h1>
      <p className="mb-2">
        <strong>Âge :</strong> {patient.age} ans
      </p>
      <p className="mb-2">
        <strong>Email :</strong> {patient.email}
      </p>
      {patient.phone && (
        <p className="mb-2">
          <strong>Téléphone :</strong> {patient.phone}
        </p>
      )}
      {patient.address && (
        <p className="mb-4">
          <strong>Adresse :</strong> {patient.address}
        </p>
      )}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Historique médical</h2>
        <p>{patient.medicalHistory}</p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Dernière visite : {patient.lastVisit}
      </p>
    </section>
  );
}
