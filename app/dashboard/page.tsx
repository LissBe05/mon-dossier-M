"use client";

import Sidebar from "@/components/Sidebar";
import PeriodLegend from "@/components/PeriodLegend";
import Card from "@/components/ui/card";
import { Users, FileText, CalendarCheck } from "lucide-react";

// Composants card locaux
function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 pb-2 ${className}`}>{children}</div>;
}

function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-sm font-medium ${className}`}>{children}</h3>;
}

function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

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
            icon={<FileText className="w-6 h-6 text-green-600" />}
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
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
