"use client";

import { useEffect, useState } from "react";

interface Activity {
  id: number;
  user: string;
  action: string;
  timestamp: string;
}

export default function ActivityPage() {
  const [activities, setActivities] = useState<Activity[]>([]);

  // Simule les données d'activité
  useEffect(() => {
    const mockData: Activity[] = [
      { id: 1, user: "Dr. Mendy", action: "Ajout d'un patient", timestamp: "2025-06-17 10:15" },
      { id: 2, user: "Patient: Léo", action: "Connexion", timestamp: "2025-06-17 09:30" },
      { id: 3, user: "Dr. Mendy", action: "Consultation d’un dossier", timestamp: "2025-06-16 17:45" },
      { id: 4, user: "Patient: Léo", action: "Mise à jour de profil", timestamp: "2025-06-16 15:22" },
    ];
    setActivities(mockData);
  }, []);

  return (
    <main className="p-6 md:p-10">
      <h1 className="text-2xl font-bold mb-6">Activité récente</h1>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">Utilisateur</th>
              <th className="px-6 py-3 text-left text-xs
