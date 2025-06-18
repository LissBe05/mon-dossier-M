import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo ou nom */}
          <div>
            <h2 className="text-xl font-bold text-blue-600">Mon Dossier Médical</h2>
            <p className="mt-2 text-sm">Votre santé, notre priorité.</p>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
              <li><Link href="/app/patients" className="hover:text-blue-600">Patients</Link></li>
              <li><Link href="/app/medecins" className="hover:text-blue-600">Médecins</Link></li>
              <li><Link href="/app/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Infos légales ou contact */}
          <div>
            <h3 className="font-semibold mb-2">Informations</h3>
            <p className="text-sm">
              Email : contact@mondossiermedical.com<br />
              Téléphone : +241 01 23 45 67
            </p>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Mon Dossier Médical. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
