"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icônes menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Mon Dossier Médical
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Accueil
          </Link>
          <Link href="/app/patients" className="text-gray-700 hover:text-blue-600">
            Patients
          </Link>
          <Link href="/app/dashboard" className="text-gray-700 hover:text-blue-600">
            Tableau de bord
          </Link>
          <Link href="/app/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Connexion
          </Link>
        </div>

        {/* Menu mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            Accueil
          </Link>
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            Medecin
          </Link>
          <Link href="/app/medecin" className="block text-gray-700 hover:text-blue-600">
            Patients
          </Link>
          <Link href="/app/dashboard" className="block text-gray-700 hover:text-blue-600">
            Tableau de bord
          </Link>
          <Link href="/app/login" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Connexion
          </Link>
        </div>
      )}
    </nav>
  );
}
