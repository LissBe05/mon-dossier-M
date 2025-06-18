"use client";

import Image from "next/image";
import Link from "next/link";

interface MedecinCardProps {
  id: string;
  name: string;
  specialty: string;
  avatarUrl: string;
}

export default function MedecinCard({
  id,
  name,
  specialty,
  avatarUrl,
}: MedecinCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition rounded-lg p-6 w-full max-w-sm">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-blue-500">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{specialty}</p>
        </div>
      </div>
      <Link
        href={`/app/medecins/${id}`}
        className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
      >
        Voir le profil
      </Link>
    </div>
  );
}
