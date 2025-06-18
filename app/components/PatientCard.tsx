"use client";

import Link from "next/link";
import Image from "next/image";

interface PatientCardProps {
  id: string;
  name: string;
  age: number;
  dossierNumber: string;
  avatarUrl?: string;
}

export default function PatientCard({
  id,
  name,
  age,
  dossierNumber,
  avatarUrl = "/images/avatar-default.png", // Fallback image
}: PatientCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition rounded-lg p-6 w-full max-w-sm">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-green-500">
          <Image
            src={avatarUrl}
            alt={`Avatar de ${name}`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{age} ans</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
        <span className="font-medium">Dossier :</span> {dossierNumber}
      </p>
      <Link
        href={`/app/patie
