"use client";

import Sidebar from "@/components/Sidebar";
import PeriodLegend from "@/components/PeriodLegend";
import PatientCard from "@/components/PatientCard";
import { CalendarCheck, MessageSquareHeart, Stethoscope } from "lucide-react";

export default function MedecinDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar du médecin */}
      <Sidebar />

      {/* Contenu principal */}
      <main className="flex-1 p-6 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">Espace Médecin</h1>
          <PeriodLegend />
        </header>

        {/* Statistiques rapides */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MedecinStat
            title="Rendez-vous à venir"
            value="5"
            icon={<CalendarCheck className="w-6 h-6 text-blue-600" />}
          />
          <MedecinStat
            title="Consultations aujourd’hui"
            value="3"
            icon={<Stethoscope className="w-6 h-6 text-green-600" />}
          />
          <MedecinStat
            title="Messages non lus"
            value="8"
            icon={<MessageSquareHeart className="w-6 h-6 text-purple-600" />}
          />
        </section>

        {/* Liste de patients */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Mes Patients</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PatientCard
              name="Aminata Koné"
              age={32}
              lastVisit="2025-06-01"
              medicalCondition="Hypertension"
            />
            <PatientCard
              name="Jean Kouadio"
              age={45}
              lastVisit="2025-06-10"
              medicalCondition="Diabète"
            />
            <PatientCard
              name="Fatou Bamba"
              age={28}
              lastVisit="2025-06-12"
              medicalCondition="Asthme"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function MedecinStat({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
