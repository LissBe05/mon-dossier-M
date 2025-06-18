"use client";

import Sidebar from "@/components/Sidebar";
import PeriodLegend from "@/components/PeriodLegend";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileMedical, CalendarCheck } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">Tableau de bord</h1>
          <PeriodLegend />
        </header>

        {/* Stat Cards */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Nombre de patients"
            value="128"
            icon={<Users className="w-6 h-6 text-blue-600" />}
          />
          <StatCard
            title="Dossiers médicaux"
            value="342"
            icon={<FileMedical className="w-6 h-6 text-green-600" />}
          />
          <StatCard
            title="Rendez-vous aujourd'hui"
            value="12"
            icon={<CalendarCheck className="w-6 h-6 text-purple-600" />}
          />
        </section>
      </main>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
